import fetch from 'isomorphic-fetch'
import { createRemoteFileNode, createFilePath } from 'gatsby-source-filesystem'

async function fetchVideosAndTurnIntoNodes({ actions, createContentDigest }) {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLUweiC3IeIEoaer4XlQAl8alwcGCqdHce&maxResults=4&key=${process.env.YOUTUBE_KEY}`
  )
  const { items } = await res.json()

  for (const item of items) {
    const nodeMeta = {
      id: item.id,
      parent: null,
      children: [],
      internal: {
        type: 'Video',
        mediaType: 'application/json',
        contentDigest: createContentDigest(item)
      }
    }
    actions.createNode({
      ...item,
      ...nodeMeta
    })
  }
}

export async function onCreateNode({ node, actions, getCache, createNodeId, getNode }) {
  if (node.internal.type === `MarkdownRemark`) {
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

export async function sourceNodes(params) {
  await Promise.all([fetchVideosAndTurnIntoNodes(params)])
}

export async function createPages(params) {
  await Promise.all([
    turnProjectsIntoPages(params),
  ]);
}
