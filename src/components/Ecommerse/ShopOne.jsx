import React from 'react'
import { FaSortDown } from "react-icons/fa";
import EcommerseSearch from '../../layouts/MainLayout/Search/EcommerseSearch';
import product1 from '../../assets/Ecommerse/s11-DEIndZeG.jpg'
import product2 from '../../assets/Ecommerse/s2-oHJFK5Ck.jpg'
import product3 from '../../assets/Ecommerse/s3-9LH-Wryw.jpg'
import product4 from '../../assets/Ecommerse/s4-BUPxXKM_.jpg'
import product5 from '../../assets/Ecommerse/s5-BQ3a5d5q.jpg'
import product6 from '../../assets/Ecommerse/s6-C6XhevY8.jpg'
import product7 from '../../assets/Ecommerse/s7-DaQaN7Vk.jpg'
import product8 from '../../assets/Ecommerse/s8-D4HoHCFc.jpg'
import { FaStar } from "react-icons/fa";
import { FaHeart, FaShoppingCart } from "react-icons/fa";


const ShopOne = () => {


    const filters = [
  { label: 'Category', hasRightBorder: true },
  { label: 'Pricing', hasRightBorder: true },
  { label: 'Gender', hasRightBorder: true },
  { label: 'Color', hasRightBorder: false },
];
const products = [
  { id: 1, name: "Product 1", image: product1 },
  { id: 2, name: "Product 2", image: product2 },
  { id: 3, name: "Product 3", image: product3 },
  { id: 4, name: "Product 4", image: product4 },
  { id: 5, name: "Product 5", image: product5 },
  { id: 6, name: "Product 6", image: product6 },
  { id: 7, name: "Product 7", image: product7 },
  { id: 8, name: "Product 8", image: product8 },
];



  return (
    <div>
     
     <div className='FilterDiv bg-white p-5 rounded-2xl flex justify-between items-center'>
       <div className='flex justify-start items-center '>
        <p className='mr-5 text-[#79878a]'>Filter by:</p>

       <div className="flex justify-start items-center gap-5">
      {filters.map((filter, index) => (
        <div
          key={index}
          className={`flex justify-start items-start gap-1 ${
            filter.hasRightBorder ? 'border-r border-r-2 border-[#e5eaef]' : ''
          }`}
        >
          <p className="text-[15px] leading-[25px] text-[#000000] font-['Plus Jakarta Sans'] font-semibold">
            {filter.label}
          </p>
          <FaSortDown className="mr-4" />
        </div>
      ))}
    </div>
       </div>

       <div className='filterButton'>
         <button className='bg-[#0085DB] pt-2 pb-2 pl-5 pr-5 text-white rounded-full text-[16px] font-medium shadow-[0_4px_12px_0_#0085DB4D]'>
  Reset Filters
</button>

       </div>
     </div>

     <div className='bg-white rounded-2xl shadow-2xl mt-5 w-full'>

        <div className='Header p-5 flex flex-col md:flex-row lg:flex-row justify-between items-center gap-3'>
           <p className='text-[18px] leading-[25.6px] font-semibold'>Products</p>

           <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center gap-3 w-full sm:w-full md:w-[50%] lg:w-[30%]'>
            <EcommerseSearch />

            <div className='flex justify-start md:justify-center lg:justify-center items-start gap-2 bg-[#e7ecf0] pl-4 pr-4 py-2 rounded-[8px] w-full md:w-[300px] lg:w-[200px]'>
                <button>March 2023</button>
            <FaSortDown />
            </div>
           </div>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-2 pb-10 pr-10 pl-10">
 {products.map((product) => (
  <div key={product.id} className="flex justify-center items-center">
    <div className="relative group w-full max-w-[290px]">
      
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="rounded-2xl w-full"
      />

      {/* Hover Icons */}
      <div className="absolute top-3 right-3 flex gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
        <button className="bg-white p-3 rounded-full shadow hover:bg-gray-100">
          <FaHeart className="text-[#0085DB]" />
        </button>
        <button className="bg-white p-3 rounded-full shadow hover:bg-gray-100">
          <FaShoppingCart className="text-[#0085DB]" />
        </button>
      </div>

      {/* Product Details */}
      <div className="flex flex-col items-start gap-1 mt-5">
        <p className="font-semibold text-[16px] leading-[19.2px] text-[#111C2D]">
          MacBook Air Pro
        </p>
        <div className="flex items-center gap-2">
          <FaStar color="#f8c076" />
          <p>2.3 (88)</p>
        </div>
        <p>$15 $12</p>
      </div>
    </div>
  </div>
))}
   <div className="col-span-full border-b border-gray-300 w-[97%] mx-auto" />
   
</div>
 
     </div>

    </div>
  )
}

export default ShopOne
