import React from 'react'

type TNextArrow = { 
  classname ?: string, 
  onClick ?: any, 
  style?:any ,
  currentSlide ?: any, 
  setCurrentSlide ?:any,
  maxSlide ?: number,
}


export default function NextArrow({classname, onClick, style, currentSlide, setCurrentSlide, maxSlide} : TNextArrow) {
  return (
    <button onClick={() => {
        onClick();
        if(currentSlide == maxSlide){
          setCurrentSlide(0);
        }else{
          setCurrentSlide(currentSlide+1); 
        }
      }}  className={`absolute top-1/2 -right-[80px] `}>
      <svg width="62" height="56" viewBox="0 0 62 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={classname}>
        <g filter="url(#filter0_d_511_12756)">
          <path d="M11.7932 44.1809L51.6562 25.3013L10.2008 7.8435L18.4876 25.0563L11.7932 44.1809Z" fill="#4A4A4A"/>
          <path d="M10.9302 43.8789L10.2075 45.9436L12.1845 45.0072L52.0476 26.1276L53.8957 25.2523L52.0111 24.4587L10.5557 7.00088L8.32898 6.06318L9.37702 8.2401L17.4996 25.1116L10.9302 43.8789Z" stroke="white" strokeWidth="1.82857"/>
        </g>
      <defs>
      <filter id="filter0_d_511_12756" x="0.971317" y="0.625816" width="60.6494" height="54.3948" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1.82857"/>
        <feGaussianBlur stdDeviation="2.74286"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_511_12756"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_511_12756" result="shape"/>
      </filter>
      </defs>
      </svg>
    </button>
  )
}
