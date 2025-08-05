import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbDeviceDesktopPin } from "react-icons/tb";

import { PiDevices } from "react-icons/pi";

import Border from '../../pages/Border/Border';

const Security = () => {
  return (
     <div>
          <div className='grid grid-cols-9 gap-3'>
           <div className='col-span-9 lg:col-span-6 bg-white shadow rounded-2xl m-0 xl:m-5 p-5 flex flex-col gap-2'>
             
             <div className='flex flex-col gap-2'>
               <p className='text-[20px] leading-[25px] font-semibold'>Two-factor Authentication</p>
    
             <div className='flex justify-between items-center'>
               <p className='text-[14px] leading-[20px] text-[#707A82]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sapiente sunt earum officiis laboriosam ut.</p>

               <button className='bg-[#0085DB] text-white pl-4 pr-4 pt-1 pb-1 rounded-[5px]'>Enable</button>
             </div>
             <Border width={100} mt={6} />
           
             </div>
             <div className='flex flex-col'>
               <p className='text-[20px] leading-[25px] font-semibold'>Authentication App</p>
    
             <div className='flex justify-between items-center'>
               <p className='text-[14px] leading-[20px] text-[#707A82]'>Google auth app</p>

               <button className='bg-[#E5F3FB] text-[#0085DB] pl-4 pr-4 pt-1 pb-1 rounded-[5px]'>Setup</button>
             </div>
             <Border width={100} mt={2} />
           
             </div>
             <div className='flex flex-col'>
               <p className='text-[20px] leading-[25px] font-semibold'>Another e-mail</p>
    
             <div className='flex justify-between items-center'>
               <p className='text-[14px] leading-[20px] text-[#707A82]'>E-mail to send verification link</p>

               <button className='bg-[#E5F3FB] text-[#0085DB] pl-4 pr-4 pt-1 pb-1 rounded-[5px]'>Setup</button>
             </div>
             <Border width={100} mt={2} />
           
             </div>
             <div className='flex flex-col'>
               <p className='text-[20px] leading-[25px] font-semibold'>SMS Recovery</p>
    
             <div className='flex justify-between items-center'>
               <p className='text-[14px] leading-[20px] text-[#707A82]'>Your phone number or something</p>

                <button className='bg-[#E5F3FB] text-[#0085DB] pl-4 pr-4 pt-1 pb-1 rounded-[5px]'>Setup</button>
             </div>
             
           
             </div>

            </div> 
           <div className='col-span-9 lg:col-span-3 bg-white shadow rounded-2xl m-0 xl:m-5 p-5 flex flex-col gap-4'>
              <p className='bg-[#E5F3FB] p-5 w-[50px] h-[50px] flex justify-center items-center'><span className="text-[24px]">
                     <PiDevices color='#0085DB' />
                   </span>
                    </p>
    <p className='text-[20px] leading-[25px] font-semibold'>Devices</p>
              <p className='text-[14px] leading-[20px] text-[#707A82]'>Lorem ipsum dolor sit amet consectetur adipisicing elit Rem.Lorem ipsum dolor sit amet consectetur adipisicing elit Rem.</p>
     <button className='bg-[#0085DB] text-white pl-4 pr-4 pt-1 pb-1 rounded-[5px] flex justify-start w-[220px]'>Sign Out From All Devices</button>
             
                 
          <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span><HiMiniDevicePhoneMobile size={27} /></span>
            <div>
              <p className="text-[16px] leading-[19px] font-medium">iPhone 14</p>
              <p className="text-[14px] leading-[17px] text-[#707A82]">London UK, Oct 23 at 1:15 AM</p>
            </div>
          </div>

          <span><BsThreeDotsVertical /></span>
          </div>
           <Border width={100} mt={2} />
          <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span><TbDeviceDesktopPin size={27} /></span>
            <div>
              <p className="text-[16px] leading-[19px] font-medium">iPhone 14</p>
              <p className="text-[14px] leading-[17px] text-[#707A82]">London UK, Oct 23 at 1:15 AM</p>
            </div>
          </div>

          <span><BsThreeDotsVertical /></span>
          </div>
          
          <button className='bg-[#E5F3FB] text-[#0085DB] pl-4 pr-4 pt-1 pb-1 rounded-[5px]'>Need Help?</button>

            </div> 
           
            
            
        </div>
         <div className='m-5 flex justify-end items-start gap-3'>
             <button className='text-[16px] bg-[#0085DB] pl-4 pr-4 pt-2 pb-2 rounded-full text-white'>Save</button>
             <button className='text-[16px] bg-[#FFEDE9] pl-4 pr-4 pt-2 pb-2 rounded-full text-[#FB977D]'>Cancel</button>
           </div>
        </div>
  )
}

export default Security
