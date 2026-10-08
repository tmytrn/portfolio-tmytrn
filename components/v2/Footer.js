import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-row">
          <div className="footer-left">
            <Image
              src="/images/v2/computer-drawing-transparent@4x.png"
              alt="Computer illustration"
              width={108}
              height={90}
              className="computer-drawing"
            />
          </div>

          <div className="footer-right">
            <h2 className="footer-headline">
              I LOVE THE<br />COMPUTER
            </h2>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© 2026 TMYTRN LLC</p>
        </div>
      </div>

      <style jsx>{`
        .footer-container {
          width: 100%;
          padding: 0 15px;
          margin-top: 150px;
          padding-bottom: 40px;
        }

        .footer-content {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 56px;
          position: relative;
        }

        .footer-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 30px;
        }

        .footer-left {
          flex-shrink: 0;
        }

        .computer-drawing {
          image-rendering: pixelated;
          width: 108px;
          height: 90px;
        }

        .footer-right {
          text-align: right;
          flex-grow: 1;
        }

        .footer-headline {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 128px;
          line-height: 0.77;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: -0.01em;
        }

        .footer-copyright {
          text-align: right;
        }

        .footer-copyright p {
          font-size: 12px;
          margin: 0;
        }

        @media (max-width: 1440px) {
          .footer-content {
            padding: 0 40px;
          }

          .footer-headline {
            font-size: 100px;
          }
        }

        @media (max-width: 1024px) {
          .footer-content {
            padding: 0 30px;
          }

          .footer-headline {
            font-size: 80px;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            margin-top: 80px;
            padding-bottom: 30px;
          }

          .footer-content {
            padding: 0;
          }

          .footer-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 40px;
          }

          .footer-right {
            width: 100%;
            text-align: right;
          }

          .footer-headline {
            font-size: 32px;
            line-height: 1;
            letter-spacing: -0.02em;
          }

          .computer-drawing {
            width: 108px;
            height: 90px;
          }

          .footer-copyright {
            text-align: left;
          }

          .footer-copyright p {
            font-size: 12px;
          }
        }
      `}</style>
    </footer>
  );
}
