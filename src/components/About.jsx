import ShipImage from '../assets/Ship Image.jpg'

export default function About() {
  return (
    <div className="w-full py-40 flex flex-col justify-center items-end">
      <div className="w-full max-w-[125rem] flex flex-col lg:flex-row justify-start lg:justify-end items-center pl-8 lg:pl-20 
        py-8">
        <div className='w-full flex flex-col justify-center items-start gap-y-[4rem]'>
          <p className="text-yellow">About us</p>
          <h2 className="text-h2 font-bold pr-16 leading-[5rem]">What is our mission ?</h2>
          <p className="text-white/60 max-w-[35rem] leading-loose py-12 pr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis accumsan urna.
            Quisque sed lacus eu nisi ultrices commodo ut ac ante. In et hendrerit tellus, sit amet 
            sagittis urna. Maecenas tincidunt hendrerit ultricies. Nulla dui felis, hendrerit quis 
            ligula id, pharetra sodales dui.</p>
        </div>

        <div className='w-full relative'>
          <div className='hidden 2xl:block absolute right-0 -top-[12rem]'><img src={ShipImage} alt="ship image" /></div>
          <ul className='relative grid grid-cols-2 lg:grid-cols-3 gap-12 px-0 lg:px-24'>
          <li className='border-l-4 border-white flex flex-col justify-center items-start gap-y-6 px-6'>
            <p className="text-h2 font-bold text-yellow">25+</p>
            <p className='font-semibold'>Years of service</p>
          </li>
          <li className='border-l-4 border-white flex flex-col justify-center items-start gap-y-6 px-6'>
            <p className="text-h2 font-bold text-yellow">2000+</p>
            <p className='font-semibold'>Employees</p>
          </li>
          <li className='border-l-4 border-white flex flex-col justify-center items-start gap-y-6 px-6'>
            <p className="text-h2 font-bold text-yellow">150+</p>
            <p className='font-semibold'>Countries</p>
          </li>
          <li className='border-l-4 border-white flex flex-col justify-center items-start gap-y-6 px-6'>
            <p className="text-h2 font-bold text-yellow">900+</p>
            <p className='font-semibold'>Couriers</p>
          </li>
          <li className='border-l-4 border-white flex flex-col justify-center items-start gap-y-6 px-6'>
            <p className="text-h2 font-bold text-yellow">9000+</p>
            <p className='font-semibold'>Products Shipped</p>
          </li>
          <li className='border-l-4 border-white flex flex-col justify-center items-start gap-y-6 px-6'>
            <p className="text-h2 font-bold text-yellow">50+</p>
            <p className='font-semibold'>Business Partners</p>
          </li>
        </ul>
        </div>
      </div>
    </div>
  )
}
