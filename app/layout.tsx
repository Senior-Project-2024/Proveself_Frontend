'use client'
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContext } from '@/context/AuthContext'
import { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_auth } from '@/lib/API'
import { usePathname } from 'next/navigation'
export default function RootLayout({children,}: {children: React.ReactNode}) {
  const path = usePathname();
  const [statusAuth, setStatusAuth] = useState<{isUserAuth: boolean | undefined, isOrganizeAuth: boolean | undefined}>({
    isUserAuth : undefined,
    isOrganizeAuth : undefined,
  })

  const res = [
    // { role : "user" },
    { role : "organize"}
  ]
  
  const callAuthAPI = async () => {
    // const res = await API_auth();
    let userAuth = false;
    let organizeAuth = false;
    res?.forEach((e)=>{
      if(e.role == "user"){
        userAuth = true;
      }
      if(e.role == "organize"){
        organizeAuth = true;
      }
    })
    setStatusAuth({isUserAuth : userAuth, isOrganizeAuth : organizeAuth})
    console.log("setAuth")
  }
  
  const isPathNotAuth = (path == "/signin") || (path == "/signup") || (path == "organization/signin") || (path == "organization/signup")
  useEffect(()=>{
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
