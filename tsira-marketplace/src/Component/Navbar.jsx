import { HashLink } from "react-router-hash-link"
import { useState } from "react"
import TsiraLogo from "../assets/Tsira logo mark.png"


function Navbar() {

   const navItems = [
      {title: "Home", link: "/#home"},
      {title: "Features", link: "/#features"},
      {title: "Why It Matters", link: "/#why-tsira"},
      {title: "Sustainability", link: "/#eco-impact"},
      {title: "Built For", link: "/#users"},
   ]
   const [nav, setNav] = useState(false)
   const handleClick = () => setNav(!nav)
  return (
    <div className="flex justify-between py-2 px-6 fixed top-0 left-0 right-0 z-10 bg-tsira-bg">
      <img src={TsiraLogo} alt="tsiraLogo"  className="w-14 h-14"/>

      <ul className="hidden md:flex items-center gap-4">
         {navItems.map((menu) => (
            <li key={menu.title} className="text-base font-semibold text-tsira-muted">
               <HashLink
               smooth
               to={menu.link}
               className="hover:bg-tsira-primary/20 hover:cursor-pointer p-2 rounded-lg hover:text-tsira-primary"
               >
               {menu.title}
               </HashLink>
            </li>
         ))}
      </ul>
    </div>
  )
}

export default Navbar