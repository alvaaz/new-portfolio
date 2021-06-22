import React from 'react'
import { ListArticles, SEO } from '../components'
import { graphql, Link, useScrollRestoration } from 'gatsby'
import { PostsProps } from '../types'

const Blog = ({
  data,
  pageContext,
}: {
  data: {
    allMarkdownRemark: {
      nodes: PostsProps
    }
    tags: {
      nodes: {
        frontmatter: {
          category: string
        }
      }[]
    }
  }
  pageContext: {
    topic: string
  }
}) => {
  const nodes = data.allMarkdownRemark.nodes

  const allTopics = data.tags.nodes.map((v) => v.frontmatter.category)
  const uniqueTopics = allTopics.filter((v, i, a) => a.indexOf(v) === i)

  const postsGroups = [
    nodes.filter((_, i) => !(i % 2)),
    nodes.filter((_, i) => i % 2),
  ]

  return (
    <>
      <SEO
        title={
          pageContext.topic
            ? `Articles about ${pageContext.topic}`
            : `All articles`
        }
      />
      <h4 className="text-3xl sm:text-4xl font-medium mb-20 text-blue-500 dark:text-blue-500">
        Blog
      </h4>
      <div
        className="mb-12 relative border-b-2 border-gray-300 dark:border-gray-700"
        style={{ height: '2.79rem' }}
      >
        <ul
          className="flex text-xl sm:text-2xl items-stretch overflow-x-auto overflow-y-hidden pb-20"
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <li>
            <Link
              activeClassName="border-b-2 border-blue-500 text-blue-500"
              to="/blog"
              className="mr-8 pb-4 sm:pb-3 text-gray-400 whitespace-nowrap"
            >
              Todos los artículos
            </Link>
          </li>
          {uniqueTopics.map((topic, index) => (
            <li key={index}>
              <Link
                className="mr-8 pb-4 sm:pb-3 text-gray-400 whitespace-nowrap"
                activeClassName="border-b-2 border-blue-500 text-blue-500"
                to={`/tags/${topic}`}
              >
                {topic}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <ListArticles postsGroups={postsGroups} />
      </div>
    </>
  )
}

export default Blog

export const query = graphql`
  query BlogQuery($topic: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { category: { eq: $topic } }
        fileAbsolutePath: { regex: "/content/blog/" }
      }
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
    tags: allMarkdownRemark {
      nodes {
        frontmatter {
          category
        }
      }
    }
  }
`
