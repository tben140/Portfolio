import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Skills</h1>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Node.js</li>
      <li>Express</li>
      <li>React.js</li>
      <li>React Native</li>
      <li>PostgreSQL</li>
      <li>MongoDB</li>
      <li>Jest</li>
      <li>Mocha</li>
      <li>Chai</li>
    </ul>
    <h1>Projects</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
