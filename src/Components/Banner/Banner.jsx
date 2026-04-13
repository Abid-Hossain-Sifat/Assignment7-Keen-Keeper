import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='pt-20 bg-[#f8fafc]'>
      <div className='max-w-[80%] mx-auto text-center'>
        <h1 className='text-5xl font-bold text-[#1F2937]'>
            Friends to keep close in your life
        </h1>
        <p className='text-[#64748B] my-8'>
            Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.
        </p>
        <div className='flex justify-center'>
            <button className='flex items-center gap-2 text-white btn bg-[#244D3F]'>
            <FaPlus /> Add a Friend
        </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
