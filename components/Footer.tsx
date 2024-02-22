import Link from "next/link"
import Button from "./Button"

export default function Footer() {
  return (
    <section className="bg-blue-300 mt-[82px] rounded-t-[80px] w-full flex flex-col items-center gap-[56px] text-white pt-[62px] pb-[43px]">
      <div className="flex flex-row gap-[330px]">
        <div className="flex flex-col gap-[26px]">
          <div className="flex flex-row items-center gap-[6px]">
            <img src="/logo_no_text.png" alt="" className="w-[60px] h-[56px]" />
            <p className="text-[40px] text-white font-Signika font-semibold">ProveSelf</p>
          </div>
          <p className="regular20 w-[340px]">We are senior computer engineering student at KMUTT (CPE34) and ProveSelf is our senior project </p>
          <Button text={"About Us"} px="px-[13px]" py="py-[4px]" gap="gap-[5px]" bgcolor="bg-blue-300" border="border-[2px]" borderColor="border-white" font="regular20" rounded="rounded-[14px]" link="/about">
            <img src="/external-link.svg" alt="" className="w-[21px] h-[21px]" />
          </Button>
        </div>
        <div className="flex flex-col items-center gap-[31px]">
          <p className="medium30">Feature</p>
          <div className="flex flex-col items-center gap-[14px] regular20 cursor-pointer">
            <Link href={"/verification"} className="hover:underline">Verification</Link>
            <Link href={"/"}  className="hover:underline">Badge/ Certificate Collection</Link>
            <Link href={"/organization/document"} className="hover:underline">API Documentation</Link>
            <Link href={"/token"} className="hover:underline">Token API</Link>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="medium30">Contact Us</p>
          <p className="medium20 mt-[24px] mb-[13px]">pathinya19@gmail.com</p>
          <p className="medium20">sorathorn.16@gmail.com</p>
        </div>
      </div>
      <div className="bg-[#D9D9D9] w-[1600px] h-[2px]"></div>
      <p>✍️ Made by Pathinya Jongsupangpan and Sorathorn Kaewchotchuangkul </p>
    </section>
  )
}
