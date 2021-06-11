import React from 'react'
import { ListArticles, SEO } from '../components'
import { graphql, Link } from 'gatsby'
import { PostsProps } from '../types'
import { Chevron } from '../components/icons'

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

  const tabsContainerRef = React.useRef<HTMLUListElement>(null)
  const buttonRightRef = React.useRef<HTMLButtonElement>(null)
  const buttonLeftRef = React.useRef<HTMLButtonElement>(null)

  React.useLayoutEffect(() => {
    const currentRight = buttonRightRef.current
    const currentLeft = buttonLeftRef.current
    const container = tabsContainerRef.current

    if (container && currentRight && currentLeft) {
      const widthView = container.offsetWidth
      const pxFromLeft = container.scrollLeft

      if (widthView < container.scrollWidth) {
        currentRight.style.display = 'flex'
      }

      const executeScroll = (op: string) => {
        container.scrollTo({
          left:
            op === 'RIGHT'
              ? pxFromLeft + widthView / 2
              : pxFromLeft - widthView / 2,
          behavior: 'smooth',
        })
      }

      const scrolling = () => {
        if (container.scrollLeft > 0) {
          currentLeft.style.display = 'flex'
        }
        if (container.scrollLeft === 0) {
          currentLeft.style.display = 'none'
        }
        if (container.scrollLeft + widthView < container.scrollWidth) {
          currentRight.style.display = 'flex'
        }
        if (container.scrollLeft + widthView >= container.scrollWidth) {
          currentRight.style.display = 'none'
        }
        console.log(
          container.scrollLeft,
          container.scrollWidth,
          widthView,
          widthView < container.scrollLeft!
        )
      }
      container.addEventListener('scroll', scrolling)
      currentRight.addEventListener('click', () => executeScroll('RIGHT'))
      currentLeft.addEventListener('click', () => executeScroll('LEFT'))

      return () => {
        currentRight.removeEventListener('click', () => executeScroll)
        currentLeft.removeEventListener('click', () => executeScroll)
        container.removeEventListener('scroll', scrolling)
      }
    }
  }, [])

  return (
    <>
      <SEO
        title={
          pageContext.topic
            ? `Articles about ${pageContext.topic}`
            : `All articles`
        }
      />
      <h4 className="text-3xl sm:text-4xl font-medium mb-20 text-blue-500">
        Blog
      </h4>
      <div
        className="mb-12 relative border-b-2 border-gray-300 dark:border-gray-700"
        style={{ height: '2.79rem' }}
      >
        <ul
          ref={tabsContainerRef}
          className="flex text-2xl items-stretch overflow-x-auto overflow-y-hidden pb-20"
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <li>
            <Link
              activeClassName="border-b-2 border-blue-500 text-blue-500"
              to="/blog"
              className="mr-8 pb-3 text-gray-400 whitespace-nowrap"
            >
              Todos los artículos
            </Link>
          </li>
          {uniqueTopics.map((topic, index) => (
            <li key={index}>
              <Link
                className="mr-8 pb-3 text-gray-400 whitespace-nowrap"
                activeClassName="border-b-2 border-blue-500 text-blue-500"
                to={`/tags/${topic}`}
              >
                {topic}
              </Link>
            </li>
          ))}
        </ul>
        <div className="block sm:hidden">
          <button
            ref={buttonLeftRef}
            className="absolute top-0 left-0 w-8 bg-white border-r border-gray-300 h-full flex items-center justify-center hidden"
            style={{ outline: 0 }}
          >
            <Chevron
              size="middle"
              color="#2997FF"
              className="w-5 h-5 transform rotate-180"
            />
          </button>
          <button
            ref={buttonRightRef}
            className="absolute top-0 right-0 w-8 bg-white border-l border-gray-300 h-full flex items-center justify-center"
            style={{ outline: 0 }}
          >
            <Chevron size="middle" color="#2997FF" className="w-5 h-5" />
          </button>
        </div>
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
