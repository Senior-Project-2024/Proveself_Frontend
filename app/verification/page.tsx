'use client'
import Navbar from "@/components/Navbars/Navbar"
import Search from "@/components/SVG/Search"
import { useState } from "react"
import { mockTempleteBadge } from "@/lib/data/mockBadgeCer"
import Footer from "@/components/Footer"

export default function Verification() {
  const [inputToken, setInputToken] = useState<string>("")
  function submitFindToken(){
    
  }
  const res = {
    id: "fg4a02ae74db679112321311d",
    badgeName : "Nestjs gen3",
    certificateName : "", // case : Found Badge
    issueBy : "Future course",
    date : "25 December 2020",
    isserTo : "Pathinya Jongsupangpan",
    descriptionCourse : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
    img : "/badge_crop.png",
    // img : "/certificate.png",
    criteria : "Complete the internship program according to all requirements and conditions or success a long term and here this is some of Earning criteria l projects alongside Gestures and Body Parts Emojis based on people, which include different appearances, hand gestures, activities, professions, and family combinations",
    expire : "12 December 2024",
    skills : [ "C", "Javascript", "Typescript", "MongoABCD" , "Xyzwe", "Genenative", "AIcontest" , "Blockchain", "3D-model", "Smartcontact", "GuildlineX", "Earning"]
  }
  
  
  function checkStatusResponse(res : any){
    let status = "notFound"
    Object.keys(res).forEach((e)=>{
      if(e == "badgeName")
        status = "badge"
      if(e == "certificateName")
        status = "certificate"
    })
    return status
  }

  return (
    <section className="pt-[90px]">
      <Navbar isUser={true} />
      <div className="flex flex-col items-center">
        <p className="text-[48px] font-medium mt-[60px]">Verification</p>
        <p className="w-[1077px] regular20 mt-[37px] text-center">Verification will help you to request badge or certification information on <span className="text-blue-300">blockchain</span>. Since information on webpage can be copied, So you can verify information between <span className="text-blue-300">webpage</span> and <span className="text-blue-300">blockchain</span></p>
        <div className="flex flex-row mt-[58px]">
          <input type="text" 
            className="w-[418px] px-[20px] py-[12px] border-l-[2px] border-y-[2px] border-brand-700 rounded-l-[4px] outline-none 
            regular20"
            onChange={(e)=>setInputToken(e.target.value)}
            placeholder="Paste token here"
          />
          <button type="button" className="h-[58px] w-[54px] bg-brand-700 rounded-r-[4px]
            flex flex-row justify-center items-center"
            onClick={()=>submitFindToken()}
          >
            <Search colorStroke="white" />
          </button>
        </div>
        <div className="w-[1632px] border border-black rounded-[8px] py-[36px] px-[40px] mt-[100px]
        ">
          {
            checkStatusResponse(res) === "notFound" && <p className="medium20 my-[190px] flex flex-row justify-center items-center">
              No Data
            </p>
          }
          {
            checkStatusResponse(res) === "badge" && 
            <div className="flex flex-row justify-center items-center gap-[80px]">
              <img src="/badge_crop.png" alt="" className="w-[251px]" />
              <div className="flex flex-col gap-[16px] w-[1180px]">
                <p className="medium20">Badge name : <span className="regular20">{res?.badgeName}</span></p>
                <p className="medium20">Issued by : <span className="regular20">{res?.issueBy}</span></p>
                <p className="medium20">Issued Date : <span className="regular20">{res?.date}</span></p>
                <p className="medium20">Expiration Date : <span className="regular20">{res?.expire}</span></p>
                <p className="medium20">Description Course : <span className="regular20">{res?.descriptionCourse}</span></p>
                <p className="medium20">Earning Criteria : <span className="regular20">{res?.criteria}</span></p>
                <p className="medium20">Skill :
                  {
                    res?.skills.map((skill, i)=>{
                      return (
                        <span className="regular20" key={i}> {skill} <span hidden={(res.skills.length - 1) === i}> / </span></span>
                      )
                    }) 
                  }
                </p>
              </div>
            </div>
          }
          {
            checkStatusResponse(res) === "certificate" && 
            <div className="flex flex-row justify-between items-center">
            <img src={res?.img} alt="" className="w-[350px]" />
            <div className="flex flex-col gap-[16px] w-[1156px]">
              <p className="medium20">Certificate name : <span className="regular20">{res?.certificateName}</span></p>
              <p className="medium20">Issued by : <span className="regular20">{res?.issueBy}</span></p>
              <p className="medium20">Issued Date : <span className="regular20">{res?.date}</span></p>
              <p className="medium20">Expiration Date : <span className="regular20">{res?.expire}</span></p>
              <p className="medium20">Description Course : <span className="regular20">{res?.descriptionCourse}</span></p>
              <p className="medium20">Earning Criteria : <span className="regular20">{res?.criteria}</span></p>
              <p className="medium20">Skill :
                {
                  res?.skills.map((skill, i)=>{
                    return (
                      <span className="regular20" key={i}> {skill} <span hidden={(res.skills.length - 1) === i}> / </span></span>
                    )
                  }) 
                }
              </p>
            </div>
          </div>
          }
        </div>
      </div>
      <Footer/>
    </section>
  )
}
