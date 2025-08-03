import React from 'react'
import { IoNewspaperOutline } from "react-icons/io5";
import ToggleSwitch from '../../pages/ToggleSwich/Toggleswitch';
import { SiTicktick } from "react-icons/si";
import { WiTime3 } from "react-icons/wi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { CiPause1 } from "react-icons/ci";


const Notification = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
       <div className='bg-white shadow rounded-2xl w-full  xl:w-[70%] m-0 xl:m-5 p-5 flex flex-col gap-4'>
          <p className='text-[20px] leading-[25px] font-semibold'>Notification Preferences</p>

          <p className='text-[14px] leading-[20px] text-[#707A82]'>Select the notificaitons ou would like to receive via email. Please note that you cannot opt out of receving service messages, such as payment, security or legal notifications.</p>

           <div className='flex flex-col gap-8'>
<div className='flex flex-col justify-center gap-1'>
        <p className='text-[16px] leading-[24px]'>Email Address *</p>
        <input type="text" name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
        <p className='text-[12px] leading-[22px] text-[#707A82]'>Required for notificaitons.</p>
      </div>

      <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <p className='bg-[#E5F3FB] p-5 w-[50px] h-[50px] flex justify-center items-center'><span className="text-[24px]">
       <IoNewspaperOutline />
     </span>
      </p>

      <div className='flex flex-col gap-1'>
        <p className='text-[16px] leading-[19px] font-medium'>Our newsletter</p>
        <p className='text-[14px] leading-[17px] font-medium w-[70%] xl:w-[100%]'>We will always let you know about important changes</p>
      </div>
      </div>

       <ToggleSwitch />
      </div>
      <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <p className='bg-[#E5F3FB] p-5 w-[50px] h-[50px] flex justify-center items-center'><span className="text-[24px]">
       <SiTicktick />
     </span>
      </p>

      <div className='flex flex-col gap-1'>
        <p className='text-[16px] leading-[19px] font-medium'>Order Confirmation</p>
        <p className='text-[14px] leading-[17px] font-medium w-[70%] xl:w-[100%]'>You will be notified when customer order any product</p>
      </div>
      </div>

       <ToggleSwitch />
      </div>
      <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <p className='bg-[#E5F3FB] p-5 w-[50px] h-[50px] flex justify-center items-center'><span className="text-[24px]">
       <WiTime3 />
     </span>
      </p>

      <div className='flex flex-col gap-1'>
        <p className='text-[16px] leading-[19px] font-medium'>Order Status Changed</p>
        <p className='text-[14px] leading-[17px] font-medium w-[70%] xl:w-[100%]'>You will be notified when customer make changes to the order</p>
      </div>
      </div>

       <ToggleSwitch />
      </div>
      <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <p className='bg-[#E5F3FB] p-5 w-[50px] h-[50px] flex justify-center items-center'><span className="text-[24px]">
       <TbTruckDelivery />
     </span>
      </p>

      <div className='flex flex-col gap-1'>
        <p className='text-[16px] leading-[19px] font-medium'>Order Delivered</p>
        <p className='text-[14px] leading-[17px] font-medium w-[70%] xl:w-[100%]'>You will be notified once the order is delivered</p>
      </div>
      </div>

       <ToggleSwitch />
      </div>
      <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <p className='bg-[#E5F3FB] p-5 w-[50px] h-[50px] flex justify-center items-center'><span className="text-[24px]">
       <MdOutlineEmail />
     </span>
      </p>

      <div className='flex flex-col gap-1'>
        <p className='text-[16px] leading-[19px] font-medium'>Email Notification</p>
        <p className='text-[14px] leading-[17px] font-medium w-[70%] xl:w-[100%]'>Turn on email notificaiton to get updates through email</p>
      </div>
      </div>

       <ToggleSwitch />
      </div>
           </div>
        </div> 
       
<div className='bg-white shadow rounded-2xl w-full  xl:w-[70%] m-0 xl:m-5 p-5 flex flex-col gap-4'>
          <p className='text-[20px] leading-[25px] font-semibold'>Date & Time</p>

          <p className='text-[14px] leading-[20px] text-[#707A82]'>Time zones and calendar display settings.</p>

           <div className='flex flex-col gap-8'>


      <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <p className='bg-[#E5F3FB] p-5 w-[50px] h-[50px] flex justify-center items-center'><span className="text-[24px]">
       <FaRegClock />
     </span>
      </p>

      <div className='flex flex-col gap-1'>
        <p className='text-[16px] leading-[19px] font-medium'>Time zone</p>
        <p className='text-[14px] leading-[17px] font-medium w-[70%] xl:w-[100%]'>(UTC + 02:00) Athens, Bucharet</p>
      </div>
      </div>

       <ToggleSwitch />
      </div>
      
           </div>
        </div> 
<div className='bg-white shadow rounded-2xl w-full  xl:w-[70%] m-0 xl:m-5 p-5 flex flex-col gap-4'>
          <p className='text-[20px] leading-[25px] font-semibold'>Ignore Tracking</p>
           <div className='flex flex-col gap-8'>


      <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <p className='bg-[#E5F3FB] p-5 w-[50px] h-[50px] flex justify-center items-center'><span className="text-[24px]">
       <CiPause1 />
     </span>
      </p>

      <div className='flex flex-col gap-1'>
        <p className='text-[16px] leading-[19px] font-medium'>Ignore Browser Tracking</p>
        <p className='text-[14px] leading-[17px] font-medium w-[70%] xl:w-[100%]'>Browser Cookie</p>
      </div>
      </div>

       <ToggleSwitch />
      </div>
      
           </div>
        </div> 
        
    </div>
     <div className='m-5 flex justify-end items-start gap-3'>
         <button className='text-[16px] bg-[#0085DB] pl-4 pr-4 pt-2 pb-2 rounded-full text-white'>Save</button>
         <button className='text-[16px] bg-[#FFEDE9] pl-4 pr-4 pt-2 pb-2 rounded-full text-[#FB977D]'>Cancel</button>
       </div>
    </div>
  )
}

export default Notification
