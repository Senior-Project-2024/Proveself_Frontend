"use client"
import Navbar from "@/components/Navbars/Navbar"
import { useContext, useEffect } from "react"
import { AuthContext } from "@/context/AuthContext"
import { Section1 } from "@/components/HomeNotLogin/Section1"
import { Section2 } from "@/components/HomeNotLogin/Section2"
import { Section3 } from "@/components/HomeNotLogin/Section3"
import { Section4 } from "@/components/HomeNotLogin/Section4"
import Footer from "@/components/Footer"
import CertificateSection from "@/components/HomeLogin/CertificateSection"
import BadgeSection from "@/components/HomeLogin/BadgeSection"

export default function Home() {
  const {statusAuth, setStatusAuth} = useContext(AuthContext);
  const mockResponse = [
    {role : "user"},
    {role : "organize"}
  ]

  if(statusAuth?.isUserAuth == undefined){
    return <div></div>
  }

  return (
    <>
        <Navbar isUser={true} />
        {
          statusAuth?.isUserAuth ?
          <div className="pt-[100px]">
           <BadgeSection />
           <CertificateSection/>
          </div>
          :
          <div>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
          </div>
        }
        <Footer/>
        
    </>
  )
}
