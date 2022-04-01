import React, { useState, useEffect } from 'react'
import Icon from '../components/icons'
import { Button, SEO, ListProjects, ListRepositories } from '../components'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import TimeAgo from 'react-timeago'
// @ts-ignore
import spanishStrings from '../../node_modules/react-timeago/lib/language-strings/es'
// @ts-ignore
import buildFormatter from '../../node_modules/react-timeago/lib/formatters/buildFormatter'

import { StaticImage } from 'gatsby-plugin-image'
import { ProjectsProps } from '../types'

export default function index({ data }: { data: ProjectsProps }) {
  const formatter = buildFormatter(spanishStrings)
  const [dataVideos, setDataVideos] = useState<{
    items: [
      {
        snippet: {
          title: string
          publishedAt: string
          resourceId: { videoId: string }
          thumbnails: {
            standard: {
              url: string
            }
          }
        }
      }
    ]
  } | null>(null)

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLUweiC3IeIEoaer4XlQAl8alwcGCqdHce&maxResults=4&key=${process.env.GATSBY_YOUTUBE_KEY}`
    )
      .then((response) => response.json())
      .then((resultData) => {
        setDataVideos(resultData)
      })
  }, [])

  const projects = data.projects.nodes

  if (projects.length === 0) {
    return <p>No existen proyectos 🤕.</p>
  }

  const videosRender = dataVideos?.items.map((video) => {
    return (
      <a
        className="mb-8 lg:mb-0 lg:w-4/12 cursor-pointer transform bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition ease-in-out duration-300 rounded-2xl p-4"
        key={video.snippet.resourceId.videoId}
        href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
      >
        <img
          /* z-index 0 is required to apply border-radius https://stackoverflow.com/a/64885552 */
          className="rounded-lg mb-4 w-full z-0"
          src={video.snippet.thumbnails.standard.url}
          alt={video.snippet.title}
        />
        <h6 className="font-semibold text-lg sm:text-xl mb-4 dark:text-white">
          {video.snippet.title}
        </h6>

        <TimeAgo
          className="text-gray-400 text-base sm:text-xl mb-0"
          date={video.snippet.publishedAt}
          formatter={formatter}
        />
      </a>
    )
  })

  return (
    <>
      <SEO title="👋" />
      <div className="hero mb-32 sm:mb-48">
        <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
          <div>
            <p className="mb-12 sm:mb-16 leading-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-relaxed dark:text-white">
              <span className="font-semibold">Digital product designer,</span>
              <br />
              <span> bridging design and code.</span>
            </p>
            <div className="flex flex-wrap items-start">
              <a
                className="px-6 py-3 sm:py-4 border sm:border-2 border-transparent bg-black dark:bg-white dark:hover:bg-slate-200 text-white dark:text-black rounded-lg mr-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:bg-gray-800 transition ease-in-out duration-300 mb-4 sm:mb-0"
                target="_blank"
                href="/resume.pdf"
              >
                Download resumé
              </a>
              <a
                className="px-6 py-3 sm:py-4 border sm:border-2 border-black dark:border-white dark:hover:bg-gray-800 dark:text-white rounded-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:bg-gray-100 dark:hover:bg-gray-900 transition ease-in-out duration-300"
                href="https://www.youtube.com/channel/UCvMg7whAhSHpoL04E96fe5Q"
                target="_blank"
              >
                Youtube Channel
              </a>
            </div>
          </div>
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
      </div>

      <main>
        <section className="mb-16 sm:mb-40">
          <div className="flex justify-between items-center mb-8 lg:mb-12">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-medium dark:text-white mb-0">
              Latest works
            </h4>
            <Button to="/portfolio">See all</Button>
          </div>
          <ListProjects projects={projects} />
          <Link
            to="/portfolio"
            target="_blank"
            className="block sm:hidden text-lg font-medium text-blue-600 dark:text-blue-500 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer rounded-lg transition ease-in-out duration-300 text-center"
          >
            See all works
          </Link>
        </section>
        <section className="mb-16 sm:mb-20">
          <div className="flex justify-between items-center mb-8 lg:mb-12">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-medium dark:text-white mb-0">
              Projects
            </h4>
            <a
              href="https://github.com/alvaaz"
              target="_blank"
              className="hidden sm:flex text-lg lg:text-xl xl:text-2xl font-medium text-blue-600 dark:text-blue-500 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-lg transition ease-in-out duration-300 items-center"
            >
              See all
              <Icon name="external" className="ml-1 w-5 h-5 xl:w-6 xl:h-6" />
            </a>
          </div>
          <ListRepositories />
          <a
            href="https://github.com/alvaaz"
            target="_blank"
            className="block sm:hidden text-lg font-medium text-blue-600 dark:text-blue-500 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer rounded-lg transition ease-in-out duration-300 text-center"
          >
            See all projects
          </a>
        </section>
        <section className="mb-16 sm:mb-40">
          <div className="flex justify-between items-center mb-8 lg:mb-12">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-medium dark:text-white mb-0">
              Latest videos
            </h4>
            <a
              href="https://www.youtube.com/channel/UCvMg7whAhSHpoL04E96fe5Q"
              target="_blank"
              className="hidden sm:flex text-lg lg:text-xl xl:text-2xl font-medium text-blue-600 dark:text-blue-500 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-lg transition ease-in-out duration-300 items-center"
            >
              See all
              <Icon name="external" className="ml-1 w-5 h-5 xl:w-6 xl:h-6" />
            </a>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            {videosRender}
          </div>
          <a
            href="https://www.youtube.com/channel/UCvMg7whAhSHpoL04E96fe5Q"
            target="_blank"
            className="block sm:hidden text-lg font-medium text-blue-600 dark:text-blue-500 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer rounded-lg transition ease-in-out duration-300 text-center"
          >
            See all videos
          </a>
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  query ProjectQuery {
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
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
