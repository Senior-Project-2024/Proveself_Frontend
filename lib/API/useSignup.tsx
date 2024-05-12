'use client'
import { API_sendEmail, API_signup } from "@/lib/API";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { registerOrganizationStateType, registerStateType } from "../type/useForm";
import { Trole } from "../type/constant";

export async function useSignup(){
  const router = useRouter();
  const toastIdRef = useRef<any>(null)
  const toastIdRefEmail = useRef<any>(null)
  const toast = useToast()

  async function signup(data : any, role : Trole){
    console.log(data.phone)
    toastIdRef.current = toast({
      title: 'Registering...',
      description: "Loading",
      status: 'loading',
      duration: 9000,
      isClosable: true,
    })
    // call sign up API
    try {
      let res;
      if(role === "user"){
        res = await API_signup("user", data.email, data.firstname, data.lastname, "", data.password, data.phone.split("-").join(""), "");
      }else{
        res = await API_signup("organize" ,data.email, "", "", data.name, data.password, "", data.phone);
      }
      console.log(res)
      toast.update(toastIdRef.current,{
        title: 'Register successful.',
        description: "We've create your account successful.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      // call send email API
      try{
        toastIdRefEmail.current = toast({
          title: 'Sending confirm email...',
          description: "Loading",
          status: 'loading',
          duration: 9000,
          isClosable: true,
        })
        const resEmail = await API_sendEmail(data.email);
        toast.update(toastIdRefEmail.current,{
          title: 'Sending email succesful.',
          description: "We've sent verify email to your email",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        router.push(`/signin?email=${data.email}&typeConfirm=default`)
      }catch(err){
        toast.update(toastIdRefEmail.current,{
          title: 'Sending email fail.' ,
          description: err.response.data.message,
          status: 'error',
          duration: 10000,
          isClosable: true,
        })
        router.push(`/signin?email=${data.email}&typeConfirm=sendFail`)
      }
  
    }catch(err){
      console.log(err.response)
      // Show error
      if(typeof err.response.data.message != "string"){
        err.response.data.message.forEach( (element : string) => {
          toast.update(toastIdRef.current,{
            title: 'Register Fail.' ,
            description: element,
            status: 'error',
            duration: 10000,
            isClosable: true,
          })
        });
      }else{
        toast.update(toastIdRef.current,{
          title: 'Register Fail.' ,
          description: err.response.data.message,
          status: 'error',
          duration: 10000,
          isClosable: true,
        })
      }
    }
  }
  return signup
}