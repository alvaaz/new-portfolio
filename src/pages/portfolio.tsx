import React from 'react'
import { SEO } from '../components'
import { graphql } from 'gatsby'
import { ProjectProps } from '../types'

const Blog = ({ data }: { data: { projects: { nodes: ProjectProps } } }) => {
  return (
    <>
      <SEO title="All projects" />
      <div className="mb-16">
        <h4 className="text-3xl sm:text-4xl font-medium mb-12 text-yellow-600">
          Portfolio
        </h4>
        <p className="text-xl sm:text-3x font-semibold dark:text-white sm:w-8/12">
          With Visual Look Up, you can quickly learn more about art, landmarks,
          nature, books, and pets simply by tapping a photo on your device or on
          the web.
        </p>
      </div>
      <section className="grid grid-cols-8 sm:grid-cols-12 gap-8">
        {data.projects.nodes.map((project) => (
          <article
            className="cursor-pointer transform transition ease-in-out duration-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl p-10 text-xl sm:text-2xl col-span-full sm:col-span-4"
            key={project.id}
          >
            <p className="text-yellow-600 mb-4 font-medium">
              {project.frontmatter.title}
            </p>
            <p className="dark:text-white">{project.frontmatter.excerpt}</p>
          </article>
        ))}
      </section>
    </>
  )
}

export default Blog

export const query = graphql`
  query PortfolioQuery {
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      filter: { fileAbsolutePath: { regex: "/content/portfolio/" } }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          excerpt
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                transformOptions: { cropFocus: CENTER, fit: CONTAIN }
                backgroundColor: "transparent"
              )
            }
          }
        }
      }
    }
  }
`
