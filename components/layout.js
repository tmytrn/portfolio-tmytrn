import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

const name = 'Tommy Tran'
export const siteTitle = 'Tommy Tran'

export default function Layout({ children, home, portfolioHome, portfolioProject }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="Tommy Tran" />
        <meta name="description" content="Tommy Tran is a digital designer and developer based in Los Angeles.
    He holds a B.S. in Computer Science from SFSU. He believes that great
    design tells a story, and should feel effortless."/>
        <meta property="og:url" content="https://tmytrn.com" />
        <meta property="og:image" content="https://tmytrn.com/images/tommy-tran-@tmytrn-website-portrait-2020-by-benjamin-siordia.jpg" />
        <meta property="og:description" content="Tommy Tran is a digital designer and developer based in Los Angeles.
    He holds a B.S. in Computer Science from SFSU. He believes that great
    design tells a story, and should feel effortless."/>
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Tommy Tran" />
        <meta name="twitter:site" content="@tmytrn" />
        <meta name="twitter:image" content="https://tmytrn.com/images/tommy-tran-@tmytrn-website-portrait-2020-by-benjamin-siordia.jpg" />
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css" />
        <script async src='https://www.google-analytics.com/analytics.js'></script>
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
        {(home) ? (
          <>
            <style jsx global>
              {`body {
                 background-color: rgb(190, 191, 210);
              }`
              }</style>
          </>
        ) : (
            <>
            </>
          )}
        {(portfolioHome) ? (
          <div>
            <div className="mw9 center ph3 ph5-ns">
              <h1 className="f5 f4-ns tl">Tommy Tran</h1>
            </div>
            <style jsx global>
              {`body {
                  background-color: #fffefa;
                  }
                `
              }
            </style>
          </div>
        ) : (
            <></>
          )}
        {(portfolioProject) ? (
          <div>
            <div className="mw9 center ph2 ph4-ns absolute">
              <Link href="/portfolio">
                <a className="link underline color">
                  <h1 className="f5 f4-ns tl">Tommy Tran—Portfolio</h1>
                </a>
              </Link>
            </div>
            <style jsx global>
              {`body {
              background-color: #f4f4f4;
                                
            }`
              }</style>
          </div>

        ) : (
            <></>
          )
        }
      </header>
      <main>{children}</main>
    </div >
  )
}