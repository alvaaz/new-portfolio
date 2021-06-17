import * as React from 'react'
import { graphql } from 'gatsby'
import { SEO } from '../components'

type Props = {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
    }
    excerpt: string
    html: string
  }
}

const BlogPostTemplate = ({ data }: { data: Props }) => {
  const post = data.markdownRemark

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <section
        className="w-full sm:w-8/12 mx-auto"
        dangerouslySetInnerHTML={{ __html: post.html }}
        itemProp="articleBody"
      />
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
