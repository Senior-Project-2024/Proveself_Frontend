'use client'
import Footer from "@/components/Footer";
import { Section1 } from "@/components/HomeNotLogin/organization/Section1";
import { Section2 } from "@/components/HomeNotLogin/organization/Section2";
import { Section3 } from "@/components/HomeNotLogin/Section3";
import { Section4 } from "@/components/HomeNotLogin/organization/Section4";
import Navbar from "@/components/Navbars/Navbar"
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect } from "react";
export default function Organization() {
  const {statusAuth} = useContext(AuthContext);

  if(statusAuth?.isOrganizeAuth == undefined){
    return <div></div>
  }

  return (
    <>
        <Navbar isUser={false} />
        {
          statusAuth?.isOrganizeAuth ?
          <div className="pt-[90px]">
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
          </div>
          :
          <div className="pt-[90px]">
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
