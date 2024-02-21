
export default function PrevArrow2({onClick, stroke = "#003F8F"} : Readonly<{onClick ?: any, stroke ?: string}>) {
  return (
    <button onClick={onClick} className='py-[17px] pl-[21px] pr-[24px] bg-white rounded-full shadow-thin-more flex justify-center items-center absolute top-1/2 -left-[80px]'>
      <svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.25 23.5L2.75 13L13.25 2.5" stroke={stroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}
