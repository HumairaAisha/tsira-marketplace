/* eslint-disable-next-line no-unused-vars */
import  { motion } from "framer-motion"
import {  popIn  } from "../animations/motion"

function Home() {
  return (
    <section id='home'className='scroll-mt-20'>
      <div className=' bg-tsira-bg pt-32 px-8 md:px-10'>
         <motion.h2 
          variants={popIn}
          initial="initial"
          transition={{duration: 0.6}}
          whileInView="whileInView"
         className="text-4xl md:text-5xl text-primary text-center font-semibold text-tsira-primary">Tsira</motion.h2>
         
         <motion.p  variants={popIn}
          initial="initial"
          transition={{duration: 0.6}}
          whileInView="whileInView"
         className="text-tsira-muted text-center my-1.5">Where Social Meets Marketplace.</motion.p>
         <motion.div  
         variants={popIn}
         initial="initial"
         transition={{duration: 0.6}}
         whileInView="whileInView"
         className="space-y-2 p-4">
            <motion.p 
          
            className="max-w-3xl mx-auto text-primary text-center text-sm md:text-lg text-tsira-muted">Tsira is a modern social marketplace designed to connect buyers and 
        sellers in a seamless, engaging, and secure way. Inspired by the 
        simplicity and familiarity of social media platforms, Tsira combines the 
        experience of browsing content with the functionality of e-commerce. </motion.p>
        <motion.p
        className="max-w-2xl mx-auto text-primary text-center text-sm md:text-lg text-tsira-muted">The platform allows users to easily discover products, interact with 
        sellers, and complete transactions—all within one unified environment. </motion.p>
         </motion.div>
         <div>
            <motion.h3 variants={popIn}
         initial="initial"
         transition={{duration: 0.7}}
         whileInView="whileInView"
         className="text-tsira-primary text-center text-3xl font-semibold pt-6">Our Mission</motion.h3>
            <motion.p  
          variants={popIn}
         initial="initial"
         transition={{duration: 0.6}}
         whileInView="whileInView"
         
         className="text-tsira-muted text-center text-sm md:text-base py-2 ">To simplify online buying and selling while promoting trust, 
            transparency, and environmentally responsible practices.</motion.p>
         </div> 
      </div>
    </section>
  )
}

export default Home