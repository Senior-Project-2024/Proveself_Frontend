'use client'
import Link from "next/link"
import classNames from "classnames"
interface Ibutton {
  text : string,
  textColor? : string,
  font? : string,
  bgcolor? : string,
  gap? : string,
  px? : string,
  py? : string,
  rounded? : string,
  border?:string
  borderColor?: string,
  children? : React.ReactNode,
  link? : string,
  onclick? : () => void,
  isTargetBlank ?: boolean,
  hover ?: string
}

export default function Button({text , textColor = "text-white", font = "medium20" , bgcolor="bg-brand-700", gap = "gap-[12px]", px="px-[30px]", py="py-[14px]", rounded="rounded-[8px]", border = "", borderColor = "" , children, link="", onclick, isTargetBlank = false, hover} : Ibutton) {
  const classStr = classNames("w-auto h-auto flex flex-row justify-center items-center transition-all duration-500 opacity-100", 
    bgcolor,
    px,
    py,
    rounded,
    gap,
    border,
    borderColor,
    hover
  );
  
  return (
    <Link href={link} target={isTargetBlank ? "_blank" : ""}>
      <button className={classStr} onClick={onclick}>
        {children}
        <p className={` ${textColor} ${font}`}>{text}</p>
      </button>
    </Link>
  )
}
