import Navbar from "@/components/Navbars/Navbar";
import Button from "@/components/Button";

export default function Permission() {
  return (
    <>
      <Navbar isUser={false} />
      <div className="flex flex-col items-center mt-[368px] gap-[50px]">
          <p className="text-[64px] leading-[64px] font-medium">  
            <span className="text-red">🙇🏻Sorry</span>,You don’t have Permission
          </p>
          <p className="text-[48px] font-normal leading-[48px]">Please!, Sign In before</p>
          <p className="light24 w-[588px] text-center">We are sorry! The page you request can not be access. It need you sign in before.</p>
          <Button text="Sign In" link="/organization/signin" />
      </div>
    </>
  )
}
