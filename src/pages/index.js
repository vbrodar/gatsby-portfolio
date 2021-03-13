import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import "../styles/main.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className="header--home">
        <div>
          <h2>Design</h2>
          <h3>
            Develop <span className="header--home--span">&</span> Deploy
          </h3>
          <p>UX Designer & Web Developer based in Croatia.</p>
          <Link className="btn" to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <StaticImage
          src="../images/pic1.png"
          className="header--home--avatar"
          alt="Home Background Avatar"
        />
      </section>
    </Layout>
  )
}

/* Graphql query */
export const query = graphql`
  query Banner {
    file(relativePath: { eq: "pic1.png" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          sizes
        }
      }
    }
  }
`

// GatsbyImageSharpFluid includes src,srcset and sizes inside (fragment)
