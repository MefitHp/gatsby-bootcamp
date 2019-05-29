import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
const blog = () => {
  let {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>This is the blog</h1>
      <ol>
        {edges.map((post, index) => {
          let {
            node: {
              frontmatter: { title, date },
            },
          } = post

          return (
            <li key={index}>
              {/* el div */}
              <h2>{title}</h2>
              <p>{date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default blog
