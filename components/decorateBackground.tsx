import {easeOut, motion} from "framer-motion"
export default function DecorateBackground() {
  return (
    <>
       <div className="w-[357px] h-[334px] absolute blurpurple top-[172px] left-[820px] z-0"></div>
      {/* Left side */}
      <motion.div className="w-[317px] h-[321px] absolute top-[38px] left-[48px]"
        initial = {{
        }}
        animate={{
          x:[0, 0, -13, 59, 93, 0,-13, 0],
          y:[0, 72, 179, 182, 39, 72, 179, 0],
        }}
        transition={{ repeat : Infinity , duration: 8 ,ease:easeOut}}
      >
        <img src="/ball1.png" alt="" />
      </motion.div>
      <motion.div className="w-[63px] h-[58px] absolute top-[447px] left-[58px]"
        initial = {{
        }}
        animate={{
          x:[0, 86, 275, 253 , 9, 86, 275, 0],
          y:[0, 114, -138, -301, -187, 114, -73,0],
        }}
        transition={{ repeat : Infinity , duration: 8, ease:easeOut}}
      >
        <img src="/ball2.png" alt="" />
      </motion.div>
      <motion.div className="w-[111px] h-[107px] absolute top-[566px] left-[170px]"
        initial = {{
        }}
        animate={{
          x:[0, 84, 147, -34 , -27, -9, 147, 0],
          y:[0, 55, 29, -278, -124, 55, 29,0],
        }}
        transition={{ repeat : Infinity , duration: 8, ease:easeOut}}
      >
        <img src="/ball3.png" alt="" />
      </motion.div>
      <motion.div className="w-[138px] h-[137px] absolute top-[406px] left-[274px]"
        initial = {{
        }}
        animate={{
          x:[0, -8, -214, -108 , -177, -8, -214, 0],
          y:[0, -266,-279, -304, -296, -266, -279,0],
        }}
        transition={{ repeat : Infinity , duration: 8, ease:easeOut}}
      >
        <img src="/ball4.png" alt="" />
      </motion.div>
      <img src="/component.png" className="w-[300px] h-[238px] absolute left-[-41px] bottom-[-52px]" alt="" />
      <img src="/component.png" className="w-[240px] h-[192px] absolute left-[209px] bottom-[31px]" alt="" />
      <img src="/component.png" className="w-[300px] h-[238px] absolute left-[18px] bottom-[119px]" alt="" />


      {/* Right side */}
      <img src="/Server.png" className="w-[381px] h-[533px] absolute right-[70px] bottom-[36px]" alt="" />
      <motion.div className="w-[87px] h-[91px] absolute top-[69px] right-[206px]"
        initial = {{
        }}
        animate={{
          x:[0, -95, -119, -70 , -70, 0],
          y:[0, -26, 100, 63, 118,0],
        }}
        transition={{ repeat : Infinity , duration: 8, ease:easeOut}}
      >
        <img src="/ball_1.png" alt="" />
      </motion.div>
      <motion.div className="w-[63px] h-[58px] absolute top-[259px] right-[344px]"
        initial = {{
        }}
        animate={{
          x:[0, 0, 81, 97, 171, 0],
          y:[0, 85, 63,-23, -86,0],
        }}
        transition={{ repeat : Infinity , duration: 8, ease:easeOut}}
      >
        <img src="/ball_2.png" alt="" />
      </motion.div>
      <motion.div className="w-[95px] h-[94px] absolute top-[203px] right-[48px]"
        initial = {{
        }}
        animate={{
          x:[0, -14, -158, -206 ,-206, 0],
          y:[0, 170, 199, 152, 152,0],
        }}
        transition={{ repeat : Infinity , duration: 8, ease:easeOut}}
      >
        <img src="/ball_3.png" alt="" />
      </motion.div>
      <motion.div className="w-[201px] h-[194px] absolute top-[292px] right-[133px]"
        initial = {{
        }}
        animate={{
          x:[0, 59, 59, 68 , 68, 0],
          y:[0, -130, -259,-120, 24,0],
        }}
        transition={{ repeat : Infinity , duration: 8, ease:easeOut}}
      >
        <img src="/ball_4.png" alt="" />
      </motion.div>
    </>
  )
}
