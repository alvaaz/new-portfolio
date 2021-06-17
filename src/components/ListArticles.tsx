import React from 'react'
import { PostsProps } from '../types'
import { Link } from 'gatsby'
import { getIcons } from '../util'

export function ListArticles({ postsGroups }: { postsGroups: PostsProps[] }) {
  return (
    <>
      {postsGroups.map((posts, index) => {
        return (
          <div className="flex flex-col flex-1" key={index}>
            {posts.map((post) => {
              const title = post.frontmatter.title || post.fields.slug
              return (
                <Link
                  className="mb-4 cursor-pointer transform transition ease-in-out duration-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl p-4"
                  to={`/blog${post.fields.slug}`}
                  itemProp="url"
                  key={post.fields.slug}
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <article className="flex">
                    <figure className="h-0 mr-5 sm:mr-7 w-14 h-14 sm:w-20 sm:h-20">
                      {getIcons(post.frontmatter.category)}
                    </figure>
                    <div>
                      <h6 className="font-semibold text-xl sm:text-2xl mb-4 dark:text-white">
                        {title}
                      </h6>
                      <p className="text-gray-400 text-base sm:text-xl mb-0">
                        {post.frontmatter.date}
                      </p>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        )
      })}
    </>
  )
}
