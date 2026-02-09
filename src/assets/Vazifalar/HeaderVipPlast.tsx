import { HeartCrack, Menu, Package, ShoppingCart, UserRoundPen } from 'lucide-react'

const HeaderVipPlast = () => {
    return (
        <div className='container flex gap-4 justify-between mt-4'>
            <div className='ms-4'>
                <span className='text-4xl font-bold text-amber-500'>
                    Vip
                </span>
                <span className='text-blue-700 text-2xl'>
                    Plast
                </span>
            </div>
            <button className=' flex  rounded-2xl bg-amber-400 h-10 w-28 justify-center pt-2 gap-1'>
                <Menu />
                Katalog
            </button>

            <div>
                <input
                    type="search"
                    placeholder="Qidiruv"
                    className="border-2 border-gray-500 px-4 py-2 rounded-2xl outline-none w-230"

                />
            </div>
            <div className='flex text-gray-700 gap-4 me-4 '>
                <div className='flex flex-col items-center'>
                    <Package />
                    <span className='text-sm'>
                        Buyurtma xolati
                    </span>
                </div>
                <div className='flex flex-col items-center'>
                    <ShoppingCart />
                    <span className='text-sm'>
                        Savat
                    </span>
                </div>
                <div className='flex flex-col items-center'>
                    <HeartCrack />
                    <span className='text-sm'>
                        Sevimli
                    </span>
                </div>
                <div className='flex flex-col items-center'>
                    <UserRoundPen />
                    <span className='text-sm'>
                        Kirish
                    </span>
                </div>

            </div>
        </div>
    )
}

export default HeaderVipPlast