import React from 'react'
import LeftFlower from '../SVG/LeftFlower'
import Star5 from '../SVG/Star5'
import RightFlower from '../SVG/RightFlower'
import SmallFrame from '../SVG/SmallFrame'
type ILoadingBadgeOrCerSection = {
  type ?: "badge" | "certificate"
}

export default function LoadingBadgeOrCerSection({ type = "badge" } : ILoadingBadgeOrCerSection) {
  return (
    <section className="flex flex-col items-center pt-[62px] pb-[37px]">
      <div className="flex flex-row gap-[25px] mb-[45px]">
        <LeftFlower fill={type == "badge" ? "black" : "#FDB022"} />
        <div className="flex flex-col items-center">
          <Star5 fill={ type === "badge" ? "black" : "#FDB022"}/>
          {
            type === "badge" ?
            <p className="text-[64px] font-medium bg-gradient-to-r from-[#00B2FF]  to-[#AA00FF] to-80% text-transparent bg-clip-text">Your Badge</p>
            :
            <p className="text-[64px] font-medium bg-gradient-to-r from-[#EB00FF] via-[#651FFF] via-40% to-[#00B2FF] text-transparent bg-clip-text">Certificates</p>
          }
        </div>
        <RightFlower fill={type == "badge" ? "black" : "#FDB022"} />
      </div>

      <div className="pt-[20px]">
        <div className="flex flex-row justify-center">
          <div>
            <div className='animate-pulse h-[400px] w-[400px] bg-gray-300'></div>
          </div>
        </div>
      </div>
      
      <div className="border-[3px] border-blue-300 shadow-thin-more flex flex-col items-center px-[64px] py-[28px] mt-[75px] relative">
      <div className="absolute -top-2 -left-2 "><SmallFrame stroke={ type === "badge" ? "#3F51B5" : "#947EFB"}/></div>
        <div className="absolute -top-2 -right-2 "><SmallFrame stroke={ type === "badge" ? "#3F51B5" : "#947EFB"}/></div>
        <div className="absolute -bottom-2 -left-2 "><SmallFrame stroke={ type === "badge" ? "#3F51B5" : "#947EFB"}/></div>
        <div className="absolute -bottom-2 -right-2 "><SmallFrame stroke={ type === "badge" ? "#3F51B5" : "#947EFB"}/></div>
        <div className={"flex flex-col items-center"}>
          <p className="animate-pulse bg-gray-300 round-[2px] w-[392px] h-[44px] "></p>
          <p className="animate-pulse bg-gray-300 round-[2px] w-[220px] h-[38px] mt-[30px] mb-[10px]"></p>
          <p className="animate-pulse bg-gray-300 round-[2px] w-[167px] h-[38px]"></p>
        </div>
        
      </div>
    </section>
  )
}
