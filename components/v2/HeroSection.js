import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const SERVICES = [
  "SHOPIFY SITES",
  "NEXT.JS SITES",
  "ECOMM STRATEGY",
  "KLAVIYO",
  "MAILCHIMP",
  "SEO",
  "AI SEO",
];

function ServiceItem({ children }) {
  const [shimmering, setShimmering] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const playShimmer = () => {
    if (prefersReducedMotion || shimmering) return;
    setShimmering(true);
  };

  return (
    <div
      className="service-item"
      onPointerEnter={playShimmer}
      onFocus={playShimmer}
      tabIndex={0}>
      <span className="service-item-label">{children}</span>
      {shimmering && (
        <motion.span
          className="service-item-shimmer"
          aria-hidden="true"
          initial={{ x: "-130%" }}
          animate={{ x: "130%" }}
          transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
          onAnimationComplete={() => setShimmering(false)}
        />
      )}
    </div>
  );
}

const returnToCenter = {
  type: "spring",
  stiffness: 100,
  damping: 45,
  mass: 0.8,
};

const catchUpToPointer = {
  type: "spring",
  stiffness: 500,
  damping: 32,
  mass: 0.35,
};

function fractionAlong(px, py, hx, hy, cx, cy) {
  const dx = cx - px;
  const dy = cy - py;
  const len2 = dx * dx + dy * dy;
  if (len2 === 0) return 1;
  return ((hx - px) * dx + (hy - py) * dy) / len2;
}

