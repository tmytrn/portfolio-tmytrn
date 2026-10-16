import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { trackCalendlyClick } from "../../utils/trackCalendlyClick";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const EMPTY_FORM = {
  firstName: "",
  lastName: "",
  company: "",
  title: "",
  email: "",
  budgetMin: 10000,
  budgetMax: 25000,
  details: "",
  honeypot: "",
};

const BUDGET_THUMB_SIZE = 20;
const BUDGET_MIN = 0;
const BUDGET_MAX = 50000;
const BUDGET_STEP = 1000;
const BUDGET_THUMB_GAP = 2;
// 1px border stroke, inset so the full stroke (and corners) stay inside the form.
const PROGRESS_STROKE = 1;
const PROGRESS_INSET = 1;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formProgressPath = (width, height, inset) => {
  const left = inset + 0.5;
  const top = inset + 0.5;
  const right = width - inset - 0.5;
  const bottom = height - inset - 0.5;
  if (right <= left || bottom <= top) return "";
  // Explicit open loop ending at the start so dash reveal runs top-left → clockwise → close
  return `M ${left} ${top} L ${right} ${top} L ${right} ${bottom} L ${left} ${bottom} L ${left} ${top}`;
};

const EXIT_SCALE_DURATION = 0.45;
const EXIT_SLIDE_DURATION = 0.55;

const isFilled = (value) => value.trim().length > 0;
const isValidEmail = (value) => EMAIL_PATTERN.test(value.trim());

const budgetThumbCenter = (value, { min, max }) => {
  const ratio = (value - min) / (max - min);
  return `${ratio} * (100% - ${BUDGET_THUMB_SIZE}px) + ${BUDGET_THUMB_SIZE / 2}px`;
};

const thumbCenterPx = (value, { min, max }, width) => {
  const ratio = (value - min) / (max - min);
  return ratio * (width - BUDGET_THUMB_SIZE) + BUDGET_THUMB_SIZE / 2;
};

// Both thumbs share the $0–$50k scale. The limits are widened just enough
// that a $1k gap leaves the squares side by side, with a sliver of track between them.
const budgetSliderLimits = (trackWidth) => {
  const thumb = BUDGET_THUMB_SIZE;
  const separation = thumb + BUDGET_THUMB_GAP;
  const travel = trackWidth - thumb;
  const inner = trackWidth - thumb - separation;
  const spread = ((BUDGET_MAX - BUDGET_STEP) * travel) / inner;
  return {
    left: { min: BUDGET_MIN, max: spread },
    right: {
      min: BUDGET_STEP - (spread * separation) / travel,
      max: BUDGET_MAX,
    },
  };
};

const sharedBudgetLimits = {
  left: { min: BUDGET_MIN, max: BUDGET_MAX },
  right: { min: BUDGET_MIN, max: BUDGET_MAX },
};

const snapBudget = (value) =>
  Math.round(Number(value) / BUDGET_STEP) * BUDGET_STEP;

const applyBudget = (type, value, prev) => {
  if (type === "min") {
    return {
      budgetMin: Math.min(
        Math.max(snapBudget(value), BUDGET_MIN),
        prev.budgetMax - BUDGET_STEP,
      ),
      budgetMax: prev.budgetMax,
    };
  }

  return {
    budgetMin: prev.budgetMin,
    budgetMax: Math.max(
      Math.min(snapBudget(value), BUDGET_MAX),
      prev.budgetMin + BUDGET_STEP,
    ),
  };
};

