import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import "../styles/main.css"
import { graphql } from "gatsby"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className="project--details">
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className="project--details--featured">
          <GatsbyImage
            image={featuredImg.childImageSharp.gatsbyImageData}
            alt="Details Image"
          />
        </div>
        <div
          className="project--details--html"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 500)
          }
        }
      }
    }
  }
`