function HaloCornerLines({ x, y, parentRef, haloRef, coreRef }) {
  const fillRef = useRef(null);
  const svgRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let stopX = null;
    let stopY = null;
    let observer = null;
    let rafId = 0;
    let cancelled = false;

    const tearDown = () => {
      stopX?.();
      stopY?.();
      stopX = null;
      stopY = null;
      observer?.disconnect();
      observer = null;
    };

    const setup = () => {
      if (cancelled) return;

      const parent = parentRef.current;
      const halo = haloRef.current;
      const core = coreRef.current;
      const fill = fillRef.current;
      const svg = svgRef.current;
      // On SSR hydration, sibling motion refs can still be null when this
      // layout effect first runs. Retry on the next frame until ready.
      if (!parent || !halo || !core || !fill || !svg) {
        rafId = requestAnimationFrame(setup);
        return;
      }

      const outerLines = svg.querySelectorAll(".line-outer");
      const innerLines = svg.querySelectorAll(".line-inner");
      const polygon = fill.querySelector(".halo-box");
      const metrics = {
        haloLeft: 0,
        haloTop: 0,
        haloWidth: 0,
        haloHeight: 0,
        coreLeft: 0,
        coreTop: 0,
        coreWidth: 0,
        coreHeight: 0,
        parentWidth: 0,
        parentHeight: 0,
      };
      const cornerT = [1, 1, 1, 1];
      const parentX = [0, 0, 0, 0];
      const parentY = [0, 0, 0, 0];
      const coreX = [0, 0, 0, 0];
      const coreY = [0, 0, 0, 0];
      const boxX = [0, 0, 0, 0];
      const boxY = [0, 0, 0, 0];

      const draw = () => {
        const dragX = x.get();
        const dragY = y.get();
        const coreLeft = metrics.coreLeft + dragX;
        const coreTop = metrics.coreTop + dragY;
        const coreRight = coreLeft + metrics.coreWidth;
        const coreBottom = coreTop + metrics.coreHeight;
        const parentWidth = metrics.parentWidth;
        const parentHeight = metrics.parentHeight;
        parentX[0] = 0;
        parentX[1] = parentWidth;
        parentX[2] = 0;
        parentX[3] = parentWidth;
        parentY[0] = 0;
        parentY[1] = 0;
        parentY[2] = parentHeight;
        parentY[3] = parentHeight;
        coreX[0] = coreLeft;
        coreX[1] = coreRight;
        coreX[2] = coreLeft;
        coreX[3] = coreRight;
        coreY[0] = coreTop;
        coreY[1] = coreTop;
        coreY[2] = coreBottom;
        coreY[3] = coreBottom;

        for (let i = 0; i < 4; i++) {
          const px = parentX[i];
          const py = parentY[i];
          const cx = coreX[i];
          const cy = coreY[i];
          const bx = px + cornerT[i] * (cx - px);
          const by = py + cornerT[i] * (cy - py);
          boxX[i] = bx;
          boxY[i] = by;
          outerLines[i].setAttribute("x1", px);
          outerLines[i].setAttribute("y1", py);
          outerLines[i].setAttribute("x2", bx);
          outerLines[i].setAttribute("y2", by);
          innerLines[i].setAttribute("x1", bx);
          innerLines[i].setAttribute("y1", by);
          innerLines[i].setAttribute("x2", cx);
          innerLines[i].setAttribute("y2", cy);
        }

        polygon.setAttribute(
          "points",
          boxX[0] +
            "," +
            boxY[0] +
            " " +
            boxX[1] +
            "," +
            boxY[1] +
            " " +
            boxX[3] +
            "," +
            boxY[3] +
            " " +
            boxX[2] +
            "," +
            boxY[2],
        );
      };

      const measure = () => {
        const parentRect = parent.getBoundingClientRect();
        const haloRect = halo.getBoundingClientRect();
        const coreRect = core.getBoundingClientRect();
        const dragX = x.get();
        const dragY = y.get();
        metrics.parentWidth = parentRect.width;
        metrics.parentHeight = parentRect.height;
        metrics.haloWidth = haloRect.width;
        metrics.haloHeight = haloRect.height;
        metrics.haloLeft = haloRect.left - parentRect.left - dragX;
        metrics.haloTop = haloRect.top - parentRect.top - dragY;
        metrics.coreWidth = coreRect.width;
        metrics.coreHeight = coreRect.height;
        metrics.coreLeft = coreRect.left - parentRect.left - dragX;
        metrics.coreTop = coreRect.top - parentRect.top - dragY;

        const haloCornerX = [
          metrics.haloLeft,
          metrics.haloLeft + metrics.haloWidth,
          metrics.haloLeft,
          metrics.haloLeft + metrics.haloWidth,
        ];
        const haloCornerY = [
          metrics.haloTop,
          metrics.haloTop,
          metrics.haloTop + metrics.haloHeight,
          metrics.haloTop + metrics.haloHeight,
        ];
        const coreCornerX = [
          metrics.coreLeft,
          metrics.coreLeft + metrics.coreWidth,
          metrics.coreLeft,
          metrics.coreLeft + metrics.coreWidth,
        ];
        const coreCornerY = [
          metrics.coreTop,
          metrics.coreTop,
          metrics.coreTop + metrics.coreHeight,
          metrics.coreTop + metrics.coreHeight,
        ];
        const parentCornerX = [0, metrics.parentWidth, 0, metrics.parentWidth];
        const parentCornerY = [0, 0, metrics.parentHeight, metrics.parentHeight];
        for (let i = 0; i < 4; i++) {
          cornerT[i] = fractionAlong(
            parentCornerX[i],
            parentCornerY[i],
            haloCornerX[i],
            haloCornerY[i],
            coreCornerX[i],
            coreCornerY[i],
          );
        }

        const viewBox = "0 0 " + metrics.parentWidth + " " + metrics.parentHeight;
        fill.setAttribute("viewBox", viewBox);
        svg.setAttribute("viewBox", viewBox);
        draw();
      };

      tearDown();
      measure();
      stopX = x.on("change", draw);
      stopY = y.on("change", draw);
      observer = new ResizeObserver(measure);
      observer.observe(parent);
      observer.observe(halo);
      observer.observe(core);
    };

    setup();
    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      tearDown();
    };
  }, [parentRef, haloRef, coreRef, x, y]);

  return (
    <>
      <svg ref={fillRef} className="halo-fill" preserveAspectRatio="none">
        <polygon className="halo-box" />
      </svg>
      <svg ref={svgRef} className="halo-lines" preserveAspectRatio="none">
        <line className="line-outer line-top" x1="0" y1="0" />
        <line className="line-inner" />
        <line className="line-outer line-top" y1="0" />
        <line className="line-inner" />
        <line className="line-outer" x1="0" />
        <line className="line-inner" />
        <line className="line-outer" />
        <line className="line-inner" />
      </svg>
    </>
  );
}

