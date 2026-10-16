// Project card component
import { Fragment, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { urlFor } from "../../lib/sanity";

const tiltSpring = { type: "spring", stiffness: 70, damping: 16, mass: 1.35 };
const tiltFollowSpring = { stiffness: 70, damping: 16, mass: 1.35 };
const filterEase = [0.4, 0, 0.2, 1];
const FILTER_EXIT_MS = 20;
const FILTER_ITEM_MS = 200;
const FILTER_STAGGER_MS = 80;

function ProjectImage({ backgroundSrc, foregroundSrc, alt }) {
  const [active, setActive] = useState(false);
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const smoothX = useSpring(pointerX, tiltFollowSpring);
  const smoothY = useSpring(pointerY, tiltFollowSpring);
  const press = useMotionValue(0);
  // Cursor presses that corner into the page (opposite of "face the cursor")
  const rotateX = useTransform(smoothY, [0, 1], [-3.5, 3.5]);
  const rotateY = useTransform(smoothX, [0, 1], [4.5, -4.5]);
  const z = useTransform(press, [0, 1], [0, -12]);
  const scale = useTransform(press, [0, 1], [1, 0.994]);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  };

  const handlePointerEnter = () => {
    setActive(true);
    animate(press, 1, tiltSpring);
  };

  const handlePointerLeave = () => {
    setActive(false);
    animate(pointerX, 0.5, tiltSpring);
    animate(pointerY, 0.5, tiltSpring);
    animate(press, 0, tiltSpring);
  };

  return (
    <>
      <div
        className={`project-image-wrapper${active ? " is-hot" : ""}`}
        onMouseMove={handlePointerMove}
        onMouseEnter={handlePointerEnter}
        onMouseLeave={handlePointerLeave}>
        {backgroundSrc ? (
          <img
            src={backgroundSrc}
            alt=""
            className="project-image-bg"
            loading="lazy"
            aria-hidden="true"
          />
        ) : null}
        {foregroundSrc ? (
          <div className="project-image-fg-slot">
            <motion.img
              src={foregroundSrc}
              alt={alt}
              className="project-image-fg"
              loading="lazy"
              style={{ rotateX, rotateY, z, scale }}
            />
          </div>
        ) : null}
      </div>
      <style jsx>{`
        .project-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 625 / 469;
          overflow: hidden;
          background: linear-gradient(225deg, #20289e 47.756%, #0b0e38 123.77%);
          border-radius: 0;
          perspective: 1100px;
          perspective-origin: center;
        }

        .project-image-wrapper :global(.project-image-bg) {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        /* 24px x-inset; image keeps its intrinsic ratio and is never cropped */
        .project-image-fg-slot {
          position: absolute;
          left: 24px;
          right: 24px;
          top: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          transform-style: preserve-3d;
        }

        .project-image-wrapper :global(.project-image-fg) {
          display: block;
          width: 100%;
          height: auto;
          max-height: 100%;
          object-fit: contain;
          transform-origin: center center;
          transform-style: preserve-3d;
        }

        .project-image-wrapper.is-hot :global(.project-image-fg) {
          will-change: transform;
        }

        @media (max-width: 768px) {
          .project-image-wrapper {
            aspect-ratio: 345 / 259;
          }
        }
      `}</style>
    </>
  );
}

