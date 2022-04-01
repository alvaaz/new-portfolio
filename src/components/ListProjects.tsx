import React from 'react'
import { ProjectProps } from '../types'
import { Link } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

export function ListProjects({ projects }: { projects: ProjectProps }) {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 items-start">
      {projects.map((project) => {
        const image = getImage(project.frontmatter.featuredImage)
        const title = project.frontmatter.title || project.fields.slug
        const { excerpt, color } = project.frontmatter
        return (
          <Link
            to={`/portfolio${project.fields.slug}`}
            className={`mb-10 lg:mb-0 lg:w-4/12 cursor-pointer transform transition ease-in-out duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl ${color}`}
            key={project.fields.slug}
          >
            <article className="p-8 sm:p-10 rounded-2xl flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-start">
              <div className="mb-8 sm:mb-0 basis-auto sm:basis-1/2 lg:basis-auto">
                <h5 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mb-4">
                  {title}
                </h5>
                <p className="text-white text-lg md:text-xl mb-0 lg:mb-12">
                  {excerpt}
                </p>
              </div>
              <GatsbyImage
                className="basis-auto sm:basis-1/2 lg:basis-auto"
                image={image as IGatsbyImageData}
                alt={title}
              />
            </article>
          </Link>
        )
      })}
    </div>
  )
}
