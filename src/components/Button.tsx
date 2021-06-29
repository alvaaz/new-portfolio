import React, { FC, ReactNode } from 'react'
import { Link } from 'gatsby'
import { Chevron } from './icons'

type Props = {
  to?: string
  href?: string
  icon?: ReactNode
}

export const Button: FC<Props> = ({ children, to, href }) => {
  if (href) {
    return (
      <a
        className="px-6 py-3 sm:py-4 rounded-lg border-2 border-black dark:border-white dark:text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:bg-gray-100 dark:hover:bg-gray-900 transition ease-in-out duration-300"
        href={href}
      >
        Youtube Channel
      </a>
    )
  }
  return (
    <Link
      to={to as string}
      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-blue-600 dark:text-blue-500 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-lg transition ease-in-out duration-300 flex items-center"
    >
      {children}
      <Chevron
        size="middle"
        color="#2997FF"
        className="ml-1 w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 ${}"
      />
    </Link>
  )
}
