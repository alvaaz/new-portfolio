import React from 'react'
import { SEO } from '../components'
import { graphql, Link } from 'gatsby'
import { ProjectProps } from '../types'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

const Blog = ({ data }: { data: { projects: { nodes: ProjectProps } } }) => {
  const projects = data.projects.nodes.map((project) => {
    const image = getImage(project.frontmatter.featuredImage)
    const title = project.frontmatter.title || project.fields.slug

    return (
      <Link
        to={`/portfolio${project.fields.slug}`}
        className="cursor-pointer transform transition ease-in-out duration-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 text-xl sm:text-2xl col-span-full md:col-span-12 lg:col-span-4"
        key={project.fields.slug}
      >
        <article
          className="flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-start"
          key={project.id}
        >
          <div className="basis-auto sm:basis-1/2 lg:basis-auto">
            <h6 className="text-gray-900 dark:text-white mb-4 font-medium">
              {project.frontmatter.title}
            </h6>
            <p className="dark:text-gray-400">{project.frontmatter.excerpt}</p>
          </div>
          <GatsbyImage
            className="basis-auto sm:basis-1/2 lg:basis-auto"
            image={image as IGatsbyImageData}
            alt={title}
          />
        </article>
      </Link>
    )
  })

  return (
    <>
      <SEO title="All projects" />
      <div className="mb-16">
        <h4 className="text-3xl sm:text-4xl font-semibold mb-8 text-gray-800 dark:text-white">
          Portfolio
        </h4>
        <p className="text-xl sm:text-3xl font-semibold text-gray-500 dark:text-gray-400 sm:w-8/12">
          Here you can find some of my works. If you want to see more, you can
          go to my <a href="https://goede.cl/github">Github</a>
        </p>
      </div>
      <section className="grid grid-cols-8 sm:grid-cols-12 gap-8 items-start">
        {projects}
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
