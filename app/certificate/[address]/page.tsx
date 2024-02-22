import React from 'react'

export default function Address({params} : Readonly<{ params : { address : string}}>) {
  return (
    <div>{params.address}</div>
  )
}
