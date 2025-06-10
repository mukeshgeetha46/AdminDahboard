// src/pages/Home.jsx
import divbackground from '../assets/sidebar/man-working-on-laptop-BZeL3Gvc.png'
import { IoBagCheckOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import CircleCharts from '../utils/CircleCharts';
import WeekdayBarChart from '../utils/WeekdayBarChart';
import iphone from '../assets/Main/product-5-B4cPxpNg.png'
import applemac from '../assets/Main/product-6-Gy-PWxj9.png'
import palystatios from '../assets/Main/product-7-Bvj-91bc.png'
import chair from '../assets/Main/product-8-BbgjC3Cu.png'
import { BsThreeDotsVertical } from "react-icons/bs";


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

const avatars = [
  "https://img.freepik.com/premium-photo/retro-style-art_551707-70225.jpg?uid=R188668785&ga=GA1.1.1035270016.1740294128&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/retro-style-art_551707-70225.jpg?uid=R188668785&ga=GA1.1.1035270016.1740294128&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/retro-style-art_551707-70225.jpg?uid=R188668785&ga=GA1.1.1035270016.1740294128&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/retro-style-art_551707-70225.jpg?uid=R188668785&ga=GA1.1.1035270016.1740294128&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/retro-style-art_551707-70225.jpg?uid=R188668785&ga=GA1.1.1035270016.1740294128&semt=ais_hybrid&w=740",
];



  return (
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
 <div
  className="bg-white h-[500px] sm:h-[340px] col-span-0 md:col-span-1 lg:col-span-2 bg-no-repeat bg-[length:400px_auto] bg-right-bottom rounded-2xl shadow-lg"
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


 <div className='bg-white  h-[340px] shadow-md rounded-2xl col-span-1 md:col-span-1'>
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




 <div className='bg-white h-[340px] shadow-md rounded-2xl col-span-1 md:col-span-1'>
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


<div className='bg-white  h-[340px] shadow-md rounded-2xl flex flex-col justify-between col-span-1 md:col-span-1'>
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

    <div className="flex mt-2 ml-5 mr-5 h-[7px] w-full max-w-[320px] ">
  <div className="w-1/1 bg-[#0085db] rounded-tl-2xl rounded-bl-2xl"></div>
  <div className="w-1/6 bg-[#f5f8fb] rounded-tr-2xl rounded-br-2xl"></div>
</div>
 
 <div className='mt-[5px] ml-5 mr-5 mb-5'>
  <p>Coupons used: 18/22</p>
 </div>

  </div>

  <div className='avatar m-5'>
   <div>
    <p>Recent Purchasers</p>
   </div>
   <div className="flex justify-start items-center relative">
  {avatars.map((url, index) => (
    <img
      key={index}
      src={url}
      alt={`Avatar ${index + 1}`}
      className={`rounded-full object-cover w-[40px] h-[40px] border-2 border-white ${
        index !== 0 ? '-ml-3' : ''
      }`}
    />
     
  ))}
  <div
    className="w-10 h-10 rounded-full flex items-center justify-center text-white absolute ml-33"
            style={{ backgroundColor:'green' }}
          >
            8+
          </div>
</div>
          


  </div>

 </div>



 <div className='bg-white  h-[340px] shadow-md rounded-2xl col-span-1 md:col-span-1'>
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
 
 
 
 
 <div className='col-span-0 md:col-span-2 lg:col-span-4 '>

<div className="grid grid-cols-20 gap-4 ">
  <div className="col-span-20 lg:col-span-13 ">
    <div className="tablediv h-[500px] bg-white rounded-2xl">
      
      <div className=''>

<div className="overflow-x-auto">
  <div className="flex gap-4 min-w-max">
<table className="w-full table-auto border-collapse m-3">
  <thead>
    <tr className=' border-b border-[#e5eaef]'>
      <th className="pl-6 pt-7 pr-6 pb-3 text-left">Products</th>
      <th className="pl-6 pt-7 pr-6 pb-3 text-left">Payments</th>
      <th className="pl-6 pt-7 pr-6 pb-3 text-left">Status</th>
      <th className="pl-6 pt-7 pr-6 pb-3 text-left">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-[#e5eaef]">
      <td className="px-4 py-4"> <div className='flex justify-start items-center gap-3'>
          <div className='img'>
           <img src={iphone} width={70} height={70} />
         </div>
          <div className='title'>
            iPhone 13 pro max
         </div>
         </div></td>
      <td className="px-4 py-4">
        <div className='title flex-col justify-start items-center gap-3'>
           <p>$180/ 499</p>
           <p>Partially paid</p>
          <div className="flex  h-[7px] w-[100px] mt-2">
          <div className="w-2/3 bg-[#0085db] rounded-tl-2xl rounded-bl-2xl"></div>
          <div className="w-1/6 bg-[#f5f8fb] rounded-tr-2xl rounded-br-2xl"></div>
          </div>

         </div></td>
      <td className="px-4 py-4 text-green-600 flex-col justify-start items-center">
        <p className='pt-[1px] pb-[3px] bg-[#F1EBFF] text-[#8763DA] flex justify-center items-center rounded-2xl text-[12px]'>Confirmed</p>
      </td>
       <td className="px-4 py-4 flex-col justify-center items-center">
        <button className="text-[#666666] hover:underline"><BsThreeDotsVertical size={22}/></button>
      </td>
    </tr>
    <tr className="border-b border-[#e5eaef]">
      <td className="px-4 py-4"> <div className='flex justify-start items-center gap-3'>
          <div className='img'>
           <img src={applemac} width={70} height={70} />
         </div>
          <div className='title'>
            Apple MacBook Pro
         </div>
         </div></td>
      <td className="px-4 py-4"><div className='title flex-col justify-start items-center gap-3'>
           <p>$180/ 499</p>
           <p>Partially paid</p>
          <div className="flex  h-[7px] w-[100px] mt-2">
          <div className="w-2/3 bg-[#0085db] rounded-tl-2xl rounded-bl-2xl"></div>
          <div className="w-1/6 bg-[#f5f8fb] rounded-tr-2xl rounded-br-2xl"></div>
          </div>

         </div></td>
      <td className="px-4 py-4 text-green-600">
         <p className='pt-[1px] pb-[3px] bg-[#F1EBFF] text-[#8763DA] flex justify-center items-center rounded-2xl text-[12px]'>Confirmed</p>
      </td>
      <td className="px-4 py-4 flex-col justify-center items-center">
        <button className="text-[#666666] hover:underline"><BsThreeDotsVertical size={22}/></button>
      </td>
    </tr>
    <tr className="border-b border-[#e5eaef]">
      <td className="px-4 py-4"> <div className='flex justify-start items-center gap-3'>
          <div className='img'>
           <img src={palystatios} width={70} height={70} />
         </div>
          <div className='title'>
            PlayStation 5 DualS
         </div>
         </div></td>
      <td className="px-4 py-4"><div className='title flex-col justify-start items-center gap-3'>
           <p>$180/ 499</p>
           <p>Partially paid</p>
          <div className="flex  h-[7px] w-[100px] mt-2">
          <div className="w-2/3 bg-[#0085db] rounded-tl-2xl rounded-bl-2xl"></div>
          <div className="w-1/6 bg-[#f5f8fb] rounded-tr-2xl rounded-br-2xl"></div>
          </div>

         </div></td>
      <td className="px-4 py-4 text-green-600">
         <p className='pt-[1px] pb-[3px] bg-[#F1EBFF] text-[#8763DA] flex justify-center items-center rounded-2xl text-[12px]'>Confirmed</p>
      </td>
       <td className="px-4 py-4 flex-col justify-center items-center">
        <button className="text-[#666666] hover:underline"><BsThreeDotsVertical size={22}/></button>
      </td>
    </tr>
    <tr className="">
      <td className="px-4 py-4"> <div className='flex justify-start items-center gap-3'>
          <div className='img'>
           <img src={chair} width={70} height={70} />
         </div>
          <div className='title'>
            Amazon Basics ...
         </div>
         </div></td>
      <td className="px-4 py-4"><div className='title flex-col justify-start items-center gap-3'>
           <p>$180/ 499</p>
           <p>Partially paid</p>
          <div className="flex  h-[7px] w-[200px] mt-2">
          <div className="w-2/3 bg-[#0085db] rounded-tl-2xl rounded-bl-2xl"></div>
          <div className="w-1/6 bg-[#f5f8fb] rounded-tr-2xl rounded-br-2xl"></div>
          </div>

         </div></td>
      <td className="px-4 py-4 text-green-600">
         <p className='pt-[1px] pb-[3px] bg-[#F1EBFF] text-[#8763DA] flex justify-center items-center rounded-2xl text-[12px]'>Confirmed</p>
      </td>
      <td className="px-4 py-4 flex-col justify-center items-center">
        <button className="text-[#666666] hover:underline"><BsThreeDotsVertical size={22}/></button>
      </td>
    </tr>
   
    
  </tbody>
      </table>
  </div>
  </div>


       


      </div>
      
      </div>
  </div>
  <div className="col-span-20 lg:col-span-7">
    <div className="tablediv h-[400px] bg-white rounded-2xl">35%</div>
  </div>
</div>


 </div>





 <div><div className='tablediv h-[300px] bg-white'>

</div></div>
 <div>9</div>
 <div>10</div>
</div>
    </div>
  )
}

export default Home