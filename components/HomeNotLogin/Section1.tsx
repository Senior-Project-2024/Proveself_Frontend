
import Link from "next/link"
export function Section1() {
  return (
    <section className="w-full h-[1080px] flex flex-row gap-[80px] justify-center items-center">
      <div className="flex flex-col gap-[38px] relative">
        <img src="/frame_home.png" alt="" className="absolute left-[200px] top-[90px]" />
        <p className="text-[64px] w-[806px] font-medium leading-[150%]">Prove your skill with Digital Badge / Certificate</p>
        <p className="regular30 w-[778px]">Ensure online certificate by E-learning platform become badge and verify your skill with collection badge as specified </p>
        <div className="flex flex-row gap-[19px]">
          <Link href="/signup">
            <button className="px-[42px] py-[17px] rounded-[10px] bg-brand-600 hover:bg-brand-700 transition-all duration-300 ease-in-out">
              <p className="medium24 text-white">Sign Up</p>
            </button>
          </Link>
          <Link href={"/signin"}>
            <button className="px-[42px] py-[17px] rounded-[10px] bg-white hover:bg-neutral-200 border border-brand-600 transition-all duration-300 ease-in-out">
              <p className="medium24 text-brand-600">Sign In</p>
            </button>
          </Link>
        </div>      
      </div>
      <img src="/Img_Home.png" alt="" className="w-[809px] h-[634px]" />
    </section>
  )
}
