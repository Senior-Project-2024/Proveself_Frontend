import React from 'react'

export default function CertificateSectionNoData() {
  return (
    <div className="flex flex-col items-center pt-[104px] pb-[63px] bg-[#F9FAFB]">
      <p className="text-[64px] leading-[75px] font-medium">🙇🏻<span className='text-red'>Sorry</span> , You don't have <span className='text-blue-300'>Certificate</span></p>
      <p className="text-[48px] leading-[54px] font-medium mt-[47px] mb-[118px]">Do 4 steps to get Certificate</p>
      <div className="flex flex-row items-center gap-[58px]">
          <div className="flex flex-col items-center relative">
            {/* arrow */}
            <img src="full_arrow/full-arrow-4step.svg" alt="" className="absolute top-[39px] left-[309px]" />
            {/*------------------*/}
            <div className="w-[124px] h-[124px] bg-brand-700 flex justify-center items-center rounded-[100px]">
              <img src="/step_collect.svg" alt="" className="w-[82px] h-[82px]" />
            </div>
            <p className="medium30 mt-[27px] mb-[34px]">Collect Badge</p>
            <p className="w-[403px] light24 text-center">You need to collect badge as specified for get Certificate.</p>
          </div>
          <div className="flex flex-col items-center relative">
            {/* arrow */}
            <img src="full_arrow/full-arrow-4step.svg" alt="" className="absolute top-[39px] left-[309px]" />
            {/*------------------*/}
            <div className="w-[124px] h-[124px] bg-brand-700 flex justify-center items-center rounded-[100px]">
              <img src="/step_login.svg" alt="" className="w-[82px] h-[82px]" />
            </div>
            <p className="medium30 mt-[27px] mb-[34px]">Login your course</p>
            <p className="w-[403px] light24 text-center">Go to your course website and login with enrollment account.</p>
          </div>
          <div className="flex flex-col items-center relative">
            {/* arrow */}
            <img src="full_arrow/full-arrow-4step.svg" alt="" className="absolute top-[39px] left-[309px]" />
            {/*------------------*/}
            <div className="w-[124px] h-[124px] bg-brand-700 flex justify-center items-center rounded-[100px]">
            <img src="/step_find.svg" alt="" className="" />
            </div>
            <p className="medium30 mt-[27px] mb-[34px]">Find complete course</p>
            <p className="w-[403px] light24 text-center">Let you find your complete course from website.</p>
          </div>
          <div className="flex flex-col items-center ">
            <div className="w-[124px] h-[124px] bg-brand-700 flex justify-center items-center rounded-[100px]">
            <img src="/step_find.svg" alt="" className="" />
            </div>
            <p className="medium30  mt-[27px] mb-[34px]">Create certificate</p>
            <p className="w-[403px] light24 text-center">Look for button related to create/mint certificate and click it.</p>
          </div>
        </div>
      <div className="flex flex-row gap-[6px] mt-[212px] ">
        <img src="/warning.svg" alt="" />
        <p className="light20 text-gray-200">You can only do with Participating E-learning platform </p>
      </div>
    </div>
  )
}
