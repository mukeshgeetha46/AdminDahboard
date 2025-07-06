import React, { useState } from 'react'
import product1 from '../../assets/Ecommerse/s11-DEIndZeG.jpg'
import product2 from '../../assets/Ecommerse/s2-oHJFK5Ck.jpg'
import product3 from '../../assets/Ecommerse/s3-9LH-Wryw.jpg'
import product4 from '../../assets/Ecommerse/s4-BUPxXKM_.jpg'
import product5 from '../../assets/Ecommerse/s5-BQ3a5d5q.jpg'
import product6 from '../../assets/Ecommerse/s6-C6XhevY8.jpg'
import product7 from '../../assets/Ecommerse/s7-DaQaN7Vk.jpg'
import product8 from '../../assets/Ecommerse/s8-D4HoHCFc.jpg'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


const ShopDetails = () => {

  const [sliderIndex,setSliderIndex] = useState(0);

  const product = {
  id: "T001",
  name: "Cute Soft Teddybear",
  category: "Kids",
  brand: "SoftBears",
  inStock: true,
  price: 200,
  originalPrice: 175,
  currency: "USD",
  rating: 4.5,
  reviewCount: 87,
  descriptionShort:
    "Esvive danukjos oi tapjulof opofe erune fidpuv bo zadaga gi efo vuv teanubal.",
  descriptionLong: `
    Sed at diam elit. Vivamus tortor odio, pellentesque eu tincidunt a, aliquet sit amet lorem.
    
    Cras eget elit semper, congue sapien id, pellentesque diam. Nulla faucibus diam nec fermentum ullamcorper. Praesent sed ipsum ut augue vestibulum malesuada.

    Vivamus quis metus in nunc semper efficitur eget vitae diam. Fusce condimentum venenatis mauris et luctus.
  `,
  quantityAvailable: 50,
  colors: [
    { name: "Peach", hex: "#FFB6B6" },
    { name: "Orange", hex: "#FF9E4D" },
    { name: "Blue", hex: "#409FFF" },
    { name: "Gray", hex: "#7D7D7D" }
  ],
  images: [
   product1,
   product2,
   product3,
   product4,
   product5,
   product6,
   product7,
   product8,
   
  ],
  delivery: {
    estimate: "2–3 weeks",
    message: "Why the longer time for delivery?"
  },
  tags: ["toys", "teddybear", "kids", "softtoy", "gift"],
};


const Totalslide = product.images.length-1;

  return (
    <div className='bg-white rounded-2xl'>

      <div className='grid grid-cols-2'>
 <div className='col-span-2 lg:col-span-1 p-7'>
          <div className='slider'>
           <div className='relative'>
            <div className='absolute top-1/2 left-0 -translate-y-1/2 ml-3'>
    <p className={`w-6 h-6 flex items-center justify-center rounded-full bg-[#707a82] cursor-pointer transition text-[12px] text-white ${sliderIndex === 0 ?'pointer-events-none opacity-50' : ''}`} 
    onClick={()=>setSliderIndex((prev)=> prev-1)}>
      <FaChevronLeft />
    </p>
  </div>
            <img src={product.images[sliderIndex]} className='w-full' alt="" />
                       <div className='absolute top-1/2 right-0 -translate-y-1/2 mr-3'>
  <p
  className={`w-6 h-6 flex items-center justify-center rounded-full bg-[#707a82] cursor-pointer transition text-[12px]
   text-white ${sliderIndex === Totalslide ? 'pointer-events-none opacity-50' : ''}`}
  onClick={() => setSliderIndex((prev) => prev + 1)}
>
  <FaChevronRight />
</p>

  </div>

           </div>
           <div className='Slider mt-5 flex justify-between overflow-y-auto items-center gap-3'>
            {
              product.images.map((image,index)=>(
                <img src={image} onClick={()=>setSliderIndex(index)} className={`w-[13%] ${index === sliderIndex ? 'border-2 border-[#0085db]' : ''}`} alt="" />
              ))
            }
           </div>
     </div>
      </div>
      
    

     <div className='col-span-2 lg:col-span-1'>
        <p>dsjhfgshj</p>
     </div>
     </div>

    </div>
  )
}

export default ShopDetails
