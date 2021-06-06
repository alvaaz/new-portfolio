import * as React from 'react'

export function CSS(props: any) {
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
        d="M158 34l-10.568 118.786L99.929 166l-47.372-13.195L42 34h116z"
        fill="#264DE4"
      />
      <path d="M138.048 145.34L147 44h-47v112l38.048-10.66z" fill="#2965F1" />
      <path
        d="M66 88l1.31 14H100V88H66zM100 59H64l1.305 14H100V59zM100 140.981v-15.079l-.064.016-16.25-4.358L82.647 110H68l2.044 22.758L99.933 141l.067-.019z"
        fill="#EBEBEB"
      />
      <path
        d="M117.697 102.793l-1.669 18.781-16.028 4.36V141l29.462-8.228.216-2.447 3.377-38.125.351-3.889L136 59h-36v14.482h20.25l-1.307 14.83H100v14.481h17.697z"
        fill="#fff"
      />
    </svg>
  )
}
