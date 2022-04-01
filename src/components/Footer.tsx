import React from 'react'
import Icon from './icons'
import { useStaticQuery, graphql } from 'gatsby'

function Footer() {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
            youtube
            email
            linkedin
          }
        }
      }
    }
  `)

  return (
    <footer className="bg-gray-800 py-16">
      <div className="container mx-auto flex lg:items-center flex-col lg:flex-row px-4 sm:px-8 justify-start">
        <div className="grow mb-8 lg:mb-0">
          <h2 className="font-semibold text-2xl lg:text-3xl xl:text-4xl text-white mb-4">
            Let's keep in touch
          </h2>
          <p className="text-xl md:text-2xl text-white mb-4">
            You can find me over on{' '}
            <span className="hidden lg:inline"> 👉</span>
            <span className="inline lg:hidden"> 👇</span>
          </p>
        </div>
        <div className="grow text-xl flex gap-4 flex-wrap">
          {Object.keys(data.site.siteMetadata.social).map((key) => {
            const url = data.site.siteMetadata.social[key]
            if (!url) return null
            return (
              <a
                className="basis-32 grow text-center rounded-lg bg-gray-700 cursor-pointer transform transition ease-in-out duration-300 hover:-translate-y-2 hover:shadow-xl p-4"
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <Icon
                    name={key}
                    className="mx-auto mb-0 sm:mb-4 w-8 sm:w-full"
                  />
                  <p className="text-white mb-0 capitalize">{key}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
