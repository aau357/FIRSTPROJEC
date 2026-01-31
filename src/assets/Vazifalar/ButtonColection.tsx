const ButtonColection = () => {
  return (
   <div className='flex border rounded-2xl flex-col w-40 justify-center items-center  gap-2 p-2'>
        <button className='active:scale-95 bg-gray-600 w-20 hover:bg-gray-700 rounded-xl p-0.5 transition-all'>
          primary
        </button>
        <button className='active:scale-95 bg-gray-600 w-20 hover:bg-gray-700 rounded-xl p-0.5 transition-all'>
          secondary
        </button>
        <button className='active:scale-95 bg-gray-600 w-20 hover:bg-gray-700 rounded-xl p-0.5 transition-all'>
          danger
        </button>
        <button className='active:scale-95 bg-gray-600 w-20 hover:bg-gray-700 rounded-xl p-0.5 transition-all'>
          disabled
        </button>
      </div>
  )
}

export default ButtonColection
