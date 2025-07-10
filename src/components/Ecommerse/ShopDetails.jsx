import React, { useState } from 'react'
import product1 from '../../assets/Ecommerse/s11-DEIndZeG.jpg'
import product2 from '../../assets/Ecommerse/s2-oHJFK5Ck.jpg'
import product3 from '../../assets/Ecommerse/s3-9LH-Wryw.jpg'
import product4 from '../../assets/Ecommerse/s4-BUPxXKM_.jpg'
import product5 from '../../assets/Ecommerse/s5-BQ3a5d5q.jpg'
import product6 from '../../assets/Ecommerse/s6-C6XhevY8.jpg'
import product7 from '../../assets/Ecommerse/s7-DaQaN7Vk.jpg'
import product8 from '../../assets/Ecommerse/s8-D4HoHCFc.jpg'
import { FaChevronLeft, FaPlus, FaShoppingCart } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { TiTick } from "react-icons/ti";
import { FaMinus } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";


const ShopDetails = () => {

  const [sliderIndex,setSliderIndex] = useState(0);
  const [tab,setTab] = useState('Discription');

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
    "Sed at diam elit. Vivamus tortor odio, pellentesque eu tincidunt a, aliquet sit amet lorem pellentesque eu tincidunt a, aliquet sit amet lorem.",
  descriptionLong1: `Cras eget elit semper, congue sapien id, pellentesque diam. Nulla faucibus diam nec fermentum ullamcorper. Praesent sed ipsum ut augue vestibulum malesuada. Duis vitae volutpat odio. Integer sit amet elit ac justo sagittis dignissim.`,
  descriptionLong2: `Cras eget elit semper, congue sapien id, pellentesque diam. Nulla faucibus diam nec fermentum ullamcorper. Praesent sed ipsum ut augue vestibulum malesuada. Duis vitae volutpat odio. Integer sit amet elit ac justo sagittis dignissim.`,
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


const ratings = [
  { stars: 5, percentage: 80, count: 125 },
  { stars: 4, percentage: 60, count: 95 },
  { stars: 3, percentage: 40, count: 65 },
  { stars: 2, percentage: 20, count: 30 },
  { stars: 1, percentage: 10, count: 10 },
];

const Totalslide = product.images.length-1;

  return (
    <div>
      <div className='bg-white rounded-2xl shadow-2xl'>
      <div className='grid grid-cols-2'>
 <div className='col-span-2 lg:col-span-1 p-7'>
          <div className='slider'>
           <div className='relative'>
            <div className='absolute top-1/2 left-0 -translate-y-1/2 ml-3 z-10'>
  <p
    className={`w-6 h-6 flex items-center justify-center rounded-full bg-[#707a82] cursor-pointer transition text-[12px] text-white ${sliderIndex === 0 ? 'pointer-events-none opacity-50' : ''}`}
    onClick={() => setSliderIndex(prev => prev - 1)}
  >
    <FaChevronLeft />
  </p>
</div>

  


              <div className="overflow-hidden w-full  relative">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
  >
    {product.images.map((img, i) => (
      <img
        key={i}
        src={img}
        className="w-full flex-shrink-0 object-cover"
        alt={`slide-${i}`}
      />
    ))}
  </div>
</div>

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
           <div className='Slider mt-5 flex justify-between overflow-y-auto items-center gap-3 '>
            {
              product.images.map((image,index)=>(
                <img src={image} onClick={()=>setSliderIndex(index)} className={`rounded-[6px] w-[13%] ${index === sliderIndex ? 'border-2 border-[#0085db]' : ''}`} alt="" />
              ))
            }
           </div>
     </div>
      </div>
      
    

     <div className='col-span-2 lg:col-span-1 flex flex-col gap-5 pl-5 lg:pl-0'>
       
    <div className='stock pt-7 flex items-center gap-2'>
     <p className='text-[14px] leading-[19.95px] font-normal bg-[#4BD08B] w-[63.7969px] flex justify-center items-center rounded-full text-white'>In Stock</p>
     <p className='text-[12px] leading-[16px] font-normal'>Kids</p>
    </div>

    <div>
      <p className='text-[20px] leading-[25.6px] font-semibold'>Cute Soft Teddybear</p>
      
    </div>

<p className='text-[16px] leading-[19.95px] font-normal text-[#707A82]'>Evsive danukjos ol tapjulof opofe erune fidpuv bo zadaga gi efo vuv teanubal.opofe erune fidpuv bo zadaga gi efo vuv teanubal.</p>

    <div className='flex items-center gap-2'>
      <p className=' line-through text-[20px] leading-[25.5px] text-[#707A82]'>$175</p>
      <p className='text-[20px] leading-[25.5px]'>$200</p>
    </div>
   
    <div className='flex items-center gap-2'>
       <p className="flex"><AiFillStar size={18} color="#f8c076" /><AiFillStar size={18} color="#f8c076" /><AiFillStar size={18} color="#f8c076" />
       <AiFillStar size={18} color="#f8c076" /><AiOutlineStar size={18} color="#f8c076" /> </p>
       <p className='text-[16px] leading-[17.6px] text-[#0085DB]'>(87 reviews)</p>
    </div>
    <div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-[97%]" />
    <div className='flex items-center gap-15'>
      <p>Colors <span className='text-red-500 font-medium text-[16px] leading-[19.2px]'>*</span></p>

      <div className='flex items-center gap-[2px]'>
      {
        product.colors.map((cl)=>(
            <p style={{
            backgroundColor:cl.hex
          }} className={`w-6 h-6 flex items-center justify-center rounded-full  cursor-pointer transition text-[12px] text-white`} 
    onClick={()=>setSliderIndex((prev)=> prev-1)}>
      <TiTick />
    </p>
        ))
      }
      </div>

    
    </div>

       <div className='flex items-center gap-10'>
        <p className=' font-medium text-[18px] leading-[19.2px]'>Quantity</p>

        <div className='button text-[#707A82]'>
          <button className=' border border-[#e5eaef] p-3 rounded-tl-md rounded-bl-md'><FaMinus /></button>
          <button className=' border-y pt-2.5 border-[#e5eaef] pb-1.5 pl-4 pr-4'>1</button>
          <button className=' border border-[#e5eaef] p-3 rounded-tr-md rounded-br-md text-[#707A82] bg-[#edeff0]'><FaPlus /></button>
        </div>
      </div>

<div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-[97%]" />

  <div className='filterButton flex items-center gap-8'>
         <button className='bg-[#0085DB] pt-2 pb-2 pl-7 pr-7 text-white rounded-full text-[16px] font-medium shadow-[0_4px_12px_0_#0085DB4D]'>
  Buy Now
</button>
        <button className='bg-[#fb977d] pt-2 pb-2 pl-7 pr-7 text-white rounded-full text-[16px] font-medium shadow-[0_4px_12px_0_rgba(251,151,125,0.3)]'>
  Add to Cart
</button>


       </div>
     <div className=' leading-[20px]'>
      <p className='text-[#83919a]'>Dispatched in 2-3 weeks</p>
      <p className='text-[#2985dd]'>Why the longer time for delivery?</p>
     </div>
     </div>

     </div> 
    </div>

    <div className='tab bg-white rounded-2xl shadow-2x mt-5 pl-6 pr-6 pt-12 h-[320px]'>
      <div className='flex items-center gap-3'>
        <p className={`text-[16px] font-normal pb-2 ${tab === 'Discription' ? 'text-[#0085db] border-b ' : ''}`} onClick={()=>(setTab('Discription'))}>Description</p>
        <p className={`text-[16px] font-normal pb-2 ${tab === 'Review'? 'text-[#0085db] border-b ' : ''}`} onClick={()=>(setTab('Review'))}>Review</p>
      </div>
      <div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-full" />
          {
            tab === 'Discription' && (
            <div className='tabcontent flex flex-col gap-5 pt-5 pb-5'>
            <p className='text-[18px] leading-[25.6px] font-semibold'>{product.descriptionShort}</p>

            <p className='text-[14px] leading-[21.98px]'>{product.descriptionLong1}</p>
            <p className='text-[14px] leading-[21.98px]'>{product.descriptionLong2}</p>
          </div>
            )
          }
          {
            tab === 'Review' && (
            <div className='tabcontent grid grid-cols-3 gap-3 pt-5 pb-5 bg-white'>
             <div className='col-span-3 lg:col-span-1 border h-[200px] rounded-2xl border-[#e5eaef] flex justify-center items-center'> 
              <div className='flex flex-col justify-center items-center gap-3'>
                <h6>Average Rating</h6>
              <p className='text-[36px] leading-[44px] font-semibold text-[#0085DB] tracking-[-0.5625px]' >4/5</p>
              <p className="flex"><AiFillStar size={24} color="#f8c076" /><AiFillStar size={24} color="#f8c076" /><AiFillStar size={24} color="#f8c076" /><AiFillStar size={24} color="#f8c076" /><AiOutlineStar size={24} color="#f8c076" /></p>
              </div>
             </div>
             <div className='col-span-3 lg:col-span-1 border h-[200px] rounded-2xl border-[#e5eaef] '> 
             <div className='pt-10'>
    {ratings.map((rating, index) => (
      <div key={index} className='flex justify-center items-center gap-3'>
        <p>{rating.stars} stars</p>
        <div className="h-[5px] w-[60%] flex">
          <div
            className="bg-[#0085db]"
            style={{ width: `${rating.percentage}%` }}
          ></div>
          <div
            className="bg-[#e5eaef]"
            style={{ width: `${100 - rating.percentage}%` }}
          ></div>
        </div>
        <p>({rating.count})</p>
      </div>
    ))}
  </div>
             </div>
             <div className='col-span-3 lg:col-span-1 border h-[200px] rounded-2xl border-[#e5eaef] flex justify-center items-center'> 
              <button className='text-[16px] leading-[24px] font-medium text-[#0085DB] border border-[#0085DB] pl-6 pr-6 pt-2 pb-2 rounded-[5px] flex justify-center items-center gap-2' ><span><GoPencil /></span> Write A Review</button>
            
             </div>

    
          </div>
            )
          }
         
    </div>

    <p className='text-[20px] leading-[25.5px] font-semibold mt-12'>Related Products</p>

    <div className='relatedProductCard grid grid-cols-4 gap-5'>
      <div className='col-span-1 shadow-2xl'>
         <div className='relative'>
       <img className="rounded-t-2xl" src={product1} />
         <button className="bg-white p-3 rounded-full shadow hover:bg-gray-100 absolute top-[90%]">
                  <FaShoppingCart className="text-[#0085DB]" />
                </button>
       </div>
       <div className='bg-white p-5 rounded-b-2xl'>
        <p>Cute Soft Teddybear</p>
        <div className='flex justify-between items-center'>
          <p>$200 $175</p>
           <p className="flex"><AiFillStar size={18} color="#f8c076" /><AiFillStar size={18} color="#f8c076" /><AiFillStar size={18} color="#f8c076" /><AiFillStar size={18} color="#f8c076" /><AiOutlineStar size={18} color="#f8c076" /></p>
        </div>
       </div>
      </div>
      <div className='col-span-1 shadow-2xl'>
         <div className='relative'>
       <img className="rounded-t-2xl" src={product1} />
         <button className="bg-white p-3 rounded-full shadow hover:bg-gray-100 absolute top-[90%]">
                  <FaShoppingCart className="text-[#0085DB]" />
                </button>
       </div>
       <div className='bg-white p-5 rounded-b-2xl'>
        <p>Cute Soft Teddybear</p>
        <div className='flex justify-between items-center'>
          <p>$200 $175</p>
           <p className="flex"><AiFillStar size={18} color="#f8c076" /><AiFillStar size={18} color="#f8c076" /><AiFillStar size={18} color="#f8c076" /><AiFillStar size={18} color="#f8c076" /><AiOutlineStar size={18} color="#f8c076" /></p>
        </div>
       </div>
      </div>
      <div className='col-span-1 shadow-2xl'>
         <div className='relative'>
       <img className="rounded-t-2xl" src={product1} />
         <button className="bg-white p-3 rounded-full shadow hover:bg-gray-100 absolute top-[90%]">
                  <FaShoppingCart className="text-[#0085DB]" />
                </button>
       </div>
       <div className='bg-white p-5 rounded-b-2xl'>
        <p>Cute Soft Teddybear</p>
        <div className='flex justify-between items-center'>
          <p>$200 $175</p>
           <p className="flex"><AiFillStar size={18} color="#f8c076" /><AiFillStar size={18} color="#f8c076" /><AiFillStar size={18} color="#f8c076" /><AiFillStar size={18} color="#f8c076" /><AiOutlineStar size={18} color="#f8c076" /></p>
        </div>
       </div>
      </div>
      <div className='col-span-1 shadow-2xl'>
         <div className='relative'>
       <img className="rounded-t-2xl" src={product1} />
         <button className="bg-white p-3 rounded-full shadow hover:bg-gray-100 absolute top-[90%]">
                  <FaShoppingCart className="text-[#0085DB]" />
                </button>
       </div>
       <div className='bg-white p-5 rounded-b-2xl'>
        <p>Cute Soft Teddybear</p>
        <div className='flex justify-between items-center'>
          <p>$200 $175</p>
           <p className="flex"><AiFillStar size={18} color="#f8c076" /><AiFillStar size={18} color="#f8c076" /><AiFillStar size={18} color="#f8c076" /><AiFillStar size={18} color="#f8c076" /><AiOutlineStar size={18} color="#f8c076" /></p>
        </div>
       </div>
      </div>
    </div>
    </div>
  )
}

export default ShopDetails
