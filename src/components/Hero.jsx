import ShippingImage from '../assets/Shipping Image.jpg'
import HeroIllustration from '../assets/Hero_Illustration.svg'
import { ImTruck } from 'react-icons/im'
import { HiArrowRight } from 'react-icons/hi'
import { IconContext } from "react-icons";

export default function Hero() {
  return (
    <div className="w-full h-screen pt-20 flex flex-row justify-center lg:justify-end items-center">
      <div className='relative'>
        <div className='absolute -left-[40rem] -top-[10rem]'>
          <img src={HeroIllustration} alt="Hero Illustration" className='w-full h-[50rem]'/>
        </div>
        <div className='w-full flex flex-col justify-center items-start px-8 lg:px-20 gap-y-[4rem]'>
          <h1 className='w-full max-w-[50rem] text-3xl lg:text-[3.2rem] font-bold leading-[5rem]'>Shipping getting to you in a
          <span className='text-yellow'> flash</span></h1>
          <p className='w-full max-w-[20rem] text-white/60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis accumsan urna.</p>
          <div className='flex flex-col lg:flex-row justify-start items-center gap-x-20 gap-y-8'>
            <button className='flex flex-row justify-start items-center bg-yellow text-black font-medium
            px-10 py-3 rounded-2xl gap-x-4'>
              <IconContext.Provider value={{ color: 'black' }}><ImTruck/></IconContext.Provider>
              <span>Get a Quote</span>
            </button>
            <button className='flex flex-row justify-start items-center gap-x-8'>
              Learn More
              <span><HiArrowRight/></span>
            </button>
          </div>
        </div>
      </div>
      <div className='hidden lg:block'>
        <img src={ShippingImage} alt="Hero Shipping Image" />
      </div>
    </div>
  )
}
