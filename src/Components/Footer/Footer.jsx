import React from 'react'
import FooterLogo from '../../../public/assets/logo-xl.png'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#244d3f]'>
      <div className='pt-20 pb-7.5'>
        <div className='max-w-[80%] mx-auto'>
            <div className='flex justify-center'>
                <img src={FooterLogo} alt="" />
            </div>
            <p className='my-5 leading-6 text-[#d3dbd9] text-[16px] text-center'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>
            <h1 className='text-[20px] text-white leading-7 font-medium text-center'>
                Social Links
            </h1>
            <div className='flex gap-3 justify-center mt-4 mb-10'>
                <div className='p-2.5 w-fit rounded-full bg-white text-[30px]'>
                    <a href="https://www.facebook.com/share/1E5ZMLxiUb/" target='_blank'><FaFacebook /></a>
                </div>
                <div className='p-2.5 w-fit rounded-full bg-white text-[30px]'>
                <a href="https://www.linkedin.com/in/abid-hossain-sifat" target='_blank'><FaLinkedin /></a>
                </div>
                <div className='p-2.5 w-fit rounded-full bg-white text-[30px]'>
                    <a href="https://github.com/Abid-Hossain-Sifat" target='_blank'><FaGithub /></a>
                </div>
            </div>
            <div className='h-0.5 bg-[#225946] '></div>
            <div className='flex justify-between items-center text-[#FAFAFA]/80 mt-7.5'>
                <p>
                    © 2026 KeenKeeper. All rights reserved.
                </p>
                <ol className='flex gap-15 items-center'>
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
