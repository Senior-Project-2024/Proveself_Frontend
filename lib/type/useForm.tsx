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