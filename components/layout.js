import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";

const name = "Tommy Tran";
export const siteTitle = "Tommy Tran";

export default function Layout({
  children,
  home,
  portfolioHome,
  portfolioProject,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="Tommy Tran" />
        <meta
          name="description"
          content="Tommy Tran is a digital designer and developer based in Los Angeles.
    He holds a B.S. in Computer Science from SFSU. He believes that great
    design tells a story, and should feel effortless."
        />
        <meta property="og:url" content="https://tmytrn.com" />
        <meta
          property="og:image"
          content="https://tmytrn.com/tommy-tran-@tmytrn-website-portrait-2020-by-benjamin-siordia.jpg"
        />
        <meta
          property="og:description"
          content="Tommy Tran is a digital designer and developer based in Los Angeles.
    He holds a B.S. in Computer Science from SFSU. He believes that great
    design tells a story, and should feel effortless."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Tommy Tran" />
        <meta name="twitter:site" content="@tmytrn" />
        <meta
          name="twitter:image"
          content="https://tmytrn.com/tommy-tran-@tmytrn-website-portrait-2020-by-benjamin-siordia.jpg"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
        />
        <script
          async
          src="https://www.google-analytics.com/analytics.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
            ga('create', 'UA-165303040-1', 'auto');
            ga('send', 'pageview');
              `,
          }}
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <style jsx global>
              {`
                body {
                  background: conic-gradient(
                    from 171.43deg at 102.91% 103.54%,
                    #bebfd1 -144.38deg,
                    #ffdec3 11.25deg,
                    #bebfd1 215.62deg,
                    #ffdec3 371.25deg
                  );
                }
              `}
            </style>
          </>
        ) : (
          <></>
        )}
        {portfolioHome ? (
          <div>
            <div className="mw9 center ph3 ph5-ns">
              <h1 className="f5 f4-ns tl">Tommy Tran</h1>
            </div>
            <style jsx global>
              {`
                body {
                  background-color: #fffefa;
                }
              `}
            </style>
          </div>
        ) : (
          <></>
        )}
        {portfolioProject ? (
          <div>
            <div className="z-1 mw8 center ph2 ph4-ns absolute">
              <Link href="/portfolio">
                <a className="link underline color">
                  <h1 className="f5 f4-ns tl">Tommy Tran—Portfolio</h1>
                </a>
              </Link>
            </div>
            <style jsx global>
              {`
                body {
                  background-color: #f4f4f4;
                }
              `}
            </style>
          </div>
        ) : (
          <></>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
