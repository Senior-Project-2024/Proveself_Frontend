import AboutComponent from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbars/Navbar"
export default function About() {
  return (
    <section>
      <Navbar isUser={true}/>
      <AboutComponent/>
      <Footer/>
    </section>
  )
}
