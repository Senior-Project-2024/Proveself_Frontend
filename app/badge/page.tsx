'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbars/Navbar'
import LeftFlower from '@/components/SVG/LeftFlower'
import Star5 from '@/components/SVG/Star5'
import RightFlower from '@/components/SVG/RightFlower'
import Slider from "react-slick";
import { mockBadge, mockCertificate, BadgeEachCorse } from '@/lib/data/mockBadgeCer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import NextArrow2 from '@/components/SVG/NextArrow2'
import PrevArrow2 from '@/components/SVG/PrevArrow2'
import Footer from '@/components/Footer'
import getCookieFunction from '@/helper/getCookieFunction'
import { API_getAllBadgeUser } from '@/lib/API'

export default function Badge() {
  const router = useRouter();
  const [badgeEachCorse, setBadgeEachCorse] = useState<any>([]);
  const [isLoading , setIsLoading] = useState<boolean>(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow2/>,
    prevArrow : <PrevArrow2/>
  };

  useEffect(()=>{
    const dataUser = getCookieFunction('data-user')
    API_getAllBadgeUser(dataUser.keyStoreJsonV3.address)
    .then((res : any)=>{
      console.log(res.data)
      setBadgeEachCorse(res.data)
      setIsLoading(false)
    })
    .catch((err)=>{
      console.log(err.response.data.message)
    })
  },[])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isUser={true}/>
      <div className="flex flex-col mt-[90px] items-center flex-1">
        <div className="flex flex-row gap-[25px] mt-[60px] mb-[75px]">
          <LeftFlower fill="black" />
          <div className="flex flex-col items-center">
            <Star5 fill="black"/>
            <p className="text-[64px] font-medium bg-gradient-to-r from-[#00B2FF]  to-[#AA00FF] to-80% text-transparent bg-clip-text">Badges</p>
          </div>
          <RightFlower fill="black" />
        </div>
        {/* Show all course */}
        <div className="flex flex-col gap-[120px] mb-[120px]">
        {/* Loading */}
        {
          isLoading && 
          <div className='py-[48px] px-[120px] w-[1740px] h-[850px] bg-white shadow-thin rounded-[14px] flex flex-col items-center gap-[46px]'>
            <div className="w-[400px] h-[72px] bg-gray-300 animate-pulse self-start rounded-md"></div>
            <div className="w-[1500px] h-[638px] bg-gray-300 animate-pulse self-start rounded-md"></div>
          </div>
        }
        {
          badgeEachCorse?.map((course: any)=>{
            return <div className="py-[48px] px-[120px] bg-white shadow-thin rounded-[14px] flex flex-col items-center gap-[46px] " key={course[0].name}>
            <p className="text-[48px] font-medium self-start">{course[0].issuedBy}</p>
            <div className='w-[1500px]'>
            {
              course.length <= 3 ? 
              <div className="flex flex-row pb-[40px] gap-[94px]" >
                {/* Show badge each course */}
                {
                  course.map((data: any, i : number)=>{
                    return( 
                        <div className='flex flex-col items-center bg-white shadow-thin rounded-[32px] w-[437px] pb-[22px]' key={data.id}>
                          <div className={`${ (i+1) % 2 == 0 ? "bg-blue-300" : "bg-brand-800" }  rounded-[32px] w-full h-[353px] flex justify-center items-center`} >
                            <img src={data.imageInfo.imageURL} alt="" className="w-[313px] h-[337px]"/>
                          </div>
                          <p className="medium30 text-blue-400 mt-[22px] mb-[18px]">{data.name}</p>
                          <p className="light16 w-[344px] h-[72px] line-clamp-3 mb-[20px] ">{data.descriptionCourse}</p>
                          <Link href={`/badge/${data.id}`}>
                            <button className="bg-brand-600 rounded-lg py-[10px] px-[30px] shadow-thin-more text-white medium20 border border-white hover:bg-brand-700">
                              More Detail
                            </button>
                          </Link>
                        </div>
                    )
                  })
                }
              </div>
              :
              <Slider {...settings}>
                {
                  course.map((data : any,i : number)=>{
                    return ( 
                    <div key={data.id} className="group ">
                      <div className="flex flex-row justify-center pb-[40px]">
                        <div className='flex flex-col items-center bg-white shadow-thin rounded-[32px] w-[437px] pb-[22px]'>
                          <div className={`${ (i+1) % 2 == 0 ? "bg-blue-300" : "bg-brand-800" }  rounded-[32px] w-full h-[353px] flex justify-center items-center`} >
                            <img src={data.imageInfo.imageURL} alt="" className="w-[313px] h-[337px]"/>
                          </div>
                          <p className="medium30 text-blue-400 mt-[22px] mb-[18px]">{data.name}</p>
                          <p className="light16 w-[344px] h-[72px] line-clamp-3 mb-[20px] ">{data.descriptionCourse}</p>
                          <Link href={`/badge/${data.id}`}>
                            <button className="bg-brand-600 rounded-lg py-[10px] px-[30px] shadow-thin-more text-white medium20 border border-white hover:bg-brand-700">
                              More Detail
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                  })
                }
              </Slider>
            }
            </div>    
          </div>
          })
        }
        </div>
      </div>
      <Footer/>
    </div>
  )
}
