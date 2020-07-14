import Head from 'next/head'
import Layout from '../../components/layout'
import Link from 'next/link'

export default function CB({ allProjectData }) {
    const hero = {
        backgroundImage: "url(/CB_Hero.png)",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
    }
    return (
        <Layout portfolioProject>
            <Head></Head>
            <div className="vh-75 cover bg-center" style={hero}>
            </div>
            <div className="w-100 center ph3 ph4-m ph5-l">
                <div className="f4 f2-ns measure w-100 pb5">
                    <h1 className="fw6 f2 mb-ns mt3-l fl w-100">Chorizo Burrito</h1>
                    <p className="db lh-copy mv0 f5 f4-m f3-l measure">
                        Chorizo Burrito is a general interest blog. Inspired by <a href="http://publicannouncement.org" className="link b color underline">publicannouncement.org</a>,
                it shares a selection of carefully considered articles and images. Content is updated through twitter, the easiest and most simple form of CMS. 
                <a href="https://github.com/tmytrn/Chorizo-Burrito" className="link color b underline"> See GitHub. </a>
                    </p>
                </div>
                <div className="tc">
                    <h1 className="f2">
                        <a href="http://chorizoburrito.org" className="link color underline">
                            Enter ChorizoBurrito.org
                </a>
                    </h1>
                </div>
                </div>
        </Layout>

  )
}