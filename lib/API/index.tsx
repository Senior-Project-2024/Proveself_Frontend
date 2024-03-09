import axios from "axios";
import http from "@/helper/configAxios";
import { Trole } from "../type/constant";

export function API_signup(role : Trole, email : string, firstname: string, lastname: string, organizeName : string, password: string,  phone: string, landlineNumber: string){
  return http.post("/auth/signup", {
    email : email,
    password: password,
    organizeName: organizeName,
    fName: firstname,
    lName: lastname,
    telNo: phone,
    landlineNumber : landlineNumber,
    role: role
  })
}


export function API_sendEmail(email : string){
  return http.post("/auth/sendEmail" ,{
    email : email
  })
}

export function API_signin(email : string, password:string){
  return http.post("/auth/signin", {
    email : email,
    password : password,
  })
}

export function API_updateProfile(firstname : string, lastname:string, phone: string){
    return axios.get("https://65c45875dae2304e92e2777f.mockapi.io/user", {
      // fName : firstname,
      // lName : lastname,
      // telNo : phone,
      // role :  role
    })
}
export function API_updateProfileOrganize(name : string, phone: string){
  return axios.get("https://65c45875dae2304e92e2777f.mockapi.io/user", {
    // name : name
    // telNo : phone
  })
} 
  
export function API_updatePassword(role : string, currentpassword : string, newPassword : string){
  return axios.get("https://65c45875dae2304e92e2777f.mockapi.io/user",{
    // currentPassword : currentPassword
    // newPassword : newPassword
    // confirmNewPassword : confirmNewPassword
    // role: role
  })
}


export async function API_auth(){
  return  http.get("/auth/whoAmI");
}
