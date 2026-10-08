// Project card component
import { urlFor } from '../../lib/sanity';

export default function SelectWorkSection({ projects }) {
  const getImageUrl = (project) => {
    // If it's a Sanity image object with asset reference
    if (project.image?.asset) {
      return urlFor(project.image)
        .width(1250)
        .height(938)
        .fit('crop')
        .crop('focalpoint')
        .auto('format')
        .url();
    }
    // Otherwise it's a fallback static image path
    return project.image;
  };

  const getImageAlt = (project) => {
    return project.image?.alt || project.title;
  };

  return (
    <div className="select-work-container">
      <div className="select-work-content">
        <h2 className="section-label">SELECT WORK</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project._id} className="project-card">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <div className="project-image-wrapper">
                    <img
                      src={getImageUrl(project)}
                      alt={getImageAlt(project)}
                      className="project-image"
                      loading="lazy"
                    />
                  </div>
                </a>
              ) : (
                <div className="project-image-wrapper">
                  <img
                    src={getImageUrl(project)}
                    alt={getImageAlt(project)}
                    className="project-image"
                    loading="lazy"
                  />
                </div>
              )}
              
              <h3 className="project-title">{project.title}</h3>
              {project.description && (
                <p className="project-description">{project.description}</p>
              )}
              {project.tools && project.tools.length > 0 && (
                <p className="project-tools">{project.tools.join(' · ')}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .select-work-container {
          width: 100%;
          padding: 0 15px;
          margin-top: 120px;
        }

        .select-work-content {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 56px;
        }

        .section-label {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 24px;
          margin: 0 0 50px 0;
          text-transform: uppercase;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 57px;
          row-gap: 100px;
        }

        .project-card {
          width: 100%;
          min-width: 0;
        }

        .project-link {
          display: block;
          text-decoration: none;
          color: inherit;
        }

        .project-image-wrapper {
          width: 100%;
          aspect-ratio: 625 / 469;
          overflow: hidden;
          background: linear-gradient(225deg, #20289E 47.756%, #0B0E38 123.77%);
          border-radius: 0;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-link:hover .project-image {
          transform: scale(1.02);
        }

        .project-title {
          font-size: 36px;
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
          
          .projects-grid {
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

          .section-label {
            font-size: 14px;
            margin-bottom: 25px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .project-image-wrapper {
            aspect-ratio: 345 / 259;
          }

          .project-title {
            font-size: 24px;
            margin-top: 4px;
          }

          .project-description {
            display: none;
          }

          .project-tools {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
