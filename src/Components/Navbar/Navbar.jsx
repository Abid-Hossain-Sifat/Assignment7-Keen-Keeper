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
      <div className='max-w-[90%] mx-auto flex justify-between p-4.5 items-center'>
        <div>
            <img src={NavLogo} alt="" />
        </div>
        <div className='flex gap-1'>
            <NavLink className='flex gap-1 items-center px-3 py-4 rounded-lg text-[#64748b]'><FaHome />Home</NavLink>
            <NavLink className='flex gap-1 items-center px-3 py-4 rounded-lg text-[#64748b]'><FaRegClock />Timeline</NavLink>
            <NavLink className='flex gap-1 items-center px-3 py-4 rounded-lg text-[#64748b]'><FaChartLine />State</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
