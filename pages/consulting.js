import Head from "next/head";
import Layout from "../components/layout";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition },
};

export default function Consulting() {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Layout>
        <Head>
          <title>Web Consulting — Tommy Tran</title>
          <meta
            name="description"
            content="Web consulting for brands that need a sharp technical partner. Design direction, builds, audits, and ongoing help — without hiring a full team."
          />
        </Head>

        <style jsx global>
          {`
            body {
              background-color: #fffefa;
            }
          `}
        </style>

        <div className="center ph3 ph4-ns pv4 pv5-ns">
          {/* Hero Section */}
          <motion.div variants={fadeInVariants} className="mb5 mb6-ns mw8 center">
            <h1 className="f-hero fw6 lh-solid mb4">
              Web consulting for brands that need a sharp technical partner.
            </h1>
            <p className="f3 f2-ns lh-copy mb4 mb5-ns measure-wide">
              Design direction, builds, audits, and ongoing help — without hiring
              a full team.
            </p>
            <a
              href="https://calendly.com/tommy-tmytrn/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="f5 f4-ns fw6 link color no-underline pv3 ph4 dib cta-button">
              Book a scoping call →
            </a>
          </motion.div>

          {/* Split two-column section */}
          <div className="mw9 center">
            <div className="flex flex-column flex-row-l mb5 mb6-ns">
              {/* Who it's for */}
              <motion.div
                variants={fadeInVariants}
                className="w-100 w-50-l pr0 pr4-l mb5 mb0-l pb4 pb0-l bb bn-l b--black-10">
                <h2 className="f4 f3-ns fw6 ttu ls1 mb4">Who it's for</h2>
                <ul className="list pl0 f5 f4-ns lh-copy">
                  <li className="mb3">
                    Founders needing a second brain on web and Shopify strategy
                  </li>
                  <li className="mb3">
                    Teams stuck mid-rebuild, migration, or vendor handoff
                  </li>
                  <li className="mb3">
                    Brands wanting senior help by the hour, not a full team
                  </li>
                </ul>
              </motion.div>

              {/* What you get */}
              <motion.div
                variants={fadeInVariants}
                className="w-100 w-50-l pl0 pl4-l pb4 bb b--black-10">
                <h2 className="f4 f3-ns fw6 ttu ls1 mb4">What you get</h2>
                <ul className="list pl0 f5 f4-ns lh-copy">
                  <li className="mb3">
                    Scoping, architecture, and vendor selection advice
                  </li>
                  <li className="mb3">
                    Hands-on help with themes, Next.js, Shopify, or marketing sites
                  </li>
                  <li className="mb3">
                    Performance, UX, and conversion reviews
                  </li>
                  <li className="mb3">
                    Optional: ongoing retainers for steady support
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Proof */}
          <motion.div
            variants={fadeInVariants}
            className="mb5 mb6-ns pb4 bb b--black-10 mw9 center">
            <h2 className="f4 f3-ns fw6 ttu ls1 mb4 mb5-ns">Proof</h2>
            
            {/* First row - 3 items */}
            <div className="flex flex-column flex-row-l justify-between mb4 mb5-l">
              {/* Urban Jürgensen */}
              <div className="w-100 w-30-l mb4 mb0-l">
                <a
                  href="https://urbanjurgensen.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="db link">
                  <div className="browser-window urban-vibe">
                    <div className="browser-chrome">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                    <img
                      src="/images/proof-screenshots/urban-jurgensen.jpg"
                      alt="Urban Jürgensen homepage"
                      className="browser-screenshot"
                    />
                  </div>
                </a>
                <h3 className="f5 f4-ns fw6 mt3 mb2">Urban Jürgensen</h3>
                <p className="f6 f5-ns lh-copy fade ma0">
                  Swiss watchmaker e-commerce and brand site
                </p>
              </div>

              {/* scroll.nyc */}
              <div className="w-100 w-30-l mb4 mb0-l">
                <a
                  href="https://www.scroll.nyc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="db link">
                  <div className="browser-window scroll-vibe">
                    <div className="browser-chrome">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                    <img
                      src="/images/proof-screenshots/scroll-nyc.jpg"
                      alt="Scroll NYC homepage"
                      className="browser-screenshot"
                    />
                  </div>
                </a>
                <h3 className="f5 f4-ns fw6 mt3 mb2">scroll.nyc</h3>
                <p className="f6 f5-ns lh-copy fade ma0">
                  NYC gallery website and exhibition platform
                </p>
              </div>

              {/* Willis Tower */}
              <div className="w-100 w-30-l mb4 mb0-l">
                <a
                  href="https://willistower.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="db link">
                  <div className="browser-window willis-vibe">
                    <div className="browser-chrome">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                    <img
                      src="/images/proof-screenshots/willis-tower.jpg"
                      alt="Willis Tower homepage"
                      className="browser-screenshot"
                    />
                  </div>
                </a>
                <h3 className="f5 f4-ns fw6 mt3 mb2">Willis Tower</h3>
                <p className="f6 f5-ns lh-copy fade ma0">
                  Chicago icon reimagined for modern tenants
                </p>
              </div>
            </div>

            {/* Second row - 2 items centered */}
            <div className="flex flex-column flex-row-l justify-center items-start">
              {/* First Rodeo */}
              <div className="w-100 w-30-l mb4 mb0-l mr0 mr4-l">
                <a
                  href="https://firstrodeo.agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="db link">
                  <div className="browser-window rodeo-vibe">
                    <div className="browser-chrome">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                    <img
                      src="/images/proof-screenshots/first-rodeo.jpg"
                      alt="First Rodeo homepage"
                      className="browser-screenshot"
                    />
                  </div>
                </a>
                <h3 className="f5 f4-ns fw6 mt3 mb2">First Rodeo</h3>
                <p className="f6 f5-ns lh-copy fade ma0">
                  Advertising agency brand and portfolio site
                </p>
              </div>

              {/* Megan Noelle Low */}
              <div className="w-100 w-30-l mb4 mb0-l">
                <a
                  href="https://www.megannoellelow.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="db link">
                  <div className="browser-window megan-vibe">
                    <div className="browser-chrome">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                    <img
                      src="/images/proof-screenshots/megan-noelle-low.jpg"
                      alt="Megan Noelle Low homepage"
                      className="browser-screenshot"
                    />
                  </div>
                </a>
                <h3 className="f5 f4-ns fw6 mt3 mb2">Megan Noelle Low</h3>
                <p className="f6 f5-ns lh-copy fade ma0">
                  Interior design portfolio and project showcase
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mw9 center">
            <div className="flex flex-column flex-row-l mb5 mb6-ns">
              {/* How it works */}
              <motion.div
                variants={fadeInVariants}
                className="w-100 w-50-l pr0 pr4-l mb5 mb0-l pb4 pb0-l bb bn-l b--black-10">
                <h2 className="f4 f3-ns fw6 ttu ls1 mb4">How it works</h2>
                <ol className="list pl0 f5 f4-ns lh-copy">
                  <li className="mb3">
                    <span className="fw6">1.</span> Scoping call (20–30 min)
                  </li>
                  <li className="mb3">
                    <span className="fw6">2.</span> Recommendation + estimate
                  </li>
                  <li className="mb3">
                    <span className="fw6">3.</span> Hands-on or advisory work
                  </li>
                  <li className="mb3">
                    <span className="fw6">4.</span> Handoff or ongoing retainer
                  </li>
                </ol>
              </motion.div>

              {/* Pricing */}
              <motion.div
                variants={fadeInVariants}
                className="w-100 w-50-l pl0 pl4-l pb4 bb b--black-10">
                <h2 className="f4 f3-ns fw6 ttu ls1 mb4">Pricing</h2>
                <div>
                  <p className="f5 f4-ns lh-copy mb2">Consulting from $80/hr</p>
                  <p className="f5 f4-ns lh-copy mb2">
                    Short projects and retainers available
                  </p>
                  <p className="f6 f5-ns lh-copy fade mt3">
                    Exact scope determined on the call. Larger builds scoped
                    separately.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Final CTA */}
          <motion.div variants={fadeInVariants} className="tc mt5 mt6-ns mw8 center">
            <h2 className="f3 f2-ns fw6 lh-title mb4">
              Ready to move forward with the right technical partner?
            </h2>
            <a
              href="https://calendly.com/tommy-tmytrn/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="f5 f4-ns fw6 link color no-underline pv3 ph4 dib mb3 cta-button">
              Book a scoping call →
            </a>
            <p className="f6 f5-ns mt3">
              Or email{" "}
              <a href="mailto:tommy@tmytrn.com" className="link underline color">
                tommy@tmytrn.com
              </a>
            </p>
          </motion.div>
        </div>

        <style jsx>
          {`
            h1 {
              letter-spacing: -1px;
            }
            h2 {
              letter-spacing: -0.5px;
            }
            .ls1 {
              letter-spacing: 0.05em;
            }
            .f-hero {
              font-size: 2.5rem;
            }
            @media screen and (min-width: 60em) {
              .f-hero {
                font-size: 4rem;
                letter-spacing: -2px;
              }
            }
            .cta-button {
              background-color: white;
              border: 1px solid #20215b;
            }
            .cta-button:hover {
              background-color: #20215b;
              color: white;
            }
            .browser-window {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              border-radius: 8px;
              padding: 2rem 1.5rem 1.5rem;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .browser-window:hover {
              transform: translateY(-4px);
              box-shadow: 0 24px 70px rgba(0, 0, 0, 0.2);
            }
            .browser-window.urban-vibe {
              background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            }
            .browser-window.scroll-vibe {
              background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
            }
            .browser-window.willis-vibe {
              background: linear-gradient(135deg, #0f4c81 0%, #1b5a8f 100%);
            }
            .browser-window.rodeo-vibe {
              background: linear-gradient(135deg, #2d1b00 0%, #8b4513 100%);
            }
            .browser-window.megan-vibe {
              background: linear-gradient(135deg, #f4e8d8 0%, #d4c4b0 100%);
            }
            .browser-chrome {
              position: relative;
              display: flex;
              gap: 6px;
              margin-bottom: 12px;
            }
            .dot {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.3);
            }
            .browser-screenshot {
              width: 100%;
              height: auto;
              border-radius: 4px;
              display: block;
            }
          `}
        </style>
      </Layout>
    </motion.div>
  );
}
