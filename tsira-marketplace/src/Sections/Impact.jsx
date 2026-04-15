/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion"
import { popIn, slideUp } from "../animations/motion"

function Impact() {
   const steps = ["Promoting reuse and resale of products", "Supporting sustainable brands and sellers", "Reducing waste through second-hand trading"]
  return (
    <section id='sustainability' className='scroll-mt-20'>
      <div className='bg-tsira-bg py-28 px-8 md:px-10'>
      <div className='space-y-2'>
         <motion.h3 
         variants={popIn}
          initial="initial"
          transition={{duration: 0.6}}
          whileInView="whileInView"
         className='text-center text-3xl md:text-4xl font-semibold text-tsira-primary'>Eco-Friendly Focus</motion.h3>
      <motion.p 
         variants={popIn}
          initial="initial"
          transition={{duration: 0.6}}
          whileInView="whileInView"
      className='text-tsira-muted text-center text-sm md:text-base'>Tsira is not just about commerce—it’s about responsibility. </motion.p>
      <motion.p 
         variants={popIn}
          initial="initial"
          transition={{duration: 0.6}}
          whileInView="whileInView"
      className='text-tsira-muted text-center text-sm md:text-base'>We encourage users to adopt environmentally friendly practices by</motion.p>
      </div>
      <div>
         <motion.div
         variants={slideUp}
          initial="initial"
          transition={{duration: 0.6}}
          whileInView="whileInView"
         className='grid grid-cols-1 pt-10 md:grid-cols-2 lg:grid-cols-2 gap-8 px-8 md:px-10'>
         {steps.map((step, index) => (
            <div key={index} className='bg-tsira-primary/10 p-4 rounded-xl hover:shadow hover:shadow-tsira-muted transition-shadow duration-300 flex flex-col hover:scale-[1.04]'>
               <div className='flex gap-2 hover:cursor-pointer'>
               <div className="rounded-full bg-tsira-primary w-2 h-2 my-2.5"></div>
               <p className='text-base leading-relaxed text-tsira-muted'>{step}</p>
               </div>
            
            </div>
         ))}
         </motion.div>
      </div>
      </div>
    </section>
  )
}

export default Impact