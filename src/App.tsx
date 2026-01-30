import { HeartCrack, Package, ShoppingCart, UserRoundPen } from 'lucide-react'
import './App.css'
function App() {
  return (
    //  main parrent
    <div className='container flex gap-4 justify-between mt-4'>
      <div className='ms-4'>
        <span className='text-4xl font-bold text-amber-500'>
          Vip
        </span>
        <span className='text-blue-700 text-2xl'>
          Plast
        </span>
      </div>

      <div>
        <input
          type="search"
          placeholder="Qidiruv"
          className="border-2 border-gray-500 px-4 py-2 rounded-2xl outline-none w-250"

        />
      </div>
      <div className='flex text-gray-700 gap-4 me-4 '>
        <div className='flex flex-col items-center'>
          <Package />
          <span>Buyurtma xolati</span>
        </div>
        <div className='flex flex-col items-center'>
          <ShoppingCart />
          <span>Savat</span>
        </div>
        <div className='flex flex-col items-center'>
          <HeartCrack />
          <span>Sevimli</span>
        </div>
        <div className='flex flex-col items-center'>
          <UserRoundPen />
          <span>Kirish</span>
        </div>

      </div>
    </div>
  )
}
export default App
