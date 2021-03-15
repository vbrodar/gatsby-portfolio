import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import "../styles/main.css"

export default function ProjectDetails() {
  return (
    <Layout>
      <div className="project--details">
        <h2>title</h2>
        <h3>stack</h3>
        {/*<div className="project--details--featured">Image</div> 
        <div className="project--details--html" dangerouslySetInnerHTML={} /> */}
      </div>
    </Layout>
  )
}
