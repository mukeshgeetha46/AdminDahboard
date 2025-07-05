import { CiSearch } from "react-icons/ci";


const EcommerseSearch = () => {
  return (
  <div className="relative max-w-xs">
  <CiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
  <input
    type="text"
    placeholder="try to searching..."
    className="w-[250px] pl-10 pr-4 py-2 border rounded-[8px] focus:outline-none"
  />
</div>

  )
}

export default EcommerseSearch