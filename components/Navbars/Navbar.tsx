'use client'
import React, { useEffect, useState } from 'react'
import Button from '../Button'
import Link from 'next/link'
import {easeIn, easeInOut, easeOut, motion} from "framer-motion"
import { usePathname, useRouter } from 'next/navigation'
import { IstatusNav, IstatusNavOrganization } from '@/lib/type/navbarType'
import { dataNavOrganization, dataNavUser } from '@/lib/data/dataNav'
import { checkRoute} from './checkRoute'
import { getCookie, setCookie } from 'cookies-next'
import ModalSetting from './ModalSetting'
import axios from 'axios'

export default function Navbar({isUser = true} : {isUser : boolean}) {
  const pathname = usePathname();
  const router = useRouter();
  const [statusNav, setStatusNav] = useState<IstatusNav | IstatusNavOrganization>();
  const [statusNavOrganization, setStatusNavOrganization] = useState<IstatusNav | IstatusNavOrganization>();
  const [authUser, setAuthUser] = useState<boolean>();
  const [authOrganization, setAuthOrganization] = useState<boolean>();
  const [openMenu, setOpenMenu] = useState<boolean>(true);
  const [openSetting, setOpenSetting] = useState<boolean>(false);
  const mockResponse = [
    {role : "user"},
    {role : "organize"}
  ]

  useEffect(()=>{
    const callAPI = async () => {
      // API need edit
      axios.post(process.env.NEXT_PUBLIC_MOCK_HOST+"/auth",{
        // email : personal.email
      })
      .then((res)=>{
        // default authen
        setAuthUser(false)
        setAuthOrganization(false)
        mockResponse.forEach((e)=>{
          if(e.role == "user"){
            setAuthUser(true)
          }
          if(e.role == "organize"){
            setAuthOrganization(true)
          }
        })
      })
      .catch((error)=>{
        // authentication fail
        if(error.response){
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      })
    }
    // callAPI();
    setAuthUser(false)
        setAuthOrganization(false)
        mockResponse.forEach((e)=>{
          if(e.role == "user"){
            setAuthUser(true)
          }
          if(e.role == "organize"){
            setAuthOrganization(true)
          }
        })
    checkRoute(pathname, setStatusNav, setStatusNavOrganization);
  },[])


  if(authUser === undefined || authOrganization === undefined){
   // return <nav className="fixed w-full h-[90px] top-0 left-0  bg-white shadow-thin-more flex flex-row items-center animate-pulse px-[120px]">
    //   <div className="bg-gray-200 rounded-[10px] w-[235px] h-[56px]"></div>
    // </nav>
    return <nav></nav>
  }

  return (
    <div>
      <motion.nav className="fixed w-full top-0 left-0 bg-white shadow-thin-more flex flex-row justify-between items-center h-[90px] px-[120px] z-40"
      initial = {{opacity : 0}}
      animate = {{opacity : 1}}
    >
      <Link href={ isUser ? "/" : "/organization"}>
        <img src="/logo.png" alt="" className="w-[235px] h-[56px] cursor-pointer"/>
      </Link>
      <div className={`flex flex-row regular20 gap-[40px] ${ (isUser && !authUser)  && "ml-[80px]"} `}>
        {/* Menu button */}
        {
          isUser ?
          dataNavUser.map((data)=>{
            return <button key={data.name} className="relative"  onClick={()=> setStatusNav(data.name as IstatusNav )}>
              <Link href={data.route} className='hover:text-brand-800'>{data.name}</Link>
              {statusNav == data.name && <motion.div className={`absolute left-[5%] bg-primary-300 rounded-[20px] w-[90%] h-[3px]`}
                initial = {{ y:10 , opacity:0}}
                animate = {{ y:0, opacity:1}}
                transition= {{type: "spring", stiffness: 200}}
              ></motion.div>}
            </button>
          })
          :
          dataNavOrganization.map((data)=>{
            return <button key={data.name} className="relative" onClick={()=> setStatusNavOrganization(data.name as IstatusNavOrganization )}>
              <Link href={data.route} className='hover:text-brand-800'>{data.name}</Link>
              {statusNavOrganization == data.name && <motion.div className={`absolute  left-[5%] bg-primary-300 rounded-[20px] w-[90%] h-[3px]`}
                initial = {{ y:10 , opacity:0}}
                animate = {{ y:0, opacity:1}}
                transition= {{type: "spring", stiffness: 200}}
              ></motion.div>}
            </button>
          })
        }
      </div>
      <div className="flex flex-row gap-[38px] items-center">
        {
          (isUser && !authUser) &&
          <button onClick={()=>router.push("/organization")} className="flex flex-row h-full justify-center items-center border border-black pl-[12px] pr-[15px] py-[4px] rounded-[10px]  gap-[6px]">
          <img src="/arrow-slant.svg" alt="arrow-slant" className="" />
          <p className="regular18">Organization</p>
        </button>
        }
        {/* Right Navbar */}
        <div className="flex flex-row gap-[10px]">
          {/*If auth show name and email*/}
          {
            (isUser && authUser) || (!isUser && authOrganization) ? 
            <div className="flex flex-row items-center gap-[10px] relative">
              <div className="flex flex-row gap-[12px]"> {/* profile + fullname */}
                <div className="flex justify-center items-center w-[45px] h-[45px] rounded-[40px] outline outline-[3px] outline-[#F4EBFF] bg-black">
                  <p className="font-Pridi regular24 text-[#F4EBFF]">PJ</p>
                </div>
                <div className="flex flex-col max-w-[200px]">
                  <p className="truncate medium16">Pathinya Jongsupangpan</p>
                  <p className="truncate regular14">pathinya19@gmail.com</p>
                </div>
              </div>
              <motion.button className="w-[32px] h-[32px] rounded-[28px] hover:bg-[#EDEDED] flex flex-row justify-center items-center"
                onClick={()=> setOpenMenu(!openMenu)} 
              >
                {/* Icon arrow */}
                {
                  !openMenu ? 
                  <img src="/arrow-down.svg" className="transition-transform w-[22px] h-[22px]" alt="arrow-down"/>
                  :
                  <img src="/arrow-down.svg" className="transition w-[22px] h-[22px] -rotate-180" alt="arrow-down"/>
                }
              </motion.button>
              {/* Menu bar */}
              {
                openMenu &&
                <motion.div className="absolute top-[55px] left-[90px] w-[240px] h-[100px] bg-white rounded-[8px] shadow-thin flex flex-col"
                  initial={{ y:-20, opacity:0 }}
                  animate={{ y:0, opacity:1}}
                >
                  <button className="flex-1 flex flex-row items-center gap-[10px] pl-[20px] hover:bg-[#EFEFEF] rounded-t-[8px]"
                    onClick={()=>setOpenSetting(true)}
                  >
                    <img src="/setting_icon.png" alt="setting" className="w-[16px] h-[16px]" />
                    <p className="regular18">Settings</p>
                  </button>
                  <div className='w-full h-[0.5px] bg-[#878787] bg-opacity-40'></div>
                  <button className='flex-1 flex flex-row items-center gap-[10px] pl-[20px] hover:bg-[#EFEFEF] rounded-b-[8px]'
                    onClick={()=> console.log("wait to make logout")}
                  >
                  <img src="/logout.svg" alt="logout" className="" />
                    <p className="regular18 ">Sign out</p>
                  </button>
                </motion.div>
              }
            </div>
            :
            // is not auth
            <>
              <Button link={`${ isUser ? "/signup" : "/organization/signup"} `} text="Sign Up" textColor="text-white" font="regular18" py="py-[10px]" px="px-[20px]" rounded="rounded-[10px]" bgcolor='bg-brand-600' />
              <Button link={`${ isUser ? "/signin" : "/organization/signin"} `} text="Sign In" textColor="text-brand-600" font="regular18" py="py-[10px]" px="px-[20px]" rounded="rounded-[10px]" bgcolor='bg-white' border='border' borderColor='border-brand-600'/>
            </>
          }
        </div>
      </div>
    </motion.nav>
    {
      openSetting && 
      <ModalSetting setOpenSetting={setOpenSetting} isUser={isUser} />
    }
    </div>
  )
}
