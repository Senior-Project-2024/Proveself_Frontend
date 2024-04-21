import { Trole } from "./constant";

export type TgeneralData = {
  email: string,
  password: string,
  username: string,
  fName: string,
  lName: string,
  telNo: string,
  role: string
}

export type TgeneralDataOrganize = {
  email: string,
  name: string,
  telNo: string,
  role: string
}

export type TdataUserOrganize = {
  id ?: string;
  email ?: string;
  password ?: string;
  organizeName ?: string;
  fName ?: string;
  lName ?: string;
  telNo ?: string;
  landlineNumber ?: string;
  keyStoreJsonV3 ?: any;
  tokenApi ?: string;
  role ?: Trole;
  hashCode ?: string;
  isConfirm ?: boolean
}