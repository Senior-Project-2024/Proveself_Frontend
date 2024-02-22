import React from 'react'

export default function BadgeSectionNoData() {
  return (
    <div className="flex flex-col items-center pt-[104px] pb-[63px]">
      <p className="text-[64px] leading-[75px] font-medium">🙇🏻<span className='text-red'>Sorry</span> , You don't have <span className='text-blue-300'>Badge</span></p>
      <p className="text-[48px] leading-[54px] font-medium mt-[47px] mb-[118px]">Do 3 steps to get Badge</p>
      <div className="flex flex-row items-center gap-[150px]">
        <div className="flex flex-col items-center relative">
          {/* arrow */}
          <img src="full_arrow/full-arrow-3step.svg" alt="" className="absolute top-[39px] left-[309px]" />
          {/*------------------*/}
          <div className="w-[124px] h-[124px] bg-brand-700 flex justify-center items-center rounded-[100px]">
            <img src="/step_login.svg" alt="" className="w-[82px] h-[82px]" />
          </div>
          <p className="medium30 mt-[27px] mb-[34px]">Login your course</p>
          <p className="w-[403px] light24 text-center">Go to your course website and login with enrollment account.</p>
        </div>
        <div className="flex flex-col items-center relative">
          {/* arrow */}
          <img src="full_arrow/full-arrow-3step.svg" alt="" className="absolute top-[39px] left-[309px]" />
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
          <p className="medium30  mt-[27px] mb-[34px]">Create badge</p>
          <p className="w-[403px] light24 text-center">Look for button related to create/mint badge and click it.</p>
        </div>
      </div>
      <div className="flex flex-row gap-[6px] mt-[212px] ">
        <img src="/warning.svg" alt="" />
        <p className="light20 text-gray-200">You can only do with Participating E-learning platform </p>
      </div>
    </div>
  )
}
