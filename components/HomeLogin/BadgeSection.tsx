'use client'
import Slider from "react-slick";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import { useEffect, useState } from "react";
import { mockBadge } from "@/lib/data/mockBadgeCer";
import Link from "next/link";
import LeftFlower from "../SVG/LeftFlower";
import RightFlower from "../SVG/RightFlower";
import Star5 from "../SVG/Star5";
import BadgeSectionNoData from "./BadgeSectionNoData";
import { API_getAllBadgeUser } from "@/lib/API";
import getCookieFunction from "@/helper/getCookieFunction";
import LoadingBadgeOrCerSection from "./LoadingBadgeOrCerSection";
export default function BadgeSection() {
  const [currentBadge, setCurrentBadge] = useState<number>(0);
  const [allBadge, setAllBadge] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const settings2 = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: allBadge.length <= 3 ? 1 : 3, // slide show 1 when badge <= 3
    speed: 500,
    nextArrow: <NextArrow classname="hover:fill-black" currentSlide={currentBadge} setCurrentSlide={setCurrentBadge} maxSlide={allBadge.length - 1}/>,
    prevArrow: <PrevArrow classname="hover:fill-black" currentSlide={currentBadge} setCurrentSlide={setCurrentBadge} maxSlide={allBadge.length - 1}/>
  };

  useEffect(()=>{
    const dataUser = getCookieFunction('data-user')
    API_getAllBadgeUser(dataUser.keyStoreJsonV3.address)
    .then((res : any)=>{
      const getAllBadge : any[] = []
      res.data.forEach((badgeOfOrganize : any)=>{
        badgeOfOrganize.forEach((badge : any)=>{
          getAllBadge.push(badge)
        })
      },[])
      console.log(getAllBadge)
      setAllBadge(getAllBadge)
      setIsLoading(false)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  if(isLoading){
    return <LoadingBadgeOrCerSection/>
  }
  
  return (
    // If have atleast 1 badge
    allBadge?.length != 0 ? 
    <section className="flex flex-col items-center pt-[62px] pb-[37px]">
      <div className="flex flex-row gap-[25px] mb-[45px]">
        <LeftFlower fill="black" />
        <div className="flex flex-col items-center">
          <Star5 fill="black"/>
          <p className="text-[64px] font-medium bg-gradient-to-r from-[#00B2FF]  to-[#AA00FF] to-80% text-transparent bg-clip-text">Your Badge</p>
        </div>
        <RightFlower fill="black" />
      </div>
      {
        // If 1 badge
        allBadge?.length == 1 ?
          <div className="pt-[20px]">
            <div className="flex flex-row justify-center">
              <Link href={"/badge/"+allBadge[0]?.id} className=" image">
                <img src={allBadge[0]?.imageInfo?.imageURL} alt="" className="h-[400px]" />
              </Link>
            </div>
          </div>
        :
        // If more 2 badges
        <div className={`${allBadge.length <= 3 ? "w-[400px]" : "w-[1000px]"} `}>
          <Slider {...settings2} className="pb-[20px]">
          {
            allBadge?.map((data : any)=>{
              return <div className="pt-[40px]" key={data.id}>
                <div className="flex flex-row justify-center">
                  <Link href={"/badge/"+data.id} className=" image">
                    <img src={data?.imageInfo?.imageURL} alt="" className="w-[313px] h-[337px]" />
                  </Link>
                </div>
              </div>
            })
          }
          </Slider>
        </div>
      }
      <div className="border-[3px] border-blue-300 shadow-thin-more flex flex-col items-center px-[64px] py-[28px] mt-[75px] relative">
        <img src="/small-frame.svg" alt="" className="absolute -top-2 -left-2 " />
        <img src="/small-frame.svg" alt="" className="absolute -top-2 -right-2 " />
        <img src="/small-frame.svg" alt="" className="absolute -bottom-2 -left-2 " />
        <img src="/small-frame.svg" alt="" className="absolute -bottom-2 -right-2 " />
        {
          allBadge?.map((data: any, i: number)=>{
            return <div className={`${i == currentBadge ? "flex flex-col items-center" : "hidden"} `} key={data.id}>
              <p className="medium36 text-blue-300">{data.name}</p>
              <p className="medium30 mt-[30px] mb-[10px]">By <span className="text-blue-200">{data.issuedBy}</span> </p>
              <p className="regular30">{data.issuedDate}</p>
            </div>
          })
        }
      </div>
      <Link href={"/badge"} className="regular24 underline mt-[55px]">View all badge</Link>
    </section>
    :
    // If no badge
    <BadgeSectionNoData/>
    
  );
}
