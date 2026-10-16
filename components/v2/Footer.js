import Image from "next/image";
import { urlFor } from "../../lib/sanity";

const FALLBACK_STATIC = "/images/v2/computer-drawing-transparent@4x.png";
const FALLBACK_ALT = "Computer illustration";

export default function Footer({ footerLeft }) {
  const alt = footerLeft?.alt || FALLBACK_ALT;
  const staticUrl = footerLeft?.staticImage?.asset
    ? urlFor(footerLeft.staticImage)?.width(216).url()
    : null;
  const gifUrl = footerLeft?.gif?.asset?.url || null;
  const restingSrc = staticUrl || FALLBACK_STATIC;

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-row">
          <div className="footer-left">
            {gifUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={gifUrl}
                alt={alt}
                className="computer-drawing computer-drawing-gif"
              />
            ) : staticUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={restingSrc} alt={alt} className="computer-drawing" />
            ) : (
              <Image
                src={FALLBACK_STATIC}
                alt={alt}
                width={108}
                height={90}
                className="computer-drawing"
              />
            )}
          </div>

          <div className="footer-right">
            <h2 className="footer-headline">
              <img
                src="/images/v2/i-love-the-computer.svg"
                alt="I love the computer"
                className="footer-wordmark"
              />
            </h2>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} TMYTRN LLC</p>
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
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 56px;
          position: relative;
        }

        .footer-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 30px;
        }

        .footer-left {
          flex-shrink: 0;
        }

        .footer-left :global(.computer-drawing) {
          image-rendering: pixelated;
          width: clamp(120px, 7.5vw, 200px);
          height: auto;
          display: block;
        }

        .footer-right {
          text-align: right;
          flex-grow: 1;
        }

        .footer-headline {
          margin: 0;
        }

        .footer-wordmark {
          width: clamp(259px, 71.8vw, 1034px);
          max-width: 100%;
          height: auto;
          display: block;
          margin-left: auto;
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
        }

        @media (max-width: 1024px) {
          .footer-content {
            padding: 0 30px;
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

          .footer-copyright {
            text-align: right;
          }

          .footer-copyright p {
            font-size: 12px;
          }
        }
      `}</style>
    </footer>
  );
}
