const SimpleNavbar = () => {
  return (
 <div className='flex justify-between'>
        <div>
          <img
            src="./vite.svg"
            alt="" />
        </div>
        <div className='flex gap-4'>
          <a href='google.com' className='hover:text-gray-800'>salom</a>
          <a href='google.com' className='hover:text-gray-800'>salom</a>
          <a href='google.com' className='hover:text-gray-800'>salom</a>
        </div>
      </div>
  )
}

export default SimpleNavbar