import AboutComponent from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbars/Navbar"
export default function AboutOrganization() {
  return (
    <section>
      <Navbar isUser={false}/>
      <AboutComponent/>
      <Footer/>
    </section>
  )
}
