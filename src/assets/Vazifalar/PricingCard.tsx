const PricingCard = () => {
  return (

 <div className='grid grid-cols-1 gap-2 lg:grid-cols-3 md:grid-cols-2'>
        <div className='flex flex-col justify-center items-center border rounded-sm w-50 border-t-10 border-t-red-700 gap-4'>
          <img
            src="vite.svg"
            alt="ilutration" />
          <div className='flex flex-col'>
            <span className='font-bold text-xl'>
              PROFESIONAL
            </span>
            <span className='text-gray-600'>
              1.Standard versiya
            </span>
            <span className='text-gray-600'>
              30 kun beepul
            </span>
            <span className='text-gray-600' >
              call center 24/7
            </span>
            <div>
              <span>
                $
              </span>
              <span className='text-5xl'>
                0
              </span>
              <span>
                /month
              </span>
            </div>

          </div>
          <button className='active:scale-95 bg-blue-800 rounded-xl p-1 mb-2'>
            Sign Up
          </button>
        </div>
        <div className='flex flex-col justify-center items-center border rounded-sm w-50 border-t-10 border-t-red-700 gap-4'>
          <img
            src="vite.svg"
            alt="ilutration" />
          <div className='flex flex-col'>
            <span className='font-bold text-xl'>
              PROFESIONAL
            </span>
            <span className='text-gray-600'>
              1.Standard versiya
            </span>
            <span className='text-gray-600'>
              30 kun beepul
            </span>
            <span className='text-gray-600' >
              call center 24/7
            </span>
            <div>
              <span>
                $
              </span>
              <span className='text-5xl'>
                0
              </span>
              <span>
                /month
              </span>
            </div>

          </div>
          <button className='active:scale-95 bg-blue-800 rounded-xl p-1 mb-2'>
            Sign Up
          </button>
        </div>
        <div className='flex flex-col justify-center items-center border rounded-sm w-50 border-t-10 border-t-red-700 gap-4'>
          <img
            src="vite.svg"
            alt="ilutration" />
          <div className='flex flex-col'>
            <span className='font-bold text-xl'>
              PROFESIONAL
            </span>
            <span className='text-gray-600'>
              1.Standard versiya
            </span>
            <span className='text-gray-600'>
              30 kun beepul
            </span>
            <span className='text-gray-600' >
              call center 24/7
            </span>
            <div>
              <span>
                $
              </span>
              <span className='text-5xl'>
                0
              </span>
              <span>
                /month
              </span>
            </div>

          </div>
          <button className='active:scale-95 bg-blue-800 rounded-xl p-1 mb-2'>
            Sign Up
          </button>
        </div>
      </div>
  )
}

export default PricingCard