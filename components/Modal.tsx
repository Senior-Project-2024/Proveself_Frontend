'use client'
import { useEffect, useRef } from "react";

interface Imodal{
  children ?: React.ReactNode;
  setStatus ?: any;
  width : string;
  height : string;
  typeClose: "outside" | "inside";
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
  });
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-40 flex flex-row justify-center items-center bg-[#878787] bg-opacity-30 backdrop-blur-[1px]">
      <div className={`${width} ${height} bg-white rounded-[10px] z-60 relative`} ref={newRef} >
        {children}
      </div>
    </div>
  )
}
