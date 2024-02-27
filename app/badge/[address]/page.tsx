'use client'
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbars/Navbar";
import Check from "@/components/SVG/Check";
import Copy from "@/components/SVG/Copy";
import ExternalLink from "@/components/SVG/ExternalLink";
import LeftFlower from "@/components/SVG/LeftFlower";
import LinkIcon from "@/components/SVG/LinkIcon";
import RightFlower from "@/components/SVG/RightFlower";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Address({params} : Readonly<{ params : { address : string}}>) {
  const path = usePathname();
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isCopiedToken, setIsCopiedToken] = useState<boolean>(false);
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
        {/* Name badge */}
        <div className="flex flex-row items-center gap-[18px] ">
          <LeftFlower fill="black"/>
          <p className="text-[48px] leading-[48px] font-medium uppercase">Specialist Data Science</p>
          <RightFlower fill="black"/>
        </div>
        {/* Content 1 */}
        <div className="flex flex-col mt-[60px] mb-[34px]">
          <div className="flex flex-row gap-[42px]">
            {/* Badge Image */}
            <div className="flex flex-row justify-center items-center w-[536px] h-[431px] border-2 border-[#000000] rounded-[16px]">
              <img src="/badge_crop.png" alt="" className="w-[360px]" />
            </div>
            {/* Detail 1 */}
            <div className="flex-col mt-[12px]">
              <div className="flex flex-row gap-[42px]">
                <p className="regular24">Issued by <span className="light24 text-brand-800">Skoodio course</span></p>
                <p className="regular24">Issued Date : <span className="light24">25 December 2020</span></p>
              </div>
              <div className="flex flex-row gap-[42px] mt-[22px] mb-[30px]">
                <p className="regular24">Issued to <span className="light24">Pathinya Jongsupangpan</span></p>
                <p className="regular24">Expiration Date : <span className="light24">none</span></p>
              </div>
              {/* Detail course */}
              <p className="w-[838px] line-clamp-[7] light24 mb-[24px]">
                AIS DIGITAL TALENT | THE BLOOM is a 12 weeks internship program for 3rd and 4th-year students in the Digital Technology field who want to learn, develop skills, gain experience, and practice their working abilities through real projects alongside AIS's professionals in digital technology and innovation. The student will learn many courses on Technical Skills, People Skills, and Entrepreneurial Skills from AIS Academy, as well as opportunities to present their work on Demo day to AIS Management.
              </p>
              {/* Link to course */}
              <Button isTargetBlank={true} text="Course Detail" textColor="text-black" px="px-[11px]" py="py-[7px]" gap="gap-[5px]" bgcolor="bg-white" border="border-[1.5px]" borderColor="border-black" font="regular20" rounded="rounded-[14px]" link="https://www.skooldio.com/">
                <ExternalLink stroke="#292929"/>
              </Button>
            </div>
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
            {/* Evidence URL */}
            <div className="flex flex-col gap-2">
              <p className="regular24">Evidence URL</p>
              <ul className="flex flex-col gap-1 list-disc ml-[40px] light20 underline cursor-pointer">
                <li><Link href="/badge" target="_blank">Evidence 1 description</Link></li>
                <li><Link href="/badge" target="_blank">Evidence 2 description</Link></li>
              </ul>
            </div>
          </div>
          <div className="w-[3px] h-auto rounded-sm bg-[#D9D9D9]"></div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-[6px] mb-[16px]">
              <p className="regular24">Share your Badge</p>
              <img src="/share.svg" alt="" />
            </div>
            {/* Copy link */}
            <div className="group">
              <button className={`bg-white px-[14px] py-[10px] border border-gray-100 rounded-lg flex flex-row items-center gap-[12px] ${isCopied && "gap-[8px]"}
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
              <Button text="Facebook" bgcolor="bg-[#1877F2]" py="py-[15px]" px="px-[12px]" hover="hover:bg-[#0053BF]" gap="gap-[10px]">
                <img src="/social/facebook.svg" alt="" />
              </Button>
              <Button text="Line" bgcolor="bg-[#00C200]" py="py-[14.5px]" px="px-[16px]" hover="hover:bg-[#028D02]" gap="gap-[10px]">
                <img src="/social/line.svg" alt="" />
              </Button>
            </div>
            <div className="flex flex-row gap-2">
              <Button text="Twitter" bgcolor="bg-[#040404]" py="py-[14.5px]" px="px-[16px]" hover="hover:bg-[#2C2C2C]" gap="gap-[10px]">
                <img src="/social/X.svg" alt="" />
              </Button>
              <Button text="LinkedIn" bgcolor="bg-[#0A66C2]" py="py-[14.5px]" px="px-[16px]" hover="hover:bg-[#003163]" gap="gap-[10px]">
                <img src="/social/linkedIn.svg" alt="" />
              </Button>
            </div>
            <div className="flex flex-row gap-[6px] mt-[28px] mb-[16px]">
              <p className="regular24">Verify Badge</p>
              <img src="/help-circle.svg" alt="" />
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
