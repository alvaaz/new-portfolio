import React, { FC } from 'react'
import { ReactLogo, Graphql, Figma, CSS, JS } from '../components/logos'

type Categories = {
  [key: string]: FC<{ className?: string }>
}

const CategoriesToIcons: Categories = {
  figma: Figma,
  graphql: Graphql,
  js: JS,
  react: ReactLogo,
  css: CSS,
}

export const getIcons = (category: string) => {
  if (typeof CategoriesToIcons[category] !== 'undefined') {
    return React.createElement(
      CategoriesToIcons[category],
      {
        className: 'w-14 h-14 sm:w-20 sm:h-20 rounded-lg',
      },
      null
    )
  }
}
