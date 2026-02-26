import React, {useState} from 'react'
import {Menu, X} from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='className= bg-amber-950 px-4 md:px-0 fixed z-50 w-full top-0'>
      <div className='max-w-7xl mx-auto flex justify-between items-center py-2'>
        <div className='flex items-center'>
          <h1 className='text-2xl text-white'>Zona Coffee</h1>
        </div>
        {/* menu section */}
        <nav className='md:flex hidden items-center gap-7'>
          <ul className='flex gap-7 items-center text-xl font-semibold text-white'>
            <a href="/"><li className='cursor-pointer'>Home</li></a>
            <a href="/"><li className='cursor-pointer'>Menu</li></a>
            <a href="/"><li className='cursor-pointer'>About</li></a>
            <a href="/"><li className='cursor-pointer'>Testimonial</li></a>
          </ul>
          <a href="#contact"><button className='bg-amber-800 text-white hover:bg-amber-900 px-3 py-1 rounded-md'>Contact</button></a>
        </nav>
        {
          open ? <X onClick={() => setOpen(false)} className='text-white w-7 h-7 md:hidden' /> : <Menu onClick={() => setOpen(true)} className='text-white w-7 h-7 md:hidden' />
        }
      </div>
    </div>
  )
}

export default Navbar
