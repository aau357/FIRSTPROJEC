import { Mail, MessageCircleQuestionMark, PhoneCall, Send } from 'lucide-react'
const ContactInfo = () => {
  return (
     <div className="flex flex-col gap-4 p-10">
                {/* text main */}
                <div className="gap-4 font-[700px] font-mono p-10">
                    <span className="text-4xl">
                        Biz bilan bog'laning
                    </span>
                </div>
                {/* for cards */}
                <div className="flex gap-4 px-10">
                    {/* for first card */}
                    <div className="flex border border-gray-500 rounded-2xl p-10 flex-col gap-2">
                        <div className="rounded-xl bg-amber-600 w-10 p-2">
                            <PhoneCall />
                        </div>
                        <span className="font-bold italic text-xl">
                            Bizga qo'ng'iroq qiling
                        </span>
                        <span className="text-gray-500">
                            Sizda savol tug‘ildimi? Biz yordam beramiz!
                        </span>
                        <a href="vipplast.uz" className="text-amber-400">+998 91 062 62 26</a>
                    </div>
                    {/* for secon card */}
                    <div className="flex border border-gray-500 rounded-2xl p-10 flex-col gap-2">
                        <div className="rounded-xl bg-amber-600 w-10 p-2">
                            <Mail />
                        </div>
                        <span className="font-bold italic text-xl">
                            Bizga email orqali yozing
                        </span>
                        <span className="text-gray-500">
                            G‘oya va takliflaringiz bormi? Biz doim muloqotga tayyormiz!
                        </span>
                        <a href="vipplast.uz" className="text-amber-400">ashurboyevalimardon@gmail.com</a>
                    </div>
                    {/* for third card */}
                    <div className="flex border border-gray-500 rounded-2xl p-10 flex-col gap-2">
                        <div className="rounded-xl bg-amber-600 w-10 p-2">
                            <MessageCircleQuestionMark />
                        </div>
                        <span className="font-bold italic text-xl">
                            Taklif va g'oyalar uchun
                        </span>
                        <span className="text-gray-500">
                            G‘oya va takliflaringiz bormi? Biz doim muloqotga tayyormiz!
                        </span>
                        <a href="vipplast.uz" className="text-amber-400">support@.uzbot</a>
                    </div>
                    {/* for fourth card */}
                    <div className="flex border border-gray-500 rounded-2xl p-10 flex-col gap-2 ">
                        <div className="rounded-xl bg-amber-600 w-10 p-2">
                            <Send />
                        </div>
                        <span className="font-bold italic text-xl">
                            Bizga yozing
                        </span>
                        <span className="text-gray-500">
                            Telegram chatda sizning savollaringizga javob topiladi
                        </span>
                        <a href="vipplast.uz" className="text-amber-400">@salom_dunyo</a>
                    </div>
                </div>
                <div className="">
                    <h1 className="font-mono gap-4 p-10 font-[500px] text-4xl">Information about company</h1>
                    {/* for information */}
                    <div className="grid grid-cols-3">
                        {/* for name */}
                        <div className="flex flex-col px-10">
                            <span className="text-gray-500">
                                Name of company:
                            </span>
                            <span className="text-2xl font-bold">
                                OHANGARON ORGANIC F/X
                            </span>
                        </div>
                        {/* yo'nalishi uchun */}
                        <div className="flex flex-col">
                            <span className="text-gray-500">
                               Korxona yo'nalishi:
                            </span>
                            <span className="text-xl font-bold">
                                Chorvachilik va yem maxsulotlari ishlab chiqarish.
                            </span>
                        </div>
                        {/* yuridik manzili uchun */}
                        <div className="flex flex-col">
                            <span className="text-gray-500">
                                Korxona yuridik manzili:
                            </span>
                            <span className="font-bold text-xl">
                                Ташкентская область, Ахангаранский район, ILG'OR MFY HUDUDI
                            </span>
                        </div>
                        {/* Korxona inn raqami */}
                        <div className="flex flex-col p-10">
                            <span className="text-gray-500">
                                Korxona INN raqami:
                            </span>
                            <span className="text-xl font-mono">
                                307162656
                            </span>
                        </div>
                    </div>
                </div>








            </div>
  )
}

export default ContactInfo