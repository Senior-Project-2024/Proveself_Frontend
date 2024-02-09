import axios from "axios";

export function API_updateProfile(firstname : string, lastname:string, phone: string){
    return axios.get("https://65c45875dae2304e92e2777f.mockapi.io/user", {
      // fName : firstname,
      // lName : lastname,
      // telNo : phone,
      // role :  role
    })
  }
export function API_updateProfileOrganize(name : string, phone: string){
  return axios.get("https://65c45875dae2304e92e2777f.mockapi.io/use", {
    // name : name
    // telNo : phone
  })
} 
  
export function API_updatePassword(role : string, currentpassword : string, newPassword : string){
  return axios.get("https://65c45875dae2304e92e2777f.mockapi.io/use",{
    // currentPassword : currentPassword
    // newPassword : newPassword
    // confirmNewPassword : confirmNewPassword
    // role: role
  })
}
