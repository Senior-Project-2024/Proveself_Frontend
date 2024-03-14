'use client'
import Button from '@/components/Button';
import Navbar from '@/components/Navbars/Navbar'
import React, { useRef, useState } from 'react'
import { motion, useInView } from "framer-motion"
import { mockBadge } from '@/lib/data/mockBadgeCer';
import Footer from '@/components/Footer';


export default function Management() {
  const [statusManage, setStatusManage] = useState<"badge" | "certificate">("badge");
  const ref = useRef(null);
  const isInView = useInView(ref, {
      once: true,
  });
  const variants = {
    open: { opacity: 1, },
    closed: { opacity: 0, },
  }
  const [badge, setBadge] = useState(mockBadge);

  const deleteBadge = ( id : string ) => {
    const newBadge = badge.filter((data)=>{
      return data.id !== id;
    })
    setBadge([...newBadge])
  } 

  return (
    <div>
      <Navbar isUser={false}/>
      <section className="flex flex-col items-center mt-[90px] pt-[60px] pb-[66px]" ref={ref}>
        <p className="text-[64px] font-medium">Manage Badge & Certificate</p>
        <p className="light24 text-center w-[1100px] my-[45px]">ProveSelf's certificate happen from collection badge or online certificate for show specific skill of working. So E-learning platform can assign badge to be certificate.</p>
        <div className="w-[1720px] flex flex-row justify-between mb-[20px]">
          <div className="flex w-[280px] h-[52px] regular24">
            <button className={`flex-1 rounded-l-[8px] ${statusManage === "badge" ? "bg-brand-600 text-white border-brand-600" : "text-[#A0A0A0] border-r-0 border-[#CFD0D1]"} border transition-all duration-500`} 
              onClick={()=>setStatusManage("badge")}>
              Badge
            </button>
            <button className={`flex-1 rounded-r-[8px] ${statusManage === "certificate" ? "bg-brand-600 text-white border-brand-600" : "text-[#A0A0A0] border-l-0 border-[#CFD0D1]"} border transition-all duration-500 `} 
              onClick={()=>setStatusManage("certificate")}>
              Certificate
            </button>
          </div>
          {/* Create template button */}
          <motion.button className={`py-[10px] px-[24px] regular24 ${ statusManage === "badge" ? "flex" : "hidden"} items-center gap-[12px] bg-brand-600 text-white rounded-lg`}
            animate={statusManage === "badge" ? "open" : "closed"}
            variants={variants}
            transition={{duration:0.5, ease:"easeInOut"}}
          >
            <img src="/plus.svg" alt="" /> Create Badge Template
          </motion.button>
          <motion.button className={`py-[10px] px-[24px] regular24 ${ statusManage === "badge" ? "hidden " : "flex"} items-center gap-[12px] bg-brand-600 text-white rounded-lg`}
            animate={statusManage === "badge" ? "closed" : "open"}
            variants={variants}

            transition={{duration:0.5, ease:"easeInOut"}}
          >
            <img src="/plus.svg" alt="" /> Create Certificate Template
          </motion.button>
        </div>

        {/* list **Badge detail */}
        <motion.div className={`w-[1720px] max-h-[964px] rounded-xl shadow-thin ${statusManage === "badge" ? "block" : "hidden"} overflow-hidden`}
          initial={"closed"}
          animate={statusManage === "badge" ? "open" : "closed"}
          variants={variants}
          transition={{duration:0.5, ease:"easeInOut"}}
        >
          <div className="flex flex-row regular24 py-[20px]">
            <p className="ml-[68px]">Badge</p>
            <p className="ml-[147px]">Name</p>
            <p className="ml-[244px]">Description course</p>
            <p className="ml-[260px]">Earning Criteria</p>
            <p className="ml-[164px]">Expiration</p>
          </div>
          <div className="w-full h-[1px] bg-[#D0D0D0]"></div>

          <div className="flex flex-col overflow-y-scroll h-[780px] custom-scroll">
            {
              badge.map((badge, i)=>{
                return (
                  <motion.div className="flex flex-col items-center" key={badge.id}
                    custom={i}
                    initial={"closed"}
                    variants={{
                      open: i => ({
                        y: 0,
                        opacity: 1,
                        transition: {
                          delay : i * 0.08,
                          type: "spring", stiffness: 300, damping: 20
                        },
                      }),
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          delay : i * 0.08
                        },
                      },
                    }}
                    animate={statusManage === "badge" ? "open" : "closed"}
                    transition={{ type: "spring", stiffness: 300, damping: 24}}
                  >
                    <div className="flex flex-row py-[24px] light24 self-start justify-start items-center">
                      <img src="/badge_crop.png" alt="badge" className="w-[88px] ml-[61px]" />
                      <p className="ml-[67px] w-[212px] text-center">{badge.name}</p>
                      <p className="ml-[84px] w-[404px] left-[90px] line-clamp-3">{badge.descriptionCourse}</p>
                      <p className="ml-[46px] w-[404px] left-[90px] line-clamp-3">{badge.criteria}</p>
                      <div className="ml-[26px] w-[128px] text-center">{ badge.periodExpireYear > 0 && badge.periodExpireYear + " year" }
                        <p className="block">{ badge.periodExpireMonth > 0 && badge.periodExpireMonth + " month" }</p> 
                        <p className="block">{ badge.periodExpireDay > 0 && badge.periodExpireDay + " day" }</p> 
                      </div>
                      <button>
                        <img src="/edit.svg" alt="edit" className="ml-[63px]" />
                      </button>
                      <button onClick={ ()=>{ deleteBadge(badge.id) }}>
                        <img src="/trash.svg" alt="trash" className='ml-[17px]' />
                      </button>
                    </div>
                    <div className="w-[1660px] h-[1px] bg-[#D0D0D0]"></div>
                  </motion.div>
                )
              })
            }
            <div className="flex flex-col items-center">
              <div className="flex flex-row py-[24px] light24 self-start justify-start items-center">
                <img src="/badge_crop.png" alt="badge" className="w-[88px] ml-[61px]" />
                <p className="ml-[67px] w-[212px] text-center">Professtional IPFS</p>
                <p className="ml-[84px] w-[404px] left-[90px] line-clamp-3">AIS DIGITAL TALENT | THE BLOOM is a 12 weeks internship program for 3rd and 4th-year students in the Digital Technology </p>
                <p className="ml-[46px] w-[404px] left-[90px] line-clamp-3">Complete the internship program according to all requirements and conditions or success a long term and here this is some of Earning criteria l projects alongside Gestures and Body Parts Emojis based on people, which include different appearances, hand gestures, activities, professions, and family combinations</p>
                <p className="ml-[26px] w-[128px] text-center">2 year <br /> 11 month <br /> 23 day</p>
                <button>
                  <img src="/edit.svg" alt="edit" className="ml-[63px]" />
                </button>
                <button onClick={()=>{}}>
                  <img src="/trash.svg" alt="trash" className='ml-[17px]' />
                </button>
              </div>
              <div className="w-[1660px] h-[1px] bg-[#D0D0D0]"></div>
            </div>
          </div>
        </motion.div>

        {/* list **Certificate detail */}
        <motion.div className={`w-[1720px] max-h-[964px] rounded-xl shadow-thin ${statusManage === "certificate" ? "block" : "hidden"} overflow-hidden`}
          initial={"closed"}
          animate={statusManage === "certificate" ? "open" : "closed"}
          variants={variants}
          transition={{duration:0.5, ease:"easeInOut"}}
        >
          <div className="flex flex-row regular24 py-[20px]">
            <p className="ml-[58px]">Certificate</p>
            <p className="ml-[155px]">Name</p>
            <p className="ml-[235px]">Badge Required</p>
            <p className="ml-[262px]">Earning Criteria</p>
            <p className="ml-[178px]">Expiration</p>
          </div>
          <div className="w-full h-[1px] bg-[#D0D0D0]"></div>

          <div className="flex flex-col overflow-y-scroll h-[780px] custom-scroll">
            {
              mockBadge.map((badge, i)=>{
                return (
                  <motion.div className="flex flex-col items-center" key={badge.id}
                    custom={i}
                    initial={"closed"}
                    variants={{
                      open: i => ({
                        y: 0,
                        opacity: 1,
                        transition: {
                          delay : i * 0.08,
                          type: "spring", stiffness: 300, damping: 20
                        },
                      }),
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          delay : i * 0.08
                        },
                      },
                    }}
                    animate={statusManage === "certificate" ? "open" : "closed"}
                    transition={{ type: "spring", stiffness: 300, damping: 24}}
                  >
                    <div className="flex flex-row py-[24px] light24 self-start justify-start items-center">
                      <img src="/certificate.png" alt="badge" className="w-[184px] ml-[23px]" />
                      <p className="ml-[51px] w-[220px] text-center">{badge.name}</p>
                      <div className="flex flex-wrap w-[404px] ml-[51px] gap-[2px]">
                        <div className="py-[3px] px-[12px] border border-[#292929] rounded-[4px] text-blue-300 medium18">Complete React native </div>
                        <div className="py-[3px] px-[12px] border border-[#292929] rounded-[4px] text-blue-300 medium18">React native </div>
                        <div className="py-[3px] px-[12px] border border-[#292929] rounded-[4px] text-blue-300 medium18">ABC</div>
                      </div>
                      <p className="ml-[51px] w-[404px] left-[90px] line-clamp-3">{badge.criteria}</p>
                      <div className="ml-[26px] w-[128px] text-center">{ badge.periodExpireYear > 0 && badge.periodExpireYear + " year" }
                        <p className="block">{ badge.periodExpireMonth > 0 && badge.periodExpireMonth + " month" }</p> 
                        <p className="block">{ badge.periodExpireDay > 0 && badge.periodExpireDay + " day" }</p> 
                      </div>
                      <button>
                        <img src="/edit.svg" alt="edit" className="ml-[63px]" />
                      </button>
                      <button onClick={()=>{}}>
                        <img src="/trash.svg" alt="trash" className='ml-[17px]' />
                      </button>
                    </div>
                    <div className="w-[1660px] h-[1px] bg-[#D0D0D0]"></div>
                  </motion.div>
                )
              })
            }
            <div className="flex flex-col items-center">
              <div className="flex flex-row py-[24px] light24 self-start justify-start items-center">
                <img src="/badge_crop.png" alt="badge" className="w-[88px] ml-[61px]" />
                <p className="ml-[67px] w-[212px] text-center">Professtional IPFS</p>
                <p className="ml-[84px] w-[404px] left-[90px] line-clamp-3">AIS DIGITAL TALENT | THE BLOOM is a 12 weeks internship program for 3rd and 4th-year students in the Digital Technology </p>
                <p className="ml-[46px] w-[404px] left-[90px] line-clamp-3">Complete the internship program according to all requirements and conditions or success a long term and here this is some of Earning criteria l projects alongside Gestures and Body Parts Emojis based on people, which include different appearances, hand gestures, activities, professions, and family combinations</p>
                <p className="ml-[26px] w-[128px] text-center">2 year <br /> 11 month <br /> 23 day</p>
                <button>
                  <img src="/edit.svg" alt="edit" className="ml-[63px]" />
                </button>
                <button onClick={()=>{}}>
                  <img src="/trash.svg" alt="trash" className='ml-[17px]' />
                </button>
              </div>
              <div className="w-[1660px] h-[1px] bg-[#D0D0D0]"></div>
            </div>
          </div>
        </motion.div>
      </section>
      <Footer/>
    </div>
  )
}
