
export default function Partners() {
  return (
    <div className="w-full pt-20 flex flex-col justify-center items-center gap-y-24">
      <p className="text-yellow">Partners</p>
      <h2 className="text-h2 font-bold leading-[5rem] text-center">They are our top partners</h2>
      <div className="w-full bg-green-100 py-16">
        <ul className="flex flex-col lg:flex-row justify-center items-center gap-x-40 gap-y-12">
          <li className="flex flex-col justify-center items-center gap-y-6">
            <div className="w-16 h-16 rounded-full bg-green-200"></div>
            <p className="text-2xl font-bold text-green-200">Brand Name</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-y-6">
            <div className="w-16 h-16 rounded-full bg-green-200"></div>
            <p className="text-2xl font-bold text-green-200">Brand Name</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-y-6">
            <div className="w-16 h-16 rounded-full bg-green-200"></div>
            <p className="text-2xl font-bold text-green-200">Brand Name</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-y-6">
            <div className="w-16 h-16 rounded-full bg-green-200"></div>
            <p className="text-2xl font-bold text-green-200">Brand Name</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
