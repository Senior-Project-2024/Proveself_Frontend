import Footer from '@/components/Footer'
import Navbar from '@/components/Navbars/Navbar'
import { mockDatamintCer } from '@/lib/data/mockDatamintCer'
import React from 'react'

export default function IssueCertificate() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isUser={true}/>
      <div className="mt-[90px] pt-[56px] flex flex-col items-center gap-[70px] flex-1">
        <p className="text-[40px] font-medium">Issue Certificate</p>
        {
          mockDatamintCer.map((organize)=>{
            return <div key={organize.organizeName} className="flex flex-col gap-[30px] min-w-[1530px]">
              <p className="medium30">{organize.organizeName}</p>
              <div className="flex flex-col gap-[30px] px-[32px] py-[24px] shadow-thin-more rounded-[16px] border border-primary-100
                max-h-[820px] overflow-y-scroll
              ">
              {
                organize.certificates.map((certificate)=>{
                    return <div key={certificate.name} className="flex justify-between
                      rounded-[16px] border border-primary-100
                      px-[35px] py-[24px] 
                    ">
                      <img src={certificate?.imageURL} alt="" className="w-[261px] h-[186px]" />
                      <div className="flex flex-col gap-[20px]">
                        <p className="regular24">{certificate?.name}</p>
                        {/* Description */}
                        <p className="w-[1000px] font-light">{certificate?.description}</p>
                        <div className="flex flex-col gap-[10px]">
                          {/* Badge Required */}
                          <div className="flex flex-wrap gap-[10px] w-[1000px]">
                            {
                              certificate.badgeRequired.map((badge)=>{
                                return <div key={badge.name} className={`py-[3px] px-[12px] ${badge.isExist ? "border-blue-300" : "border-gray-100"} border  rounded-[4px]`}>
                                  <p className={`regular16 ${badge.isExist ? "text-blue-300" : "text-gray-100"} `}>{badge.name}</p>
                                </div>
                              })
                            }
                          </div>
                          <div className="flex justify-end w-[1105px]">
                            <button className="bg-brand-600 rounded-[8px] px-[20px] py-[8px] hover:bg-brand-700
                              disabled:bg-gray-100 disabled:bg-opacity-70
                            "
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
