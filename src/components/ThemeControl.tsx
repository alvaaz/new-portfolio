import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Icon from '../components/icons'

interface Props {
  theme: string
  toggleTheme: (theme: string) => void
}

function ThemeControl() {
  return (
    <ThemeToggler>
      {({ toggleTheme, theme }: Props) => {
        const isDarkMode = theme === 'dark'
        if (theme == null) {
          return null
        }

        return (
          <button
            aria-label="theme-switch"
            className="leading-none px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-lg transition ease-in-out duration-300 dark:text-white"
            onClick={() => toggleTheme(isDarkMode ? 'light' : 'dark')}
          >
            {isDarkMode ? <Icon name="moon" /> : <Icon name="sun" />}
          </button>
        )
      }}
    </ThemeToggler>
  )
}

export default ThemeControl
