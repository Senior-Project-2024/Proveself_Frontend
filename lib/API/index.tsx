import axios from "axios";

export function API_updateProfile(firstname : string, lastname:string, phone: string){
    return axios.get("https://65c45875dae2304e92e2777f.mockapi.io/user", {
      // fName : firstname,
      // lName : lastname,
      // telNo : phone,
      // role : 
    })
}

export function API_updatePassword(currentpassword : string, newPassword : string, confirmNewPassword : string){
  return axios.get("https://65c45875dae2304e92e2777f.mockapi.io/use",{
    // currentPassword : currentPassword
    // newPassword : newPassword
    // confirmNewPassword : confirmNewPassword
  })
}