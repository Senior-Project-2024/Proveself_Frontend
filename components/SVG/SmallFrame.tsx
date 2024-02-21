import React from 'react'

export default function SmallFrame({stroke = "#3F51B5"} : Readonly<{ stroke ?: string}>) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="14" height="14" fill="white" stroke={stroke} strokeWidth="2"/>
    </svg>
  )
}




