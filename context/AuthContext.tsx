'use client'
import { createContext } from "react";
export type TAuthContext = {
  statusAuth ?: {isUserAuth: boolean | undefined, isOrganizeAuth: boolean | undefined}
  setStatusAuth ?: any
}

export const AuthContext = createContext<TAuthContext>({});