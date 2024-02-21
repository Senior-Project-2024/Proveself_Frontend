import { useState, useContext } from "react";
import Modal from "./Modal";
import { useRouter, usePathname } from "next/navigation";
interface IModalConfirmEmail{
  setConfirmEmail : any
  email: string
  typeConfirm : "default" | "success" | "fail"
  
}

export default function ModalConfirmEmail({setConfirmEmail, email, typeConfirm} : IModalConfirmEmail){
  const router = useRouter(); 
  const path = usePathname();
  const [thisTypeConfirm, setThisTypeConfirm] = useState<"default" | "success" | "fail">(typeConfirm);
  const resendEmail = () => {
    // call send email
    // if send success
    setThisTypeConfirm("default");
    // if not success show or log something
  }

  if(thisTypeConfirm == "default"){
    return (
      <Modal width="w-[916px]" height="h-[594px]" setStatus={setConfirmEmail} typeClose="outside">
        <div className="flex flex-col items-center pt-[39px]">
          <img src="/EmailBox.png" alt="" className="w-[200px] h-[200px]" />
          <p className="text-[48px] leading-[120%] font-medium mb-[31px]">Email Confirmation</p>
          <p className="w-[584px] regular24 text-center">We have sent email to <span className='text-primary-300'>{email}</span> to confirm the validity of your email. After receiving the email click Confirm button to complete process. </p>
          <div className="w-[645px] h-[3px] bg-[#DDDDDD] rounded-[10px] mt-[47px] mb-[47px]"></div>
          <p className="regular20">If you don't receive a email <span className="text-primary-400 underline cursor-pointer" onClick={()=>resendEmail()}>Click Resend email here</span></p>
        </div>
      </Modal>
    )
  }
  else if(thisTypeConfirm == "success"){
    return(
      <Modal width="w-[916px]" height="h-[594px]" setStatus={setConfirmEmail} typeClose="outside">
        <div className="flex flex-col items-center pt-[75px]">
          <p className="text-[48px] text-[#039855] leading-[120%] font-medium">Congratulations!</p>
          <p className="w-[750px] regular30 text-center mt-[43px] mb-[40px]">Your email has already been confirmed. You can now login to the application.</p>
          <img src="/Correct_ConfirmEmail.png" alt="" />
          <button className="w-fit bg-brand-600 flex px-[24px] py-[15px] gap-2 items-center rounded-[8px] mt-[40px]" onClick={()=> setConfirmEmail(false)}>
            <p className="text-white medium20 ">Go to Login</p>
            <img src="/Arrow.svg" alt="" className="" />
          </button>
        </div>
      </Modal>
    )
  }
  else if(thisTypeConfirm == "fail"){
    return(
      <Modal width="w-[916px]" height="h-[594px]" setStatus={setConfirmEmail} typeClose="outside">
        <div className="flex flex-col items-center pt-[75px]">
          <p className="text-[48px] text-red leading-[120%] font-medium">Confirm Failed</p>
          <p className="w-[750px] regular30 text-center mt-[43px] mb-[40px]">Your email confirmation has already been expired. Please resend email to confirm again.</p>
          <img src="/Fail_ConfirmEmail.png" alt="" />
          <button className="w-fit bg-brand-600 flex px-[24px] py-[15px] gap-2 items-center rounded-[8px] mt-[40px]" onClick={()=> resendEmail()}>
            <p className="text-white medium20 ">Resend Email</p>
            <img src="/Arrow.svg" alt="" className="" />
          </button>
        </div>
      </Modal>
    )
  }
  else{
    return(
      <></>
    )
  }
  
}