import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";


const HeaderSearch = ({ square = false,placeholder}) => {
  return (
    <div className="">
    <div className="block lg:hidden">
        <p className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition">
              <CiSearch size={25} />
              </p>
    </div>
  <div className="hidden lg:block relative max-w-xs ">
  <CiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
  <input
    type="text"
    placeholder={placeholder}
    className={`w-[250px] pl-10 pr-4 py-2 border border-[#dfe5ef] focus:outline-none ${square ? 'rounded-[5px]' : 'rounded-3xl'}`}
  />
</div>
    </div>

  )
}

export default HeaderSearch