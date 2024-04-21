import Link from 'next/link'
import React from 'react'
import ExternalLink from './SVG/ExternalLink'
import { aboutData } from '@/lib/data/aboutData'

export default function AboutComponent() {
  return (
    <div className="mt-[90px]">
      <div className="py-[62px] flex flex-col items-center">
        <p className="text-[64px] font-medium">About Us</p>
        <p className="mt-[26px] regular24 text-center">
          We are senior computer engineering student at KMUTT (CPE34). <br></br>
          <span className="text-brand-600">ProveSelf</span> is our senior project.
        </p>
        <div className="mt-[80px] flex gap-[118px]">
          <div className="flex flex-col gap-[28px]">
            <p className="text-[36px] font-medium">Get to know <span className="text-brand-700">ProveSelf</span> </p>
            <p className="regular20 w-[561px]">
              &emsp; &emsp;Since current technology easy to counterfeit traditional credential or certificate and used in Portfolio or Resume. Which It affect to human resource may lose long time for verify and learner likely distrust from skill is specified.
              <br></br>
              <br></br>
              &emsp; &emsp;So we created Proveself platform that provide service organization or E-learning platform for issue digital credential through Blockchain system which transparent and verifiable
            </p>
            <Link href={"https://github.com/Senior-Project-2024/"}>
              <button className='flex items-center gap-[5px] bg-brand-600 rounded-[14px] px-[27px] py-[7px] hover:bg-brand-700 transition-all duration-200 ease-in-out'>
                <ExternalLink  strokeWidth='2'/>
                <p className='medium20 text-white'>Github</p>
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-[20px]">
            <p className="text-[36px] font-medium">Tools</p>
            <div className="flex flex-col gap-[14px]">
              {
                aboutData.map((data)=>{
                  return <div key={data.name}>
                    <p className='medium20'>{data.name}</p>
                    <div className="flex flex-wrap max-w-[575px] gap-[10px]">
                        {
                          data.detail.map((detail)=>{
                            return <div key={detail} className="py-[3px] px-[12px] border border-blue-300 rounded-[4px]">
                              <p className="medium18 text-blue-300">{detail}</p>
                            </div>
                          })
                        }
                    </div>
                  </div>
                })
              }
              
            </div>
          </div>
        </div>
        <div className="mt-[80px] flex flex-col gap-[80px] items-center">
          <p className="text-[36px] font-medium">Our Team</p>
          <div className="flex gap-[120px]">
            <div className="flex flex-col items-center gap-[17px]">
              <img src="/about/Pathinya.png" className="w-[172px] h-[172px]" alt="" />
              <p className="regular20">Pathinya Jongsupangpan</p>
              <p className="light18">Team member 1</p>
            </div>
            <div className="flex flex-col items-center gap-[17px]">
              <img src="/about/Sorathorn.png" className="w-[172px] h-[172px]" alt="" />
              <p className="regular20">Sorathorn Kaewchotchuangkul</p>
              <p className="light18">Team member 2</p>
            </div>
            <div className="flex flex-col items-center gap-[17px]">
              <img src="/about/Marong.png" className="w-[172px] h-[172px]" alt="" />
              <p className="regular20">Asst. Prof. Dr. Marong Phadungsit</p>
              <p className="light18">Advisor</p>
            </div>
            <div className="flex flex-col items-center gap-[17px]">
              <img src="/about/Waranat.png" className="w-[172px] h-[172px]" alt="" />
              <p className="regular20">Waranat Suttikan</p>
              <p className="light18">Co-Advisor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
