import React from 'react'
import Navbar from './Navbars/Navbar'
import Link from 'next/link'
type INotFound = {
  name ?: "Badge" | "Certificate"
} 

export default function NotFound({name = "Badge" }: INotFound) {
  return (
    <>
      <Navbar isUser={true}/>
      <div className="flex flex-col h-screen items-center justify-center">
        <p className="text-[64px] font-medium leading-[75px] mt-[80px]">🙇🏻‍ <span className="text-red">Sorry</span>, We can not found {name}</p>
        <p className="text-[48px] font-normal my-[17px]">Please!, Try it again </p>
        <p className="w-[588px] text-center light24 mb-[64px]">We are sorry! The page you request can not be found. It need to correct Token</p>
        <Link href={"/"}>
          <button className="flex flex-row items-center gap-[12px] px-[30px] py-[14px] bg-brand-700 hover:bg-brand-800 rounded-lg">
            <img src="/home.svg" alt="Home" />
            <p className="medium20 text-white">Go Home</p>
          </button>
        </Link>
      </div>
    </>
  )
}
