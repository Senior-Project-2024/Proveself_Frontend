import { loginStateType } from "@/lib/type/useForm";

export const onSubmitFunction = (data : loginStateType, setErrorMessage : any) => {
  if(data.email == "example@gmail.com" && data.password == "Meaw1234"){
    console.log("Login success");
  }else{
    setErrorMessage("Incorrect email or password");
  }
};