export default function HeroSection() {
  const constraintsRef = useRef(null);
  const haloRef = useRef(null);
  const coreRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xAnim = useRef(null);
  const yAnim = useRef(null);
  const isReturning = useRef(false);

  const stopAnims = () => {
    xAnim.current?.stop();
    yAnim.current?.stop();
    xAnim.current = null;
    yAnim.current = null;
  };

  const getClampedOffset = (event) => {
    const parent = constraintsRef.current;
    const halo = haloRef.current;
    if (!parent || !halo) return null;

    const parentRect = parent.getBoundingClientRect();
    const haloRect = halo.getBoundingClientRect();
    const maxX = Math.max(0, (parentRect.width - haloRect.width) / 2);
    const maxY = Math.max(0, (parentRect.height - haloRect.height) / 2);
    const offsetX = event.clientX - parentRect.left - parentRect.width / 2;
    const offsetY = event.clientY - parentRect.top - parentRect.height / 2;

    return {
      offsetX: Math.max(-maxX, Math.min(maxX, offsetX)),
      offsetY: Math.max(-maxY, Math.min(maxY, offsetY)),
    };
  };

  const followPointer = (event) => {
    const offset = getClampedOffset(event);
    if (!offset) return;

    const { offsetX, offsetY } = offset;

    if (isReturning.current) {
      isReturning.current = false;
      stopAnims();
      xAnim.current = animate(x, offsetX, catchUpToPointer);
      yAnim.current = animate(y, offsetY, catchUpToPointer);
      return;
    }

    stopAnims();
    x.set(offsetX);
    y.set(offsetY);
  };

  const resetToCenter = () => {
    isReturning.current = true;
    stopAnims();
    xAnim.current = animate(x, 0, returnToCenter);
    yAnim.current = animate(y, 0, returnToCenter);
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-wordmark-heading">
          <img
            src="/images/v2/tmytrn-llc-wordmark.svg"
            alt="TMYTRN LLC"
            className="hero-wordmark"
          />
        </h1>

        <p className="hero-subline">
          is the web consulting and development practice of Tommy Tran.
        </p>

        <div className="hero-row">
          <p className="services-label">Capabilities include:</p>

          <div
            className="gradient-box"
            ref={constraintsRef}
            onPointerEnter={followPointer}
            onPointerMove={followPointer}
            onPointerLeave={resetToCenter}>
            {/* Halo mounts first so its refs exist before HaloCornerLines measures */}
            <motion.div ref={haloRef} className="yellow-halo" style={{ x, y }}>
              <div className="yellow-core" ref={coreRef} />
            </motion.div>
            <HaloCornerLines
              x={x}
              y={y}
              parentRef={constraintsRef}
              haloRef={haloRef}
              coreRef={coreRef}
            />
          </div>

          <div className="services-box">
            {SERVICES.map((label) => (
              <ServiceItem key={label}>{label}</ServiceItem>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-container {
          width: 100%;
          padding: 38px 15px 0;
        }

        .hero-content {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 56px;
        }

        .hero-wordmark-heading {
          margin: 0;
          padding: 0;
          font-size: 0;
          line-height: 0;
        }

        .hero-wordmark {
          width: 100%;
          height: auto;
          display: block;
        }

        .hero-subline {
          text-align: center;
          font-size: 24px;
          line-height: 1.3;
          max-width: 383px;
          margin: 25px auto 0;
          color: #152057;
        }

        .hero-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas:
            ". label"
            "gradient services";
          column-gap: 48px;
          row-gap: 12px;
          margin-top: 48px;
          align-items: start;
        }

        .services-label {
          grid-area: label;
          font-size: 24px;
          text-align: center;
          margin: 0;
        }

        .gradient-box,
        .services-box {
          width: 100%;
          height: 100%;
          aspect-ratio: 4 / 3;
          align-self: start;
        }

        .gradient-box {
          grid-area: gradient;
          background: linear-gradient(180deg, #16388e 0%, #081848 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .gradient-box :global(.halo-fill),
        .gradient-box :global(.halo-lines) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .gradient-box :global(.halo-fill) {
          z-index: 0;
        }

        .gradient-box :global(.halo-fill .halo-box) {
          fill: rgba(235, 193, 65, 0.1);
          stroke: none;
        }

        .gradient-box :global(.halo-lines) {
          pointer-events: none;
          z-index: 2;
        }

        .gradient-box :global(.halo-lines .line-outer) {
          stroke: #071645;
          stroke-width: 1;
        }

        .gradient-box :global(.halo-lines .line-top),
        .gradient-box :global(.halo-lines .line-inner) {
          stroke: #12307c;
          stroke-width: 1;
        }

        .gradient-box :global(.yellow-halo) {
          position: relative;
          z-index: 1;
          width: 31.6%;
          aspect-ratio: 197.46 / 135.54;
          background: transparent;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .yellow-core {
          width: 63.3%;
          aspect-ratio: 125 / 85.8;
          background: var(--yellow);
          pointer-events: none;
        }

        .services-box {
          grid-area: services;
          border: 1px solid var(--navy);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: clamp(6px, 2cqi, 32px);
          padding: clamp(12px, 3.4cqi, 24px) 0;
          container-type: inline-size;
        }

        .services-box :global(.service-item) {
          position: relative;
          overflow: hidden;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(16px, 5.1cqi, 32px);
          letter-spacing: -0.02em;
          text-align: center;
          line-height: 1.2;
          cursor: default;
        }

        .services-box :global(.service-item:focus) {
          outline: none;
        }

        .services-box :global(.service-item:focus-visible) {
          outline: 2px solid var(--yellow);
          outline-offset: 4px;
        }

        .services-box :global(.service-item-label) {
          position: relative;
          z-index: 1;
        }

        .services-box :global(.service-item-shimmer) {
          position: absolute;
          top: -15%;
          bottom: -15%;
          left: 0;
          width: 75%;
          z-index: 2;
          pointer-events: none;
          /* Cream band matches the page bg so it masks letters as it passes */
          background: linear-gradient(
            100deg,
            transparent 0%,
            rgba(243, 237, 225, 0) 8%,
            rgba(243, 237, 225, 0.15) 22%,
            rgba(243, 237, 225, 0.45) 34%,
            rgba(243, 237, 225, 0.85) 44%,
            var(--cream) 50%,
            rgba(243, 237, 225, 0.85) 56%,
            rgba(243, 237, 225, 0.45) 66%,
            rgba(243, 237, 225, 0.15) 78%,
            rgba(243, 237, 225, 0) 92%,
            transparent 100%
          );
        }

        @media (max-width: 1440px) {
          .hero-content {
            padding: 0 40px;
          }
        }

        @media (max-width: 1024px) {
          .hero-content {
            padding: 0 30px;
          }

          .hero-row {
            column-gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 24px 15px 0;
          }

          .hero-content {
            padding: 0;
          }

          .hero-subline {
            font-size: 18px;
            max-width: 259px;
            margin-top: 10px;
          }

          .hero-row {
            grid-template-columns: 1fr;
            grid-template-areas:
              "gradient"
              "label"
              "services";
            row-gap: 0;
            margin-top: 60px;
          }

          .services-label {
            font-size: 18px;
            margin: 32px 0 8px;
          }

          .gradient-box,
          .services-box {
            aspect-ratio: 4 /3;
          }
        }
      `}</style>
    </div>
  );
}
