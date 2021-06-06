import * as React from 'react'

export function Figma(props: any) {
  return (
    <svg
      width={200}
      height={200}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" d="M0 0h200v200H0z" />
      <path
        d="M80 159c11.04 0 20-8.96 20-20v-20H80c-11.04 0-20 8.96-20 20s8.96 20 20 20z"
        fill="#0ACF83"
      />
      <path
        d="M60 99c0-11.04 8.96-20 20-20h20v40H80c-11.04 0-20-8.96-20-20z"
        fill="#A259FF"
      />
      <path
        d="M60 59c0-11.04 8.96-20 20-20h20v40H80c-11.04 0-20-8.96-20-20z"
        fill="#F24E1E"
      />
      <path
        d="M100 39h20c11.04 0 20 8.96 20 20s-8.96 20-20 20h-20V39z"
        fill="#FF7262"
      />
      <path
        d="M140 99c0 11.04-8.96 20-20 20s-20-8.96-20-20 8.96-20 20-20 20 8.96 20 20z"
        fill="#1ABCFE"
      />
    </svg>
  )
}
