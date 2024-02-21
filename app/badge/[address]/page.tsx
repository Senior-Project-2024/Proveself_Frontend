import React from 'react'

export default function Address({params} : Readonly<{ params : { address : string}}>) {
  return (
    <div>{params.address}
      <img src="/Group 590.svg" alt="" />
    </div>
  )
}
