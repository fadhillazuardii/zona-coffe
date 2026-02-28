import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='from-slate-100 to-amber-950 bg-gradient-to-r mt-14'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 place-items-center h-[700px] md:h-[650px] relative pt-10 md:pt-0'>
        {/* text section */}
        <div className='space-y-5 px-4 md:px-0'>
          <motion.h3
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1, delay: 0.2}}
          className='text-amber-900 font-semibold'
          > 
          Welcome to Zona Coffee
          </motion.h3>
          <motion.h1
          initial={{opacity:0,x:-60}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1, delay:0.4}}
          className='text-4xl md:text-6xl font-bold'
          >
          Experience Artisanal <span className='text-amber-900'>Coffee</span> at Zona Coffe</motion.h1>
          <motion.p
          initial={{opacity:0,x:-60}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1.2, delay:0.6}}
          >
            made from ethically sourced beans and brewed to perfection.</motion.p>
          <motion.div
          initial={{opacity:0,x:-70}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1.4, delay:0.8}}
          className='flex gap-2'>
            <a href="#menu"><button className='bg-amber-900 text-white px-3 py-2 rounded-md'>View Menu</button></a>
            <a href="#testimonial"><button className='bg-transparent border border-amber-900 text-amber-900 rounded-md px-3 py-2'>Our Story</button></a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero