import React from 'react'
import { ProjectProps } from '../types'
import { Link } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

export function ListProjects({ projects }: { projects: ProjectProps }) {
  return (
    <>
      {projects.map((project) => {
        const image = getImage(project.frontmatter.featuredImage)
        const title = project.frontmatter.title || project.fields.slug
        return (
          <Link
            to={`/portfolio${project.fields.slug}`}
            className="mb-10 sm:mb-0 sm:w-4/12 cursor-pointer transform transition ease-in-out duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl"
            key={project.fields.slug}
          >
            <article className="bg-blue-700 p-8 sm:p-10 rounded-2xl">
              <h5 className="font-semibold text-3xl sm:text-4xl text-white mb-4">
                {title}
              </h5>
              <p className="text-white text-xl sm:text-2xl mb-8 sm:mb-12">
                Mining case tracking software.
              </p>
              <GatsbyImage
                image={image as IGatsbyImageData}
                alt={project.frontmatter.title}
              />
            </article>
          </Link>
        )
      })}
    </>
  )
}
