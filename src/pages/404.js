import React from "react"
import { graphql } from "gatsby"
import { SEO } from "../components"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div className="text-center">
      <SEO title="Algo paso..." />
      <h1>Oops! esta página no tengo</h1>
      <p className="text-2xl">Quizás te gustaría ver alguno de mis videos 🙂</p>
      <iframe className="inline-block" width="560" height="315" src="https://www.youtube.com/embed/sF3ffrCyt64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
