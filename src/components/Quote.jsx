import QuoteImage from '../assets/Quote 3 lines.svg'
import { ImTruck } from 'react-icons/im'

export default function Quote() {
  return (
    <div className="w-full pt-40 flex flex-col justify-center items-center">
      <div className="w-full max-w-[120rem] flex flex-row justify-start items-center px-8 lg:px-20 
        py-8 gap-x-[10rem]">
        <div className='flex flex-col justify-center items-start gap-y-12'>
          <p className="text-yellow">Get a Quote</p>
          <h2 className="text-h2 font-bold leading-[5rem]">Start ordering with us today</h2>
          <button className='text-black font-semibold bg-yellow flex flex-row justify-center items-center gap-x-4
          px-12 py-4 rounded-2xl'><ImTruck/>Order with us</button>
        </div>
        <div className='hidden md:block'><img src={QuoteImage} alt="quote image" /></div>
      </div>
    </div>
  )
}
