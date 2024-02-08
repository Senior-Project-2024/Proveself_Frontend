'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {motion} from "framer-motion" 
import DecorateBackground from "@/components/decorateBackground"
import { registerOrganizationStateType } from "@/lib/type/useForm";
import { registerOrganizationchema } from "@/lib/ScemaYup";
import Link from "next/link";
import InputMask from "react-input-mask"

export default function RegisterOrganization(){

  const { register, handleSubmit, watch, formState: { errors } } = useForm<registerOrganizationStateType>({
    defaultValues : {
      name : "",
      phone: "",
      email : "example@gmail.com",
      password : "Meaw1234",
      confirmpassword : ""
    },
    resolver : yupResolver(registerOrganizationchema)
  });

  const onSubmit: SubmitHandler<registerOrganizationStateType> = (data) => {
    alert(data.email)
  };
  return(
    <section className="relative overflow-hidden">
    <DecorateBackground/>
    <div className="h-screen flex flex-row justify-center items-center bg-white">
      <div className="w-[897px] h-[797px] bg-white rounded-3xl shadow-thin flex flex-row justify-center items-center relative z-40">
        <p className="absolute right-5 top-4 light24 text-gray-100">For Organization</p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center">
            <p className="text-gray-100 light20">Welcome to <span className="medium24 text-primary-400">ProveSelf</span></p>
            <p className="text-[64px] font-medium leading-[120%] text-primary-500 mt-[21px] mb-[4px]">Sign Up</p>
            <p className="light16 text-gray-200">Already have an account? <Link href="/organization/signin" className="text-primary-400 regular16 underline cursor-pointer">Sign in</Link></p>
          </div>
          {/* Form */}
          <form className="flex flex-col gap-[30px]"  onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row gap-[40px]">
              <div className="flex flex-col gap-[10px] relative">
                <p className="regular18">Organization name</p>
                <input 
                    type="text" 
                    className={`w-[300px] h-[46px] input ${errors?.name?.type && "input-fail"}`}
                    placeholder="Company name"
                    autoFocus
                    {...register("name")}
                />
                <p className="absolute light16 text-red top-[84px]">{errors?.name?.message}</p>
              </div>
              <div className="flex flex-col gap-[10px] relative">
                <p className="regular18">Organization Phone number</p>
                <InputMask
                    mask="9999999999"
                    maskChar="" 
                    type="text" 
                    className={`w-[300px] h-[46px] input ${errors?.phone?.type && "input-fail"}`}
                    placeholder="021234567"
                    autoFocus
                    {...register("phone")}
                />
                <p className="absolute light16 text-red top-[84px]">{errors?.phone?.message}</p>
              </div>
            </div>

            <div className="flex flex-col gap-[10px] relative">
              <p className="regular18">Organization Email address</p>
              <input 
                  type="text" 
                  className={`w-[640px] h-[46px] input ${errors?.email?.type && "input-fail"}`}
                  placeholder="example@organize.ac.th"
                  autoFocus
                  {...register("email")}
              />
              <p className="absolute light16 text-red top-[84px]">{errors?.email?.message}</p>
            </div>

            <div className="flex flex-col gap-[2px]">
              <div className="flex flex-row gap-[40px]">
                <div className="flex flex-col gap-[10px] relative">
                  <p className="regular18">Password</p>
                  <div>
                    <input 
                        type="password" 
                        className={`w-[300px] h-[46px] input ${errors?.password?.type && "input-fail"}`}
                        placeholder="***********"
                        autoFocus
                        {...register("password")}
                    />
                    <p className="light16 text-red top-[84px]">{errors?.password?.message}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] relative">
                  <p className="regular18">Confirm Password</p>
                  <div>
                    <input 
                        type="password" 
                        className={`w-[300px] h-[46px] input ${errors?.confirmpassword?.type && "input-fail"}`}
                        placeholder="***********"
                        autoFocus
                        {...register("confirmpassword")}
                    />
                    <p className="light16 text-red top-[84px]">{errors?.confirmpassword?.message}</p>
                  </div>
                </div>
              </div>
              <p className="light16 text-gray-100">Use 8 or more characters, at least one special character and one number</p>
            </div>

            <div className="flex flex-col items-center gap-5  mt-[20px]">
              <button type="submit" 
                disabled={(!watch().email || !watch().name || !watch().password || !watch().confirmpassword || !watch().phone)}
                className="w-[150px] h-[46px] bg-primary-400 rounded-3xl text-white medium18 flex flex-row justify-center items-center gap-[20px] 
                transition hover:bg-primary-500 hover:scale-105 hover:ease-in-out hover:duration-300
              disabled:bg-gray-100 disabled:scale-100"
              >
                SIGN UP <img src="/Arrow.svg" alt="arrow" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}