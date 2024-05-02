'use client'
import Navbar from "@/components/Navbars/Navbar"
import Search from "@/components/SVG/Search"
import { useEffect, useState } from "react"
import { mockTempleteBadge } from "@/lib/data/mockBadgeCer"
import Footer from "@/components/Footer"
import { API_verify } from "@/lib/API"
import { Spinner } from "@chakra-ui/react"

export default function Verification() {
  const [inputToken, setInputToken] = useState<string>("")
  const [dataVerify ,setDataVerify] = useState<any>(undefined);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function submitFindToken(){
    setErrorMessage("")
    setDataVerify(undefined)
    setIsLoading(true)
    try{
      const res = await API_verify(inputToken)
      setDataVerify(res.data)
      setIsLoading(false)
    }catch(err){
      if(err.response.data.statusCode == 500){
        setErrorMessage("Not found token, Please try again")
      }else{
        setErrorMessage(err.response.data.message)
      }
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    console.log(dataVerify)
    console.log(isLoading)
  },[isLoading])  

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
  

  return (
    <section className="pt-[90px]">
      <Navbar isUser={true} />
      <div className="flex flex-col items-center">
        <p className="text-[48px] font-medium mt-[60px]">Verification</p>
        <p className="w-[1077px] regular20 mt-[37px] text-center">Verification will help you to request badge or certification information on <span className="text-blue-300">blockchain</span>. Since information on webpage can be copied, So you can verify information between <span className="text-blue-300">webpage</span> and <span className="text-blue-300">blockchain</span></p>
        <form className="flex flex-row mt-[58px] relative" 
          onSubmit={(e)=>{
            e.preventDefault() 
            submitFindToken()}
          }>
          <input type="number" 
            className={`w-[418px] px-[20px] py-[12px] border-l-[2px] border-y-[2px]  ${inputToken.length === 0 ? "border-gray-100" : "border-brand-700"} rounded-l-[4px] outline-none 
            regular20 translate-all duration-200 ease-in-out`}
            onChange={(e)=> setInputToken(e.target.value) }
            placeholder="Paste token here"
          />
          <button type="submit" className="h-[58px] w-[54px] bg-brand-700 rounded-r-[4px]
            flex flex-row justify-center items-center translate-all duration-200 ease-in-out
            disabled:bg-gray-100
            "
            disabled={inputToken.length === 0}
            onClick={()=>submitFindToken()}
          >
            <Search colorStroke="white" />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-54px]">
            <p className="text-red regular20 w-[308px]">{errorMessage}</p>
          </div>
        </form>
        <div className="w-[1632px] border border-black rounded-[8px] py-[36px] px-[40px] mt-[100px]
        ">
          {
            !dataVerify ? <div className="medium20 my-[190px] flex flex-row justify-center items-center">
              { isLoading ? 
                <div className="flex flex-row items-center gap-4">
                  <Spinner
                    thickness='6px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='#2196F3'
                    size='xl'
                  />
                  <p>Requesting Badge/Certificate...</p>
                </div>
                :
                <p>No data</p>
              }
            </div>
            :
            <>
              {/* Show Badge case */}
              {
              (!dataVerify?.badgeCriteria && !errorMessage) &&
              <div className="flex flex-row justify-center items-center gap-[80px]">
                <img src={dataVerify?.imageInfo?.imageURL} alt="" className="w-[251px]" />
                <div className="flex flex-col gap-[16px] w-[1180px]">
                  <p className="medium20">Badge name : <span className="regular20">{dataVerify?.name}</span></p>
                  <p className="medium20">Issued to : <span className="regular20">{dataVerify?.issuedTo}</span></p>
                  <p className="medium20">Issued by : <span className="regular20">{dataVerify?.issueBy}</span></p>
                  <p className="medium20">Issued Date : <span className="regular20">{dataVerify?.issueDate}</span></p>
                  <p className="medium20">Expiration Date : <span className="regular20">{dataVerify?.expiredDate}</span></p>
                  <p className="medium20">Description Course : <span className="regular20">{dataVerify?.descriptionCourse}</span></p>
                  <p className="medium20">Earning Criteria : <span className="regular20">{dataVerify?.earningCriteria}</span></p>
                  <p className="medium20">Skill :
                    {
                      dataVerify?.skill.map((skill : string, i : number)=>{
                        return (
                          <span className="regular20" key={i}> {skill} <span hidden={(dataVerify?.skill.length - 1) === i}> / </span></span>
                        )
                      }) 
                    }
                  </p>
                </div>
              </div>
              }
              {/* Show Certificate case */} 
              {
              (dataVerify?.badgeCriteria && !errorMessage) &&
              <div className="flex flex-row justify-between items-center">
                <img src={dataVerify?.imageInfo?.imageURL} alt="" className="w-[350px]" />
                <div className="flex flex-col gap-[16px] w-[1156px]">
                  <p className="medium20">Certificate name : <span className="regular20">{dataVerify?.name}</span></p>
                  <p className="medium20">Issued to : <span className="regular20">{dataVerify?.issuedTo}</span></p>
                  <p className="medium20">Issued by : <span className="regular20">{dataVerify?.issueBy}</span></p>
                  <p className="medium20">Issued Date : <span className="regular20">{dataVerify?.date}</span></p>
                  <p className="medium20">Expiration Date : <span className="regular20">{dataVerify?.expire}</span></p>
                  <p className="medium20">Description Course : <span className="regular20">{dataVerify?.descriptionCourse}</span></p>
                  <p className="medium20">Earning Criteria : <span className="regular20">{dataVerify?.criteria}</span></p>
                  <p className="medium20">Skill :
                    {
                      dataVerify?.skills?.map((skill : string, i : number)=>{
                        return (
                          <span className="regular20" key={i}> {skill} <span hidden={(dataVerify.skill.length - 1) === i}> / </span></span>
                        )
                      }) 
                    }
                  </p>
                </div>
              </div>
              }
            </>
          }
        </div>
      </div>
      <Footer/>
    </section>
  )
}
