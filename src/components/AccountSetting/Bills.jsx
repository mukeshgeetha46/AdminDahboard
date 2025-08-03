import React from 'react'
import { LiaCcVisa } from "react-icons/lia";
import { IoAddCircleOutline } from "react-icons/io5";
import { PiCubeBold } from "react-icons/pi";
import { AiFillEdit } from "react-icons/ai";

import MultipleSelect from '../../utils/SelectInput';
const Bills = () => {
  return (
    <div>
         <div className='flex flex-col justify-center items-center'>
          <div className='bg-white shadow rounded-2xl w-full  xl:w-[70%] m-0 xl:m-5 p-5 flex flex-col gap-4'>
             <div className='col-span-4 mt-5 rounded-2xl shadow-lg p-6'>
                           <div>
                             <p className='text-[18px] leading-[25px] font-semibold'>Billing Information</p>
                          </div>
             
                          <div className='grid grid-cols-4 gap-4'>
                             <div className='col-span-4 lg:col-span-2'>
                               <div className=' flex flex-col justify-center gap-1 mt-4'>
                     <p className='text-[14px] leading-[19px] font-medium'>Business Name*</p>
                     <input type="text" value={`Mike Nielsen`} name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
                   </div>
                             </div>
                             <div className='col-span-4 lg:col-span-2'>
                               <div className=' flex flex-col justify-center gap-1 mt-4'>
                     <p className='text-[14px] leading-[19px] font-medium'>Business Sector*</p>
                     <input type="text" value={`Maxima Studio`} name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
                   </div>
                             </div>
                             <div className='col-span-4 lg:col-span-2'>
                               <div className=' flex flex-col justify-center gap-1 mt-4'>
                     <p className='text-[14px] leading-[19px] font-medium'>Business Address*</p>
                     <input type="text" value={`+91 12345 65478`} name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
                   </div>
                             </div> <div className='col-span-4 lg:col-span-2'>
                               <div className=' flex flex-col justify-center gap-1 mt-4'>
                     <p className='text-[14px] leading-[19px] font-medium'>Country*</p>
                     <input type="text" value={`+91 12345 65478`} name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
                   </div>
                             </div>
                             <div className='col-span-4 lg:col-span-2'>
                               <div className=' flex flex-col justify-center gap-1 mt-4'>
                     <p className='text-[14px] leading-[19px] font-medium'>First Name*</p>
                     <input type="text" value={`info@Spike.com`} name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
                   </div>
                             </div>
                             <div className='col-span-4 lg:col-span-2'>
                               <div className=' flex flex-col justify-center gap-1 mt-4'>
                     <p className='text-[14px] leading-[19px] font-medium'>
Last Name*</p>
                     <input type="text" value={`+91 12345 65478`} name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
                   </div>
                             </div>
                           
                          </div>
                       </div>
           </div> 
          
   <div className='bg-white shadow rounded-2xl w-full  xl:w-[70%] m-0 xl:m-5 p-5 flex flex-col gap-3'>
             <p className='text-[20px] leading-[25px] font-semibold'>Current Plan : <span className='text-[#4BD08B]'>Executive</span></p>
   
             <p className='text-[14px] leading-[20px] text-[#707A82]'>Thanks for being a premium member and supporting our development.</p>
   
              <div className='flex flex-col gap-5'>
   
   
         <div className='flex justify-between items-center'>
         <div className='flex items-center gap-2'>
           <p className='bg-[#E5F3FB] p-5 w-[50px] h-[50px] flex justify-center items-center'><span className="text-[24px]">
          <PiCubeBold />
        </span>
         </p>
   
         <div className='flex flex-col gap-1'>
           <p className='text-[16px] leading-[19px] font-medium text-[#707A82]'>Current Plan</p>
           <p className='text-[14px] leading-[17px] font-medium w-[70%] xl:w-[100%]'>750.000 Monthly Visits</p>
         </div>
         </div>
   
          <IoAddCircleOutline size={25} />
         </div>
            <div className='flex items-center justify-start gap-3'>
                <button className='text-[14px] bg-[#0085DB] text-white rounded-full pl-5 pr-5 pt-2 pb-2'>Change Plan</button>
                <button className='text-[14px] rounded-full pl-5 pr-5 pt-2 pb-2 text-[#FB977D] border border-[#FB977D]'>Reset Plan</button>
               </div>

              </div>
           </div> 
   <div className='bg-white shadow rounded-2xl w-full  xl:w-[70%] m-0 xl:m-5 p-5 flex flex-col gap-3'>
             <p className='text-[20px] leading-[25px] font-semibold'>Payment Method</p>
   
             <p className='text-[14px] leading-[20px] text-[#707A82]'>On 26 December, 2023</p>
   
              <div className='flex flex-col gap-3'>
   
   
         <div className='flex justify-between items-center'>
         <div className='flex items-center gap-2'>
           <p className='bg-[#E5F3FB] p-5 w-[50px] h-[50px] flex justify-center items-center'><span className="text-[24px]">
          <LiaCcVisa />
        </span>
         </p>
   
         <div className='flex flex-col gap-1'>
           <p className='text-[16px] leading-[19px] font-medium text-[#707A82]'>Visa</p>
           <p className='text-[14px] leading-[17px] font-medium w-[70%] xl:w-[100%]'>***********1666363</p>
         </div>
         </div>
   
          <AiFillEdit size={25} />
         </div>
          <p className='text-[14px] leading-[20px] text-[#707A82]'>If you updated your payment method, it will only be dislpayed here after your next billing cycle.</p>
            <div className='flex items-center justify-start gap-3'>
                <button className='text-[14px] rounded-full pl-5 pr-5 pt-2 pb-2 text-[#FB977D] border border-[#FB977D]'>Cancel Subcription</button>
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

export default Bills
