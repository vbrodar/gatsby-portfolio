import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import "../../styles/main.css"
import Img from "gatsby-image"

export default function Projects({ data }) {
  console.log(data)

  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className="projects--portfolio">
        <h2>Portfolio</h2>
        <h3>Projects & Websites i created</h3>
        <div className="projects--projectlist">
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>If you like what you see contact me @ {contact} </p>
      </div>
    </Layout>
  )
}

// Export page query

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
