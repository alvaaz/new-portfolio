import path from 'path'
import { createRemoteFileNode, createFilePath } from 'gatsby-source-filesystem'

async function turnProjectsIntoPages({ graphql, actions, reporter}) {
  const { createPage } = actions

  const projectTemplate = path.resolve('./src/templates/portfolio-project.tsx')

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: {fileAbsolutePath: {regex: "/content/portfolio/"}}
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const projects = result.data.allMarkdownRemark.nodes

  if (projects.length > 0) {
    projects.forEach((project, index) => {
      const previousProjectId = index === 0 ? null : projectTemplate[index - 1].id
      const nextProjectId = index === projectTemplate.length - 1 ? null : projectTemplate[index + 1].id

      createPage({
        path: `portfolio${project.fields.slug}`,
        component: projectTemplate,
        context: {
          id: project.id,
          previousProjectId,
          nextProjectId,
        },
      })
    })
  }
}

async function turnPostsIntoPages({ graphql, actions, reporter}) {
  const { createPage } = actions

  const blogPost = path.resolve('./src/templates/blog-post.tsx')

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: {fileAbsolutePath: {regex: "/content/blog/"}}
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: `blog${post.fields.slug}`,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

export async function onCreateNode({ node, actions, getCache, createNodeId, getNode }) {
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })

    actions.createNodeField({
      name: `slug`,
      node,
      value,
    })
  } else  if (node.internal.type === 'Video') {

    const { createNode } = actions

    const fileNode = await createRemoteFileNode({
      url: node.snippet.thumbnails.maxres.url,
      getCache,
      createNode,
      createNodeId,
      parentNodeId: node.id
    })

    if (fileNode) {
      node.image___NODE = fileNode.id
    }
  }
}

export async function createPages(params) {
  await Promise.all([
    turnPostsIntoPages(params),
    turnProjectsIntoPages(params)
  ]);
}
