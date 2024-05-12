'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DecorateBackground from "@/components/decorateBackground"
import { registerSchema } from "@/lib/ScemaYup";
import { registerStateType } from "@/lib/type/useForm";
import InputMask from "react-input-mask";
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { API_sendEmail, API_signup } from "@/lib/API";
import { useToast } from "@chakra-ui/react";
import { useSignup } from "@/lib/API/useSignup";

export default function Register(){
  const Signup = useSignup();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<registerStateType>({
    defaultValues : {
      // firstname : "Pathinya",
      // lastname : "Jongsupangpan",
      // phone: "0813457821",
      // email : "pathinya@gmail.com",
      // password : "Meaw1234",
      // confirmpassword : "Meaw1234"
    },
    resolver : yupResolver(registerSchema)
  });

  const onSubmit: SubmitHandler<registerStateType> = async (data) => {
    (await Signup)(data, "user")
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
                <p className="regular18">First name</p>
                <input 
                    type="text" 
                    className={`w-[300px] h-[46px] input ${errors?.firstname?.type && "input-fail"}`}
                    placeholder="Myfistname"
                    autoFocus
                    {...register("firstname")}
                />
                <p className="absolute light16 text-red top-[84px]">{errors?.firstname?.message}</p>
              </div>
              <div className="flex flex-col gap-[10px] relative">
                <p className="regular18">Last name</p>
                <input 
                    type="text" 
                    className={`w-[300px] h-[46px] input ${errors?.lastname?.type && "input-fail"}`}
                    placeholder="Mylastname"
                    autoFocus
                    {...register("lastname")}
                />
                <p className="absolute light16 text-red top-[84px]">{errors?.lastname?.message}</p>
              </div>
            </div>

            <div className="flex flex-col gap-[10px] relative">
              <p className="regular18">Phone number</p>
              <InputMask
                  mask="999-999-9999" 
                  maskChar=""
                  defaultValue={watch().phone}
                  type="text" 
                  className={`w-[300px] h-[46px] input ${errors?.phone?.type && "input-fail"}`}
                  placeholder="0xx-xxx-xxxx"
                  autoFocus
                  {...register("phone")}
              />
              <p className="absolute light16 text-red top-[84px]">{errors?.phone?.message}</p>
            </div>

            <div className="flex flex-col gap-[10px] relative">
              <p className="regular18">Email address</p>
              <input 
                  type="text" 
                  className={`w-[640px] h-[46px] input ${errors?.email?.type && "input-fail"}`}
                  placeholder="example@gmail.com"
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
              <p className="light16 text-gray-100">Must be at least 8 characters, 1 uppercase and 1 number</p>
            </div>

            <div className="flex flex-col items-center gap-5  mt-[20px]">
              <button type="submit" 
                disabled={(!watch().email || !watch().password || !watch().firstname || !watch().lastname || !watch().confirmpassword || !watch().phone)}
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