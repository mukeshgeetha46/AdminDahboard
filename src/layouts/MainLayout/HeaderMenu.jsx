import { BiMenuAltLeft } from "react-icons/bi";
import HeaderSearch from "./Search/HeaderSearch";
import flag from '../../assets/Main/download.png'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import profile from '../../assets/Main/profile.jpg'



const HeaderMenu = () => {
  return (
    <div className='bg-white h-[10%] m-2 lg:m-7 sticky top-0 z-50 shadow rounded-2xl shadow-md flex justify-between items-center'>

      <div>
        <p className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition m-5">
        <BiMenuAltLeft size={25} />
        </p>
        </div>
         <div className="flex justify-between items-center gap-3 m-5">
            <HeaderSearch />
           <div>
             <p className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition">
        <MdOutlineDarkMode size={25} />
        </p>
            </div>
            <img className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition" src={flag} />
        <div>
             <p className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition">
        <MdOutlineShoppingBag size={25} />
        </p>
            </div>
        <div>
             <p className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition">
        <MdNotificationsNone size={25} />
        </p>
            </div>
            <img className="w-13 h-13 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition" src={profile} />
        <div>
            <p className="font-bold">Mike Nileson</p>
            <p className="text-sm text-[#8d959b]">Admin</p>
        </div>
        </div>

    </div>
  )
}

export default HeaderMenu