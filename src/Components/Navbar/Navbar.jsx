import React from 'react'
import { NavLink } from 'react-router'
import NavLogo from '../../../public/assets/logo.png'
import { FaHome } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa'
import { FaChartLine } from 'react-icons/fa'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='shadow-sm bg-white'>
      <div className='w-[95%] md:w-[90%] lg:w-[90%] mx-auto py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
        <div className='flex justify-center md:justify-start'>
            <img src={NavLogo} alt="Keen Keeper logo" className='h-10 w-auto object-contain' />
        </div>
        <div className='flex flex-wrap justify-center md:justify-end gap-2'>
            <NavLink to="/" className='flex gap-2 items-center px-3 py-2 md:py-3 rounded-lg text-[#64748b]'><FaHome />Home</NavLink>
            <NavLink to="/timeline" className='flex gap-2 items-center px-3 py-2 md:py-3 rounded-lg text-[#64748b]'><FaRegClock />Timeline</NavLink>
            <NavLink to="/state" className='flex gap-2 items-center px-3 py-2 md:py-3 rounded-lg text-[#64748b]'><FaChartLine />State</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
