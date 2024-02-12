'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DecorateBackground from "../../components/decorateBackground";
import { loginSchema } from "@/lib/ScemaYup";
import { loginStateType } from "@/lib/type/useForm";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ModalConfirmEmail from "@/components/ModalConfirmEmail";

export default function Login() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [openConfirmEmail, setOpenConfirmEmail] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<loginStateType>({
    defaultValues : {
      email : "example@gmail.com",
      password : "Meaw1234"
    },
    resolver : yupResolver(loginSchema)
  });
  type ItypeConfirm = "default" | "success" | "fail";
  useEffect(()=>{
    (searchParams.get("email") && searchParams.get("typeConfirm")) && setOpenConfirmEmail(true);
  },[])
  
  const onSubmit: SubmitHandler<loginStateType> = (data) => {
    if(data.email == "example@gmail.com" && data.password == "Meaw1234"){
      // call api 
      router.push(`/`)
    }else{
      setErrorMessage("Incorrect email or password");
    }
  };
  return (
    <section className="relative overflow-hidden">
      <DecorateBackground/>
      <div className="h-screen flex flex-row justify-center items-center bg-white ">
        <div className="w-[897px] h-[797px] bg-white rounded-3xl shadow-thin flex flex-row justify-center items-center z-40 ">
          <div className="">
            <p className="text-gray-100 light20">Welcome to <span className="medium24 text-primary-400">ProveSelf</span></p>
            <p className="text-[64px] font-medium leading-[120%] text-primary-500 mt-4 mb-[46px]">Sign in</p>
            <div className="flex flex-col gap-5">
              <form className="flex flex-col"  onSubmit={handleSubmit(onSubmit)} >
                <div className="flex flex-col gap-[10px]">
                  <p className="regular18">Email address</p>
                  <div className="flex flex-col gap-1">
                    <input 
                        type="text" 
                        className={`w-[476px] h-[46px] input ${ (errorMessage) && "input-fail"}`}
                        placeholder="example@gmail.com"
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
                        className={`w-[476px] h-[46px] input ${ (errorMessage ) && "input-fail"}`}
                        placeholder="example@gmail.com"
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
                    SIGN IN <img src="/Arrow.svg" alt="arrow" />
                  </button>
                  <p className="light16 text-gray-200">I don't have an account ? <Link href="/signup" className="text-primary-400 underline cursor-pointer">Sign up</Link></p>
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
