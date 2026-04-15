import React from 'react'
import FooterLogo from '../../../public/assets/logo-xl.png'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#244d3f]'>
      <div className='pt-14 md:pt-16 lg:pt-20 pb-8'>
        <div className='w-[95%] md:w-[90%] lg:w-[80%] mx-auto'>
            <div className='flex justify-center'>
                <img src={FooterLogo} alt="Keen Keeper logo" className='w-44 md:w-52 h-auto' />
            </div>
            <p className='my-5 md:my-6 leading-6 text-[#d3dbd9] text-sm md:text-base text-center max-w-2xl mx-auto'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>
            <h1 className='text-lg md:text-[20px] text-white leading-7 font-medium text-center'>
                Social Links
            </h1>
            <div className='flex gap-3 justify-center mt-4 mb-8 md:mb-10'>
                <div className='p-2.5 w-fit rounded-full bg-white text-[26px] md:text-[30px] transition-transform hover:scale-105'>
                    <a href="https://www.facebook.com/share/1E5ZMLxiUb/" target='_blank' rel='noreferrer'><FaFacebook /></a>
                </div>
                <div className='p-2.5 w-fit rounded-full bg-white text-[26px] md:text-[30px] transition-transform hover:scale-105'>
                <a href="https://www.linkedin.com/in/abid-hossain-sifat" target='_blank' rel='noreferrer'><FaLinkedin /></a>
                </div>
                <div className='p-2.5 w-fit rounded-full bg-white text-[26px] md:text-[30px] transition-transform hover:scale-105'>
                    <a href="https://github.com/Abid-Hossain-Sifat" target='_blank' rel='noreferrer'><FaGithub /></a>
                </div>
            </div>
            <div className='h-0.5 bg-[#225946] '></div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-[#FAFAFA]/80 mt-6 md:mt-7.5 text-sm md:text-base text-center md:text-left'>
                <p className='order-2 md:order-1'>
                    © 2026 KeenKeeper. All rights reserved.
                </p>
                <ol className='order-1 md:order-2 flex flex-wrap justify-center gap-5 md:gap-10 items-center'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </ol>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
