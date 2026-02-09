const card = () => {
    return (
        <div>
            {/* card */}

            < div className='flex border rounded-2xl p-1 items-center justify-center m-2 gap-1 bg-gray-500 lg:' >
                <span className='text-sm'>
                    Biz o'rtog'im bilan o'z startup loyihamizni qurish maqsadida o'zimizni birinchi web-saytimizni qurdik.
                </span>
            </div >
            {/* image */}
            < div className='' >
                <img className='rounded-2xl w-50 h-17'
                    src="./futurestartup.jpg"
                    alt="Rasm" />
                <span className='text-xs italic text-gray-400'>Bizning logo</span>
            </div >
        </div>
    )
}

export default card