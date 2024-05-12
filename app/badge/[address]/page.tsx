'use client'
import Footer from "@/components/Footer";
import HintVerification from "@/components/Hint/HintVerification";
import Navbar from "@/components/Navbars/Navbar";
import NotFound from "@/components/NotFound";
import Check from "@/components/SVG/Check";
import Copy from "@/components/SVG/Copy";
import ExternalLink from "@/components/SVG/ExternalLink";
import LeftFlower from "@/components/SVG/LeftFlower";
import LinkIcon from "@/components/SVG/LinkIcon";
import RightFlower from "@/components/SVG/RightFlower";
import { API_getSpecificBadgeUser } from "@/lib/API";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FacebookShareButton, LineShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";

export default function Address({params} : Readonly<{ params : { address : string}}>) {
  const path = usePathname();
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isCopiedToken, setIsCopiedToken] = useState<boolean>(false);
  const [specificBadge, setSpecificBadge] = useState<any>();
  const [cannotFound, setCannotFound] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [windowPath, setWindowPath] = useState<string>("")

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

  useEffect(()=>{
    API_getSpecificBadgeUser(params.address)
    .then((res)=>{
      setSpecificBadge(res.data)
      setIsLoading(false)
    })
    .catch((err)=>{
      setCannotFound(true)
      console.log(err.response.data.message)
    })
    setWindowPath(window.location.origin + path)
  },[])

  if(cannotFound)
    return <NotFound />

  return (
    <>
      <Navbar isUser={true}/>
      <div className="flex flex-col items-center mt-[90px] pt-[44px] pb-[0px]">
        {/* Name badge */}
        <div className="flex flex-row items-center gap-[18px] ">
          <LeftFlower fill="black"/>
          {
            isLoading ? 
            <p className="bg-gray-300 animate-pulse w-[600px] h-[46px] rounded-[2px]"></p>
            :
            <p className="text-[48px] leading-[48px] font-medium uppercase">{specificBadge?.name}</p>

          }
          <RightFlower fill="black"/>
        </div>
        {/* Content 1 */}
        <div className="flex flex-col mt-[60px] mb-[34px]">
          <div className="flex flex-row gap-[42px]">
            {/* Badge Image */}
            <div className="flex flex-row justify-center items-center w-[536px] h-[431px] border-2 border-[#000000] rounded-[16px]">
              {
                isLoading ? 
                <div className="bg-gray-300 animate-pulse w-[360px] h-[360px] rounded-full"></div>
                :
                <img src={specificBadge?.imageInfo?.imageURL} alt="" className="h-[360px] " />
              }
            </div>
            {/* Detail 1 */}
            <div className="flex-col mt-[12px]">
              <div className="flex flex-row gap-[42px]">
                {
                  isLoading ?
                  <div className="regular24 flex flex-row gap-1 items-center">Issued by <div className="bg-gray-300 animate-pulse w-[200px] h-[32px] rounded-[2px]"></div></div>
                  :
                  <p className="regular24">Issued by <span className="light24 text-brand-800">{specificBadge?.issuedBy}</span></p>
                }
                {
                  isLoading ?
                  <div className="regular24 flex flex-row gap-1 items-center">Issued Date : <div className="bg-gray-300 animate-pulse w-[200px] h-[32px] rounded-[2px]"></div></div>
                  :
                  <p className="regular24">Issued Date : <span className="light24">{specificBadge?.issuedDate}</span></p>
                }
              </div>
              <div className="flex flex-row gap-[42px] mt-[22px] mb-[30px]">
                {
                  isLoading ?
                  <div className="regular24 flex flex-row gap-1 items-center">Issued to<div className="bg-gray-300 animate-pulse w-[300px] h-[32px] rounded-[2px]"></div></div>
                  :
                  <p className="regular24">Issued to <span className="light24">{specificBadge?.firstName + " " + specificBadge?.lastName}</span></p>
                }
                {
                  isLoading ?
                  <div className="regular24 flex flex-row gap-1 items-center">Expiration Date : <div className="bg-gray-300 animate-pulse w-[200px] h-[32px] rounded-[2px]"></div></div>
                  :
                  <p className="regular24">Expiration Date : <span className="light24">{specificBadge?.expireDate}</span></p>
                }
              </div>
              {/* Detail course */}
              {
                isLoading ?
                <div className="flex flex-col gap-[6px]">
                  <div className="bg-gray-300 animate-pulse w-[800px] h-[32px] rounded-[2px]"></div>
                  <div className="bg-gray-300 animate-pulse w-[800px] h-[32px] rounded-[2px]"></div>
                  <div className="bg-gray-300 animate-pulse w-[800px] h-[32px] rounded-[2px]"></div>
                </div>
                : 
                <p className="w-[838px] line-clamp-[7] light24 mb-[24px]">
                  {specificBadge?.descriptionCourse}
                </p>
              }
              {/* Link to course */}
              {
                (specificBadge?.linkCourse && !isLoading )  &&
                <Link href={specificBadge?.linkCourse} target="_blank">
                  <button className="flex flex-row items-center gap-[5px] px-[11px] py-[7px] border-[1.5px] border-black rounded-[14px]">
                    <ExternalLink stroke="#292929"/>
                    <p className="regular20">Course Detail</p>
                  </button>
                </Link>
              }
            </div>
          </div>
        </div>
        {/* Content 2*/}
        <div className="flex flex-row gap-[70px]">
          <div className="flex flex-col gap-[20px]">
            {/* Earning Criteria */}
            <div className="flex flex-col gap-2">
              <p className="regular24">Earning Criteria</p>
              {
                isLoading ?
                <div className="flex flex-col gap-[6px]">
                  <div className="bg-gray-300 animate-pulse w-[1000px] h-[32px] rounded-[2px]"></div>
                  <div className="bg-gray-300 animate-pulse w-[1000px] h-[32px] rounded-[2px]"></div>
                  <div className="bg-gray-300 animate-pulse w-[1000px] h-[32px] rounded-[2px]"></div>
                </div>
                : 
                <p className="light24 w-[1000px]">{specificBadge?.earningCriteria}</p>
              }
            </div>
            {/* Skills */}
            <div className="flex flex-col gap-2">
              <p className="regular24">Skills</p>
              {
                isLoading ?
                <div className="flex flex-wrap w-[1000px] gap-[10px]">
                  <div className="bg-gray-300 animate-pulse w-[116px] h-[32px] rounded"></div>
                  <div className="bg-gray-300 animate-pulse w-[116px] h-[32px] rounded"></div>
                  <div className="bg-gray-300 animate-pulse w-[116px] h-[32px] rounded"></div>
                  <div className="bg-gray-300 animate-pulse w-[116px] h-[32px] rounded"></div>
                </div>
                :
                <div className="flex flex-wrap w-[1000px] gap-[10px]">
                  {
                    specificBadge?.skill ? specificBadge?.skill?.map((skill : string)=>{
                      return <div key={skill} className="px-[12px] py-[3px] border border-brand-600 rounded-[4px]">
                        <p className="medium18 text-brand-600">{skill}</p>
                    </div>
                    })
                    :
                    <div>-</div>
                  }                
                </div>
              }
            </div>
            {/* Evidence URL */}
            <div className="flex flex-col gap-2">
              <p className="regular24">Evidence URL</p>
              <ul className="flex flex-col gap-1 list-disc ml-[40px] light20 underline cursor-pointer">
                {
                  specificBadge?.evidenceURL &&
                  <li><Link href={specificBadge?.evidenceURL} target="_blank">{specificBadge?.evidenceURL}</Link></li>
                }
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
              <button className={`bg-white px-[14px] py-[10px] border border-[#D9D9D9] rounded-lg flex flex-row items-center gap-[12px] ${isCopied && "gap-[8px]"}
                group-hover:bg-gray-50`}
                onClick={()=> {
                  navigator.clipboard.writeText(windowPath)
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
                url={windowPath}>
                  <div className="bg-[#1877F2] py-[15px] px-[12px] hover:bg-[#0053BF]
                    flex flex-row gap-[10px] rounded-lg
                    transition-all duration-500"
                  >
                    <img src="/social/facebook.svg" alt="" />
                    <p className="text-white medium20">Facebook</p>
                  </div>
              </FacebookShareButton> 
              <LineShareButton
                url={windowPath}
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
                url={windowPath}
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
                url={windowPath}
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
              <p className="regular24">Verify Badge</p>
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
                <p className={`${isCopiedToken && "hidden"} text-white medium20`}>Copy Token</p>
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
