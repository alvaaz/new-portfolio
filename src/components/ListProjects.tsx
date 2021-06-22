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
        const excerpt = project.frontmatter.excerpt
        const color = project.frontmatter.color
        return (
          <Link
            to={`/portfolio${project.fields.slug}`}
            className={`mb-10 lg:mb-0 lg:w-4/12 cursor-pointer transform transition ease-in-out duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl ${color}`}
            key={project.fields.slug}
          >
            <article className="p-8 sm:p-10 rounded-2xl flex flex-col sm:flex-row lg:flex-col md:space-x-4">
              <div>
                <h5 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-4">
                  {title}
                </h5>
                <p className="text-white text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12">
                  {excerpt}
                </p>
              </div>
              <GatsbyImage
                className="sm:w-1/2 lg:w-auto"
                image={image as IGatsbyImageData}
                alt={title}
              />
            </article>
          </Link>
        )
      })}
    </>
  )
}
