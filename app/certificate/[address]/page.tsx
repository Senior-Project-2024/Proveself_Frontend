'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbars/Navbar";
import Check from "@/components/SVG/Check";
import Copy from "@/components/SVG/Copy";
import { mockBadge } from "@/lib/data/mockBadgeCer";
import LeftFlower from "@/components/SVG/LeftFlower";
import LinkIcon from "@/components/SVG/LinkIcon";
import NextArrow2 from "@/components/SVG/NextArrow2";
import PrevArrow2 from "@/components/SVG/PrevArrow2";
import RightFlower from "@/components/SVG/RightFlower";
import Link from "next/link";
import { usePathname , useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import HintVerification from "@/components/Hint/HintVerification";
import { FacebookShareButton, LineShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";


export default function Address({params} : Readonly<{ params : { address : string}}>) {
  const router = useRouter()
  const path = usePathname();
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isCopiedToken, setIsCopiedToken] = useState<boolean>(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow2 classnameSvg="w-[10px] h-[16px]" stroke="white" classname="py-[12px] pl-[16px] pr-[13px] bg-brand-500 hover:bg-brand-600"/>,
    prevArrow : <PrevArrow2 classnameSvg="w-[10px] h-[16px]" stroke="white" classname="py-[12px] pl-[14px] pr-[16px] bg-brand-500 hover:bg-brand-600" />
  };
  useEffect(()=>{
    if(isCopied){
      setTimeout(()=>{
        setIsCopied(false)
      }, 2000)
    }
    if(isCopiedToken){
      setTimeout(()=>{
        setIsCopiedToken(false)
      }, 2000)
    }
  },[isCopied, isCopiedToken])
  return (
    <>
      <Navbar isUser={true}/>
      <div className="flex flex-col items-center mt-[90px] pt-[44px] pb-[0px]">
        {/* Name Certificate */}
        <div className="flex flex-row items-center gap-[18px] ">
          <LeftFlower fill="#FDB022"/>
          <p className="text-[48px] leading-[48px] font-medium uppercase">Specialist react native</p>
          <RightFlower fill="#FDB022"/>
        </div>
        {/* Image certificate*/}
        <img src="/certificate.png" alt="" className="w-[720px] h-[487px] shadow-thin mt-[60px]" />
        {/* Badge Slider */}
        {
          (mockBadge.length <= 6) ?
          <div className="flex flex-row gap-[40px] my-[60px]">
            {
               mockBadge.map((data, i)=>{
                return ( 
                  <div className="" key={data.id}>
                   <div className="flex flex-col items-center gap-[10px]">
                      <Link href={"/certificate/"+data.id} className="image">
                        <img src={data.img} alt="" className="w-[143px] h-[154px]" />
                      </Link>
                      <Link href={"/certificate/"+data.id} className="w-[178px] text-center">{data.name}</Link>
                    </div>
                  </div>
                )
               })
            }
          </div>
          :  
          <div className="w-[1200px] my-[60px]">
            <Slider {...settings}>
              {
                mockBadge.map((data, i)=>{
                  return ( 
                    <div className="" key={data.id}>
                      <div className="flex flex-col items-center gap-[10px]">
                        <Link href={"/certificate/"+data.id} className="image">
                          <img src={data.img} alt="" className="w-[143px] h-[154px]" />
                        </Link>
                        <Link href={"/certificate/"+data.id} className="w-[178px] text-center">{data.name}</Link>
                      </div>
                  </div>
                )
                })
              }
            </Slider>
          </div>
        }
        {/* description and other */}
        <div className="flex flex-row mb-[40px] justify-between w-[1395px]">
          <div className="flex flex-col gap-2">
            <p className="regular24">Description</p>
            <p className="light24 w-[900px]">AIS DIGITAL TALENT | THE BLOOM is a 12 weeks internship program for 3rd and 4th-year students in the Digital Technology field who want to learn, develop skills, gain experience, and practice their working abilities through real projects alongside AIS's professionals in digital technology and innovation. The student will learn many courses on Technical Skills, People Skills, and Entrepreneurial Skills from AIS Academy, as well as opportunities to present their work on Demo day to AIS Management.</p>
          </div>
          <div className="flex flex-col gap-[21px] items-end mt-[30px]">
            <p className="regular24">Issued by <span className="light24 text-brand-800">Skoodio course</span></p>
            <p className="regular24">Issued Date : <span className="light24">25 December 2020</span></p>
            <p className="regular24">Issued to <span className="light24">Pathinya Jongsupangpan</span></p>
            <p className="regular24">Expiration Date : <span className="light24">none</span></p>
          </div>
        </div>
        {/* Content 2*/}
        <div className="flex flex-row gap-[50px]">
          <div className="flex flex-col gap-[20px]">
            {/* Earning Criteria */}
            <div className="flex flex-col gap-2">
              <p className="regular24">Earning Criteria</p>
              <p className="light24 w-[1000px]">Complete the internship program according to all requirements and conditions or success a long term and here this is some of Earning criteria l projects alongside Gestures and Body Parts Emojis based on people, which include different appearances, hand gestures, activities, professions, and family combinations</p>
            </div>
            {/* Skills */}
            <div className="flex flex-col gap-2">
              <p className="regular24">Skills</p>
              <div className="flex flex-wrap w-[1000px] gap-[10px]">
                <div className="px-[12px] py-[3px] border border-brand-600 rounded-[4px]">
                  <p className="medium18 text-brand-600">Calculate</p>
                </div>
                <div className="px-[12px] py-[3px] border border-brand-600 rounded-[4px]">
                  <p className="medium18 text-brand-600">Calculate</p>
                </div>
                <div className="px-[12px] py-[3px] border border-brand-600 rounded-[4px]">
                  <p className="medium18 text-brand-600">Calculate</p>
                </div>
                <div className="px-[12px] py-[3px] border border-brand-600 rounded-[4px]">
                  <p className="medium18 text-brand-600">Calculate</p>
                </div>
                <div className="px-[12px] py-[3px] border border-brand-600 rounded-[4px]">
                  <p className="medium18 text-brand-600">Calculate</p>
                </div>
                <div className="px-[12px] py-[3px] border border-brand-600 rounded-[4px]">
                  <p className="medium18 text-brand-600">Calculate</p>
                </div>
                <div className="px-[12px] py-[3px] border border-brand-600 rounded-[4px]">
                  <p className="medium18 text-brand-600">Calculate</p>
                </div>
                <div className="px-[12px] py-[3px] border border-brand-600 rounded-[4px]">
                  <p className="medium18 text-brand-600">Calculate</p>
                </div>
                <div className="px-[12px] py-[3px] border border-brand-600 rounded-[4px]">
                  <p className="medium18 text-brand-600">Calculate</p>
                </div>
                <div className="px-[12px] py-[3px] border border-brand-600 rounded-[4px]">
                  <p className="medium18 text-brand-600">Calculate</p>
                </div>
                <div className="px-[12px] py-[3px] border border-brand-600 rounded-[4px]">
                  <p className="medium18 text-brand-600">Calculate</p>
                </div>
                <div className="px-[12px] py-[3px] border border-brand-600 rounded-[4px]">
                  <p className="medium18 text-brand-600">Calculate</p>
                </div>
                <div className="px-[12px] py-[3px] border border-brand-600 rounded-[4px]">
                  <p className="medium18 text-brand-600">Calculate</p>
                </div>
                <div className="px-[12px] py-[3px] border border-brand-600 rounded-[4px]">
                  <p className="medium18 text-brand-600">Calculate</p>
                </div>
                <div className="px-[12px] py-[3px] border border-brand-600 rounded-[4px]">
                  <p className="medium18 text-brand-600">Calculate</p>
                </div>
              </div>
            </div>
            
          </div>
          <div className="w-[3px] h-auto rounded-sm bg-[#D9D9D9]"></div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-[6px] mb-[16px]">
              <p className="regular24">Share your Certificate</p>
              <img src="/share.svg" alt="" />
            </div>
            {/* Copy link */}
            <div className="group">
              <button className={`bg-white px-[14px] py-[10px] border border-[#D9D9D9] rounded-lg flex flex-row items-center gap-[12px] ${isCopied && "gap-[8px]"}
                group-hover:bg-gray-50`}
                onClick={()=> {
                  navigator.clipboard.writeText(path)
                  setIsCopied(true);
                }}>
                {
                  isCopied ? 
                  <Check stroke="#7F56D9"/>
                  :
                  <LinkIcon stroke="#7F56D9"/>
                }
                <p className={`${isCopied && "hidden"} text-brand-600 medium20`}>Copy link</p>
                <p className={`${isCopied ? "block" : "hidden"} text-brand-600 medium20`}>Copied!</p>
              </button>
            </div>
            <div className="flex flex-row gap-2 mt-[16px] mb-[12px]">
              <FacebookShareButton
                  url={"https://portfolio-teal-sigma-86.vercel.app/"}>
                    <div className="bg-[#1877F2] py-[15px] px-[12px] hover:bg-[#0053BF]
                      flex flex-row gap-[10px] rounded-lg
                      transition-all duration-500"
                    >
                      <img src="/social/facebook.svg" alt="" />
                      <p className="text-white medium20">Facebook</p>
                    </div>
                </FacebookShareButton> 
                <LineShareButton
                  url={"https://portfolio-teal-sigma-86.vercel.app/"}
                >
                  <div className="bg-[#00C200] py-[15px] px-[12px] hover:bg-[#028D02]
                    flex flex-row gap-[10px] rounded-lg
                    transition-all duration-500"
                  >
                    <img src="/social/line.svg" alt="" />
                    <p className="text-white medium20">Line</p>
                  </div>
                </LineShareButton>
            </div>
            <div className="flex flex-row gap-2 z-10">
              <TwitterShareButton
                  url={"https://portfolio-teal-sigma-86.vercel.app/"}
                >
                  <div className="bg-[#040404] py-[15px] px-[12px] hover:bg-[#2C2C2C]
                    flex flex-row gap-[10px] rounded-lg
                    transition-all duration-500"
                  >
                    <img src="/social/X.svg" alt="" />
                    <p className="text-white medium20">Twitter</p>
                  </div>
                </TwitterShareButton>
                <LinkedinShareButton
                  url={"https://portfolio-teal-sigma-86.vercel.app/"}
                >
                  <div className="bg-[#0A66C2] py-[15px] px-[12px] hover:bg-[#003163]
                    flex flex-row gap-[10px] rounded-lg
                    transition-all duration-500"
                  >
                    <img src="/social/linkedIn.svg" alt="" />
                    <p className="text-white medium20">LinkedIn</p>
                  </div>
                </LinkedinShareButton>
            </div>
            <div className="flex flex-row gap-[6px] mt-[28px] mb-[16px]">
              <p className="regular24">Verify Certificate</p>
              <HintVerification/>
            </div>
            <div className="group">
              <button className={`bg-brand-600 px-[15px] py-[10px] rounded-lg flex flex-row items-center gap-[12px] ${isCopiedToken && "gap-[8px]"}
                group-hover:bg-brand-700`}
                onClick={()=> {
                  navigator.clipboard.writeText(params.address)
                  setIsCopiedToken(true);
                }}>
                {
                  isCopiedToken ? 
                  <Check stroke="white"/>
                  :
                  <Copy className="stroke-white"/>
                }
                <p className={`${isCopiedToken && "hidden"} text-white medium20`}>Copy Address</p>
                <p className={`${isCopiedToken ? "block" : "hidden"} text-white medium20`}>Copied!</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
