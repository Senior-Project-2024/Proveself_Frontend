import React from 'react'

export default function Plus({fill = "white", classNames = "w-[24px] h-[24px]"} : { fill ?: string, classNames ?:string}) {
  return (
    <div className={classNames}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M5 12H19" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}
