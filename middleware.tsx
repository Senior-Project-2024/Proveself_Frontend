import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // const personal = JSON.parse(request.cookies.get("personal")?.value as string);
  // const result = await fetch(`https://3cc8384b-b389-4338-883a-81e9d555d5e0.mock.pstmn.io/auth`, {
  //   method : "POST",
  //   headers: { 'Content-Type': 'application/json' },
  //   body : JSON.stringify({
  //     email : personal.email
  //   })
  // });
  const mockResponse = [
    {role : "user"},
    {role : "organize"}
  ]
  let isFind = false;
  // find user login yet?
  mockResponse.forEach((e)=>{
    if(e.role == "organize"){
      isFind = true;
      return NextResponse.next()
    }
  })

  if(isFind){
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/organization/signin', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/organization/token',
    '/organization/document',
    '/organization/management'
  ],
}