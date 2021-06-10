import React from 'react'
import { External } from '../components/icons'
import { Button, SEO, ListProjects, ListArticles } from '../components'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { ProjectsProps } from '../types'

export default function index({ data }: { data: ProjectsProps }) {
  const videosNodes = data.videos.nodes

  const posts = data.posts.nodes
  const projects = data.projects.nodes

  if (projects.length === 0) {
    return (
      <p>
        No blog posts found. Add markdown posts to "content/blog" (or the
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

  const postsGroups = [posts.slice(0, 3), posts.slice(3, 6)]

  const videos = videosNodes.map((video) => {
    const image = getImage(video.image)
    return (
      <a
        className="mb-8 sm:mb-0 sm:w-4/12 cursor-pointer transform bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition ease-in-out duration-300 rounded-2xl p-4"
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
        <p className="text-gray-400 text-base sm:text-xl">
          {video.snippet.publishedAt}
        </p>
      </a>
    )
  })

  return (
    <>
      <SEO title="👋" />
      <div className="hero mb-32 sm:mb-48">
        <p className="text-4xl mb-16 leading-normal sm:text-5xl sm:leading-relaxed dark:text-white">
          <span className="font-semibold">Digital Product Designer</span> <br />
          &<span className="font-semibold"> Frontend Engineer</span>
          <br /> from Viña del mar, Chile
        </p>
        <div className="flex flex-wrap">
          <a
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 sm:py-4 rounded-lg mr-6 text-xl sm:text-2xl hover:bg-gray-800 transition ease-in-out duration-300 mb-4 sm:mb-0"
            href="google.cl"
          >
            Download Resumé
          </a>
          <Button href="google.cl">Youtube Channel</Button>
        </div>
      </div>
      <main>
        <section className="mb-16 sm:mb-40">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-2xl sm:text-4xl font-medium dark:text-white">
              Featured projects
            </h4>
            <Button to="/portfolio">See all</Button>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-8">
            <ListProjects projects={projects} />
          </div>
        </section>
        <section className="mb-16 sm:mb-40">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-2xl sm:text-4xl font-medium dark:text-white">
              Lastest videos
            </h4>
            <a
              href="https://www.youtube.com/channel/UCvMg7whAhSHpoL04E96fe5Q"
              target="_blank"
              className="text-xl sm:text-2xl font-medium text-blue-600 dark:text-blue-500 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-lg transition ease-in-out duration-300 flex items-center"
            >
              See all
              <External className="ml-2" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-8">{videos}</div>
        </section>
        <section className="mb-16 sm:mb-40">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-2xl sm:text-4xl font-medium dark:text-white">
              Lastest articles
            </h4>
            <Button to="/blog">See all</Button>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-8">
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
          publishedAt(fromNow: true)
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
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
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
