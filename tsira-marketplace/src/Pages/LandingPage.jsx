import Navbar from "../Component/Navbar"
import Home from "../Sections/Home"
import Features from "../Sections/Features"
import WhyTsira from "../Sections/WhyTsira"
import Impact from "../Sections/Impact"
import Users from "../Sections/Users"
import Footer from "../Component/Footer"

function LandingPage() {
  return (
  <>
  <Navbar/>
  <Home />
  <Features/>
  <WhyTsira/>
  <Impact/>
  <Users/>
  <Footer />
  </>
  )
}

export default LandingPage