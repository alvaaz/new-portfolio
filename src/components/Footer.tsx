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
      <div className="container mx-auto flex lg:items-center flex-col lg:flex-row px-4 sm:px-8 justify-start">
        <div className="flex-1 mb-8 sm:mb-0">
          <h2 className="text-3xl font-semibold sm:text-5xl text-white mb-4">
            Let work together
          </h2>
          <p className="text-xl sm:text-2xl text-white mb-4">
            Can I help you with anything? Do get in touch...
          </p>
        </div>
        <div className="text-xl social-grid">
          <a href={github} target="_blank" className="">
            <div>
              <Github className="mx-auto mb-0 sm:mb-4 w-8 sm:w-full" />
              <p className="text-white">Github</p>
            </div>
          </a>
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            className=""
          >
            <div>
              <Twitter className="mx-auto mb-0 sm:mb-4 w-8 sm:w-full" />
              <p className="text-white">Twitter</p>
            </div>
          </a>
          <a href={`mailto:${email}`} target="_blank" className="">
            <div>
              <Email className="mx-auto mb-0 sm:mb-4 w-8 sm:w-full" />
              <p className="text-white">Email</p>
            </div>
          </a>
          <a href={youtube} target="_blank" className="">
            <div>
              <Youtube className="mx-auto mb-0 sm:mb-4 w-8 sm:w-full" />
              <p className="text-white">Youtube</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
