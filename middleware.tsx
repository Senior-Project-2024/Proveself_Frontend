import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  // const personal = JSON.parse(request.cookies.get("personal")?.value as string);
  // const result = await fetch(`https://3cc8384b-b389-4338-883a-81e9d555d5e0.mock.pstmn.io/auth`, {
  //   method : "POST",
  //   headers: { 'Content-Type': 'application/json' },
  //   body : JSON.stringify({
  //     email : personal.email
  //   })
  // });
  let isAuthUser: boolean = false;
  let isAuthOrganization: boolean = false;
  const mockResponse : {role : string}[] = [
    // {role : "user"},
    {role : "organize"}
  ]

  // set isAuthUser and usAuthOrganization
  mockResponse.forEach((e)=>{
    if(e.role == "user")
      isAuthUser = true;
    if(e.role == "organize")
      isAuthOrganization = true;
  })

  if(path == "/signin" && isAuthUser)
    return NextResponse.redirect(new URL('/', request.url))

  if(path == "/organization/signin" && isAuthOrganization)
    return NextResponse.redirect(new URL('/organization', request.url))
  
  if( (path == "/organization/token" || path == "/organization/document" || path == "/organization/management") && !isAuthOrganization)
    return NextResponse.redirect(new URL('/organization/signin', request.url))

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/confirm',
    '/signin',
    '/organization/signin',
    '/organization/token',
    '/organization/document',
    '/organization/management',
  ],
}