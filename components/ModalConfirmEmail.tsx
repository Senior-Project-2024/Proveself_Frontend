import { useState, useContext, useRef } from "react";
import Modal from "./Modal";
import { useRouter, usePathname } from "next/navigation";
import { typeConfirm } from "@/lib/type/confirmEmail";
import { API_sendEmail } from "@/lib/API";
import { useToast } from "@chakra-ui/react";
interface IModalConfirmEmail{
  // setConfirmEmail = setStateOpen
  setConfirmEmail : any
  email: string
  typeConfirm : typeConfirm
}

export default function ModalConfirmEmail({setConfirmEmail, email, typeConfirm} : IModalConfirmEmail){
  const toast = useToast()
  const router = useRouter();
  const toastIdRef = useRef<any>(null)
  const [thisTypeConfirm, setThisTypeConfirm] = useState<typeConfirm>(typeConfirm);
  const resendEmail = async () => {
    // call send email
    toastIdRef.current = toast({
      title: 'Sending confirm email...',
      description: "Loading",
      status: 'loading',
      duration: 9000,
      isClosable: true,
    })
    try{ 
      await API_sendEmail(email);
      setThisTypeConfirm("default");
      toast.update(toastIdRef.current,{
        title: 'Sending email succesful.',
        description: "We've sent verify email to your email",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }catch(err){
      toast.update(toastIdRef.current,{
        title: 'Sending email fail.' ,
        description: err.response.data.message,
        status: 'error',
        duration: 10000,
        isClosable: true,
      })
      setThisTypeConfirm("sendFail");
    }
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
  else if(thisTypeConfirm == "sendFail"){
    return(
      <Modal width="w-[916px]" height="h-[594px]" setStatus={setConfirmEmail} typeClose="outside">
        <div className="flex flex-col items-center pt-[75px]">
          <p className="text-[48px] text-red leading-[120%] font-medium">Send Failed</p>
          <p className="w-[750px] regular30 text-center mt-[43px] mb-[40px]">Since, There is some problem for sending email. Please resend email to send email again.</p>
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