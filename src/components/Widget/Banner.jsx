import React from 'react'
import BreadCrums from '../../pages/HeaderMenu/HeaderMenu'
import divbackground from '../../assets/widget/welcome-bg2-Pwo9mw4F.png'
import login from '../../assets/widget/login-bg-BprgzFH_.svg'
import goldmedal from '../../assets/widget/gold-DishFN30.png'
import maintance from '../../assets/widget/maintenance-BglQCpXy.svg'
import cart from '../../assets/widget/empty-shopping-cart-C-a9p3Jc.svg'
import profile from '../../assets/widget/user1-D00qJYN4.jpg'
import Profile from '../../pages/Profile/Profile'
const WidgetBanner = () => {
  return (
    <div>
       <BreadCrums title={`Banner`} Breadcrums1={`Home`} Breadcrums2={`Banner`} />

       <div className='grid grid-cols-9 gap-3'>
         <div className='col-span-9 xl:col-span-6'>
             <div className='grid grid-cols-4'>
              <div className='col-span-4'>
                 <div
                  className="bg-[#e5f3fb] h-[400px] sm:h-[240px] col-span-0 md:col-span-1 lg:col-span-2 bg-no-repeat bg-[length:400px_auto] bg-right-bottom rounded-2xl shadow-lg"
                  style={{
                    backgroundImage: `url(${divbackground})`,
                    backgroundSize: '250px auto',
                  }}
                >
                
                
                  <div className='m-7'>
                    <div className="div flex flex-col gap-4 pt-5">
                   <p className="text-[18px] leading-[24px] font-semibold">Welcome back Natalia!</p>
                
                    <p className='text-[#7d878a] text-[16px] leading-[24px]'>You have earned 54% more than last month which is great thing.</p>

                    <button className='bg-[#0085DB] text-white w-fit rounded-full pl-5 pt-2 pr-5 pb-2 text-[16px]'>Check</button>
                  </div>
                
                  
                  </div>
                
                
                
                 </div>
                 <div
                  className="bg-[#e7ecf0] h-[400px] sm:h-[240px] col-span-0 md:col-span-1 lg:col-span-2 bg-no-repeat bg-[length:400px_auto] bg-right-bottom rounded-2xl shadow-lg"
                  style={{
                    backgroundImage: `url(${login})`,
                    backgroundSize: '250px auto',
                  }}
                >
                
                
                  <div className='m-7'>
                   <div className="div flex flex-col gap-4 pt-5">
                   <p className="text-[18px] leading-[24px] font-semibold">Track your every Transaction Easily
</p>
                
                    <p className='text-[#7d878a] text-[16px] leading-[24px] w-[690px]'>Track and record your every income and expence easily to control your balanceTrack and record your every income and expence easily to control your balance</p>

                      <button className='bg-[#707A82] text-white w-fit rounded-full pl-5 pt-2 pr-5 pb-2 text-[16px]'>Download</button>
                  </div>
                
                  
                  </div>
                
                
                
                 </div>
              </div>
             
             </div>
         </div>
         <div className='col-span-9 lg:col-span-3 '>
             <div className='bg-white rounded-2xl shadow p-5 mt-5'> 
               <div className='flex flex-col justify-center items-center gap-5'>
                <p className='text-[14px] leading-[17px]'>LEVEL UP</p>
                <img src={goldmedal} alt="" className='w-[190px]' />
                <p className='text-[18px] leading-[25px] font-semibold'>You reach all Notifications</p>
                <p className='text-[16px] leading-[24px] text-[#707A82]'>Congratulations, Tap to continue
next task.Track and record your every income and expence easily to control your balanceTrack and record your every income and expence easily to control your balanceTrack and record your every income and</p>
<button className='bg-[#0085DB] text-white w-fit rounded-full pl-5 pt-2 pr-5 pb-2 text-[16px]'>Yes, Got it!</button>
               </div>
             </div>
         </div>
         <div className='col-span-9 lg:col-span-3'>
             <div className='bg-white rounded-2xl shadow p-5'> 
               <div className='flex flex-col justify-center items-center gap-5'>
                <p className='text-[14px] leading-[17px]'>LEVEL UP</p>
                <img src={maintance} alt="" className='w-[190px]' />
                <p className='text-[18px] leading-[25px] font-semibold'>Oops something went wrong!
</p>
                <p className='text-[16px] leading-[24px] text-[#707A82]'>Trying again to bypasses these
temporary error.</p>
<button className='bg-[#FB977D] text-white w-fit rounded-full pl-5 pt-2 pr-5 pb-2 text-[16px]'>Retry</button>
               </div>
             </div>
         </div>
         <div className='col-span-9 lg:col-span-3 '>
             <div className='bg-white rounded-2xl shadow p-5'> 
               <div className='flex flex-col justify-center items-center gap-5'>
                <p className='text-[14px] leading-[17px]'>LEVEL UP</p>
                <img src={cart} alt="" className='w-[190px]' />
                <p className='text-[18px] leading-[25px] font-semibold'>Oop, Your cart is empty!</p>
                <p className='text-[16px] leading-[24px] text-[#707A82]'>Get back to shopping and get
rewards from it.</p>
<button className='bg-[#0085DB] text-white w-fit rounded-full pl-5 pt-2 pr-5 pb-2 text-[16px]'>Go For Shopping</button>
               </div>
             </div>
         </div>
         <div className='col-span-9 lg:col-span-3 m-0 xl:m-0'>
             <div className='bg-white rounded-2xl shadow p-5'> 
               <div className='flex flex-col justify-center items-center gap-5'>
                <p className='text-[18px] leading-[25px] font-semibold'>Mutual Friend Revealed
</p>

                <div className='relative'>
                 <p className='bg-amber-400 rounded-full w-5 h-5 flex justify-center items-center absolute right-0 top-2 text-[12px]'>1</p>
                <img className={`w-[130px] h-[130px] flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition`} src={profile} />
                </div>
                <p className='text-[18px] leading-[25px] font-semibold'>Tommoie Henderson</p>
                <p className='text-[16px] leading-[24px] text-[#707A82]'>Accept the request and
type a message</p>
   <div className='flex items-center gap-3'>
    <button className='bg-[#0085DB] text-white w-fit rounded-full pl-5 pt-2 pr-5 pb-2 text-[16px]'>Accept</button>
    <button className='bg-white text-[#FB977D] w-fit rounded-full pl-5 pt-2 pr-5 pb-2 text-[16px] border border-[#FB977D]'>Remove</button>
   </div>
               </div>
             </div>
         </div>
         
       </div>
    </div>
  )
}

export default WidgetBanner
