import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='pt-12 md:pt-16 lg:pt-20 bg-[#f8fafc]'>
      <div className='w-[95%] md:w-[90%] lg:w-[80%] mx-auto text-center'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight'>
            Friends to keep close in your life
        </h1>
        <p className='text-[#64748B] my-6 md:my-8 text-sm md:text-base max-w-3xl mx-auto leading-relaxed'>
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <div className='flex justify-center'>
            <button className='flex items-center gap-2 text-white btn bg-[#244D3F] px-4 md:px-6'>
            <FaPlus /> Add a Friend
        </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
