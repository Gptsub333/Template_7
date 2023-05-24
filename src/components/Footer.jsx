import RosuLogo from '../assets/Rosu Logo.svg'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { GrLinkedinOption } from 'react-icons/gr'

export default function Footer() {
  return (
    <div className="w-full bg-green-100 py-20 flex flex-col justify-center items-center">
      <footer className="w-full max-w-[120rem] flex flex-col lg:flex-row justify-start items-start px-8 lg:px-20 
        py-8 gap-x-[10rem] gap-y-[5rem]">
        <div className='flex flex-col justify-center items-start gap-y-[4rem]'>
          <img src={RosuLogo} alt="Logo-image" />
          <h2 className='text-xl uppercase'>About Us</h2>
          <p className='max-w-[15rem] leading-loose text-white/60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis accumsan urna.</p>
        </div>

        <ul className='flex flex-col justify-center items-start gap-y-[1rem] text-white/60'>
          <h2 className='text-xl uppercase text-white pb-[2rem]'>Navigation</h2>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Service</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Media</li>
        </ul>

        <ul className='flex flex-col justify-center items-start gap-y-[1rem] text-white/60'>
          <h2 className='text-xl uppercase text-white pb-[2rem]'>Other Links</h2>
          <li className='cursor-pointer'>Terms of service</li>
          <li className='cursor-pointer'>Cookies Policy</li>
          <li className='cursor-pointer'>GDPR Terms</li>
          <li className='cursor-pointer'>Contact Us</li>
        </ul>
        
        <div className='flex flex-col justify-center items-start gap-y-[1rem] text-white/60'>
          <h2 className='text-xl uppercase text-white pb-[2rem]'>Follow Us</h2>
          <ul className='flex flex-row justify-start items-center gap-x-[2rem]'>
            <li className='cursor-pointer'><FaFacebookF/></li>
            <li className='cursor-pointer'><BsTwitter/></li>
            <li className='cursor-pointer'><GrInstagram/></li>
            <li className='cursor-pointer'><GrLinkedinOption/></li>
          </ul>
        </div>
      </footer>
      <p className='text-white/60'>© 2023 Alex Benta. All rights reserved.</p>
    </div>
  )
}
