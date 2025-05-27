// src/pages/Home.jsx
import divbackground from '../assets/sidebar/man-working-on-laptop-BZeL3Gvc.png'
import { IoBagCheckOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import CircleCharts from '../utils/CircleCharts';
import WeekdayBarChart from '../utils/WeekdayBarChart';

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
       <p className='flex justify-center items-center text-[20px] font-bold'>432</p>
     <p className="flex justify-center items-center pl-4 pr-4 pt-[1px] pb-[1px] text-[12px] bg-[#dffff3] rounded-2xl text-[#6dd9a1] border border-[#6dd9a1]">
-3.8%
</p>

    </div>
   </div>
   

   <CircleCharts />

   <div className='flex justify-center items-center mt-3 text-[#7d878a]'>
    <p>$18k Profit more than last month</p>
   </div>
 </div>



 
 <div
  className="bg-white h-[500px] sm:h-[340px] col-span-0 lg:col-span-2 bg-no-repeat bg-[length:400px_auto] bg-right-bottom rounded-2xl shadow-lg"
 
>
<WeekdayBarChart />

  



 </div>


<div className='bg-white  h-[340px] shadow-md rounded-2xl'>
   <div className='flex justify-between items-center m-5'>
    <div className='payments flex-col'>
       <p className='text-2xl font-bold'>Latest Deal</p>
       <p className='text-[#7d878a]'>Last 7 days</p>
    </div>
    <div className='payments flex-col'>
       
     <p className="flex justify-center items-center pl-4 pr-4 pt-[1px] pb-[1px] text-[12px] bg-[#dffff3] rounded-2xl text-[#6dd9a1] border border-[#6dd9a1]">
-3.8%
</p>

    </div>
   </div>
 
  <div className='range'>

     <div className='flex justify-between items-center mt-5 mr-5 ml-5 mb-[5px]'>
      <p className='text-[18px]'>$98,500</p>
      <p className='text-[18px]'>$1,22,900</p>
     </div>

    <div className="flex mt-2 ml-5 mr-5 mb-5 h-[7px] w-full max-w-[320px] ">
  <div className="w-1/1 bg-[#0085db] rounded-tl-2xl rounded-bl-2xl"></div>
  <div className="w-1/6 bg-[#f5f8fb] rounded-tr-2xl rounded-br-2xl"></div>
</div>


  </div>



 </div>



 <div className='bg-white  h-[340px] shadow-md rounded-2xl'>
   <div className='flex justify-between items-center m-5'>
    <div className='payments flex-col'>
       <p className='text-2xl font-bold'>Customers</p>
       <p className='text-[#7d878a]'>Last 7 days</p>
    </div>
    <div className='payments flex-col items-center'>
       <p className='flex justify-center items-center text-[20px] font-bold'>6,380</p>
   <p className="flex justify-center items-center pl-4 pr-4 pt-[1px] pb-[1px] text-[12px] bg-[#dffff3] rounded-2xl text-[#6dd9a1] border border-[#6dd9a1]">
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
    <div className='ml-2'>
      <p>April 07 - April 14</p>
    </div>
      
     </div>
     <div className='flex justify-start items-center'>
    <div className='ml-2'>
      <p>Last Week</p>
    </div>
      
     </div>

    </div>


    <div className='m-5'>
       <div className='flex justify-start items-center'>
    <div className='ml-2'>
      <p>6,380</p>
    </div>
      
     </div>
     <div className='flex justify-start items-center'>
    
    <div className='ml-2'>
      <p>4,298</p>
    </div>
      
     </div>

    </div>
   </div>
  </div>


 </div> 
 
 
 
 
 <div>7</div>
 <div>8</div>
 <div>9</div>
 <div>10</div>
</div>
    </div>
  )
}

export default Home