import Layout, { siteTitle } from "../components/layout";

import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>…</Head>
      <div className="pv1-l ph2 ph5-l">
        <div className={"w-100 w-75-m w-60-l w-50-xl mb5 relative head "}>
          <h1 className="f2 f1-l">
            Tommy Tran is a digital designer and developer based in New York. He
            applies his technological skills in creative projects and new
            endeavours.
          </h1>
        </div>
        <div className={"me w-80 w-60-m w-40-l  el-wrap x"}>
          <div className="el y ">
            <div className="behind">
              <img
                src="/tommy-tran-@tmytrn-website-portrait-2020-by-benjamin-siordia.jpg"
                alt="tommy-tran-@tmytrn-website-portrait-2020-by-benjamin-siordia.jpg"></img>
            </div>
            <div className="tl credit ">
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
        <div className="flex flex-column flex-column-l justify-between mb5 items-start ">
          <div className="mt5 tl tl-l fw6 ls1 relative">
            <div className="ttu f5 f4-l">Select Clients</div>
            <ul className="list lh-copy pl0 f5 f4-l mb0">
              <li>
                <a
                  href="https://publicannouncement.org"
                  className="no-underline">
                  Public Announcement
                </a>
              </li>
              <li>
                <a href="https://collect.nyc" className="no-underline">
                  Collect NYC
                </a>
              </li>
              <li>
                <a href="https://benjaminedgar.com" className="no-underline">
                  Benjamin Edgar
                </a>
              </li>
              <li>
                <a href="https://reese-cooper.com" className="no-underline">
                  Reese Cooper
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/jina.valentine/"
                  className="no-underline">
                  Jina Valentine
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/reginaldsylvester2"
                  className="no-underline">
                  Reginald Sylvester II
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/camhicks_/"
                  className="no-underline">
                  Cam Hicks
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/augmentedrealityco/"
                  className="no-underline">
                  Augmented Reality Co
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/thunkwork/"
                  className="no-underline">
                  THUNK
                </a>
              </li>
            </ul>
          </div>
          <div className="mt5">
            <h1 className=" f2 f1-l f-mt0 mv0 db">
              <a
                href="https://www.github.com/tmytrn"
                className=" no-underline white pointer:hover">
                @tmytrn <span className="fade">on github</span>
              </a>
            </h1>
            <h1 className=" f2 f1-l f-mt0 mv0  db">
              <a
                href="https://www.linkedin.com/in/tmytrn"
                className=" no-underline dark-blue pointer:hover">
                @tmytrn <span className="fade">on linkedin</span>
              </a>
            </h1>
            <h1 className=" f2 f1-l f-mt0 mv0  db">
              <a
                href="https://www.instagram.com/tmytrn"
                className=" no-underline light-purple pointer:hover">
                @tmytrn <span className="fade">on ig</span>
              </a>
            </h1>
            <h1 className=" f2 f1-l f-mt0 mv0  db">
              <a
                href="https://www.twitter.com/tmytrn"
                className=" no-underline blue pointer:hover">
                @tmytrn <span className="fade">on twitter</span>
              </a>
            </h1>
            <h1 className=" f2 f1-l f-mt0 mv0  db">
              <a
                href="mailto:tommy@tmytrn.com"
                className=" underline red  pointer:hover">
                @tmytrn.com, I respond quick.
              </a>
            </h1>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          h1 {
            letter-spacing: -1px;
          }
          @media screen and (min-widith: 1020px) {
            .ls1 {
              letter-spacing: -1px;
            }
          }
          .mtn {
            margin-top: -25%;
          }
        `}
      </style>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
