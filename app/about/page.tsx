'use client'
import Navbar from "@/components/Navbars/Navbar"
import { useToast, Button } from "@chakra-ui/react";
export default function About() {
  const toast = useToast()
  return (
    <section>
      <Navbar isUser={true}/>
    </section>
  )
}
