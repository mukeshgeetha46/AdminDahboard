import React from 'react'
import { IoNewspaperOutline } from "react-icons/io5";
import ToggleSwitch from '../../pages/ToggleSwich/Toggleswitch';
import { SiTicktick } from "react-icons/si";
import { WiTime3 } from "react-icons/wi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { CiPause1 } from "react-icons/ci";

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
    
             </div>

            </div> 
           <div className='col-span-9 lg:col-span-3 bg-white shadow rounded-2xl m-0 xl:m-5 p-5 flex flex-col gap-4'>
              <p className='text-[20px] leading-[25px] font-semibold'>Notification Preferences</p>
    
              <p className='text-[14px] leading-[20px] text-[#707A82]'>Select the notificaitons ou would like to receive via email. Please note that you cannot opt out of receving service messages, such as payment, security or legal notifications.</p>
    
             
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
