import Link from "next/link"

export default function Footer() {
  return (
    <section className="bg-blue-300 mt-[82px] rounded-t-[80px] w-full flex flex-col items-center gap-[28px] text-white pt-[33px] pb-[30px]">
      <div className="flex flex-row gap-[350px]">
        <div className="flex flex-col gap-[18px]">
          <div className="flex flex-row items-center gap-[6px]">
            <img src="/logo_no_text.png" alt="" className="w-[60px] h-[56px]" />
            <p className="text-[40px] text-white font-Signika font-semibold">ProveSelf</p>
          </div>
          <p className="regular20 w-[340px]">We are senior computer engineering student at KMUTT (CPE34) and ProveSelf is our senior project </p>
          <Link href={"/about"}>
            <button className="flex flex-row items-center px-[13px] py-[4px] gap-[5px] bg-blue-300 border-[2px] border-white rounded-[14px]">
              <img src="/external-link.svg" alt="" className="w-[21px] h-[21px]" />
              <p className="regular20">About Us</p>
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-[31px]">
          <p className="medium30">Feature</p>
          <div className="flex flex-col items-center gap-[14px] regular20 cursor-pointer">
            <Link href={"/"}  className="hover:underline">Badge/ Certificate Collection</Link>
            <Link href={"/verification"} className="hover:underline">Verification</Link>
            <Link href={"/issue-certificate"} className="hover:underline">Issue Certificate</Link>
            <Link href={"/organization/management"} className="hover:underline">Management</Link>
            <Link href={"/organization/document"} className="hover:underline">API Documentation</Link>
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
