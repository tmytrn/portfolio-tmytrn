import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition },
};

export default function AboutSection() {
  return (
    <motion.div
      variants={fadeInVariants}
      className="mb5 mb6-ns pb4 bb b--black-10">
      <h2 className="f4 f3-ns fw6 ttu ls1 mb4 mb5-ns">About</h2>
      <div className="flex flex-column flex-row-l">
        {/* Portrait */}
        <div className="w-100 w-30-l pr0 pr4-l mb4 mb0-l">
          <div className="portrait-container">
            <img
              src="/tommy-tran-@tmytrn-website-portrait-2020-by-benjamin-siordia.jpg"
              alt="Tommy Tran portrait"
              className="portrait-image"
            />
            <div className="portrait-credit">
              <p className="f6 f5-l mv1">Griffith Park, 2019</p>
              <p className="f6 f5-l mv1">
                Photo by{" "}
                <a
                  href="https://twitter.com/bensiordia"
                  className="underline color">
                  Benjamin Siordia
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bio text */}
        <div className="w-100 w-70-l pl0 pl4-l">
          <p className="f5 f4-ns lh-copy mb3">
            Tommy Tran is a web designer and developer based in New York. He
            applies his technological skills in creative projects and new
            endeavours.
          </p>
          <p className="f5 f4-ns lh-copy fade">
            I've worked with Public Announcement, Applied Poetics, Benjamin Edgar, 
            Reese Cooper, Urban Jürgensen, RC Outdoor Supply, Jina Valentine, 
            Reginald Sylvester II, Cam Hicks, and Augmented Reality Co.
          </p>
        </div>
      </div>

      <style jsx>
        {`
          .portrait-container {
            position: relative;
          }
          .portrait-image {
            width: 100%;
            height: auto;
            display: block;
          }
          .portrait-credit {
            margin-top: 0.5rem;
          }
          .ls1 {
            letter-spacing: 0.05em;
          }
        `}
      </style>
    </motion.div>
  );
}
