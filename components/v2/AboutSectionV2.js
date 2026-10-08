// About section component

export default function AboutSectionV2() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="section-label">ABOUT</h2>
        
        <div className="about-row">
          <div className="about-image-col">
            <img
              src="/images/v2/about-photo.jpg"
              alt="Tommy Tran"
              className="about-image"
              loading="lazy"
            />
          </div>

          <div className="about-text-col">
            <p className="about-text">
              Tommy Tran is a web designer and developer based in New York. He
              applies his technological skills in creative projects and new
              endeavours.
            </p>
            <p className="about-text about-text-fade">
              He's worked with Public Announcement, Applied Poetics, Benjamin Edgar,
              Reese Cooper, Urban Jürgensen, RC Outdoor Supply, Reginald Sylvester II,
              and Cam Hicks.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-container {
          width: 100%;
          padding: 0 15px;
          margin-top: 120px;
        }

        .about-content {
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

        .about-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 57px;
        }

        .about-image-col {
          width: 100%;
          max-width: 625px;
        }

        .about-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .about-text-col {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .about-text {
          font-size: 18px;
          line-height: 1.6;
          margin: 0 0 20px 0;
        }

        .about-text:last-child {
          margin-bottom: 0;
        }

        .about-text-fade {
          opacity: 0.7;
        }

        @media (max-width: 1440px) {
          .about-content {
            padding: 0 40px;
          }
        }

        @media (max-width: 1024px) {
          .about-content {
            padding: 0 30px;
          }
          
          .about-row {
            gap: 30px;
          }

          .about-text {
            font-size: 16px;
          }
        }

        @media (max-width: 768px) {
          .about-container {
            margin-top: 80px;
          }

          .about-content {
            padding: 0;
          }

          .section-label {
            font-size: 14px;
            margin-bottom: 25px;
          }

          .about-row {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .about-text {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
