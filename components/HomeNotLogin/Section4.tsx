export function Section4() {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-[#F9FAFB]">
      <p className="text-[56px] leading-[120%] font-medium mt-[76px] mb-[60px]">How to get <span className="text-blue-300">Badge</span> and <span className="text-brand-700">Certificate</span></p>
      {/* 3 steps */}
      <div className="w-full bg-white flex flex-col items-center gap-[75px] pt-[23px] pb-[87px]">
        <p className="text-[48px] font-medium ">3 steps to get <span className="text-blue-300">Badge</span></p>
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
      </div>
      {/* 4 steps */}
      <div className="w-full bg-brand-50 flex flex-col items-center gap-[75px] pt-[40px] pb-[87px]">
        <p className="text-[48px] font-medium ">4 steps to get <span className="text-brand-700">Certificate</span></p>
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
            <p className="medium30  mt-[27px] mb-[34px]">Create badge</p>
            <p className="w-[403px] light24 text-center">Look for button related to create/mint badge and click it.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-[6px] pt-[30px] pb-[24px]">
        <img src="/warning.svg" alt="" />
        <p className="light24 text-gray-200">You can only do with Participating E-learning platform </p>
      </div>
    </section>
  )
}