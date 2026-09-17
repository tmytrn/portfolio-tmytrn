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

        <div className="mw8 center ph3 ph4-ns pv4 pv5-ns">
          {/* Hero Section */}
          <motion.div variants={fadeInVariants} className="mb5 mb6-ns">
            <h1 className="f2 f1-l fw6 lh-title mb3 mb4-ns">
              Web consulting for brands that need a sharp technical partner.
            </h1>
            <p className="f4 f3-ns lh-copy mb4 measure-wide">
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
            <p className="f6 f5-ns mt4 fade">
              Selected work with Reese Cooper, Benjamin Edgar, Urban Jürgensen,
              and others.
            </p>
          </motion.div>

          {/* Who it's for */}
          <motion.div
            variants={fadeInVariants}
            className="mb5 mb6-ns pb4 bb b--black-10">
            <h2 className="f4 f3-ns fw6 ttu ls1 mb4">Who it's for</h2>
            <ul className="list pl0 f5 f4-ns lh-copy measure-wide">
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
            className="mb5 mb6-ns pb4 bb b--black-10">
            <h2 className="f4 f3-ns fw6 ttu ls1 mb4">What you get</h2>
            <ul className="list pl0 f5 f4-ns lh-copy measure-wide">
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

          {/* Proof */}
          <motion.div
            variants={fadeInVariants}
            className="mb5 mb6-ns pb4 bb b--black-10">
            <h2 className="f4 f3-ns fw6 ttu ls1 mb4">Proof</h2>
            <div className="measure-wide">
              <div className="mb4">
                <h3 className="f5 f4-ns fw6 mb2">
                  <a
                    href="https://reese-cooper.com"
                    className="link color underline">
                    Reese Cooper
                  </a>
                </h3>
                <p className="f6 f5-ns lh-copy fade">
                  Custom Shopify theme for LA-based outdoor brand. Clean
                  product grids, custom cart, mobile-optimized checkout.
                </p>
              </div>
              <div className="mb4">
                <h3 className="f5 f4-ns fw6 mb2">
                  <a
                    href="https://benjaminedgar.com"
                    className="link color underline">
                    Benjamin Edgar
                  </a>
                </h3>
                <p className="f6 f5-ns lh-copy fade">
                  Portfolio and e-commerce site for jewelry designer. Custom
                  build with Shopify integration.
                </p>
              </div>
              <div className="mb4">
                <h3 className="f5 f4-ns fw6 mb2">
                  <a
                    href="https://rcoutdoorsupply.com"
                    className="link color underline">
                    RC Outdoor Supply
                  </a>
                </h3>
                <p className="f6 f5-ns lh-copy fade">
                  Custom Shopify storefront with editorial layouts and seamless
                  product presentation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* How it works */}
          <motion.div
            variants={fadeInVariants}
            className="mb5 mb6-ns pb4 bb b--black-10">
            <h2 className="f4 f3-ns fw6 ttu ls1 mb4">How it works</h2>
            <ol className="list pl0 f5 f4-ns lh-copy measure-wide">
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
            className="mb5 mb6-ns pb4 bb b--black-10">
            <h2 className="f4 f3-ns fw6 ttu ls1 mb4">Pricing</h2>
            <div className="measure-wide">
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

          {/* Final CTA */}
          <motion.div variants={fadeInVariants} className="tc tl-ns mt5 mt6-ns">
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
            .cta-button {
              background-color: white;
              border: 1px solid #20215b;
            }
            .cta-button:hover {
              background-color: #20215b;
              color: white;
            }
          `}
        </style>
      </Layout>
    </motion.div>
  );
}
