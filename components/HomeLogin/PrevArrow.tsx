import React from 'react'
type PrevArrowArrow = { 
  classname ?: string, 
  onClick ?: any, 
  style?:any ,
  currentSlide ?: any, 
  setCurrentSlide ?:any,
  maxSlide ?: number,
}

export default function PrevArrow({classname, onClick, style, currentSlide, setCurrentSlide, maxSlide} : PrevArrowArrow) {
  return (
    <button onClick={ ()=>{
      onClick();
      if(currentSlide == 0){
        setCurrentSlide(maxSlide);
      }else{
        setCurrentSlide(currentSlide-1);
      }
    }} className={`absolute top-1/2 -left-[80px] `}>
      <svg width="60" height="56" viewBox="0 0 60 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={classname}>
        <g filter="url(#filter0_d_511_12763)">
          <path d="M50.9728 7.78218L10 24.1143L50.2739 44.1478L43.0874 26.4474L50.9728 7.78218Z" fill="#4A4A4A"/>
          <path d="M51.815 8.13798L52.6663 6.12288L50.6343 6.93288L9.66146 23.265L7.76193 24.0221L9.5928 24.9329L49.8667 44.9664L52.0299 46.0424L51.121 43.8038L44.077 26.4543L51.815 8.13798Z" stroke="white" strokeWidth="1.82857"/>
        </g>
        <defs>
        <filter id="filter0_d_511_12763" x="0.0382118" y="0.80648" width="59.8074" height="54.4448" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1.82857"/>
          <feGaussianBlur stdDeviation="2.74286"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_511_12763"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_511_12763" result="shape"/>
        </filter>
        </defs>
      </svg>
    </button>
  )
}
