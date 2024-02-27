import React from 'react'

export default function ExternalLink({stroke = "white"} : Readonly<{ stroke ?: string}>) {
  return (
    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.75 11.875V17.125C15.75 17.5891 15.5656 18.0342 15.2374 18.3624C14.9092 18.6906 14.4641 18.875 14 18.875H4.375C3.91087 18.875 3.46575 18.6906 3.13756 18.3624C2.80937 18.0342 2.625 17.5891 2.625 17.125V7.5C2.625 7.03587 2.80937 6.59075 3.13756 6.26256C3.46575 5.93437 3.91087 5.75 4.375 5.75H9.625M13.125 3.125H18.375M18.375 3.125V8.375M18.375 3.125L8.75 12.75" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
