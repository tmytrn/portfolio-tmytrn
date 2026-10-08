import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const WordmarkSVG = ({ mobile }) => (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <Image
        src={mobile ? '/images/v2/tmytrn-llc-wordmark-mobile.svg' : '/images/v2/tmytrn-llc-wordmark.svg'}
        alt="TMYTRN LLC"
        width={mobile ? 345 : 1329}
        height={mobile ? 27 : 105}
        style={{ maxWidth: '100%', height: 'auto' }}
        priority
      />
    </div>
  );

  return (
    <div className="hero-container">
      <div className="hero-content">
        <WordmarkSVG mobile={isMobile} />
        
        <p className="hero-subline">
          is the web design and development practice of Tommy Tran.
        </p>

        <div className="hero-row">
          <div className="hero-column">
            <div className="gradient-box">
              <div className="yellow-halo">
                <div className="yellow-core" />
              </div>
            </div>
          </div>

          <div className="services-column">
            <p className="services-label">I offer services for:</p>
            <div className="services-box">
              <div className="service-item">SHOPIFY SITES</div>
              <div className="service-item">NEXT.JS SITES</div>
              <div className="service-item">ECOMM STRATEGY</div>
              <div className="service-item">KLAVIYO</div>
              <div className="service-item">MAILCHIMP</div>
              <div className="service-item">SEO</div>
              <div className="service-item">AI SEARCH</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-container {
          width: 100%;
          padding: 38px 15px 0;
        }

        .hero-content {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 56px;
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
          gap: 57px;
          margin-top: 115px;
          align-items: start;
        }

        .hero-column {
          width: 100%;
        }

        .gradient-box {
          width: 100%;
          aspect-ratio: 625 / 429;
          background: linear-gradient(180deg, #16388E 0%, #081848 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .yellow-halo {
          width: 31.6%;
          aspect-ratio: 197.46 / 135.54;
          background: rgba(235, 193, 65, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .yellow-core {
          width: 63.3%;
          aspect-ratio: 125 / 85.8;
          background: var(--yellow);
        }

        .services-column {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .services-label {
          font-size: 18px;
          text-align: center;
          margin: 0 0 38px 0;
        }

        .services-box {
          width: 100%;
          flex: 1;
          aspect-ratio: 625 / 429;
          border: 1px solid var(--navy);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 21px 0;
        }

        .service-item {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 32px;
          letter-spacing: -0.02em;
          text-align: center;
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
            gap: 30px;
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
            gap: 20px;
            margin-top: 60px;
          }

          .hero-box {
            aspect-ratio: 345 / 226;
          }

          .services-label {
            font-size: 14px;
            margin-bottom: 20px;
          }

          .services-box {
            aspect-ratio: 345 / auto;
          }

          .service-item {
            font-size: 18px;
            letter-spacing: -0.02em;
          }
        }
      `}</style>
    </div>
  );
}
