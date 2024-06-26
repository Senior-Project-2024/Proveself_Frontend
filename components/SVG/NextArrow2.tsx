import classNames from "classnames"

export default function NextArrow2({onClick, stroke = "#003F8F", classnameSvg, classname="bg-white py-[17px] pl-[24px] pr-[21px]"} : Readonly<{onClick ?: any, stroke ?: string, classnameSvg ?: string, classname?: string}>) {
  const classStr = classNames(" rounded-full shadow-thin-more flex justify-center items-center absolute top-1/2 -right-[80px]" , classname)
  return (
    <button onClick={onClick} className={classStr}>
      <svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={classnameSvg}>
        <path d="M2.75 23.5L13.25 13L2.75 2.5" stroke={stroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}
