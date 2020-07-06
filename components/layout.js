import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Tommy Tran'
export const siteTitle = 'Tommy Tran'

export default function Layout({ children, home }) {
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
        <meta name="twitter:site" content="@tmytrn"/>
          <meta name="twitter:image" content="https://tmytrn.com/images/tommy-tran-@tmytrn-website-portrait-2020-by-benjamin-siordia.jpg" />
          <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css" />

      </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <style jsx global>
                {`body {
                 background-color: rgb(190, 191, 210);
              }`
                }</style>
            </>
          ) : (
              <>
                <Link href="/">
                  <a>
                    <img
                      src="/images/profile.jpg"
                      className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                      alt={name}
                    />
                  </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href="/">
                    <a className={utilStyles.colorInherit}>{name}</a>
                  </Link>
                </h2>
              </>
            )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
    </div>
  )
}