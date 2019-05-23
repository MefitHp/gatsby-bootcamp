import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      Wsup fuckerssss!! Need smt? <br />
      <Link to="/contact">Contact me</Link>
      <br />
      <a href="https://facebook.com/" rel="noopener noreferrer" target="_blank">
        Facebook
      </a>
      <br />
    </Layout>
  )
}

export default IndexPage
