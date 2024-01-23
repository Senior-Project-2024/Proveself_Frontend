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
  children? : React.ReactNode
}

export default function Button({text , textColor = "white", font = "medium20" , bgcolor="bg-brand-700", gap = "gap-[12px]", px="px-[30px]", py="py-[14px]", rounded="rounded-[8px]", children} : Ibutton) {
  const classStr = classNames("w-auto h-auto flex flex-row justify-center items-center", 
    bgcolor,
    px,
    py,
    rounded,
    gap
  );
  
  return (
    <button className={classStr}>
      {children}
      <Link href="/" className={` text-${textColor} ${font}`}>{text}</Link>
    </button>
  )
}
