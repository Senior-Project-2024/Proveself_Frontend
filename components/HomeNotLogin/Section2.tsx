
import Button from "../Button"
export function Section2() {
  return (
    <section className="w-full flex flex-col gap-[120px] items-center bg-[#F9FAFB] pb-[94px]">
      <p className="text-[56px] mt-[110px] font-medium">Our 
        <span className="bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text"> Badge </span> 
        and 
        <span className="bg-gradient-to-r from-[#7F2DFF] to-[#AA00FF] to-80% text-transparent bg-clip-text "> Certificate</span>
      </p>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center gap-[40px]">
            <p className="medium36">Online Certificate</p>
            <img src="/certificate1.png" alt="" className="w-[368px] h-[250px]"/>
          </div>
          <div className="flex flex-col items-center ml-[98px] mr-[13px] w-[452px] pt-[30px]">
            <p className="light24 text-center w-[400px]">We determine online certificate become badge</p>
            <img src="full_arrow/full-arrow-right.svg" alt="" className="" />
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <p className="medium36 bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">Our Badge</p>
            <img src="/badge.png" alt="" className="w-[406px] h-[335px]" />
          </div>
        </div>

        <div className="flex flex-row items-center gap-[20px] self-end mr-[40px]">
          <img src="full_arrow/full-arrow-down.svg" alt="" className="" />
          <p className="light24">Collect badges</p>
        </div>

        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center ">
            <p className="medium36 bg-gradient-to-r from-[#7F2DFF] to-[#AA00FF] to-80% text-transparent bg-clip-text">Our Certificate</p>
            <img src="/certificate2.png" alt="" className="w-[387px] h-[258px] mt-[40px]" />
            <p className="text-gray-200 light20 w-[440px]"> <span className="text-red">Note </span>: Participating E-learning platform must specify badge that will can be certificate before. </p>
          </div>
          <div className="flex flex-col items-center ml-[48px] mr-[50px]">
            <p className="light24 text-center w-[400px]">Ensure truly skill from collection badge</p>
            <img src="full_arrow/full-arrow-left.svg" alt="" className="" />
          </div>
          <div className="flex flex-col items-center gap-[25px]">
            <p className="medium36 bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">Collection Badge</p>
            <img src="/badges.png" alt="" className="w-[482px] h-[369px]" />
          </div>
        </div> 
      </div>
     
    </section>
  )
}
