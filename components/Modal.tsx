'use client'
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
interface Imodal{
  children ?: React.ReactNode;
  setStatus ?: any;
  width : string;
  height : string;
  typeClose: "outside" | "inside";
}

const variant = {
  initial : {
    opacity: 0,
    scale : 0
  },
  animate : {
    opacity: 1, 
    scale : 1
  }
}

export default function Modal({ children, setStatus, width, height, typeClose } : Imodal) {
  const newRef = useRef<HTMLInputElement>(null);
  const handleOutsideClick = (e :any) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      setStatus(false);
    }
  };
  useEffect(()=>{
    typeClose == "outside" &&
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      typeClose == "outside" && document.removeEventListener("mousedown", handleOutsideClick);
    };
  },[]);
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-40 flex flex-row justify-center items-center bg-[#878787] bg-opacity-30 backdrop-blur-[1px]">
      <motion.div className={`relative z-60 ${width} ${height} bg-white rounded-[10px] shadow-thin`} ref={newRef} 
        initial={"initial"}
        variants={variant}
        animate={"animate"}
      >
        {children}
      </motion.div>
    </div>
  )
}
