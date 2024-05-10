import Footer from "@/components/Footer";
import Navbar from "@/components/Navbars/Navbar";

export default function Document() {
  return (
    <>
      <Navbar isUser={true} />
      <div className="h-screen flex flex-col justify-center items-center">
        <p className="text-[64px] font-medium">Coming Soon</p>
        <p className="text-[40px] font-normal gap-[44px]">We are going to write the API documentation</p>
      </div>
      <Footer/>
    </>
  )
}
