import * as React from 'react'

import Chevron, { SizeType } from './chevron'
import External from './external'
import Youtube from './youtube'
import Twitter from './twitter'
import Email from './email'
import Github from './github'
import Sun from './sun'
import Moon from './moon'
import Repository from './repository'
import Linkedin from './linkedin'
import TypeScript from './typescript'
import CSS from './css'
import GraphQL from './graphql'

type Props = {
  name?: string
  size?: SizeType
  color?: string
  className?: string
}

export default function Icon(props: Props): JSX.Element {
  switch (props.name) {
    case 'chevron':
      return <Chevron {...props} />
    case 'external':
      return <External {...props} />
    case 'youtube':
      return <Youtube {...props} />
    case 'twitter':
      return <Twitter {...props} />
    case 'email':
      return <Email {...props} />
    case 'github':
      return <Github {...props} />
    case 'sun':
      return <Sun {...props} />
    case 'moon':
      return <Moon {...props} />
    case 'repository':
      return <Repository {...props} />
    case 'linkedin':
      return <Linkedin {...props} />
    case 'typescript':
      return <TypeScript {...props} />
    case 'css':
      return <CSS {...props} />
    case 'graphql':
      return <GraphQL {...props} />
    default:
      return <div>Icon not found</div>
  }
}
