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
}

export default function Button({text , textColor = "text-white", font = "medium20" , bgcolor="bg-brand-700", gap = "gap-[12px]", px="px-[30px]", py="py-[14px]", rounded="rounded-[8px]", border = "", borderColor = "" , children, link=""} : Ibutton) {
  const classStr = classNames("w-auto h-auto flex flex-row justify-center items-center", 
    bgcolor,
    px,
    py,
    rounded,
    gap,
    border,
    borderColor
  );
  
  return (
    <Link href={link}>
      <button className={classStr}>
        {children}
        <p className={` ${textColor} ${font}`}>{text}</p>
      </button>
    </Link>
  )
}
