import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getSortedProjectData } from '../../lib/projects'
import Link from 'next/link'
import { motion } from 'framer-motion'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0},
  animate: { scale: 1, opacity: 1 , transition},

}

export default function Portfolio({ allProjectData }) {

  return (
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' >
      <Layout portfolioHome>
        <Head></Head>

        <div className="mw9 center ph3 ph5-ns">
          <div class="cf">
            <motion.div
               variants={thumbnailVariants}>
              {allProjectData.map(({ id, date, title, description, role, image }) => (
                <div className="fl w-100 w-50-ns pr3 project grow hide-child" key={id}>
                  <Link href="/portfolio/[id]" as={`/portfolio/${id}`}><a>
                    <motion.img className="w-100" src={image} transition={transition}></motion.img>
                    </a></Link>
                  <div className="absolute left-1 bottom-1 bg-white outline color pa2 child">
                    <Link href="/portfolio/[id]" as={`/portfolio/${id}`}>
                      <a className="link color underline">
                        <h1 className="f5 f4-ns  mv0">
                          {title}
                          <Date dateString={date}></Date>
                        </h1></a>
                    </Link>
                    <h6 className="mv2 fw4 f6">{role}</h6>
                  </div>
                </div>

              ))}
            </motion.div>
          </div>
        </div>

      </Layout>
    </motion.div >

  )
}
export async function getStaticProps() {
  const allProjectData = getSortedProjectData()
  return {
    props: {
      allProjectData
    }
  }
}