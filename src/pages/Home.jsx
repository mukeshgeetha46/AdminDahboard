// src/pages/Home.jsx
import divbackground from '../assets/sidebar/man-working-on-laptop-BZeL3Gvc.png'
import { IoBagCheckOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";

function Home() {

  const productDetailsData = [
  {
    icon: <IoBagCheckOutline color="#53d290" />,
    bgColor: "#dffff3",
    title: "64 new orders",
    subtitle: "Processing",
  },
  {
    icon: <CiPause1 color="#f8b961" />,
    bgColor: "#fff6ea",
    title: "64 new orders",
    subtitle: "Processing",
  },
  {
    icon: <PiShoppingCart color="#63d2ee" />,
    bgColor: "#e1f5fa",
    title: "64 new orders",
    subtitle: "Processing",
  },
];

const barData = [
  { label: 'M', grayHeight: 40 },
  { label: 'T', grayHeight: 60 },
  { label: 'W', grayHeight: 50 },
  { label: 'T', grayHeight: 45 },
  { label: 'F', grayHeight: 62 },
  { label: 'S', grayHeight: 47 },
  { label: 'S', grayHeight: 40 },
];


  return (
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
 <div
  className="bg-white h-[500px] sm:h-[340px] col-span-0 lg:col-span-2 bg-no-repeat bg-[length:400px_auto] bg-right-bottom rounded-2xl shadow-lg"
  style={{
    backgroundImage: `url(${divbackground})`,
  }}
>


  <div className='m-7'>
    <div className="div">
   <p className="text-sm sm:text-2xl font-bold">Congratulations Jonathan</p>

    <p className='text-[#7d878a]'>You have done 38% more sales</p>
  </div>

  <div className='div2'>
   {productDetailsData.map((item, index) => (
        <div key={index} className="productDetails flex justify-start gap-5 mt-5">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
            style={{ backgroundColor: item.bgColor }}
          >
            {item.icon}
          </div>
          <div>
            <p>{item.title}</p>
            <p className='text-[#7d878a]'>{item.subtitle}</p>
          </div>
        </div>
      ))}
  </div>
  </div>



 </div>


 <div className='bg-white  h-[340px] shadow-md rounded-2xl'>
   <div className='flex justify-between items-center m-5'>
    <div className='payments flex-col'>
       <p className='text-2xl font-bold'>Payments</p>
       <p className='text-[#7d878a]'>Last 7 days</p>
    </div>
    <div className='payments flex-col'>
       <p className='text-[20px] font-bold'>12,389</p>
     <p className="flex justify-center items-center pl-4 pr-4 pt-[1px] pb-[1px] text-[12px] bg-[#f7ddb6] rounded-2xl text-[#E7761B] border border-[#E7761B]">
-3.8%
</p>

    </div>
   </div>
 

<div className="flex justify-center items-center gap-6 mt-[60px]">
  {barData.map((item, index) => (
    <div key={index} className="flex flex-col items-center">
      <div className="h-[50px] flex justify-center items-end">
        <p
          className="bg-[#dfdfdf] w-[9px] rounded-2xl"
          style={{ height: `${item.grayHeight}px` }}
        >
          &nbsp;
        </p>
      </div>
      <div>
        <p className="bg-[#0085db] w-[9px] h-[30px] rounded-2xl mt-2">&nbsp;</p>
      </div>
      <div>
        <p className="flex justify-center items-center w-[9px] h-[30px] text-[14px]">
          {item.label}
        </p>
      </div>
    </div>
  ))}
</div>


  <div className='payment text-[#7d878a]'> 
   <div className='flex justify-between items-center'>
    
    <div className='m-5'>
       <div className='flex justify-start items-center'>
      <div className='w-4 h-4 rounded-full flex items-center justify-center text-white text-xl border-[2px] border-[#6dd9a1]'></div>
    <div className='ml-2'>
      <p>Paypal</p>
    </div>
      
     </div>
     <div className='flex justify-start items-center'>
      <div className='w-4 h-4 rounded-full flex items-center justify-center text-white text-xl border-[2px] border-[#7d878a]'></div>
    <div className='ml-2'>
      <p>Credit Card</p>
    </div>
      
     </div>

    </div>


    <div className='m-5'>
       <div className='flex justify-start items-center'>
    <div className='ml-2'>
      <p>52 %</p>
    </div>
      
     </div>
     <div className='flex justify-start items-center'>
    
    <div className='ml-2'>
      <p>48 %</p>
    </div>
      
     </div>

    </div>
   </div>
  </div>


 </div>




 <div className='bg-white h-[340px] shadow-md rounded-2xl'>
  <div className='flex justify-between items-center m-5'>
    <div className='payments flex-col'>
       <p className='text-2xl font-bold'>Products</p>
       <p>Last 7 days</p>
    </div>
    <div className='payments flex-col'>
       <p className='text-[20px] font-bold'>432</p>
     <p className="flex justify-center items-center pl-4 pr-4 pt-[1px] pb-[1px] text-[12px] bg-[#dffff3] rounded-2xl text-[#6dd9a1] border border-[#6dd9a1]">
-3.8%
</p>

    </div>
   </div>
   

   <div>
<div className="flex flex-col items-center p-1">
      <div className="relative w-[180px] h-[180px] group">
        {/* First slice - 45% (red) */}
        <div
          className="absolute w-full h-full rounded-full cursor-pointer hover:opacity-80 transition-opacity"
          title="Section A: 45%"
          style={{
            background:
              "conic-gradient(#FF6B6B 0deg, #FF6B6B 162deg, transparent 162deg)",
            transform: "rotate(0deg)",
          }}
        />
        {/* Second slice - 30% (blue) */}
        <div
          className="absolute w-full h-full rounded-full cursor-pointer hover:opacity-80 transition-opacity"
          title="Section B: 30%"
          style={{
            background:
              "conic-gradient(#4ECDC4 0deg, #4ECDC4 108deg, transparent 108deg)",
            transform: "rotate(162deg)",
          }}
        />
        {/* Third slice - 25% (yellow) */}
        {/* Third slice - 25% (blue - #0085db) */}
<div
  className="absolute w-full h-full rounded-full cursor-pointer hover:opacity-80 transition-opacity"
  title="Section C: 25%"
  style={{
    background: "conic-gradient(#0085db 0deg, #0085db 90deg, transparent 90deg)",
    transform: "rotate(270deg)",
  }}
/>

        {/* Inner white circle to create ring effect */}
        <div
          className="absolute rounded-full bg-white"
          style={{
            width: "70%",
            height: "70%",
            top: "15%",
            left: "15%",
          }}
        />
      </div>

    
    </div>
   </div>

   <div className='flex justify-center items-center mt-3 text-[#7d878a]'>
    <p>$18k Profit more than last month</p>
   </div>
 </div>



 <div>4</div>
 <div>5</div>
 <div>6</div>
 <div>7</div>
 <div>8</div>
 <div>9</div>
 <div>10</div>
</div>
    </div>
  )
}

export default Home