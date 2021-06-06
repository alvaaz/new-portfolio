import * as React from 'react'

type SizeType = 'small' | 'middle' | 'large' | undefined

const small = {
  width: 20,
  height: 20,
  viewBox: '0 0 20 20',
}

const middle = {
  width: 24,
  height: 25,
  viewBox: '0 0 24 25',
}

export function Chevron(props: {
  size: SizeType
  color: string
  className: string
}) {
  const { color, size, className } = props
  return (
    <svg
      {...(size === 'small' ? small : middle)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d={size === 'small' ? 'M7.5 15L12.5 10L7.5 5' : 'M9 18.5l6-6-6-6'}
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
