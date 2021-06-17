import React, { FC } from 'react'
import ThemeControl from './ThemeControl'
import { Link } from 'gatsby'
import Footer from './Footer'

const Layout: FC = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-8 mb-16">
        <nav className="flex justify-between mb-8 sm:mb-0 py-8 sm:py-16 text-xl sm:text-2xl items-center">
          <Link className="font-semibold dark:text-white flex-1" to="/">
            Álvaro
          </Link>
          <Link
            activeClassName="bg-gray-100 dark:bg-gray-800"
            className="mr-0 sm:mr-8 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-lg transition ease-in-out duration-300 dark:text-white"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            activeClassName="bg-gray-100 dark:bg-gray-800"
            className="mr-0 sm:mr-8 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-lg transition ease-in-out duration-300 dark:text-white"
            to="/portfolio"
          >
            Portafolio
          </Link>
          {/* <ThemeControl /> */}
        </nav>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
