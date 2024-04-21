'use client'
import React, { useState } from 'react'

export default function HintVerification() {
  const [isHoverHint, setIsHoverHint ] = useState<boolean>(false);
  return (
    <div className={`relative z-0 ${isHoverHint && "z-20"}`}>
      <img src="/help-circle.svg" onMouseOver={()=>setIsHoverHint(true)} onMouseOut={()=>setIsHoverHint(false)} className="cursor-pointer" alt="" />
      {/* Absolute */}
      <div className={`absolute -left-[180px] -top-[100px] 
        w-[372px] py-[11px] px-[18px] flex flex-row justify-between items-center bg-white 
        rounded-lg shadow-thin 
        transition-all duration-300 ease-in-out
        opacity-0 ${isHoverHint && "opacity-100 translate-y-0"} translate-y-3
        `}
      >
        <img src="/clickVerifyButton.png" className="w-[105px]" alt="" />
        <p className="w-[225px] regular14">Copy and Click on Verification button for <span className="medium14">verify</span> information between <span className="text-blue-300">webpage</span> and <span className="text-blue-300">blockchain</span> </p>
      </div>
    </div>
  )
}
