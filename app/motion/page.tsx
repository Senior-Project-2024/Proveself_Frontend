'use client'
import { motion } from "framer-motion"

export default function Motion() {
  return (
    <div className="h-screen flex justify-center items-center">
      <motion.div className="w-[111px] h-[107px] bottom-0 left-0"
        initial = {{
          // scale: 0,
        }}
        animate={{
          x:[0, 100, 120, -300 ,0],
          y:[0, 50, 30, -100, 0],
        }}
        transition={{ repeat : Infinity , duration: 1}}
      >
        <img src="/ball3.png" alt="" />
      </motion.div>
    </div>
  )
}
