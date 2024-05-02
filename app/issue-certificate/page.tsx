'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbars/Navbar'
import getCookieFunction from '@/helper/getCookieFunction'
import { API_certificateUserCanMint, API_mintCertificate } from '@/lib/API'
import { mockDatamintCer } from '@/lib/data/mockDatamintCer'
import React, { useEffect, useRef, useState } from 'react'
import { useToast } from "@chakra-ui/react";

export default function IssueCertificate() {
  const [certificateCanMint, setCertificateCanMint] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const toast = useToast()
  const toastIdRef = useRef<any>(null)

  useEffect(()=>{
    const dataUser = getCookieFunction('data-user')
    API_certificateUserCanMint(dataUser.keyStoreJsonV3.address)
    .then((res : any)=>{
      console.log(res.data)
      setCertificateCanMint(res.data)
      setIsLoading(false)
    })
    .catch((err)=>{
      console.log(err.response.data.message)
    })
  },[])

  async function mintCertificate(id : string){
    const dataUser = getCookieFunction('data-user')
    toastIdRef.current = toast({
      title: 'Issuing certificate...',
      description: "Loading",
      status: 'loading',
      duration: 40000,
      isClosable: false,
    })
    try{
      await API_mintCertificate(dataUser.keyStoreJsonV3.address , id)
      toast.update(toastIdRef.current,{
        title: 'Issue successful.',
        description: "You've issue successful successful.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      window.location.href = "/";
    }catch(err){
      console.log(err);
      toast.update(toastIdRef.current,{
        title: 'Issue Fail.' ,
        description: "Issue Fail.",
        status: 'error',
        duration: 10000,
        isClosable: true,
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isUser={true}/>
      <div className="mt-[90px] pt-[56px] flex flex-col items-center gap-[70px] flex-1">
        <p className="text-[40px] font-medium">Issue Certificate</p>
        {
          isLoading && 
          <div className='flex flex-col gap-[30px]'>
            <p className="bg-gray-300 animate-pulse w-[500px] h-[46px] rounded-[2px]"></p>
            <div className="flex flex-col gap-[30px] px-[32px] py-[24px] shadow-thin-more rounded-[16px] border border-primary-100 h-[820px] w-[1530px]">
              <div className="flex justify-between
                rounded-[16px] border border-primary-100
                px-[35px] py-[24px] 
                ">
                <div className="bg-gray-300 animate-pulse w-[186px] h-[186px] rounded-full"></div>
                <div className="flex flex-col gap-[20px]">
                  <p className="bg-gray-300 animate-pulse w-[200px] h-[32px] rounded-[2px]"></p>
                  {/* Description */}
                  <p className="bg-gray-300 animate-pulse w-[200px] h-[24px] rounded-[2px]"></p>
                  <div className="flex flex-col gap-[10px]">
                    {/* Badge Required */}
                    <div className="flex flex-wrap gap-[10px] w-[1000px]">
                      <div className="bg-gray-300 animate-pulse w-[100px] h-[23px] rounded-[2px]"></div>
                      <div className="bg-gray-300 animate-pulse w-[100px] h-[23px] rounded-[2px]"></div>
                      <div className="bg-gray-300 animate-pulse w-[100px] h-[23px] rounded-[2px]"></div>
                      <div className="bg-gray-300 animate-pulse w-[100px] h-[23px] rounded-[2px]"></div>
                    </div>
                    <div className="flex justify-end w-[1105px]">
                      <div className="bg-gray-300 rounded-[8px] px-[20px] py-[8px] ">
                        <p className="regular20 text-white opacity-0">Issue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between
                rounded-[16px] border border-primary-100
                px-[35px] py-[24px] 
                ">
                <div className="bg-gray-300 animate-pulse w-[186px] h-[186px] rounded-full"></div>
                <div className="flex flex-col gap-[20px]">
                  <p className="bg-gray-300 animate-pulse w-[200px] h-[32px] rounded-[2px]"></p>
                  {/* Description */}
                  <p className="bg-gray-300 animate-pulse w-[200px] h-[24px] rounded-[2px]"></p>
                  <div className="flex flex-col gap-[10px]">
                    {/* Badge Required */}
                    <div className="flex flex-wrap gap-[10px] w-[1000px]">
                      <div className="bg-gray-300 animate-pulse w-[100px] h-[23px] rounded-[2px]"></div>
                      <div className="bg-gray-300 animate-pulse w-[100px] h-[23px] rounded-[2px]"></div>
                      <div className="bg-gray-300 animate-pulse w-[100px] h-[23px] rounded-[2px]"></div>
                      <div className="bg-gray-300 animate-pulse w-[100px] h-[23px] rounded-[2px]"></div>
                    </div>
                    <div className="flex justify-end w-[1105px]">
                      <div className="bg-gray-300 rounded-[8px] px-[20px] py-[8px] ">
                        <p className="regular20 text-white opacity-0">Issue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between
                rounded-[16px] border border-primary-100
                px-[35px] py-[24px] 
                ">
                <div className="bg-gray-300 animate-pulse w-[186px] h-[186px] rounded-full"></div>
                <div className="flex flex-col gap-[20px]">
                  <p className="bg-gray-300 animate-pulse w-[200px] h-[32px] rounded-[2px]"></p>
                  {/* Description */}
                  <p className="bg-gray-300 animate-pulse w-[200px] h-[24px] rounded-[2px]"></p>
                  <div className="flex flex-col gap-[10px]">
                    {/* Badge Required */}
                    <div className="flex flex-wrap gap-[10px] w-[1000px]">
                      <div className="bg-gray-300 animate-pulse w-[100px] h-[23px] rounded-[2px]"></div>
                      <div className="bg-gray-300 animate-pulse w-[100px] h-[23px] rounded-[2px]"></div>
                      <div className="bg-gray-300 animate-pulse w-[100px] h-[23px] rounded-[2px]"></div>
                      <div className="bg-gray-300 animate-pulse w-[100px] h-[23px] rounded-[2px]"></div>
                    </div>
                    <div className="flex justify-end w-[1105px]">
                      <div className="bg-gray-300 rounded-[8px] px-[20px] py-[8px] ">
                        <p className="regular20 text-white opacity-0">Issue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        {
          certificateCanMint?.map((organize : any)=>{
            return <div key={organize.organizeName} className="flex flex-col gap-[30px] min-w-[1530px]">
              <p className="medium30">{organize.organizeName}</p>
              <div className="flex flex-col gap-[30px] px-[32px] py-[24px] shadow-thin-more rounded-[16px] border border-primary-100
                max-h-[820px] overflow-y-scroll
              ">
              {
                organize.certificates.map((certificate : any)=>{
                    return <div key={certificate.name} className="flex justify-between items-center
                      rounded-[16px] border border-primary-100
                      px-[35px] py-[24px] 
                    ">
                      <img src={certificate?.imageInfo.imageURL} alt="" className="w-[261px] h-[186px]" />
                      <div className="flex flex-col gap-[20px]">
                        <p className="regular24">{certificate?.name}</p>
                        {/* Description */}
                        <p className="w-[1000px] font-light">{certificate?.descriptionCourse}</p>
                        <div className="flex flex-col gap-[10px]">
                          {/* Badge Required */}
                          <div className="flex flex-wrap gap-[10px] w-[1000px]">
                            {
                              certificate.badgeRequiredResult.map((badge : { badgeName : string, isExist : boolean} )=>{
                                return <div key={badge.badgeName} className={`py-[3px] px-[12px] ${badge.isExist ? "border-blue-300" : "border-gray-100"} border  rounded-[4px]`}>
                                  <p className={`regular16 ${badge.isExist ? "text-blue-300" : "text-gray-100"} `}>{badge.badgeName}</p>
                                </div>
                              })
                            }
                          </div>
                          <div className="flex justify-end w-[1105px]">
                            <button className="bg-brand-600 rounded-[8px] px-[20px] py-[8px] hover:bg-brand-700
                              disabled:bg-gray-100 disabled:bg-opacity-70
                            "
                              onClick={()=>{mintCertificate(certificate._id)}}
                              disabled={!certificate.canMint}
                            >
                              <p className="regular20 text-white">Issue</p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                })
              }
              </div>
            </div>
          })
        }
      </div>
      <Footer/>
    </div>
  )
}
