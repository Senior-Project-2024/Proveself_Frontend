'use client'
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContext } from '@/context/AuthContext'
import { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_auth, API_auth_fetch } from '@/lib/API'
import { usePathname } from 'next/navigation'
import { TdataUserOrganize } from '@/lib/type/generalData'
import { setCookie } from "cookies-next";
export default function RootLayout({children,}: {children: React.ReactNode}) {
  const path = usePathname();
  const [statusAuth, setStatusAuth] = useState<{isUserAuth: boolean | undefined, isOrganizeAuth: boolean | undefined}>({
    isUserAuth : undefined,
    isOrganizeAuth : undefined,
  })

  const res = [
    { role : "user" },
    { role : "organize"}
  ]
  
  const callAuthAPI = async () => {
    let userAuth = false;
    let organizeAuth = false;
    try{
      const { data } = await API_auth();
      console.log(data)
      if(data.user){
        userAuth = true;
        setCookie("data-user", data.user);
      }
      
      if(data.organize){
        organizeAuth = true;
        setCookie("data-organize", data.organize);
      }

    }catch(err){
      console.log(err.message)
    }
    // res?.forEach((e)=>{
    //   if(e.role == "user"){
    //     userAuth = true;
    //   }
    //   if(e.role == "organize"){
    //     organizeAuth = true;
    //   }
    // })
    setStatusAuth({isUserAuth : userAuth, isOrganizeAuth : organizeAuth})
    console.log("setAuth")
  }
  
  const isPathNotAuth = (path == "/signin") || (path == "/signup") || (path == "organization/signin") || (path == "organization/signup")
  useEffect(()=>{
    setCookie("data-user", {});
    setCookie("data-organize", {});
    console.log("Do layout")
    console.log(process.env.NEXT_PUBLIC_BACKEND_HOST)
    if(!isPathNotAuth){
      callAuthAPI();
    }
  },[])
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Server.png" />
      </head>
      <body>
        <AuthContext.Provider value={{statusAuth, setStatusAuth}}>
          <ChakraProvider>
            {children}  
          </ChakraProvider>
        </AuthContext.Provider>
      </body>
    </html>
  )
}
