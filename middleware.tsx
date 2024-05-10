import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { API_auth_fetch } from './lib/API';
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log("Middleware work")
  const path = request.nextUrl.pathname;
  // set default auth
  let isAuthUser: boolean = false;
  let isAuthOrganization: boolean = false;
  //
  const session = request.cookies.get("session")?.value ?? "";
  const sessionSigValue = request.cookies.get("session.sig")?.value ?? "";
  try{
    const result = await API_auth_fetch(session, sessionSigValue);
    const data = await result.json();
    if(data?.user){
      isAuthUser = true;
    }
    if(data?.organize){
      isAuthOrganization = true;
    }
  }catch(err){
    console.log(err.message)
  }


  // const mockResponse : {role : string}[] = [
  //   {role : "user"},
  //   {role : "organize"}
  // ]

  // set isAuthUser and usAuthOrganization
  

  // mockResponse.forEach((e)=>{
  //   if(e.role == "user")
  //     isAuthUser = true;
  //   if(e.role == "organize")
  //     isAuthOrganization = true;
  // })

  const regExpManagement = /\/organization\/management\//

  if(path == "/signin" && isAuthUser)
    return NextResponse.redirect(new URL('/', request.url))

  if(path == "/organization/signin" && isAuthOrganization)
    return NextResponse.redirect(new URL('/organization', request.url))
  
  if( (path == "/organization/token" || path == "/organization/document" || regExpManagement.test(path)) && !isAuthOrganization)
    return NextResponse.redirect(new URL('/organization/signin', request.url))
  
  if( (path == "/issue-certificate" || path == "/badge" || path == "/certificate") && !isAuthUser)
    return NextResponse.redirect(new URL('/signin', request.url))

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/confirm',
    '/signin',
    '/issue-certificate',
    '/badge',
    '/certificate',
    '/organization/signin',
    '/organization/token',
    '/organization/document',
    '/organization/management/:path*',
  ],
}