import { useRouter } from "next/navigation"

export function Section4() {
  const router = useRouter();
  return (
    <section className="w-full flex flex-col gap-[56px] items-center bg-brand-700 pt-[70px] pb-[50px]">
      <p className="text-[48px] font-medium text-white">Provide APIs service to Developer</p>
      <img src="/provideAPI.png" alt="" />
      <p className="w-[1126px] regular30 text-white text-center">API Documentation will bring you know what need to have before use service and other function on ProveSelf API.</p>
      <button className="border-2 border-white rounded-xl py-[18px] px-[34px] h-fit
      medium30 text-white" onClick={()=> router.push("/organization/document")} >
        API Documentation
      </button>
    </section>
  )
}
