/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion"
import { popIn, slideUp } from "../animations/motion"

function Users() {
   const users = ["Small business owners and vendors", " Individuals looking to sell products easily", "Buyers who want a simple and safe shopping experience", "Environmentally conscious users"]
  return (
    <section id='target-users' className='scroll-mt-16'>
      <div className='pb-24 bg-tsira-bg'>
      
         <motion.h3 
         variants={popIn}
          initial="initial"
          transition={{duration: 0.6}}
          whileInView="whileInView"
         className='text-center text-3xl md:text-4xl font-semibold text-tsira-primary pb-10'>Target Users</motion.h3>
      
      <div>
         <motion.div 
         variants={slideUp}
          initial="initial"
          transition={{duration: 0.6}}
          whileInView="whileInView"
         className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-8 md:px-10'>
         {users.map((user, index) => (
            <div key={index} className='bg-tsira-primary/10 p-4 rounded-xl hover:shadow transition-shadow duration-300 flex flex-col hover:scale-[1.04] hover:shadow-tsira-muted'>
               <div className='flex gap-2 hover:cursor-pointer'>
               <div className="rounded-full bg-tsira-primary w-2 h-2 my-2.5"></div>
               <p className='text-base leading-relaxed text-tsira-muted'>{user}</p>
               </div>
            
            </div>
         ))}
         </motion.div>
      </div>
      </div>
    </section>
  )
}

export default Users