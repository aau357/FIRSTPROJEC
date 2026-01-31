const profilecard = () => {
  return (
 <div className='flex justify-center'>
      {/* for card */}
      <div className='flex  border w-100 p-2 m-2  rounded-2xl shadow-xs hover:shadow-2xl justify-between'>
        {/* for text */}
        <div className='flex flex-col'>
          <span className='text-gray-600'>
            Ism: Alimardon
          </span>
          <span className='text-gray-600'>
            Kasb: Web devoloper
          </span>
        </div>
        <div >
          <img className='w-50 rounded-4xl'
            src="./futurestartup.jpg"
            alt="Ilustration" />
        </div>
      </div>

    </div>
  )
}

export default profilecard