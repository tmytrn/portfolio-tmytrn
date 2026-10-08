import Image from 'next/image';

const projects = [
  {
    id: 'dresen',
    title: 'Dresen Studio',
    description: 'Womens denim brand from Becca Rosen. Made in USA.',
    image: '/images/v2/dresen-card.png',
    mobileImage: '/images/v2/dresen-card-mobile.png',
    url: 'https://www.dresen-studio.com/',
    width: 1250,
    height: 938,
  },
  {
    id: 'benjamin-edgar',
    title: 'Benjamin Edgar',
    description: 'Designer and Artist based in Chicago',
    image: '/images/v2/benjamin-edgar-card.png',
    url: 'https://benjaminedgar.com',
    width: 1250,
    height: 938,
  },
  {
    id: 'urban-jurgensen',
    title: 'Urban Jürgensen',
    description: '250 year old Danish watchmaker',
    image: '/images/v2/urban-jurgensen-card.png',
    url: 'https://urbanjurgensen.com/',
    width: 1250,
    height: 938,
  },
  {
    id: 'scroll-nyc',
    title: 'Scroll NYC',
    description: 'Art Gallery based in Chinatown NY',
    image: '/images/v2/scroll-nyc-card.png',
    url: null,
    width: 1250,
    height: 938,
  },
];

export default function SelectWorkSection() {
  return (
    <div className="select-work-container">
      <div className="select-work-content">
        <h2 className="section-label">SELECT WORK</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                  <div className="project-image-wrapper">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={project.width}
                      height={project.height}
                      className="project-image"
                      loading="lazy"
                    />
                  </div>
                </a>
              ) : (
                <div className="project-image-wrapper">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={project.width}
                    height={project.height}
                    className="project-image"
                    loading="lazy"
                  />
                </div>
              )}
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
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
        }
      `}</style>
    </div>
  );
}
