'use client'
import React, { useState } from 'react'

export default function HintCopyID({children, type}: {children: React.ReactNode, type : "badge" | "certificate"}) {
  const [isHoverHint, setIsHoverHint ] = useState<boolean>(false);
  return (
    <div className="relative">
      <div className={`
        absolute -top-[45px] left-1/2 -translate-x-1/2
        cursor-default
        bg-white shadow-thin p-[8px] rounded-lg
        transition-all ease-in-out duration-300
        ${isHoverHint ? "opacity-100 visible" : "opacity-0 invisible"}
      `}>
        <p className="regular16 text-blue-300 text-nowrap">Copy {type} ID</p>
      </div>
      <div onMouseOver={()=>setIsHoverHint(true)} onMouseOut={()=>setIsHoverHint(false)}>
        {
          children
        }
      </div>
    </div>
  )
}
