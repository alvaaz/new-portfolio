import React from 'react'
import { Github, Twitter, Email, Youtube } from './icons'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
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
          }
        }
      }
    }
  `)

  const twitter = data.site.siteMetadata.social.twitter
  const github = data.site.siteMetadata.social.github
  const youtube = data.site.siteMetadata.social.youtube
  const email = data.site.siteMetadata.social.email

  return (
    <footer className="bg-gray-800 py-16">
      <div className="container mx-auto flex items-center flex-col sm:flex-row px-4 sm:px-8">
        <div className="flex-1 mb-8 sm:mb-0">
          <h2 className="text-3xl font-semibold sm:text-5xl text-white mb-4">
            Let work together
          </h2>
          <p className="text-xl sm:text-2xl text-white mb-4">
            Can I help you with anything? Do get in touch...
          </p>
        </div>
        <div className="text-xl grid grid-rows-2 grid-cols-2 gap-4 w-full sm:w-4/12">
          <a
            href={github}
            target="_blank"
            className="rounded-lg bg-gray-700 cursor-pointer flex items-center justify-center transform transition ease-in-out duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{ aspectRatio: '1' }}
          >
            <div>
              <Github className="mx-auto mb-4" />
              <p className="text-white">Github</p>
            </div>
          </a>
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            className="rounded-lg bg-gray-700 cursor-pointer flex items-center justify-center transform transition ease-in-out duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{ aspectRatio: '1' }}
          >
            <div>
              <Twitter className="mx-auto mb-4" />
              <p className="text-white">Twitter</p>
            </div>
          </a>
          <a
            href={`mailto:${email}`}
            target="_blank"
            className="rounded-lg bg-gray-700 cursor-pointer flex items-center justify-center transform transition ease-in-out duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{ aspectRatio: '1' }}
          >
            <div>
              <Email className="mx-auto mb-4" />
              <p className="text-white">Email</p>
            </div>
          </a>
          <a
            href={youtube}
            target="_blank"
            className="rounded-lg bg-gray-700 cursor-pointer flex items-center justify-center transform transition ease-in-out duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{ aspectRatio: '1' }}
          >
            <div>
              <Youtube className="mx-auto mb-4" />
              <p className="text-white">Youtube</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
