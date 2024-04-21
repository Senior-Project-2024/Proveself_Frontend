'use client'
import Navbar from '@/components/Navbars/Navbar'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from "framer-motion"
import { mockTempleteBadge, mockTempleteCertificate } from '@/lib/data/mockBadgeCer';
import Footer from '@/components/Footer';
import BadgeItem from '@/components/Manage/BadgeItem';
import CertificateItem from '@/components/Manage/CertificateItem';
import { useRouter } from 'next/navigation';
import { API_getAllBadge } from '@/lib/API';


export default function Management() {
  const router = useRouter();
  const [statusManage, setStatusManage] = useState<"badge" | "certificate">("badge");
  const ref = useRef(null);
  const isInView = useInView(ref, {
      once: true,
  });
  const [badge, setBadge] = useState(mockTempleteBadge);
  const [certificate, setCertificate] = useState(mockTempleteCertificate);

  useEffect(()=>{
    API_getAllBadge()
    .then((res)=>{
      console.log(res.data)
      setBadge(res.data)
    }).catch((err)=>{
      console.log(err.response.data.message)
    })
  },[])
  
  const deleteBadge = ( id : string ) => {
    const newBadge = badge.filter((data)=>{
      return data.id !== id;
    })
    setBadge([...newBadge])
  }

  const deleteCertificate = ( id : string ) => {
    const newCeritifcate = certificate.filter((data)=>{
      return data.id !== id;
    })
    setCertificate([...newCeritifcate])
  }
  
  const variants = {
    open: { opacity: 1, },
    closed: { opacity: 0, },
  }
  const variantItem = {
    open: (i : number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay : i * 0.1,
        type: "spring", stiffness: 300, damping: 20
      },
    }),
    closed: {
      y: 50,
      opacity: 0,
    },
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
            onClick={()=> router.push("/organization/management/create-badge")}
          >
            <img src="/plus.svg" alt="" /> Create Badge Template
          </motion.button>
          <motion.button className={`py-[10px] px-[24px] regular24 ${ statusManage === "badge" ? "hidden " : "flex"} items-center gap-[12px] bg-brand-600 text-white rounded-lg`}
            animate={statusManage === "badge" ? "closed" : "open"}
            variants={variants}
            onClick={()=> router.push("/organization/management/create-certificate")}
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
          {/* Topic Badge */}
          <div className="flex flex-row regular24 py-[20px]">
            <p className="ml-[68px]">Badge</p>
            <p className="ml-[147px]">Name</p>
            <p className="ml-[236px]">Description course</p>
            <p className="ml-[230px]">Earning Criteria</p>
            <p className="ml-[148px]">Expiration</p>
          </div>
          <div className="w-full h-[1px] bg-[#D0D0D0]"></div>
          {/* list Badge */}
          <div className="flex flex-col overflow-y-scroll h-[780px] custom-scroll">
            {
              badge.map((badge, i)=>{
                return (
                  <motion.div className="flex flex-col items-center" key={badge.id}
                    custom={i}
                    initial={"closed"}
                    variants={variantItem}
                    animate={statusManage === "badge" ? "open" : "closed"}
                    transition={{ type: "spring", stiffness: 300, damping: 24}}
                  >
                    <BadgeItem badge={badge} deleteBadge={deleteBadge}/>
                  </motion.div>
                )
              })
            }
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
              certificate.map((certificate, i)=>{
                return (
                  <motion.div className="flex flex-col items-center" key={certificate.id}
                    custom={i}
                    initial={"closed"}
                    variants={variantItem}
                    animate={statusManage === "certificate" ? "open" : "closed"}
                    transition={{ type: "spring", stiffness: 300, damping: 24}}
                  >
                    <CertificateItem certificate={certificate} deleteCertificate={deleteCertificate} />
                  </motion.div>
                )
              })
            }
          </div>
        </motion.div>
      </section>
      <Footer/>
    </div>
  )
}
