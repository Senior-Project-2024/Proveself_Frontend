import axios from "axios";

export function API_signup(role : string, email : string, firstname: string, lastname: string, organizeName : string, password: string,  phone: string){
  return axios.post( process.env.NEXT_PUBLIC_BACKEND_HOST + "/auth/signup", {
    email : email,
    password: password,
    organizeName: organizeName,
    fName: firstname,
    lName: lastname,
    telNo: phone,
    role: role
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

export async function API_signin(role : string, email : string, password : string){
  return axios.get("https://65c45875dae2304e92e2777f.mockapi.io/use",{
    // currentPassword : currentPassword
    // newPassword : newPassword
    // confirmNewPassword : confirmNewPassword
    // role: role
  });
}

export async function API_auth(){
  return [
    {role : "user"},
    {role : "organize"}
  ]
}