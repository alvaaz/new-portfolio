import * as React from 'react'

export default function CSS(props: any) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M41 5H7L10 39L24 43L38 39L41 5Z" fill="#0277BD" />
      <path d="M24 8V39.9L35.2 36.7L37.7 8H24Z" fill="#039BE5" />
      <path
        d="M33.1 13H24V17H28.9L28.6 21H24V25H28.4L28.1 29.5L24 30.9V35.1L31.9 32.5L32.6 21L33.1 13Z"
        fill="white"
      />
      <path
        d="M23.9998 13V17H15.0998L14.7998 13H23.9998ZM19.3998 21L19.5998 25H23.9998V21H19.3998ZM19.7998 27H15.7998L16.0998 32.5L23.9998 35.1V30.9L19.8998 29.5L19.7998 27Z"
        fill="#EEEEEE"
      />
    </svg>
  )
}
