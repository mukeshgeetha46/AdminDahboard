import { BiMenuAltLeft } from "react-icons/bi";
import HeaderSearch from "./Search/HeaderSearch";
import flag from '../../assets/Main/download.png'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import profile from '../../assets/Main/profile.jpg'
import companyLogo from '../../assets/sidebar/Screenshot_13-7-2025_22210_.jpeg'
import { HiOutlineDotsHorizontal } from "react-icons/hi";



const HeaderMenu = ({setMenuopen}) => {
  return (
    <div className='bg-white m-2 lg:m-7 sticky top-0 z-50 rounded-2xl shadow-md '>

      <div className="hidden lg:flex justify-between items-center m-[19px]">
        <div>
        <p className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition m-5" onClick={()=>setMenuopen((prev) => !prev)}>
        <BiMenuAltLeft size={25} />
        </p>
        </div>
         <div className="flex justify-between items-center gap-3">
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

      <div className="block lg:hidden">
        <div className="flex justify-between items-center">
          <p className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition m-5" onClick={()=>setMenuopen((prev) => !prev)}>
        <BiMenuAltLeft size={25} />
        </p>

        <HeaderSearch />

         <img className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition" src={companyLogo} />
         <p className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition">
        <MdOutlineDarkMode size={25} />
        </p>

        <p className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition">
        <HiOutlineDotsHorizontal size={25} />
        </p>
        </div>
      </div>

    </div>
  )
}

export default HeaderMenu