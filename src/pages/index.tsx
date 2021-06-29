import React from 'react'
import { External } from '../components/icons'
import { Button, SEO, ListProjects, ListArticles } from '../components'
import { graphql } from 'gatsby'
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  StaticImage,
} from 'gatsby-plugin-image'
import { ProjectsProps } from '../types'

export default function index({ data }: { data: ProjectsProps }) {
  const videosNodes = data.videos.nodes

  const posts = data.posts.nodes
  const projects = data.projects.nodes

  if (projects.length === 0) {
    return (
      <p>
        No projects found. Add markdown posts to "content/blog" (or the
        directory you specified for the "gatsby-source-filesystem" plugin in
        gatsby-config.js).
      </p>
    )
  }

  if (posts.length === 0) {
    return (
      <p>
        No blog posts found. Add markdown posts to "content/blog" (or the
        directory you specified for the "gatsby-source-filesystem" plugin in
        gatsby-config.js).
      </p>
    )
  }

  const postsGroups = [
    posts.filter((_, i) => !(i % 2)),
    posts.filter((_, i) => i % 2),
  ]

  const videos = videosNodes.map((video) => {
    const image = getImage(video.image)
    return (
      <a
        className="mb-8 lg:mb-0 lg:w-4/12 cursor-pointer transform bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition ease-in-out duration-300 rounded-2xl p-4"
        key={video.snippet.resourceId.videoId}
        href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
      >
        <GatsbyImage
          /* z-index 0 is required to apply border-radius https://stackoverflow.com/a/64885552 */
          className="rounded-lg mb-4 w-full z-0"
          image={image as IGatsbyImageData}
          alt={video.snippet.title}
        />

        <h6 className="font-semibold text-xl sm:text-2xl mb-4 dark:text-white">
          {video.snippet.title}
        </h6>
        <p className="text-gray-400 text-base sm:text-xl mb-0">
          {video.snippet.publishedAt}
        </p>
      </a>
    )
  })

  return (
    <>
      <SEO title="👋" />
      <div className="hero mb-32 sm:mb-48">
        <div className="flex justify-between flex-col lg:flex-row">
          <p className="mb-12 sm:mb-16 leading-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-relaxed dark:text-white">
            <span className="font-semibold">Diseñador de productos digitales</span>{' '}
            <br />y<span className="font-semibold"> desarrollador frontend</span>
            <br /> viviendo en Viña del mar, Chile
          </p>
          <StaticImage
            className="order-first lg:order-none mb-8 lg:mb-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-auto xl:h-auto"
            imgClassName="rounded-lg overflow-hidden"
            src="./../../static/alvaro.png"
            alt="Álvaro Goede"
            placeholder="blurred"
            width={407}
            height={406}
          />
        </div>
        <div className="flex flex-wrap items-start">
          <a
            className="px-6 py-3 sm:py-4 border sm:border-2 border-transparent bg-black dark:bg-white text-white dark:text-black rounded-lg mr-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:bg-gray-800 transition ease-in-out duration-300 mb-4 sm:mb-0"
            target="_blank"
            href={'/resume.pdf'}
          >
            Descargar CV
          </a>
          <a
            className="px-6 py-3 sm:py-4 border sm:border-2 border-black dark:border-white dark:text-white rounded-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:bg-gray-100 dark:hover:bg-gray-900 transition ease-in-out duration-300"
            href="https://www.youtube.com/channel/UCvMg7whAhSHpoL04E96fe5Q"
            target="_blank"
          >
            Canal de Youtube
          </a>
        </div>
      </div>
      <main>
        <section className="mb-16 sm:mb-40">
          <div className="flex justify-between items-center mb-8 lg:mb-12">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-medium dark:text-white mb-0">
              Últimos proyectos
            </h4>
            <Button to="/portfolio">Ver todos</Button>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-8 items-start">
            <ListProjects projects={projects} />
          </div>
        </section>
        <section className="mb-16 sm:mb-40">
          <div className="flex justify-between items-center mb-8 lg:mb-12">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-medium dark:text-white mb-0">
              Últimos videos
            </h4>
            <a
              href="https://www.youtube.com/channel/UCvMg7whAhSHpoL04E96fe5Q"
              target="_blank"
              className="text-xl sm:text-2xl font-medium text-blue-600 dark:text-blue-500 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-lg transition ease-in-out duration-300 flex items-center"
            >
              Ver todo
              <External className="ml-2" />
            </a>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-8">{videos}</div>
        </section>
        <section className="mb-16 sm:mb-40">
          <div className="flex justify-between items-center mb-8 lg:mb-12">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-medium dark:text-white mb-0">
              Últimos artículos
            </h4>
            <Button to="/blog">Ver todos</Button>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <ListArticles postsGroups={postsGroups} />
          </div>
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  query ProjectQuery {
    videos: allVideo {
      nodes {
        snippet {
          title
          publishedAt(fromNow: true, locale: "es-ES")
          resourceId {
            videoId
          }
        }
        image {
          childImageSharp {
            gatsbyImageData(height: 226, placeholder: BLURRED, quality: 100)
          }
        }
      }
    }

    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true, locale: "es-ES")
          title
          description
          category
        }
      }
    }

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
          excerpt
          color
          title
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
