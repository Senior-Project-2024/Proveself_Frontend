'use client'
import React, { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { IstatusNav, IstatusNavOrganization } from '@/lib/type/navbarType'
import { dataNavOrganization, dataNavUser } from '@/lib/data/dataNav'
import { checkRoute} from './checkRoute'
import ModalSetting from '../ModalSetting'
import axios from 'axios'
import { AuthContext } from '@/context/AuthContext'
import { getCookie, deleteCookie } from 'cookies-next'
import { API_signout } from '@/lib/API'

export default function Navbar({isUser = true} : {isUser : boolean}) {
  const pathname = usePathname();
  const router = useRouter();
  const { statusAuth } = useContext(AuthContext);
  const [statusNav, setStatusNav] = useState<IstatusNav | IstatusNavOrganization>();
  const [statusNavOrganization, setStatusNavOrganization] = useState<IstatusNav | IstatusNavOrganization>();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openSetting, setOpenSetting] = useState<boolean>(false);
  const [dataUser, setDataUser] = useState<any>("")
  const [dataOrganize, setDataOrganize] = useState<any>("")
  
  useEffect(()=>{
    if(statusAuth?.isUserAuth || statusAuth?.isOrganizeAuth){
      const dataUser = JSON.parse(getCookie("data-user") as string) ?? "";
      const dataOrganize = JSON.parse(getCookie("data-organize") as string) ?? "";
      setDataUser(dataUser)
      setDataOrganize(dataOrganize)
    }
    checkRoute(pathname, setStatusNav, setStatusNavOrganization);
  },[])


  // if(statusAuth?.isUserAuth === undefined || authOrganization === undefined){
   // return <nav className="fixed w-full h-[90px] top-0 left-0  bg-white shadow-thin-more flex flex-row items-center animate-pulse px-[120px]">
    //   <div className="bg-gray-200 rounded-[10px] w-[235px] h-[56px]"></div>
    // </nav>
  //   return <nav></nav>
  // }

  return (
    <div>
      <motion.nav className="fixed w-full top-0 left-0 bg-white shadow-thin-more flex flex-row justify-between items-center h-[90px] px-[120px] z-40"
      initial = {{opacity : 0}}
      animate = {{opacity : 1}}
    >
      <Link href={ isUser ? "/" : "/organization"}>
        <img src="/logo.png" alt="" className="w-[235px] h-[56px] cursor-pointer"/>
      </Link>
      <div className={`flex flex-row regular20 gap-[40px] ${(isUser && !statusAuth?.isUserAuth)  && "ml-[80px]"} `}>
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
          (isUser && !statusAuth?.isUserAuth) &&
          <Link href={"/organization"}> 
            <button className="flex flex-row h-full justify-center items-center border border-black pl-[12px] pr-[15px] py-[4px] rounded-[10px]  gap-[6px]">
              <img src="/arrow-slant.svg" alt="arrow-slant" className="" />
              <p className="regular18">Organization</p>
            </button>
          </Link>
        }
        {/* Right Navbar */}
        <div className="flex flex-row gap-[10px]">
          {/*If auth show name and email*/}
          {
            (isUser && statusAuth?.isUserAuth) || (!isUser && statusAuth?.isOrganizeAuth) ? 
            <div className="flex flex-row items-center gap-[10px] relative">
              <div className="flex flex-row gap-[12px]"> {/* profile + fullname */}
                <div className="flex justify-center items-center w-[45px] h-[45px] rounded-[40px] outline outline-[3px] outline-[#F4EBFF] bg-black">
                  <p className="font-Pridi regular24 text-[#F4EBFF]">{ isUser ? dataUser.fName?.charAt(0) + dataUser.lName?.charAt(0)  : dataOrganize.organizeName?.charAt(0) + dataOrganize.organizeName?.charAt(1)}</p>
                </div>
                <div className="flex flex-col max-w-[200px]">
                  <p className="truncate medium16">{isUser ? dataUser.fName + " " + dataUser.lName :  dataOrganize.organizeName}</p>
                  <p className="truncate regular14">{isUser ? dataUser.email :  dataOrganize.email}</p>
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
                    onClick={async ()=> {
                      if(isUser){
                        try{
                          await API_signout("user") 
                          deleteCookie("data-user")
                          router.push("/")
                          location.reload()
                        }catch(err){
                          console.log(err.response.data.message)
                        }
                      }else{
                        try{
                          await API_signout("organize") 
                          deleteCookie("data-organize")
                          router.push("/organization")
                          location.reload()
                        }catch(err){
                          console.log(err.response.data.message)
                        }
                      }
                    }}
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
              <Link href={isUser ? "/signup" : "/organization/signup"}>
                <button className="px-[20px] py-[10px] rounded-[10px] bg-brand-600 hover:bg-brand-700 transition-all duration-300 ease-in-out">
                  <p className="regular18 text-white">Sign Up</p>
                </button>
              </Link>
              <Link href={isUser ? "/signin" : "/organization/signin"}>
                <button className="px-[20px] py-[10px] rounded-[10px] bg-white hover:bg-neutral-200 border border-brand-600 transition-all duration-300 ease-in-out">
                  <p className="regular18 text-brand-600">Sign In</p>
                </button>
              </Link>
            </>
          }
        </div>
      </div>
    </motion.nav>
    {
      openSetting && <ModalSetting setOpenSetting={setOpenSetting} isUser={isUser} />
    }
    </div>
  )
}
