import React, { FC, ReactNode } from 'react'
import { Link } from 'gatsby'
import Icon from './icons'

type Props = {
  to?: string
  href?: string
  icon?: ReactNode
}

export const Button: FC<Props> = ({ children, to, href }) => {
  if (href) {
    return (
      <a
        className="text-lg lg:text-xl xl:text-2xl px-6 py-3 sm:py-4 rounded-lg border-2 border-black dark:border-white dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition ease-in-out duration-300"
        href={href}
      >
        Youtube Channel
      </a>
    )
  }
  return (
    <Link
      to={to as string}
      className="hidden sm:flex text-lg lg:text-xl xl:text-2xl font-medium text-blue-600 dark:text-blue-500 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-lg transition ease-in-out duration-300 items-center"
    >
      {children}
      <Icon
        name="chevron"
        size="middle"
        color="#2997FF"
        className="ml-1 w-5 h-5 xl:w-6 xl:h-6"
      />
    </Link>
  )
}
