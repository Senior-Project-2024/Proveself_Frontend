export type registerStateType = {  
  firstname : string;
  lastname : string;
  phone: string; 
  email : string;
  password : string;
  confirmpassword: string;  
}

export type registerOrganizationStateType = {
  name : string;
  phone: string; 
  email : string;
  password : string;
  confirmpassword: string;  
}

export type loginStateType = {   
  email : string;
  password : string;  
}

export type editProfileType = {
  firstname : string;
  lastname : string;
  phone : string;
}
export type editProfileOrganizeType = {
  name : string;
  phone : string
}

export type editPasswordType = {
  currentpassword : string;
  newpassword : string;
  confirmnewpassword : string;
}

export type badgeTemplateType = {
  badgeName : string;
  yearExpired : number;
  monthExpired : number;
  dayExpired : number;
  // file : any; note : file will be check after Yup validation
  description : string;
  linkCourse ?: string;
  criteria : string;
  // skills : string[]; note : can't push in form
}

export type certificateTemplateType = {
  certificateName : string;
  yearExpired : number;
  monthExpired : number;
  dayExpired : number;
  // file : any; note : file will be check after Yup validation
  description : string;
  criteria : string;
  // skills : string[]; note : can't push in form
}