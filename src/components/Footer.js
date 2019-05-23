import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  let data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  let { author } = data && data.site.siteMetadata
  return (
    <p>
      Created by <i>{author}</i>, {new Date().getFullYear()}.
    </p>
  )
}

export default Footer
