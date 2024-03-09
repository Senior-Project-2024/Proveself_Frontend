
export function Section2() {
  return (
    <section className="w-full flex flex-col gap-[120px] items-center bg-[#F9FAFB] pb-[40px]">
      <div className="flex flex-col items-center gap-[16px] mt-[82px]">
        <p className="text-[56px] font-medium uppercase">Structure</p>
        <p className="light24">This is structure of ProveSelf</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center gap-[40px]">
            <p className="medium36">Online Certificate</p>
            <img src="/certificate1.png" alt="" className="w-[368px] h-[250px]"/>
          </div>
          <div className="flex flex-col items-center ml-[98px] mr-[13px] w-[452px] pt-[30px]">
            <p className="light24 text-center w-[400px]">On E-learning platform create online certificate become badge</p>
            <img src="full_arrow/full-arrow-right.svg" alt="" className="" />
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <p className="medium36 bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">Our Badge</p>
            <img src="/badge.png" alt="" className="w-[406px] h-[335px]" />
          </div>
        </div>

        <div className="flex flex-row items-center gap-[20px] self-end mr-[40px]">
          <img src="full_arrow/full-arrow-down.svg" alt="" className="" />
          <p className="light24 w-[165px]">Collect badges on ProveSelf</p>
        </div>

        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center ">
            <p className="medium36 bg-gradient-to-r from-[#7F2DFF] to-[#AA00FF] to-80% text-transparent bg-clip-text">Our Certificate</p>
            <img src="/certificate2.png" alt="" className="w-[387px] h-[258px] mt-[40px]" />
          </div>
          <div className="flex flex-col items-center ml-[48px] mr-[50px]">
            <p className="light24 text-center w-[359px]">Create our certificate from collection badge as E-learning platform specified</p>
            <img src="full_arrow/full-arrow-left.svg" alt="" className="" />
          </div>
          <div className="flex flex-col items-center gap-[25px]">
            <p className="medium36 bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">Collection Badge</p>
            <img src="/badges.png" alt="" className="w-[482px] h-[369px]" />
          </div>
        </div> 
        <p className="text-gray-200 light20 mt-[100px]"><span className="text-red">Note </span>: Creating certificate or badge will be processed on only E-learning platform side.</p>
      </div>
    </section>
  )
}
