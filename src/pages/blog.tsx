import React from 'react'
import { SEO } from '../components'
import { graphql, Link } from 'gatsby'
import { PostsProps } from '../types'
import { getIcons } from '../util'

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

  const posts = nodes.map((post) => {
    const title = post.frontmatter.title || post.fields.slug
    return (
      <Link
        className="mb-2 cursor-pointer transform transition ease-in-out duration-300 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-2xl p-4"
        to={`/blog${post.fields.slug}`}
        itemProp="url"
        key={post.fields.slug}
        itemScope
        itemType="http://schema.org/Article"
      >
        <article className="flex">
          <figure className="h-0 mr-7 w-20 h-20">
            {getIcons(post.frontmatter.category)}
          </figure>
          <div>
            <h6 className="font-semibold text-2xl mb-4 dark:text-white">
              {title}
            </h6>
            <p className="text-gray-400 text-xl">{post.frontmatter.date}</p>
          </div>
        </article>
      </Link>
    )
  })

  return (
    <>
      <SEO title="All posts" />
      <h4 className="text-3xl sm:text-4xl font-medium mb-20">Articles</h4>
      <div className="flex flex-col flex-1">{posts}</div>
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
