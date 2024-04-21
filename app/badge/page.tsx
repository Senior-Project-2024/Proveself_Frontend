'use client'
import React from 'react'
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

export default function Badge() {
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow2/>,
    prevArrow : <PrevArrow2/>
  };
  return (
    <>
      <Navbar isUser={true}/>
      <div className="flex flex-col mt-[90px] items-center">
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
        {
          BadgeEachCorse.map((course)=>{
            return <div className="py-[48px] px-[120px] bg-white shadow-thin rounded-[14px] flex flex-col items-center gap-[46px] " key={course[0].name}>
            <p className="text-[48px] font-medium ">{course[0].issuer}</p>
            <div className='w-[1500px]'>
            {
              course.length <= 3 ? 
              <div className="flex flex-row pb-[40px] gap-[94px]" >
                {/* Show badge each course */}
                {
                  course.map((data,i)=>{
                    return( 
                        <div className='flex flex-col items-center bg-white shadow-thin rounded-[32px] w-[437px] pb-[22px]' key={data.id}>
                          <div className={`${ (i+1) % 2 == 0 ? "bg-blue-300" : "bg-brand-800" }  rounded-[32px] w-full h-[353px] flex justify-center items-center`} >
                            <img src="/badge_crop.png" alt="" className="w-[313px] h-[337px]"/>
                          </div>
                          <p className="medium30 text-blue-400 mt-[22px] mb-[18px]">{data.name}</p>
                          <p className="medium24">By <span className="text-blue-200">{data.issuer}</span></p>
                          <p className="regular24 mt-[6px] mb-[20px]">{data.date}</p>
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
                  course.map((data,i)=>{
                    return ( 
                    <div key={data.id} className="group ">
                      <div className="flex flex-row justify-center pb-[40px]">
                        <div className='flex flex-col items-center bg-white shadow-thin rounded-[32px] w-[437px] pb-[22px]'>
                          <div className={`${ (i+1) % 2 == 0 ? "bg-blue-300" : "bg-brand-800" }  rounded-[32px] w-full h-[353px] flex justify-center items-center`} >
                            <img src="/badge_crop.png" alt="" className="w-[313px] h-[337px]"/>
                          </div>
                          <p className="medium30 text-blue-400 mt-[22px] mb-[18px]">{data.name}</p>
                          <p className="medium24">By <span className="text-blue-200">{data.issuer}</span></p>
                          <p className="regular24 mt-[6px] mb-[20px]">25/02/2023</p>
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
    </>
  )
}
