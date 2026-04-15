/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { popIn } from "../animations/motion";

import { HashLink } from "react-router-hash-link";
import TsiraLogo from "../assets/Tsira logo mark.png"


function Footer() {
  const links = [
    {title: "Home", link: "/#home"},
    {title: "Features", link: "/#features"},
    {title: "Why It Matters", link: "/#why-tsira"},
    {title: "Sustainability", link: "/#sustainability"},
    {title: "Built For", link: "/#target-users"},
  ]
  return (
    <div className="bg-tsira-bg border-t border-tsira-primary/15 py-8">
      <div className="flex flex-col md:items-center py-10 px-6 md:px-0">
      <img src={TsiraLogo} alt="Tsira Logo" className="w-12 h-12"/>
      <motion.div
          variants={popIn}
          initial="initial"
          transition={{duration: 0.6}}
          whileInView="whileInView"
      className="">
        <ul className="md:flex gap-6 py-4">
        {links.map((menu) => (
          <li key={menu.title} className="text-tsira-primary py-2">
            <HashLink 
            smooth
            to={menu.link}>
              {menu.title}
            </HashLink>

          </li>
        ))}
      </ul>
      </motion.div>
      </div>
      <div className="border-t border-tsira-primary/10">
        <p className="text-tsira-primary/50 text-center my-2">
          &copy; 2026 Tsira. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer