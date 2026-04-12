/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { popIn } from "../animations/motion";

function WhyTsira() {
  return (
    <section id='why-tsira' className="scroll-mt-20">
      <div className='bg-tsira-bg px-8 md:px-10'>
         <motion.h3 
         variants={popIn}
          initial="initial"
          transition={{duration: 0.6}}
          whileInView="whileInView"
         className="text-tsira-primary text-3xl md:text-4xl text-center font-semibold pb-10">Why Tsira?</motion.h3>
         <motion.div 
         variants={popIn}
          initial="initial"
          transition={{duration: 0.6}}
          whileInView="whileInView"
         className="flex flex-col gap-8 px-8 md:px-10">
            <div className="text-tsira-muted p-6 col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 rounded-lg bg-tsira-primary/10">
               <h4 className="text-tsira-muted font-bold text-xl">Simple & Familiar Experience</h4>
               <p className="text-tsira-muted">Tsira is designed like a social media app (similar to Instagram), 
               making it easy for anyone to use without a learning curve.</p>
            </div>
            <div className='text-tsira-muted p-6 col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 rounded-lg bg-tsira-primary/10'>
               <h4 className="text-tsira-muted font-bold text-xl"> Built-in Wallet System </h4>
               <p className="text-tsira-muted my-2">The platform includes an integrated wallet that allows users to</p>
               <div className="flex flex-col md:flex gap-4">
                  <div className="flex gap-2">
                  <div className="rounded-full bg-tsira-primary w-2 h-2 my-2.5"></div>
                  <p className="text-tsira-muted">Store funds securely</p>
                  </div>

                  <div className="flex gap-2">
                  <div className="rounded-full bg-tsira-primary w-2 h-2 my-2.5"></div>
                  <p className='text-tsira-muted'>Pay for products instantly </p>
                  </div>

                  <div className='flex gap-2'>
                  <div className="rounded-full bg-tsira-primary w-2 h-2 my-2.5"></div>
                  <p className='text-tsira-muted'>Reduce dependency on external payment methods </p>
                  </div>
               </div>
            </div>

            <div className='text-tsira-muted p-4 rounded-lg bg-tsira-primary/10 col-span-1 sm:col-span-2 lg:col-span-2 row-span-1'>
               <h3 className='text-tsira-muted font-bold text-xl'>Reduced Online Scams</h3>
               <p className='text-tsira-muted my-2'>Tsira is built with security in mind, aiming to reduce online fraud by up 
to 60% through </p>

                  <div className="flex flex-col md:flex gap-4 md:py-2">
                  <div className="flex gap-2">
                  <div className="rounded-full bg-tsira-primary w-2 h-2 my-2"></div>
                  <p className="text-tsira-muted">Store funds securely</p>
                  </div>

                  <div className="flex gap-2">
                  <div className="rounded-full bg-tsira-primary w-2 h-2 my-2"></div>
                  <p className='text-tsira-muted'>Pay for products instantly </p>
                  </div>

                  <div className='flex gap-2'>
                  <div className="rounded-full bg-tsira-primary w-2 h-2 my-2"></div>
                  <p className='text-tsira-muted'>Reduce dependency on external payment methods </p>
                  </div>
               </div>
            </div>


             <div className='text-tsira-muted p-4 rounded-lg bg-tsira-primary/10 col-span-1 sm:col-span-2 lg:col-span-2 row-span-1'>
               <h3 className='text-tsira-muted font-bold text-xl'>Peaceful Buyer–Seller Interaction</h3>
               <p className='text-tsira-muted my-2'>We prioritize smooth and conflict-free transactions by</p>

            <div className="flex flex-col md:flex gap-4">
                  <div className="flex gap-2">
                  <div className="rounded-full bg-tsira-primary w-2 h-2 my-2"></div>
                  <p className="text-tsira-muted">Creating a transparent communication system</p>
                  </div>

                  <div className="flex gap-2">
                  <div className="rounded-full bg-tsira-primary w-2 h-2 my-2"></div>
                  <p className='text-tsira-muted'>Ensuring both parties are protected</p>
                  </div>

                  <div className='flex gap-2'>
                  <div className="rounded-full bg-tsira-primary w-2 h-2 my-2"></div>
                  <p className='text-tsira-muted'>Encouraging trust between users</p>
                  </div>
               </div>
            </div>
         </motion.div>
      </div>

    </section>
  )
}

export default WhyTsira