import { getCookie } from 'cookies-next';
type IgetCookie = "data-user" | "data-organize";

export default function getCookieFunction(data : IgetCookie){
  return JSON.parse(getCookie(data) as string)
}