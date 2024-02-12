"use client"
import { loginStateType } from "@/lib/type/useForm";
import { useRouter } from "next/navigation";

export const onSubmitFunction = (data : loginStateType, setErrorMessage : any) => {
  const router = useRouter();
  if(data.email == "example@gmail.com" && data.password == "Meaw1234"){
    const emailCookie = "pathinya19@gmail.com"
    router.push(`/confirm?email=${emailCookie}`)
  }else{
    setErrorMessage("Incorrect email or password");
  }
};