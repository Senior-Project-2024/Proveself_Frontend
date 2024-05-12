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
import { API_getSpecificCertificateUser } from "@/lib/API";
import NotFound from "@/components/NotFound";


export default function Address({params} : Readonly<{ params : { address : string}}>) {
  const router = useRouter()
  const path = usePathname();
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isCopiedToken, setIsCopiedToken] = useState<boolean>(false);
  const [specificCertificate, setSpecificCertificate] = useState<any>();
  const [cannotFound, setCannotFound] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [windowPath, setWindowPath] = useState<string>("")
  
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

  useEffect(()=>{
    API_getSpecificCertificateUser(params.address)
    .then((res)=>{
      setSpecificCertificate(res.data)
      setIsLoading(false)
    })
    .catch((err)=>{
      setCannotFound(true)
      console.log(err.response.data.message)
    })
    setWindowPath(window.location.origin + path)
  },[])

  if(cannotFound)
    return <NotFound name="Certificate" />
  return (
    <>
      <Navbar isUser={true}/>
      <div className="flex flex-col items-center mt-[90px] pt-[44px] pb-[0px]">
        {/* Name Certificate */}
        <div className="flex flex-row items-center gap-[18px] ">
          <LeftFlower fill="#FDB022"/>
            {
              isLoading ? 
              <p className="bg-gray-300 animate-pulse w-[600px] h-[46px] rounded-[2px]"></p>
              :
              <p className="text-[48px] leading-[48px] font-medium uppercase">{specificCertificate?.name}</p>
            }
          <RightFlower fill="#FDB022"/>
        </div>
        {/* Image certificate*/}
        {
          isLoading ? 
          <div className="bg-gray-300 animate-pulse w-[720px] h-[487px] shadow-thin mt-[60px]"></div>
          :
          <img src={specificCertificate?.imageInfo?.imageURL} alt="" className="w-[720px] h-[487px] shadow-thin mt-[60px]" />
        }
        {
          isLoading && <div className="flex flex-row gap-[40px] my-[60px]">
            <div className="bg-gray-300 w-[143px] h-[154px] animate-pulse rounded-[2px]"></div>
            <div className="bg-gray-300 w-[143px] h-[154px] animate-pulse rounded-[2px]"></div>
            <div className="bg-gray-300 w-[143px] h-[154px] animate-pulse rounded-[2px]"></div>
            <div className="bg-gray-300 w-[143px] h-[154px] animate-pulse rounded-[2px]"></div>
            <div className="bg-gray-300 w-[143px] h-[154px] animate-pulse rounded-[2px]"></div>
            <div className="bg-gray-300 w-[143px] h-[154px] animate-pulse rounded-[2px]"></div>
          </div>
        }
        {/* Badge Slider */}
        {
          (mockBadge.length <= 6) ?
          <div className="flex flex-row gap-[40px] my-[60px]">
            {
              specificCertificate?.fullBadgeRequire?.map((data : any, i : number)=>{
                return (
                  // If found tokenId is User have badge in SmartContact
                  data?.tokenId &&
                  <div className="" key={data.id}>
                    <div className="flex flex-col items-center gap-[10px]">
                      <Link href={"/certificate/"+data.tokenId} target="_blank" className="image">
                        <img src={data.imageInfo.imageURL} alt="" className="w-[148px] h-[148px]" />
                      </Link>
                      <Link href={"/certificate/"+data.tokenId} target="_blank" className="w-[178px] text-center">{data.name}</Link>
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
                specificCertificate?.fullBadgeRequire?.map((data : any, i: number)=>{
                  return ( 
                    // If found tokenId is User have badge in SmartContact
                    data?.tokenId &&
                    <div className="" key={data.id}>
                      <div className="flex flex-col items-center gap-[10px]">
                        <Link href={"/certificate/"+data.tokenId} target="_blank" className="image">
                          <img src={data.imageInfo.imageURL} alt="" className="w-[148px] h-[148px]" />
                        </Link>
                        <Link href={"/certificate/"+data.tokenId} target="_blank" className="w-[178px] text-center">{data.name}</Link>
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
            <p className="light24 w-[900px]">{specificCertificate?.descriptionCourse}</p>
          </div>
          <div className="flex flex-col gap-[21px] items-end mt-[30px]">
            <p className="regular24">Issued by <span className="light24 text-brand-800">{specificCertificate?.issuedBy}</span></p>
            <p className="regular24">Issued to <span className="light24">{specificCertificate?.firstName + " " + specificCertificate?.lastName}</span></p>
            <p className="regular24">Issued Date : <span className="light24">{specificCertificate?.issuedDate}</span></p>
            <p className="regular24">Expiration Date : <span className="light24">{specificCertificate?.expireDate}</span></p>
          </div>
        </div>
        {/* Content 2*/}
        <div className="flex flex-row gap-[60px]">
          <div className="flex flex-col gap-[20px]">
            {/* Earning Criteria */}
            <div className="flex flex-col gap-2">
              <p className="regular24">Earning Criteria</p>
              <p className="light24 w-[1000px]">{specificCertificate?.earningCriteria}</p>
            </div>
            {/* Skills */}
            {
              specificCertificate?.skill && 
              <div className="flex flex-col gap-2">
                <p className="regular24">Skills</p>
                <div className="flex flex-wrap w-[1000px] gap-[10px]">
                  {
                    specificCertificate?.skill ? specificCertificate?.skill?.map((skill : string)=>{
                      return <div key={skill} className="px-[12px] py-[3px] border border-brand-600 rounded-[4px]">
                        <p className="medium18 text-brand-600">{skill}</p>
                      </div>
                    })
                    :
                    <div>-</div>
                  }
                  
                </div>
              </div>
            }
            
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
