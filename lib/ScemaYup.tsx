import * as yup from "yup"

const phoneRegExp : RegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const phoneRegExpTH : RegExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

export const registerSchema = yup.object({
  firstname : yup.string().required("First name is required"),
  lastname : yup.string().required("Last name is required"),
  phone : yup.string()
  .matches(phoneRegExpTH, "Phone number is not valid")
  .required("Phone number is required"),
  email : yup.string().matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Format email is not valid")
  .required("Email address is required"),
  password : yup.string().matches(/^[A-Za-z\d@$!%*#?&]{8,}$/ , "Your password at least 8 characters")
  .matches(/^(?=.*[A-Z])[A-Za-z\d@$!%*#?&]{8,}$/ , "Your password at least 1 uppercase")
  .matches(/^(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/ , "Your password at least 1 number")
  .required("Password is required"),
  confirmpassword : yup.string()
  .oneOf([yup.ref('password')], 'Passwords must match')
  .required("Confirm password is required"),
})

export const registerOrganizationchema = yup.object({
  name : yup.string().required("Name is required"),
  phone : yup.string().required("Phone number is required")
  .matches(phoneRegExp, "Phone number is not valid"),
  email : yup.string().required("Email address is required")
  .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Format email is not valid")
  .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?!gmail.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "This form does not accept addresses from gmail.com"),
  password : yup.string().required("Password is required")
  .matches(/^[A-Za-z\d@$!%*#?&]{8,}$/ , "Your password at least 8 characters")
  .matches(/^(?=.*[A-Z])[A-Za-z\d@$!%*#?&]{8,}$/ , "Your password at least 1 uppercase")
  .matches(/^(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/ , "Your password at least 1 number"),
  confirmpassword : yup.string()
  .oneOf([yup.ref('password')], 'Passwords must match')
  .required("Confirm password is required"),
})

export const loginSchema = yup.object({
  email : yup.string().required("Email address is required"),
  password : yup.string().required("Password is required")
})

export const loginOrganizationSchema = yup.object({
  email : yup.string().matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Format email is not valid")
  .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?!gmail.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "This form does not accept addresses from gmail.com")
  .required("Email address is required"),
  password : yup.string().matches(/^[A-Za-z\d@$!%*#?&]{8,}$/ , "Your password at least 8 characters")
  .matches(/^(?=.*[A-Z])[A-Za-z\d@$!%*#?&]{8,}$/ , "Your password at least 1 uppercase")
  .matches(/^(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/ , "Your password at least 1 number")
  .required("Password is required")
})

export const editProfileSchema = yup.object({
  firstname : yup.string().required("First name is required"),
  lastname : yup.string().required("Last name is required"),
  phone: yup.string().required("Phone number is required")
  .matches(phoneRegExp, "Phone number is not valid"),
})

export const editProfileOrganizeSchema = yup.object({
  name : yup.string().required("Organization name is required"),
  phone: yup.string().required("Phone number is required")
  .matches(phoneRegExp, "Phone number is not valid"),
})

export const editPasswordSchema = yup.object({
  currentpassword : yup.string().required("Current password is required"),
  newpassword : yup.string().required("New password is required")
  .matches(/^[A-Za-z\d@$!%*#?&]{8,}$/ , "Your password at least 8 characters")
  .matches(/^(?=.*[A-Z])[A-Za-z\d@$!%*#?&]{8,}$/ , "Your password at least 1 uppercase")
  .matches(/^(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/ , "Your password at least 1 number"),
  confirmnewpassword : yup.string().required("Confirm New password is required").
  oneOf([yup.ref('newpassword')], 'Passwords must match') 
})

export const badgeTemplateSchema = yup.object({
  badgeName : yup.string().required("Badge name is required"),
  yearExpired : yup.number().required("Expire yaer is required")
  .integer("Expire yaer must be integer")
  .min(0, "Expire yaer at least 0"),
  monthExpired : yup.number().required("Expire month is required")
  .integer("Expire month must be integer")
  .min(0, "Expire month at least 0")
  .max(11, "Expire month max is 11"),
  dayExpired : yup.number().required("Expire day is required")
  .integer("Expire day must be integer")
  .min(0, "Expire day at least 0"),
  description : yup.string().required("description is required"),
  linkCourse : yup.string(),
  criteria : yup.string().required("criteria is required"),
  // skills : yup.array().of(yup.string().required("skill is required")).required("skills is required"),
})

export const certificateTemplateSchema = yup.object({
  certificateName : yup.string().required("Badge name is required"),
  yearExpired : yup.number().required("Expire yaer is required")
  .integer("Expire yaer must be integer")
  .min(0, "Expire yaer at least 0"),
  monthExpired : yup.number().required("Expire month is required")
  .integer("Expire month must be integer")
  .min(0, "Expire month at least 0")
  .max(11, "Expire month max is 11"),
  dayExpired : yup.number().required("Expire day is required")
  .integer("Expire day must be integer")
  .min(0, "Expire day at least 0"),
  description : yup.string().required("description is required"),
  criteria : yup.string().required("criteria is required"),
  // skills : yup.array().of(yup.string().required("skill is required")).required("skills is required"),
})