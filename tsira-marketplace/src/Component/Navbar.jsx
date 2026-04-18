import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import TsiraLogo from "../assets/Tsira logo mark.png";
import { Menu, X } from 'lucide-react';


function Navbar() {

   const navItems = [
      {title: "Home", link: "/#home"},
      {title: "Features", link: "/#features"},
      {title: "Why It Matters", link: "/#why-tsira"},
      {title: "Sustainability", link: "/#sustainability"},
      {title: "Built For", link: "/#target-users"},
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
       
      <div className="md:hidden">
       <div className="flex justify-between px-6 py-2 gap-4">
         
         <button onClick={handleClick} className="hover:cursor-pointer">
            {!nav ?  <Menu className="text-tsira-primary"/> : <X className="text-tsira-primary"/>}
         </button>
       </div>
         <ul className={`${
          !nav ? "hidden" : "flex"
        } md:hidden absolute top-0 left-0 h-screen w-full z-40 bg-tsira-bg text-tsira-muted flex-col justify-center items-center gap-8`}>

         <button
    onClick={handleClick}
    className="absolute top-4 right-6 z-50 hover:cursor-pointer"
  >
    <X className="text-tsira-primary" />
  </button>
           {navItems.map((menu) => (
            <li key={menu.title} onClick={() => handleClick()} className="text-xl font-semibold text-tsira-muted py-2 hover:cursor-pointer">
               <HashLink 
               smooth
               to={menu.link}
               className="hover:text-tsira-primary"
               >
                  {menu.title}
               </HashLink>

            </li>
           ))}
         </ul>

       </div>
         
      </div>
    
    
  )
}

export default Navbar