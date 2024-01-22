'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import {motion} from "framer-motion" 
import DecorateBackground from "../../../components/decorateBackground";
import { loginOrganizationSchema } from "@/lib/ScemaYup";
import { loginStateType } from "@/lib/type/useForm";

export default function LoginOrganization() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<loginStateType>({
    defaultValues : {
      email : "example@gmail.com",
      password : "Meaw1234"
    },
    resolver : yupResolver(loginOrganizationSchema)
  });

  const onSubmit: SubmitHandler<loginStateType> = (data) => {
    alert(data.email)
  };

  return (
    <section className="relative overflow-hidden">
      <DecorateBackground/>
      <div className="h-screen flex flex-row justify-center items-center bg-primary-50 ">
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
                        className={`w-[476px] h-[46px] input ${errors?.email?.type && "border-red border-2 focus:border-red focus:border-2"}`}
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
                        type="text" 
                        className={`w-[476px] h-[46px] input ${errors?.password?.type && "border-red border-2 focus:border-red focus:border-2"}`}
                        placeholder="example@gmail.com"
                        {...register("password")}
                    />
                    <div className="flex flex-row justify-between">
                      <p className=" light16 text-red ">{errors?.password?.message}</p>
                      <p className=" light16 text-primary-300 self-end mt-[6px] cursor-pointer">Forgot Password?</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-5  mt-[20px]">
                  <motion.button type="submit" className=" w-[150px] h-[46px] bg-primary-400 rounded-3xl text-white medium18 flex flex-row justify-center items-center gap-[20px] hover:bg-primary-500 focus:ring-4 focus:ring-primary-200"
                    whileTap={{ scale: 1.05 }}
                    whileFocus={{ scale: 1.05 }}
                  >
                    SIGN IN
                    <img src="/Arrow.svg" alt="arrow" />
                  </motion.button>
                  <p className="light16 text-gray-200">I don't have an account ? <span className="text-primary-400 underline cursor-pointer">Sign up</span></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
   
  )
}