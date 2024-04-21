'use client'
import Slider from "react-slick";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import { useState } from "react";
import { mockCertificate } from "@/lib/data/mockBadgeCer";
import Link from "next/link";
import LeftFlower from "../SVG/LeftFlower";
import RightFlower from "../SVG/RightFlower";
import Star5 from "../SVG/Star5";
import SmallFrame from "../SVG/SmallFrame";
import CertificateSectionNoData from "./CertificateSectionNoData";
export default function CertificateSection() {
  const [currentCertificate, setCurrentCertificate] = useState<number>(0);
  const settings2 = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: mockCertificate.length <= 3 ? 1 : 3, // slide show 1 when Certificate less than and equal 3
    speed: 500,
    nextArrow: <NextArrow classname="fill-blue-100 hover:fill-blue-300" currentSlide={currentCertificate} setCurrentSlide={setCurrentCertificate} maxSlide={mockCertificate.length - 1}/>,
    prevArrow: <PrevArrow classname="fill-blue-100 hover:fill-blue-300" currentSlide={currentCertificate} setCurrentSlide={setCurrentCertificate} maxSlide={mockCertificate.length - 1}/>
  };
  return (
    // If have atleast 1 certificate
    mockCertificate.length != 0 ? 
    <section className="flex flex-col items-center pt-[62px] pb-[37px] bg-[#F9FAFB] ">
      <div className="flex flex-row gap-[25px] mb-[45px]">
        <LeftFlower fill="#FDB022" />
        <div className="flex flex-col items-center">
          <Star5 fill="#FDB022"/>
          <p className="text-[64px] font-medium bg-gradient-to-r from-[#EB00FF] via-[#651FFF] via-40% to-[#00B2FF] text-transparent bg-clip-text">Your Certificate</p>
        </div>
        <RightFlower fill="#FDB022" />
      </div>
      {
        // If 1 certificate
        mockCertificate.length === 1 ? 
        <div className="pt-[20px]">
          <div className="flex flex-row justify-center">
            <Link href={"/badge/"+mockCertificate[0].id} className=" image">
              <img src={mockCertificate[0].img} alt="" className="h-[350px]" />
            </Link>
          </div>
        </div>
        :
        // If more 2 certificates
        <div className={`${mockCertificate.length <= 3 ? "w-[600px]" : "w-[1400px]"}`}>
          <Slider {...settings2} className="pb-[20px]">
          {
            mockCertificate?.map((data)=>{
              return <div className="pt-[40px]" key={data.id}>
                <div className="h-full flex flex-row justify-center">
                  <Link href={"/certificate/"+data.id} className="image">
                    {/* <p>{data.name}</p> */}
                    <img src={data.img} alt="" className="w-[445px] h-[301px] " />
                  </Link>
                </div>
              </div>
            })
          }
          </Slider>
        </div>
      }
      <div className="border-[3px] border-[#947EFB] shadow-thin-more flex flex-col items-center px-[64px] py-[28px] mt-[75px] relative ">
        <div className="absolute -top-2 -left-2 "><SmallFrame stroke="#947EFB"/></div>
        <div className="absolute -top-2 -right-2 "><SmallFrame stroke="#947EFB"/></div>
        <div className="absolute -bottom-2 -left-2 "><SmallFrame stroke="#947EFB"/></div>
        <div className="absolute -bottom-2 -right-2 "><SmallFrame stroke="#947EFB"/></div>
        {
          mockCertificate.map((data, i)=>{
            return <div className={`${i == currentCertificate ? "flex flex-col items-center" : "hidden"} `} key={data.id}>
              <p className="medium36 text-brand-700">{data.name}</p>
              <p className="medium30 mt-[30px] mb-[10px]">By <span className="text-blue-200">{data.issuer}</span> </p>
              <p className="regular30">{data.date}</p>
            </div>
          })
        }
      </div>
      <Link href={"/certificate"} className="regular24 underline mt-[55px]">View all certificate</Link>
    </section>
    :
    // If no badge
    <CertificateSectionNoData/>
  );
}
