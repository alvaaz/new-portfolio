import React from 'react'
import { ListArticles, SEO } from '../components'
import { graphql, Link } from 'gatsby'
import { PostsProps } from '../types'

const Blog = ({
  data,
}: {
  data: {
    allMarkdownRemark: {
      nodes: PostsProps
    }
  }
}) => {
  const { nodes } = data.allMarkdownRemark

  const postsGroups = [nodes.slice(0, 3), nodes.slice(3, 6)]

  return (
    <>
      <SEO title="All posts" />
      <h4 className="text-3xl sm:text-4xl font-medium mb-20 text-blue-500">
        Blog
      </h4>
      <div className="mb-12">
        <ul className="flex text-blue-500 text-2xl border-b-2 border-gray-300 dark:border-gray-700 items-stretch">
          <li className="mr-8 pb-3 border-b-2 border-blue-500">
            <Link to="">Todos los artículos</Link>
          </li>
          <li className="mr-8 pb-3">
            <Link to="">Figma</Link>
          </li>
          <li className="mr-8 pb-3">
            <Link to="">CSS</Link>
          </li>
          <li className="mr-8 pb-3">
            <Link to="">React</Link>
          </li>
          <li>
            <Link to="">HTML</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-8">
        <ListArticles postsGroups={postsGroups} />
      </div>
    </>
  )
}

export default Blog

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
  }
`
