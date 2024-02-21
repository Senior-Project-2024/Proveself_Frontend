'use client'
import Navbar from "@/components/Navbars/Navbar"
import Button from "@/components/Button"
import { useEffect, useState } from "react"
import Copy from "@/components/SVG/Copy"

export default function Token(){
  const [token, setToken] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);
  useEffect(()=>{
    // call generate token API
    setToken("5f2a394e4157a973948bfbc989832052d9d21195ac5216749090d465358487ea");
  },[])
  
  useEffect(()=>{
    if(isCopied){
      setTimeout(()=>{
        setIsCopied(false)
      }, 2000)
    }
  },[isCopied])
  
  const handleGenerateToken = () =>{
    setToken("");
    // call generate token API
    setToken("5f2a394e4157a973948bfbc989832");
  }

  return (
    <div>
      <Navbar isUser={false}/>
      <div className="mt-[90px] pt-[94px] flex flex-col items-center">
        <p className="text-[64px] font-medium leading-[120%]">Token API</p>
        <p className="light24 w-[973px] text-center mt-[50px] mb-[131px]">When E-learning platform need to use our API service, such as mint badge or mint certificate. You must put Token API as specified in manual  </p>
        <p className="medium30">Your Token API</p>
          {
            token ? 
              <div className="py-[10px] px-[30px] mt-[34px] mb-[43px] border border-black rounded-md">
                <p className="text-brand-700">{token}</p>
              </div>
              :
              <div className="animate-pulse-1 w-[600px] h-[50px] bg-slate-200 rounded-full mt-[34px] mb-[43px]"></div>
            }
        <div className="flex flex-row gap-[22px]">
          <Button text="Generate Token" bgcolor="bg-brand-600 hover:bg-brand-700" px="px-[14px]" py="py-[10px]"
            onclick={()=>handleGenerateToken()}
          >
            <img src="/key.svg" alt="" />
          </Button>
          <div className="group">
            <button className="bg-white px-[14px] py-[10px] border border-gray-100 rounded-lg flex flex-row items-center gap-[12px]
              group-hover:bg-gray-50" 
              onClick={()=> {
                navigator.clipboard.writeText(token)
                setIsCopied(true);
              }}>
              <Copy className={`stroke-black group-hover:stroke-brand-600 ${isCopied && "stroke-brand-600"}`}/>
              <p className={`${isCopied && "hidden"} medium20 group-hover:text-brand-600`}>Copy Token</p>
              <p className={`${isCopied ? "block" : "hidden"}  medium20 text-brand-600`}>Copied Token!</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
