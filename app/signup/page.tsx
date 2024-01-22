'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {motion} from "framer-motion" 
import DecorateBackground from "@/components/decorateBackground"
import { registerSchema } from "@/lib/ScemaYup";
import { registerStateType } from "@/lib/type/useForm";
import InputMask from "react-input-mask";
import Link from "next/link";

export default function Register(){

  const { register, handleSubmit, watch, formState: { errors } } = useForm<registerStateType>({
    defaultValues : {
      firstname : "",
      lastname : "",
      phone: "",
      email : "example@gmail.com",
      password : "Meaw1234",
      confirmpassword : "Meaw1234"
    },
    resolver : yupResolver(registerSchema)
  });

  const onSubmit: SubmitHandler<registerStateType> = (data) => {
    alert(data.email)
    console.log(watch())
  };
  return(
    <section className="relative overflow-hidden">
    <DecorateBackground/>
    <div className="h-screen flex flex-row justify-center items-center bg-white ">
      <div className="w-[897px] h-[797px] bg-white rounded-3xl shadow-thin flex flex-row justify-center items-center z-40">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center">
            <p className="text-gray-100 light20">Welcome to <span className="medium24 text-primary-400">ProveSelf</span></p>
            <p className="text-[64px] font-medium leading-[120%] text-primary-500 mt-[21px] mb-[4px]">Sign Up</p>
            <p className="light16 text-gray-200">Already have an account? <Link href="/signin" className="text-primary-400 regular16 underline cursor-pointer">Sign in</Link></p>
          </div>
          <form className="flex flex-col gap-[24px]"  onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row gap-[40px]">
              <div className="flex flex-col gap-[10px] relative">
                <p className="light18">First name</p>
                <input 
                    type="text" 
                    className={`w-[300px] h-[46px] input ${errors?.firstname?.type && "border-red border-2 focus:border-red focus:border-2"}`}
                    placeholder="Myname"
                    autoFocus
                    {...register("firstname")}
                />
                <p className="absolute light16 text-red top-[84px]">{errors?.firstname?.message}</p>
              </div>
              <div className="flex flex-col gap-[10px] relative">
                <p className="light18">Last name</p>
                <input 
                    type="text" 
                    className={`w-[300px] h-[46px] input ${errors?.lastname?.type && "border-red border-2 focus:border-red focus:border-2"}`}
                    placeholder="Mylastname"
                    autoFocus
                    {...register("lastname")}
                />
                <p className="absolute light16 text-red top-[84px]">{errors?.lastname?.message}</p>
              </div>
            </div>

            <div className="flex flex-col gap-[10px] relative">
              <p className="light18">Phone number</p>
              <InputMask
                  mask="999-999-9999" 
                  maskChar=""
                  type="text" 
                  className={`w-[300px] h-[46px] input ${errors?.phone?.type && "border-red border-2 focus:border-red focus:border-2"}`}
                  placeholder="099-123-4567"
                  autoFocus
                  {...register("phone")}
              />
              <p className="absolute light16 text-red top-[84px]">{errors?.phone?.message}</p>
            </div>

            <div className="flex flex-col gap-[10px] relative">
              <p className="light18">Email address</p>
              <input 
                  type="text" 
                  className={`w-[640px] h-[46px] input ${errors?.email?.type && "border-red border-2 focus:border-red focus:border-2"}`}
                  placeholder="example@gmail.com"
                  autoFocus
                  {...register("email")}
              />
              <p className="absolute light16 text-red top-[84px]">{errors?.email?.message}</p>
            </div>

            <div className="flex flex-col gap-[2px]">
              <div className="flex flex-row gap-[40px]">
                <div className="flex flex-col gap-[10px] relative">
                  <p className="light18">Password</p>
                  <div>
                    <input 
                        type="password" 
                        className={`w-[300px] h-[46px] input ${errors?.password?.type && "border-red border-2 focus:border-red focus:border-2"}`}
                        placeholder="***********"
                        autoFocus
                        {...register("password")}
                    />
                    <p className="light16 text-red top-[84px]">{errors?.password?.message}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] relative">
                  <p className="light18">Confirm Password</p>
                  <div>
                    <input 
                        type="password" 
                        className={`w-[300px] h-[46px] input ${errors?.confirmpassword?.type && "border-red border-2 focus:border-red focus:border-2"}`}
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
              <motion.button type="submit" className=" w-[150px] h-[46px] bg-primary-400 rounded-3xl text-white medium18 flex flex-row justify-center items-center gap-[20px] hover:bg-primary-500 focus:ring-4 focus:ring-primary-200"
                whileTap={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
              >
                SIGN IN
                <img src="/Arrow.svg" alt="arrow" />
              </motion.button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}