import Head from 'next/head'
import Layout from '../../components/layout'
import { getSortedProjectData } from '../../lib/projects'
import Link from 'next/link'

export default function Portfolio({ allProjectData }) {
  return (
    <Layout portfolioHome>
      <Head></Head>
      <div className="mw8 center ph3-ns">
        <div className="cf ph2-ns">
          {allProjectData.map(({ id, date, title, description, role, image }) => (
            <div className="fl w-100 w-50-ns pa2" key={id}>
              <img src={image}></img>
              <h6 className="mv2 fw4">{role}</h6>
              <Link href="/portfolio/[id]" as={`/portfolio/${id}`}>
              <a className="link color"><h1 className="f4 f3-ns mv0">{title}</h1></a>
              </Link>
              <p>{description}</p>
            </div>

          ))}


        </div>
      </div>
    </Layout>

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