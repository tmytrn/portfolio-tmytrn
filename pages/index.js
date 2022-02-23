import Layout, { siteTitle } from "../components/layout";

import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>…</Head>
      <div className="pv1-l ph2 ph5-l">
        <div className={"w-100 w-75-m  w-60-l mb5 relative head "}>
          <h1 className="f2 f1-l">
            Tommy Tran is a digital designer and developer based in Chicago. He
            holds a B.S. in Computer Science from SFSU. He applies his
            technological skills in creative projects and new endeavours.
          </h1>
        </div>
        <div className={"me w-80 w-60-m w-40-l  el-wrap x"}>
          <div className="el y ">
            <div className="behind">
              <img
                src="/tommy-tran-@tmytrn-website-portrait-2020-by-benjamin-siordia.jpg"
                alt="tommy-tran-@tmytrn-website-portrait-2020-by-benjamin-siordia.jpg"
              ></img>
            </div>
            <div className="tl credit ">
              <p className="f6 f5-l mv1">Griffith Park, 2019</p>
              <p className="f6 f5-l mv1">
                Photo by{" "}
                <a
                  href="https://twitter.com/bensiordia"
                  className="underline color"
                >
                  Benjamin Siordia
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt5">
          <h1 className=" f2 f1-l f-mt0 mv0 db">
            <a
              href="https://www.github.com/tmytrn"
              className=" no-underline white"
            >
              @tmytrn <span className="fade">on github</span>
            </a>
          </h1>
          <h1 className=" f2 f1-l f-mt0 mv0  db">
            <a
              href="https://www.linkedin.com/in/tmytrn"
              className=" no-underline dark-blue"
            >
              @tmytrn <span className="fade">on linkedin</span>
            </a>
          </h1>
          <h1 className=" f2 f1-l f-mt0 mv0  db">
            <a
              href="https://www.instagram.com/tmytrn"
              className=" no-underline light-purple"
            >
              @tmytrn <span className="fade">on ig</span>
            </a>
          </h1>
          <h1 className=" f2 f1-l f-mt0 mv0  db">
            <a
              href="https://www.twitter.com/tmytrn"
              className=" no-underline blue"
            >
              @tmytrn <span className="fade">on twitter</span>
            </a>
          </h1>
          <h1 className=" f2 f1-l f-mt0 mv0  db">
            <a href="mailto:tommy@tmytrn.com" className=" underline red ">
              @tmytrn.com, I respond quick.
            </a>
          </h1>
          <h1 className=" f2 f1-l f-mt0 mv5 db">
            <a
              href="/@tmytrn_CV_2022.pdf"
              className="underline color ph0"
              download
            >
              @tmytrn_CV_2022.pdf
            </a>
          </h1>
        </div>
      </div>
      <style jsx>
        {`
          h1 {
            letter-spacing: -1px;
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
