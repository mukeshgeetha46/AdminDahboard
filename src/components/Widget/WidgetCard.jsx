import React from 'react'
import BreadCrums from '../../pages/HeaderMenu/HeaderMenu'
import abstract1 from '../../assets/widget/download.png'
import abstract2 from '../../assets/widget/download.svg'
import abstract3 from '../../assets/widget/download (1).svg'
import divbackground from '../../assets/sidebar/man-working-on-laptop-BZeL3Gvc.png'
import { IoBagCheckOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import profile from '../../assets/widget/user1-D00qJYN4.jpg'
import giftcard from '../../assets/widget/gifts-CJw-WHkP.png'
import profile2 from '../../assets/Profile/user-10-BtaXUAQO.jpg'
import profile3 from '../../assets/Profile/user-2-BtZPKsUg.jpg'
import profile4 from '../../assets/Profile/user-6-DXcW9yFx.jpg'
import Sceduler from './Sceduler'
import PaymentHistroy from './PaymentHistroy'

const WidgetCard = () => {

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
      {
        icon: <PiShoppingCart color="#63d2ee" />,
        bgColor: "#e1f5fa",
        title: "64 new orders",
        subtitle: "Processing",
      },
    ];

    const dashboarddetails = [
      {
        symbol:'₽',
        rate:'2358+23%',
        title:'Sales',
        abstract_img:abstract1
      },
      {
        symbol:'₽',
        rate:'356+8%',
        title:'Refunds',
        abstract_img:abstract2
      },
      {
        symbol:'₽',
        rate:'$23.8K-3%',
        title:'Earnings',
        abstract_img:abstract1
      },
      {
        symbol:'₽',
        rate:'2358+23%',
        title:'Sales',
        abstract_img:abstract3
      },
    ]

  return (
    <div>
       <BreadCrums title={`Cards`} Breadcrums1={`Home`} Breadcrums2={`Cards`} />
        
        <div className='grid grid-cols-4 gap-5'> 
         <div className='col-span-4'>
           <div className='grid grid-cols-4 gap-5'>
              {
                dashboarddetails.map((item)=>(
                  <div className='col-span-4 lg:col-span-1 mt-5'>
<div className='bg-[#0085db] p-5 rounded-2xl shadow relative'> 
                <div className="absolute top-0 right-0 w-20 h-20">
    <img src={item.abstract_img} alt="decor" className="w-full h-full object-cover rounded-tr-2xl" />
  </div>
               <div className='flex flex-col gap-5'>
                <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center mb-4">
                 <span className="text-lg">{item.symbol}</span>
                </div>
               <div className='flex flex-col gap-3'>
                 <p className='text-[20px] leading-[25px] font-semibold text-white'>{item.rate}</p>
                <p className='text-[14px] leading-[17px] font-medium text-white'>{item.title}</p>
               </div>
               </div>
             </div>
           </div>
                ))
              }
             
         
           
           </div>
         </div>

         <div className='col-span-4 lg:col-span-2'>
             <div
              className="bg-white col-span-4 md:col-span-1 lg:col-span-2 bg-no-repeat bg-[length:400px_auto] bg-right-bottom rounded-2xl shadow-lg"
              style={{
                backgroundImage: `url(${divbackground})`,
              }}
            >
            
            
              <div className='ml-7 mr-7 mb-7 pt-5'>
                <div className="div">
               <p className="text-[20px] leading-[25px] font-semibold">Congratulations Jonathan</p>
            
                <p className='text-[#707A82]'>You have done 38% more sales</p>
              </div>
            
              <div className='div2 pb-5'>
               {productDetailsData.map((item, index) => (
                    <div key={index} className="productDetails flex justify-start gap-5 mt-5">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                        style={{ backgroundColor: item.bgColor }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className='text-[16px] leading-[19px] font-semibold'>{item.title}</p>
                        <p className='text-[#707A82] text-[14px] leading-[17
                        px]'>{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
              </div>
              </div>
            
            
            
             </div>
         </div>
         <div className='col-span-4 lg:col-span-1'>
            <div className='grid grid-cols-4 gap-5'>
                <div className='col-span-4'>
                   <div className='bg-[#e5f3fb] p-5 rounded-2xl shadow relative'> 
                <div className="absolute top-0 right-0 w-20 h-20">
    <img src={abstract3} alt="decor" className="w-full h-full object-cover rounded-tr-2xl" />
  </div>
               <div className='flex flex-col gap-5'>
                <div className="w-8 h-8 border-2 bg-[#46caeb] border-white rounded-full flex items-center justify-center mb-4">
                 <span className="text-lg">₽</span>
                </div>
               <div className='flex justify-between items-center gap-3'>
                 <p className='text-[20px] leading-[25px] font-semibold'>New Goals</p>
                <p className='text-[14px] leading-[17px] font-medium text-[#0085DB]'>83%</p>
               </div>

                <div className="h-[5px] w-full flex">
          <div
            className="bg-[#0085db]"
            style={{ width: `80%` }}
          ></div>
          <div
            className="bg-[#e5eaef]"
            style={{ width: `${100 - 80}%` }}
          ></div>
        </div>
               </div>
             </div>
                </div>
                <div className='col-span-4'>
                  <div className='bg-[#FFF6EA] p-5 rounded-2xl shadow relative'> 
                  <div className='flex justify-between pb-6'>
                    <img src={profile} className='w-[70px] rounded-2xl' alt="" />
                    <p className='text-[14px] leading-[17px] font-semibold text-[#F8C076]'>#1 in DevOps</p>
                  </div>
                <p className='text-[16px] leading-[19px] font-semibold'>Adam Johnson</p>
                 <p className='text-[14px] leading-[17px]  text-[#707A82] pt-1'>Top Developer</p>
                </div>
                </div>
            </div>
         </div>
         <div className='col-span-4 lg:col-span-1'>
            <div className='bg-[#ffede9] rounded-t-2xl shadow h-[172px]'>
              <div className='flex justify-center'>
              <img src={giftcard} className='w-[200px]' alt="" />
            </div>
            </div>
            <div className='bg-white p-5 rounded-b-2xl'>
              <div className='flex flex-col gap-6'>
                <p className='text-[16px] leading-[19px] font-semibold'>Figma Tips and Tricks with Stephan</p>
                <p className='text-[14px] leading-[17px] text-[#707A82]'>Figma Tips and Tricks with StephanFigma Tips and Tricks with Stephan</p>

                <div className='flex items-center gap-2'>
                  <img src={profile} className='w-9 h-9 rounded-full' alt="" />
                  <img src={profile2} className='w-9 h-9 rounded-full' alt="" />
                  <img src={profile3} className='w-9 h-9 rounded-full' alt="" />
                  <img src={profile4} className='w-9 h-9 rounded-full' alt="" />
                  <p className='text-[14px] leading-[17px] text-[#707A82]'>+18</p>
                </div>
              </div>
            </div>
         </div>
         <div className='col-span-4 gap-0'>
            <div className='grid grid-cols-3 gap-4'>
               <div className='col-span-4 xl:col-span-1'> 
                <Sceduler />
               </div>
               <div className='col-span-4 xl:col-span-1'> 
                <PaymentHistroy />
               </div>
               <div className='col-span-4 xl:col-span-1'> 
                <Sceduler />
               </div>
            </div>
         </div>
         
        </div>

    </div>
  )
}

export default WidgetCard
