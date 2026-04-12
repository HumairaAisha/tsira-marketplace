/* eslint-disable-next-line no-unused-vars */
import  { motion } from "framer-motion"
import {  popIn, slideUp  } from "../animations/motion"


function Features() {
   const steps = ["Connecting buyers directly with sellers", "Providing a social-media-like experience for product discovery", "Enabling smooth and secure transactions",
      "Encouraging eco-friendly buying and selling habits"

   ]
  return (
    <section id="features" className="scroll-mt-20">
      <div className="h-full bg-tsira-bg px-8 md:px-10 py-28">
      <div className="space-y-2">
      <motion.h3 
      variants={popIn}
          initial="initial"
          transition={{duration: 0.6}}
          whileInView="whileInView"
      className="text-center text-3xl font-semibold text-tsira-primary">What Tsira Does </motion.h3>
      <motion.p 
      variants={popIn}
          initial="initial"
          transition={{duration: 0.6}}
          whileInView="whileInView"
      className="text-center text-tsira-muted text-sm md:text-base">Tsira bridges the gap between social interaction and digital commerce 
      by</motion.p>
      </div>
      <motion.div 
      variants={popIn}
          initial="initial"
          transition={{duration: 0.6}}
          whileInView="whileInView"
      className="grid grid-cols-1 pt-10 md:grid-cols-2 lg:grid-cols-2 gap-8 px-8 md:px-10">
      {steps.map((step, index) => (
         <div key={index} className="bg-tsira-primary/10 p-6 rounded-xl hover:shadow-md transition-shadow duration-300 flex flex-col hover:scale-[1.04]">
            <div className="flex gap-2 hover:cursor-pointer">
                <div className="rounded-full bg-tsira-primary w-2 h-2 my-2"></div>
               <p className="text-base leading-relaxed text-tsira-muted">
            {step}
          </p>
            </div>
         </div>
      ))}
      </motion.div>
      <div>
      <motion.p 
      variants={slideUp}
          initial="initial"
          transition={{duration: 0.6}}
          whileInView="whileInView"
      className="text-tsira-muted py-4 px-8 md:px-10 md:text-base">Users can scroll through products just like they would on social 
      platforms, making shopping more interactive and engaging.</motion.p>
   </div>
   </div>
   
    </section>
  )
}

export default Features