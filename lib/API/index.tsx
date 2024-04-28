import axios from "axios";
import http from "@/helper/configAxios";
import { Trole } from "../type/constant";
import { badgeTemplateType, certificateTemplateType } from '@/lib/type/useForm';
import { getCookie } from "cookies-next";

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

export function API_signout(role: Trole){
  return http.post("/auth/signout", {
    role : role,
  })
}

export function API_updateProfile(id : string, body : any){
    return http.patch("/auth/" + id, body)
  }

export function API_getAllBadgeUser(address : string){
  return http.get("/badges/getAllBadgeUser?publickey=0x" + address)
}

export function API_getSpecificBadgeUser(id : string){
  return http.get("/badges/getSpecificBadgeUser?id=" + id)
}


  
/* Regarding Templete badge/certificate */
export function API_createBadge( badge : badgeTemplateType, file : File, skillState : string[]){
  const dataOrganize = JSON.parse(getCookie("data-organize") as string);

  const formData = new FormData()
  formData.append("image", file)
  formData.append("name", badge.badgeName)
  formData.append("descriptionCourse",  badge.description)
  formData.append("earningCriteria", badge.criteria)
  formData.append("linkCourse", badge.linkCourse ?? "")
  formData.append("templateCode", "")
  formData.append("organizeName", dataOrganize.organizeName)
  for(let skill of skillState){
    formData.append("skill[]", skill)
  }
  formData.append("expiration[year]", badge.yearExpired.toString())
  formData.append("expiration[month]", badge.monthExpired.toString())
  formData.append("expiration[day]", badge.dayExpired.toString())
  
  return http.post("/badges", formData , {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  })
}

export function API_updateBadge( badge : badgeTemplateType, file : File | null, skillState : string[], badgeId : string){
  const dataOrganize = JSON.parse(getCookie("data-organize") as string);

  const formData = new FormData()
  if(file){
    formData.append("image", file)
  }
  // formData.append("image", null)
  formData.append("name", badge.badgeName)
  formData.append("descriptionCourse",  badge.description)
  formData.append("earningCriteria", badge.criteria)
  formData.append("linkCourse", badge.linkCourse ?? "")
  formData.append("templateCode", "")
  formData.append("organizeName", dataOrganize.organizeName)
  for(let skill of skillState){
    formData.append("skill[]", skill)
  }
  formData.append("expiration[year]", badge.yearExpired.toString())
  formData.append("expiration[month]", badge.monthExpired.toString())
  formData.append("expiration[day]", badge.dayExpired.toString())
  
  return http.patch("/badges/" + badgeId, formData , {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  })
}

export function API_getAllBadgeTemplete(){
  return http.get("/badges/all")
}

export function API_getBadgeById(id : string){
  return http.get("/badges/" + id)
}

export function API_getCertificateById(id : string){
  return http.get("/certificates/" + id)
}

export function API_getAllBadgeOfOrganize(id : string){
  return http.get("/badges/organize/" + id)
}

export function API_getAllCertificateOfOrganize(id : string){
  return http.get("/certificates/organizeFullBadge/" + id)
}

export function API_createCertificate( certificate : certificateTemplateType, file : File , skillState : string[], badgeRequired : any[]){
  const dataOrganize = JSON.parse(getCookie("data-organize") as string);
  const formData = new FormData()
  formData.append("image", file)
  formData.append("name", certificate.certificateName)
  formData.append("descriptionCourse",  certificate.description)
  formData.append("earningCriteria", certificate.criteria)
  formData.append("templateCode", "")
  formData.append("organizeName", dataOrganize.organizeName)
  for(let skill of skillState){
    formData.append("skill[]", skill)
  }
  
  for(let badgeId of badgeRequired){
    formData.append("badgeRequired", badgeId.id)
  }
  formData.append("expiration[year]", certificate.yearExpired.toString())
  formData.append("expiration[month]", certificate.monthExpired.toString())
  formData.append("expiration[day]", certificate.dayExpired.toString())
  
  return http.post("/certificates", formData , {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  })
}

export function API_deleteBadge(id : string){
  console.log(id)
  return http.delete("/badges/" + id)
}

export function API_deleteCertificate(id : string){
  return http.delete("/certificates/" + id)
}

export function API_updateCertificate( certificate : certificateTemplateType, file : File | null , skillState : string[], badgeRequired : any[], certificateId : string){
  const dataOrganize = JSON.parse(getCookie("data-organize") as string);
  const formData = new FormData()
  if(file){
    formData.append("image", file)
  }
  formData.append("name", certificate.certificateName)
  formData.append("descriptionCourse",  certificate.description)
  formData.append("earningCriteria", certificate.criteria)
  formData.append("templateCode", "")
  formData.append("organizeName", dataOrganize.organizeName)
  console.log(skillState)
  for(let skill of skillState){
    formData.append("skill[]", skill)
  }
  
  for(let badgeId of badgeRequired){
    formData.append("badgeRequired", badgeId.id)
  }
  formData.append("expiration[year]", certificate.yearExpired.toString())
  formData.append("expiration[month]", certificate.monthExpired.toString())
  formData.append("expiration[day]", certificate.dayExpired.toString())
  
  return http.patch("/certificates/" + certificateId, formData , {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  })
}

/* ------------------------------------------------------------------ */

export async function API_auth(){
  return http.get("/auth/whoAmI");
}

export function API_auth_fetch(session : string , sessionSigValue : string){
  return fetch("http://localhost:4000/auth/whoAmI" , {
    headers : {
      "Cookie" : `session=${session};session.sig=${sessionSigValue}`
    }
  });
}

export function API_generateTokenAPI(){
  return http.post("/auth/apiToken");
}

