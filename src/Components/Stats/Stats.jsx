import React from 'react'

const Stats = () => {
  return (
    <div className='bg-[#f8fafc] my-10'>
      <div className='max-w-[80%] mx-auto flex justify-between text-center'>
        <div className='bg-white shadow-sm p-8 w-65'>
            <h1 id='totalFriend' className='text-[32px] font-semibold text-[#244D3F]'>
                0
            </h1>
            <p className='text-[18px] text-[#64748B] mt-2'>
                Total Friends
            </p>
        </div>
        <div className='bg-white shadow-sm p-8 w-65'>
            <h1 id='Track' className='text-[32px] font-semibold text-[#244D3F]'>
                0
            </h1>
            <p className='text-[18px] text-[#64748B] mt-2'>
                On Track
            </p>
        </div>
        <div className='bg-white shadow-sm p-8 w-65'>
            <h1 id='Attention' className='text-[32px] font-semibold text-[#244D3F]'>
                0
            </h1>
            <p className='text-[18px] text-[#64748B] mt-2'>
                Need Attention
            </p>
        </div>
        <div className='bg-white shadow-sm p-8 w-65'>
            <h1 id='Interactions' className='text-[32px] font-semibold text-[#244D3F]'>
                0
            </h1>
            <p className='text-[18px] text-[#64748B] mt-2'>
                Interactions This Month
            </p>
        </div>
      </div>
    </div>
  )
}

export default Stats
