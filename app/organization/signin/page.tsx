'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DecorateBackground from "../../../components/decorateBackground";
import { loginSchema } from "@/lib/ScemaYup";
import { loginStateType } from "@/lib/type/useForm";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ModalConfirmEmail from "@/components/ModalConfirmEmail";
import { useToast } from "@chakra-ui/react";
import { API_signin } from "@/lib/API";
import { setCookie } from "cookies-next";
import { typeConfirm } from "@/lib/type/confirmEmail";

export default function LoginOrganization() {
  const toast = useToast()
  const router = useRouter();
  const toastIdRef = useRef<any>(null)
  const searchParams = useSearchParams()
  const [openConfirmEmail, setOpenConfirmEmail] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  type ItypeConfirm = typeConfirm;
  const { register, handleSubmit, watch, formState: { errors } } = useForm<loginStateType>({
    defaultValues : {
      email : "corporateX@mail.com",
      password : "Meaw1234"
    },
    resolver : yupResolver(loginSchema)
  });

  useEffect(()=>{
    (searchParams.get("email") && searchParams.get("typeConfirm")) && setOpenConfirmEmail(true);
  },[])

  const onSubmit: SubmitHandler<loginStateType> = async (data) => {
    setErrorMessage("");
    toastIdRef.current = toast({
      title: 'Logining...',
      description: "Loading",
      status: 'loading',
      duration: 9000,
      isClosable: true,
    })
    try{
      const res = await API_signin(data.email, data.password);
      toast.update(toastIdRef.current,{
        title: 'Login successful.',
        description: "You've login account successful.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      setCookie("data-organize", res.data);
      router.push(`/organization`)
    }catch(err){
      toast.update(toastIdRef.current,{
        title: 'Login Fail.',
        description: err.response.data.message,
        status: 'error',
        duration: 10000,
        isClosable: true,
      })
      setErrorMessage(err.response.data.message);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <DecorateBackground/>
      <div className="h-screen flex flex-row justify-center items-center bg-white ">
        <div className="w-[897px] h-[797px] bg-white rounded-3xl shadow-thin flex flex-row justify-center items-center relative z-40">
          <p className="absolute right-5 top-4 light24 text-gray-100">For Organization</p>
          <div className="">
            <p className="text-gray-100 light20">Welcome to <span className="medium24 text-primary-400">ProveSelf</span></p>
            <p className="text-[64px] font-medium leading-[120%] text-primary-500 mt-4 mb-[46px]">Sign in</p>
            <div className="flex flex-col gap-5">
              <form className="flex flex-col"  onSubmit={handleSubmit(onSubmit)} >
                <div className="flex flex-col gap-[10px]">
                  <p className="regular18">Organization Email address</p>
                  <div className="flex flex-col gap-1">
                    <input 
                        type="text" 
                        className={`w-[476px] h-[46px] input ${errorMessage && "input-fail"}`}
                        placeholder="example@organize.ac.th"
                        autoFocus
                        {...register("email")}
                    />
                      <p className=" light16 text-red ">{errors?.email?.message}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] mt-[20px] items-start">
                  <p className="regular18">Password</p>
                  <div className="flex flex-col gap-1">
                    <input 
                        type="password" 
                        className={`w-[476px] h-[46px] input ${errorMessage && "input-fail"}`}
                        placeholder="***********"
                        {...register("password")}
                    />
                    <div className="flex flex-row justify-between items-start">
                      <div className="flex flex-col gap-2">
                        <p className={`${!errors?.password?.message && "hidden" } light16 text-red `} >{errors?.password?.message}</p>
                        <p className=" light16 text-red">{errorMessage}</p>
                      </div>
                      <p className=" light16 text-primary-300 mt-[6px] cursor-pointer">Forgot Password?</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-5  mt-[20px]">
                  <button type="submit" 
                    disabled={(!watch().email || !watch().password)}
                    className="w-[150px] h-[46px] bg-primary-400 rounded-3xl text-white medium18 flex flex-row justify-center items-center gap-[20px] 
                      transition hover:bg-primary-500 hover:scale-105 hover:ease-in-out hover:duration-300
                    disabled:bg-gray-100 disabled:scale-100"
                  >
                    SIGN IN<img src="/Arrow.svg" alt="arrow" />
                  </button>
                  <p className="light16 text-gray-200">I don't have an account ? <Link href="/organization/signup" className="text-primary-400 underline cursor-pointer">Sign up</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {
        openConfirmEmail && 
        <ModalConfirmEmail setConfirmEmail={setOpenConfirmEmail} email={searchParams.get("email") as string} typeConfirm={searchParams.get("typeConfirm") as ItypeConfirm} />
      }
    </section>
   
  )
}