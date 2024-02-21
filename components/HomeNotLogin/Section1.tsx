
import Button from "../Button"
export function Section1() {
  return (
    <section className="w-full h-[1080px] flex flex-row gap-[80px] justify-center items-center">
      <div className="flex flex-col gap-[38px] relative">
        <img src="/frame_home.png" alt="" className="absolute left-[200px] top-[90px]" />
        <p className="text-[64px] w-[806px] font-medium leading-[150%]">Prove your skill with Digital Badge / Certificate</p>
        <p className="regular30 w-[778px]">Ensure online certificate by E-learning platform become badge and verify your skill with collection badge as specified </p>
        <div className="flex flex-row gap-[19px]">
          <Button text="Sign Up" bgcolor="bg-brand-600" rounded="rounded-[10px]" font="medium24" px="px-[42px]" py="py-[17px]"/>
          <Button text="Sign In" bgcolor="bg-white" rounded="rounded-[10px]" font="medium24" px="px-[42px]" py="py-[17px]" textColor="text-brand-600" border="border" borderColor="border-brand-600"/>
        </div>      
      </div>
      <img src="/Img_Home.png" alt="" className="w-[809px] h-[634px]" />
    </section>
  )
}