export default function ContactSection() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formVisible, setFormVisible] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formSlotHeight, setFormSlotHeight] = useState(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [labelSpread, setLabelSpread] = useState(0);
  const [formSize, setFormSize] = useState({ width: 0, height: 0 });
  const [perimeter, setPerimeter] = useState(0);
  const [progressMeasured, setProgressMeasured] = useState(false);
  const formRef = useRef(null);
  const progressPathRef = useRef(null);
  const pendingSuccessRef = useRef(false);
  const exitPhaseRef = useRef("idle");
  const sliderRef = useRef(null);
  const minLabelRef = useRef(null);
  const maxLabelRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [formAnim, setFormAnim] = useState({ scale: 1, x: 0 });
  const [formTransition, setFormTransition] = useState({ duration: 0 });
  const exitTimersRef = useRef([]);

  const progressPathD = useMemo(
    () => formProgressPath(formSize.width, formSize.height, PROGRESS_INSET),
    [formSize.width, formSize.height],
  );

  const fieldValidity = useMemo(
    () => ({
      firstName: isFilled(formData.firstName),
      lastName: isFilled(formData.lastName),
      email: isValidEmail(formData.email),
      details: isFilled(formData.details),
    }),
    [formData.firstName, formData.lastName, formData.email, formData.details],
  );

  const validatedCount = Object.values(fieldValidity).filter(Boolean).length;
  const fieldCount = Object.keys(fieldValidity).length;
  const formProgress = validatedCount / fieldCount;
  const isFormReady = formProgress === 1;
  const submitOpacity = isSubmitting
    ? 0.6
    : 0.4 + formProgress * 0.6;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const updateBudget = (type, value) => {
    setFormData((prev) => ({ ...prev, ...applyBudget(type, value, prev) }));
  };

  const handleBudgetChange = (e, type) => {
    updateBudget(type, e.target.value);
  };

  const handleBudgetKeyDown = (e, type) => {
    if (
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight" &&
      e.key !== "ArrowUp" &&
      e.key !== "ArrowDown"
    ) {
      return;
    }

    e.preventDefault();
    const direction = e.key === "ArrowRight" || e.key === "ArrowUp" ? 1 : -1;
    setFormData((prev) => {
      const current = type === "min" ? prev.budgetMin : prev.budgetMax;
      return {
        ...prev,
        ...applyBudget(type, current + BUDGET_STEP * direction, prev),
      };
    });
  };

  useIsomorphicLayoutEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const measure = () => {
      const width = el.getBoundingClientRect().width;
      setTrackWidth((current) =>
        Math.abs(current - width) < 0.5 ? current : width,
      );

      const minLabel = minLabelRef.current;
      const maxLabel = maxLabelRef.current;
      if (
        !minLabel ||
        !maxLabel ||
        width <= BUDGET_THUMB_SIZE * 2 + BUDGET_THUMB_GAP
      )
        return;

      const limits = budgetSliderLimits(width);
      const minCenter = thumbCenterPx(formData.budgetMin, limits.left, width);
      const maxCenter = thumbCenterPx(formData.budgetMax, limits.right, width);
      const overlap =
        (minLabel.offsetWidth + maxLabel.offsetWidth) / 2 +
        6 -
        (maxCenter - minCenter);
      const next = overlap > 0 ? overlap / 2 : 0;
      setLabelSpread((current) =>
        Math.abs(current - next) < 0.5 ? current : next,
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [formData.budgetMin, formData.budgetMax]);

  useIsomorphicLayoutEffect(() => {
    const el = formRef.current;
    if (!el) return;

    const measure = () => {
      // Border-box size matches the absolutely positioned SVG overlay.
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      if (width <= 0 || height <= 0) return;
      setFormSize((current) =>
        Math.abs(current.width - width) < 0.5 &&
        Math.abs(current.height - height) < 0.5
          ? current
          : { width, height },
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [formVisible]);

  useIsomorphicLayoutEffect(() => {
    const path = progressPathRef.current;
    if (!path || !progressPathD) {
      setPerimeter(0);
      setProgressMeasured(false);
      return;
    }
    const length = path.getTotalLength();
    setProgressMeasured(false);
    setPerimeter(length);
    // Enable dash transitions only after the initial offset is applied.
    const id = requestAnimationFrame(() => setProgressMeasured(true));
    return () => cancelAnimationFrame(id);
  }, [progressPathD, formVisible]);

  const formatBudget = (value) => {
    if (value >= 50000) return "$50k+";
    return `$${value / 1000}k`;
  };

  const handleEmailClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_name: "home_email_link",
        content_category: "contact",
      });
    }
  };

  const handleCalendlyClick = () => {
    trackCalendlyClick("home", "contact");
  };

  const clearExitTimers = () => {
    exitTimersRef.current.forEach(clearTimeout);
    exitTimersRef.current = [];
  };

  const finishSuccessExit = () => {
    clearExitTimers();
    pendingSuccessRef.current = false;
    exitPhaseRef.current = "done";
    setFormData(EMPTY_FORM);
    setFormVisible(false);
    setShowSuccess(true);
  };

  const runSlideExit = () => {
    if (exitPhaseRef.current !== "scale") return;
    exitPhaseRef.current = "slide";
    const slideX = typeof window !== "undefined" ? window.innerWidth : 1200;
    setFormTransition({
      duration: EXIT_SLIDE_DURATION,
      ease: [0.4, 0, 0.2, 1],
    });
    setFormAnim({ scale: 0.2, x: slideX });
    const timer = setTimeout(
      () => {
        if (exitPhaseRef.current === "slide") finishSuccessExit();
      },
      EXIT_SLIDE_DURATION * 1000 + 80,
    );
    exitTimersRef.current.push(timer);
  };

  const startSuccessExit = () => {
    const height = formRef.current?.offsetHeight ?? formSize.height;
    setFormSlotHeight(height > 0 ? height : null);

    if (prefersReducedMotion) {
      finishSuccessExit();
      return;
    }

    clearExitTimers();
    exitPhaseRef.current = "scale";
    setFormTransition({
      duration: EXIT_SCALE_DURATION,
      ease: [0.4, 0, 0.2, 1],
    });
    setFormAnim({ scale: 0.2, x: 0 });
    // Fallback if onAnimationComplete does not fire for this FM version.
    const timer = setTimeout(runSlideExit, EXIT_SCALE_DURATION * 1000 + 80);
    exitTimersRef.current.push(timer);
  };

  const handleFormAnimComplete = () => {
    if (exitPhaseRef.current === "scale") {
      clearExitTimers();
      runSlideExit();
      return;
    }
    if (exitPhaseRef.current === "slide") {
      finishSuccessExit();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.honeypot || !isFormReady || pendingSuccessRef.current) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        const message = "Thanks, I'll be in touch soon.";
        setSubmitStatus({ type: "success", message });

        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Lead", {
            content_name: "home_contact_form",
            content_category: "contact_form",
          });
        }

        pendingSuccessRef.current = true;
        setIsSubmitting(false);
        startSuccessExit();
        return;
      }

      setSubmitStatus({
        type: "error",
        message:
          data.error ||
          "Something went wrong. Please try emailing me directly at tommy@tmytrn.com",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong. Please try emailing me directly at tommy@tmytrn.com",
      });
    } finally {
      if (!pendingSuccessRef.current) {
        setIsSubmitting(false);
      }
    }
  };

  const limits =
    trackWidth > BUDGET_THUMB_SIZE * 2 + BUDGET_THUMB_GAP
      ? budgetSliderLimits(trackWidth)
      : sharedBudgetLimits;
  const minThumb = budgetThumbCenter(formData.budgetMin, limits.left);
  const maxThumb = budgetThumbCenter(formData.budgetMax, limits.right);

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2 className="section-label">CONTACT</h2>

        <div className="contact-row">
          <div className="contact-intro-col">
            <p className="contact-intro">
              Fill out this form and I'll follow up with you, or email me at{" "}
              <a
                href="mailto:tommy@tmytrn.com"
                className="contact-link"
                onClick={handleEmailClick}>
                tommy@tmytrn.com
              </a>
            </p>

            <p className="contact-schedule">
              Want to schedule an intro call?{" "}
              <a
                href="https://calendly.com/tommy-tmytrn/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                onClick={handleCalendlyClick}>
                Let's do it
              </a>
              .
            </p>
          </div>

          <div
            className="contact-form-col"
            style={formSlotHeight ? { minHeight: formSlotHeight } : undefined}>
            <AnimatePresence>
              {formVisible && (
                <motion.div
                  key="contact-form"
                  className="contact-form-motion"
                  initial={{ scale: 1, x: 0 }}
                  animate={formAnim}
                  transition={formTransition}
                  onAnimationComplete={handleFormAnimComplete}
                  style={{ transformOrigin: "center center", width: "100%" }}>
                  <form
                    ref={formRef}
                    className={`contact-form${isFormReady ? " is-ready" : ""}`}
                    onSubmit={handleSubmit}>
                    {formSize.width > 0 &&
                      formSize.height > 0 &&
                      progressPathD && (
                        <svg
                          className="form-progress-ring"
                          width={formSize.width}
                          height={formSize.height}
                          viewBox={`0 0 ${formSize.width} ${formSize.height}`}
                          fill="none"
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "visible",
                            pointerEvents: "none",
                            zIndex: 2,
                          }}>
                          {/* Dash reveal: offset length→0 draws clockwise from top-left until closed */}
                          <path
                            ref={progressPathRef}
                            d={progressPathD}
                            stroke="#152057"
                            strokeWidth={PROGRESS_STROKE}
                            strokeLinecap="square"
                            strokeLinejoin="miter"
                            vectorEffect="non-scaling-stroke"
                            strokeDasharray={
                              perimeter > 0
                                ? `${perimeter} ${perimeter}`
                                : "0 1"
                            }
                            strokeDashoffset={
                              perimeter > 0
                                ? formProgress >= 1
                                  ? 0
                                  : perimeter * (1 - formProgress)
                                : 1
                            }
                            style={{
                              opacity: progressMeasured ? 1 : 0,
                              transition:
                                progressMeasured && !prefersReducedMotion
                                  ? "stroke-dashoffset 3s cubic-bezier(0.22, 1, 0.36, 1)"
                                  : "none",
                            }}
                          />
                        </svg>
                      )}

                    <div className="form-row">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                        aria-invalid={
                          formData.firstName.length > 0 &&
                          !fieldValidity.firstName
                        }
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                        aria-invalid={
                          formData.lastName.length > 0 &&
                          !fieldValidity.lastName
                        }
                      />
                    </div>

                    <div className="form-row">
                      <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                      <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>

                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input form-input-full"
                      required
                      aria-invalid={
                        formData.email.length > 0 && !fieldValidity.email
                      }
                    />

                    <div className="budget-range-wrapper">
                      <label className="budget-label">Budget Range</label>

                      <div className="slider-container">
                        <div className="slider-track-bg"></div>
                        <div
                          className="slider-track-active"
                          style={{
                            left: `calc(min(${minThumb}, ${maxThumb}))`,
                            width: `calc(max(${minThumb}, ${maxThumb}) - min(${minThumb}, ${maxThumb}))`,
                          }}></div>

                        <div className="slider-wrapper" ref={sliderRef}>
                          <input
                            type="range"
                            name="budgetMin"
                            min={limits.left.min}
                            max={limits.left.max}
                            step="any"
                            value={formData.budgetMin}
                            onChange={(e) => handleBudgetChange(e, "min")}
                            onKeyDown={(e) => handleBudgetKeyDown(e, "min")}
                            aria-valuemin={BUDGET_MIN}
                            aria-valuemax={formData.budgetMax - BUDGET_STEP}
                            aria-valuenow={formData.budgetMin}
                            aria-valuetext={formatBudget(formData.budgetMin)}
                            className="range-slider range-slider-min"
                          />
                          <input
                            type="range"
                            name="budgetMax"
                            min={limits.right.min}
                            max={limits.right.max}
                            step="any"
                            value={formData.budgetMax}
                            onChange={(e) => handleBudgetChange(e, "max")}
                            onKeyDown={(e) => handleBudgetKeyDown(e, "max")}
                            aria-valuemin={formData.budgetMin + BUDGET_STEP}
                            aria-valuemax={BUDGET_MAX}
                            aria-valuenow={formData.budgetMax}
                            aria-valuetext={formatBudget(formData.budgetMax)}
                            className="range-slider range-slider-max"
                          />
                        </div>

                        <div className="slider-labels">
                          <span
                            ref={minLabelRef}
                            className="slider-label slider-label-min"
                            style={{
                              left: `calc(${minThumb})`,
                              transform: `translateX(calc(-50% - ${labelSpread}px))`,
                            }}>
                            {formatBudget(formData.budgetMin)}
                          </span>
                          <span
                            ref={maxLabelRef}
                            className="slider-label slider-label-max"
                            style={{
                              left: `calc(${maxThumb})`,
                              transform: `translateX(calc(-50% + ${labelSpread}px))`,
                            }}>
                            {formatBudget(formData.budgetMax)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <textarea
                      name="details"
                      placeholder="More Details..."
                      value={formData.details}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows={5}
                      required
                      aria-invalid={
                        formData.details.length > 0 && !fieldValidity.details
                      }
                    />

                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <motion.button
                      type="submit"
                      className="submit-button"
                      disabled={isSubmitting || !isFormReady}
                      aria-disabled={isSubmitting || !isFormReady}
                      tabIndex={isFormReady ? 0 : -1}
                      initial={false}
                      animate={{ opacity: submitOpacity }}
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { duration: 0.45, ease: "easeOut" }
                      }
                      style={{
                        pointerEvents: isFormReady ? "auto" : "none",
                      }}>
                      {isSubmitting ? "SENDING..." : "SUBMIT"}
                    </motion.button>

                    {submitStatus?.type === "error" && (
                      <div className="submit-status error">
                        {submitStatus.message}
                      </div>
                    )}
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  key="form-success"
                  className="form-success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 0.5, ease: "easeOut" }
                  }>
                  <p className="form-success-message">
                    {submitStatus?.message || "Thanks, I'll be in touch soon."}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-container {
          width: 100%;
          padding: 0 15px;
          margin-top: 120px;
        }

        .contact-content {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 56px;
        }

        .section-label {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 18px;
          margin: 0 0 24px 0;
          text-transform: uppercase;
        }

        .contact-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 57px;
        }

        .contact-intro-col {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .contact-intro {
          font-size: 24px;
          line-height: 1;
          margin: 0 0 0 0;
          width: 80%;
        }

        .contact-schedule {
          font-size: 18px;
          line-height: 1;
          margin: 0;
        }

        .contact-link {
          color: inherit;
          text-decoration: underline;
          font-family: inherit;
          font-size: inherit;
        }

        .contact-link:hover {
          opacity: 0.7;
        }

        .contact-form-col {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .contact-form-col :global(.contact-form-motion) {
          width: 100%;
          will-change: transform;
        }

        .contact-form {
          position: relative;
          display: block;
          width: 100%;
          margin: 0;
          overflow: visible;
          border: none;
          padding: 44px 36px;
          box-sizing: border-box;
        }

        .contact-form-col :global(.form-progress-ring) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
          pointer-events: none;
          z-index: 2;
        }

        .contact-form-col :global(.form-success) {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 44px 36px;
          text-align: center;
        }

        .contact-form-col :global(.form-success-message) {
          margin: 0;
          font-size: 24px;
          line-height: 1.2;
          color: var(--navy);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 21px;
          margin-bottom: 12px;
        }

        .form-input {
          font-family: inherit;
          font-size: 18px;
          padding: 8px 12px;
          border: 1px solid var(--navy);
          background: transparent;
          color: var(--navy);
          outline: none;
        }

        .form-input::placeholder {
          color: var(--navy);
          opacity: 0.7;
        }

        .form-input-full {
          width: 100%;
          margin-bottom: 12px;
        }

        .budget-range-wrapper {
          margin: 40px 0;
        }

        .budget-label {
          display: block;
          font-size: 18px;
          text-align: center;
          margin-bottom: 24px;
        }

        .slider-container {
          position: relative;
          height: 50px;
        }

        .slider-track-bg {
          position: absolute;
          top: 10px;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--navy);
        }

        .slider-track-active {
          position: absolute;
          top: 10px;
          height: 1px;
          background: var(--navy);
          opacity: 0.3;
        }

        .slider-wrapper {
          position: relative;
          height: 20px;
        }

        .range-slider {
          position: absolute;
          width: 100%;
          height: 20px;
          margin: 0;
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          pointer-events: none;
          top: 0;
          left: 0;
        }

        .range-slider::-webkit-slider-track {
          width: 100%;
          height: 1px;
          background: transparent;
          border: none;
        }

        .range-slider::-moz-range-track {
          width: 100%;
          height: 1px;
          background: transparent;
          border: none;
        }

        .range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          margin: 0;
          background: var(--navy);
          cursor: pointer;
          pointer-events: auto;
          border: none;
          border-radius: 0;
        }

        .range-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          margin: 0;
          background: var(--navy);
          cursor: pointer;
          pointer-events: auto;
          border: none;
          border-radius: 0;
        }

        .range-slider-max {
          z-index: 2;
        }

        .slider-labels {
          position: relative;
          width: 100%;
          height: 30px;
          margin-top: 5px;
        }

        .slider-label {
          position: absolute;
          font-size: 18px;
          transform: translateX(-50%);
          white-space: nowrap;
        }

        .form-textarea {
          width: 100%;
          font-family: inherit;
          font-size: 18px;
          padding: 12px;
          border: 1px solid var(--navy);
          background: transparent;
          color: var(--navy);
          resize: vertical;
          outline: none;
          margin-bottom: 20px;
        }

        .form-textarea::placeholder {
          color: var(--navy);
          opacity: 0.7;
        }

        .contact-form-col :global(.submit-button) {
          position: relative;
          z-index: 3;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 18px;
          padding: 8px 24px 4px;
          background: var(--navy);
          color: var(--cream);
          border: 1px solid var(--navy);
          cursor: pointer;
        }

        .contact-form-col :global(.submit-button:hover:not(:disabled)) {
          filter: brightness(1.05);
        }

        .contact-form-col :global(.submit-button:disabled) {
          cursor: not-allowed;
        }

        .submit-status {
          margin-top: 20px;
          padding: 12px;
          border: 1px solid var(--navy);
          font-size: 16px;
        }

        .submit-status.error {
          background: rgba(255, 0, 0, 0.05);
        }

        @media (max-width: 1440px) {
          .contact-content {
            padding: 0 40px;
          }
        }

        @media (max-width: 1024px) {
          .contact-content {
            padding: 0 30px;
          }

          .contact-row {
            gap: 30px;
          }

          .contact-intro {
            font-size: 24px;
          }
        }

        @media (max-width: 768px) {
          .contact-container {
            margin-top: 80px;
          }

          .contact-content {
            padding: 0;
          }

          .section-label {
            font-size: 14px;
            margin-bottom: 24px;
          }

          .contact-row {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .contact-intro {
            width: 100%;
            font-size: 24px;
            margin-bottom: 24px;
          }

          .contact-schedule {
            margin: 0;
            font-size: 16px;
          }

          .contact-form {
            padding: 30px 20px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .form-input,
          .form-textarea {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