function ProjectCard({
  project,
  backgroundSrc,
  foregroundSrc,
  imageAlt,
  children,
}) {
  return (
    <div className="project-card">
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link">
          <ProjectImage
            backgroundSrc={backgroundSrc}
            foregroundSrc={foregroundSrc}
            alt={imageAlt}
          />
        </a>
      ) : (
        <ProjectImage
          backgroundSrc={backgroundSrc}
          foregroundSrc={foregroundSrc}
          alt={imageAlt}
        />
      )}
      {children}
      <style jsx>{`
        .project-card {
          width: 100%;
          min-width: 0;
        }

        .project-link {
          display: block;
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </div>
  );
}

function applyMarks(text, marks, markDefs) {
  return (marks || []).reduce((node, mark) => {
    if (mark === "strong") return <strong>{node}</strong>;
    if (mark === "em") return <em>{node}</em>;

    const definition = (markDefs || []).find((item) => item._key === mark);
    if (definition?._type !== "link" || !definition.href) return node;

    const external = /^https?:\/\//i.test(definition.href);
    return (
      <a
        href={definition.href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {node}
      </a>
    );
  }, text);
}

function DescriptionText({ text }) {
  const lines = text.split("\n");
  return lines.map((line, index) => (
    <Fragment key={index}>
      {index > 0 && <br />}
      {line}
    </Fragment>
  ));
}

function hasDescription(description) {
  if (typeof description === "string") return description.trim().length > 0;
  return (
    Array.isArray(description) &&
    description.some((block) => block?._type === "block")
  );
}

const FILTERS = [
  { id: "all", label: "All" },
  { id: "shopify", label: "Shopify" },
  { id: "nextjs", label: "Next.js" },
];

function compareByDateDesc(a, b) {
  if (a.date && b.date && a.date !== b.date) {
    return a.date < b.date ? 1 : -1;
  }
  if (a.date && !b.date) return -1;
  if (!a.date && b.date) return 1;
  return 0;
}

export default function SelectWorkSection({ projects }) {
  const [filter, setFilter] = useState("all");
  const [filterLocked, setFilterLocked] = useState(false);
  const filterLockTimerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const visibleProjects = useMemo(() => {
    const sorted = [...projects].sort(compareByDateDesc);
    if (filter === "all") return sorted;
    return sorted.filter((project) => project.platform === filter);
  }, [projects, filter]);

  const countForFilter = (id) => {
    if (id === "all") return projects.length;
    return projects.filter((project) => project.platform === id).length;
  };

  const handleFilterClick = (id) => {
    if (id === filter || filterLocked) return;

    if (filterLockTimerRef.current) {
      clearTimeout(filterLockTimerRef.current);
    }

    setFilterLocked(true);
    setFilter(id);

    const nextCount = countForFilter(id);
    const duration = prefersReducedMotion
      ? 40
      : FILTER_EXIT_MS +
        FILTER_ITEM_MS +
        Math.max(0, nextCount - 1) * FILTER_STAGGER_MS +
        40;

    filterLockTimerRef.current = setTimeout(() => {
      setFilterLocked(false);
      filterLockTimerRef.current = null;
    }, duration);
  };

  const getBackgroundSrc = (project) => {
    if (project.backgroundImage?.asset) {
      return urlFor(project.backgroundImage)
        .width(1250)
        .height(938)
        .fit("crop")
        .crop("focalpoint")
        .auto("format")
        .url();
    }
    return typeof project.backgroundImage === "string"
      ? project.backgroundImage
      : null;
  };

  const getForegroundSrc = (project) => {
    const image = project.foregroundImage?.asset
      ? project.foregroundImage
      : project.image?.asset
        ? project.image
        : null;

    if (image) {
      // Width-only + max: preserve intrinsic aspect ratio, never crop
      return urlFor(image).width(2308).fit("max").auto("format").url();
    }

    return (
      (typeof project.foregroundImage === "string"
        ? project.foregroundImage
        : null) || (typeof project.image === "string" ? project.image : null)
    );
  };

  const getImageAlt = (project) => {
    return project.foregroundImage?.alt || project.image?.alt || project.title;
  };

  return (
    <div className="select-work-container">
      <div className="select-work-content">
        <div className="section-header">
          <h2 className="section-label">SELECT WORK</h2>
          <div
            className="view-toggle"
            role="group"
            aria-label="Filter projects by platform">
            {FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                className="view-toggle-button"
                aria-pressed={filter === item.id}
                disabled={filterLocked && filter !== item.id}
                onClick={() => handleFilterClick(item.id)}>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-stage">
          <AnimatePresence exitBeforeEnter initial={false}>
            {visibleProjects.length === 0 ? (
              <motion.p
                key={`empty-${filter}`}
                className="projects-empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : FILTER_EXIT_MS / 1000,
                  ease: filterEase,
                }}>
                {filter === "all"
                  ? "No projects yet."
                  : `No projects tagged ${FILTERS.find((item) => item.id === filter)?.label} yet.`}
              </motion.p>
            ) : (
              <motion.div
                key={`grid-${filter}`}
                className="projects-grid"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : FILTER_EXIT_MS / 1000,
                  ease: filterEase,
                }}>
                {visibleProjects.map((project, index) => (
                  <motion.div
                    key={`${filter}-${project._id}`}
                    className="project-card-motion"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: prefersReducedMotion
                        ? 0
                        : FILTER_ITEM_MS / 1000,
                      delay: prefersReducedMotion
                        ? 0
                        : index * (FILTER_STAGGER_MS / 1000),
                      ease: filterEase,
                    }}>
                    <ProjectCard
                      project={project}
                      backgroundSrc={getBackgroundSrc(project)}
                      foregroundSrc={getForegroundSrc(project)}
                      imageAlt={getImageAlt(project)}>
                      <h3 className="project-title">{project.title}</h3>
                      {hasDescription(project.description) && (
                        <div className="project-description">
                          {typeof project.description === "string" ? (
                            <p>{project.description}</p>
                          ) : (
                            project.description
                              .filter((block) => block?._type === "block")
                              .map((block) => (
                                <p key={block._key}>
                                  {(block.children || []).map((span) =>
                                    span?._type === "span" ? (
                                      <span key={span._key}>
                                        {applyMarks(
                                          <DescriptionText
                                            text={span.text || ""}
                                          />,
                                          span.marks,
                                          block.markDefs,
                                        )}
                                      </span>
                                    ) : null,
                                  )}
                                </p>
                              ))
                          )}
                        </div>
                      )}
                      {project.tools && project.tools.length > 0 && (
                        <p className="project-tools">
                          {project.tools.join(" · ")}
                        </p>
                      )}
                    </ProjectCard>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .select-work-container {
          width: 100%;
          padding: 0 15px;
          margin-top: 120px;
        }

        .select-work-content {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 56px;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin: 0 0 24px 0;
        }

        .section-label {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 18px;
          margin: 0;
          text-transform: uppercase;
        }

        .view-toggle {
          display: flex;
          border: 1px solid var(--navy);
        }

        .view-toggle-button {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 14px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          background: transparent;
          color: var(--navy);
          border: none;
          border-right: 1px solid var(--navy);
          padding: 8px 16px 6px;
          cursor: pointer;
          transition:
            background-color 0.28s ease,
            color 0.28s ease;
        }

        .view-toggle-button:last-child {
          border-right: none;
        }

        .view-toggle-button[aria-pressed="true"] {
          background: var(--navy);
          color: var(--cream);
        }

        .view-toggle-button:focus-visible {
          outline: 2px solid var(--yellow);
          outline-offset: -2px;
        }

        .view-toggle-button:disabled {
          cursor: default;
        }

        .projects-stage {
          position: relative;
        }

        .projects-stage :global(.projects-empty) {
          font-size: 18px;
          margin: 0;
        }

        .projects-stage :global(.projects-grid) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 57px;
          row-gap: 100px;
        }

        .projects-stage :global(.project-card-motion) {
          width: 100%;
          min-width: 0;
        }

        .project-title {
          font-size: 24px;
          font-weight: 400;
          margin: 12px 0 0 0;
          line-height: 1.2;
        }

        .project-description {
          font-size: 18px;
          line-height: 1.5;
          margin: 8px 0 0 0;
          max-width: 484px;
        }

        .project-description :global(p) {
          margin: 0;
        }

        .project-description :global(p + p) {
          margin-top: 0.5em;
        }

        .project-description :global(a) {
          color: inherit;
          text-decoration: underline;
          text-underline-offset: 0.12em;
        }

        .project-description :global(a:hover) {
          opacity: 0.7;
        }

        .project-tools {
          font-size: 14px;
          line-height: 1.5;
          margin: 6px 0 0 0;
          max-width: 484px;
          color: var(--navy);
          opacity: 0.7;
        }

        @media (max-width: 1440px) {
          .select-work-content {
            padding: 0 40px;
          }
        }

        @media (max-width: 1024px) {
          .select-work-content {
            padding: 0 30px;
          }

          .projects-stage :global(.projects-grid) {
            gap: 30px;
            row-gap: 60px;
          }
        }

        @media (max-width: 768px) {
          .select-work-container {
            margin-top: 80px;
          }

          .select-work-content {
            padding: 0;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 25px;
          }

          .section-label {
            font-size: 14px;
          }

          .view-toggle {
            width: 100%;
          }

          .view-toggle-button {
            flex: 1;
            font-size: 12px;
            padding: 8px 8px 6px;
          }

          .projects-stage :global(.projects-grid) {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .project-title {
            font-size: 18px;
            margin-top: 4px;
          }

          .project-description {
            font-size: 12px;
          }

          .project-tools {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
