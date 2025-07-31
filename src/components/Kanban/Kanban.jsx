import React from 'react'
import { FaPlus } from "react-icons/fa6";
import notes1 from '../../assets/Kanban/task-img1-LwkOVRuW.png'
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsCalendar2Date } from "react-icons/bs";

const Kanban = () => {
  return (
    <div className='bg-white shadow rounded-2xl p-5'>
       <div>
        <p className='text-[16px] leading-[24px] font-semibold'>Kanban Application</p>
       </div>
       <div className='grid grid-cols-1 lg:grid-cols-4 mt-5 gap-5'>
         <div className='col-span-1 bg-[#f0f5f9] rounded-2xl shadow p-4'>
            <div className='Header flex justify-between items-center'>
               <p className='text-[16px] leading-[19px] font-semibold'>Todo</p>
               <p className={`w-9 h-9 flex items-center justify-center rounded-full bg-white cursor-pointer transition text-[12px] text-black`}>
                  <FaPlus />
                   </p>
            </div>

            <div>
              <div className='bg-white rounded-t-2xl shadow mt-5 p-4'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>This is first task</p>
              <span><BsThreeDotsVertical /></span>
             </div>
            </div>
            <img src={notes1} className='w-full' alt="" />
            <div className='bg-white rounded-b-2xl p-4'>
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>1 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#4BD08B] pl-2 pr-2 rounded-[6px] text-white'>Design</span>
             </div>
            </div>
            </div>
            <div>
              <div className='bg-white rounded-2xl shadow mt-5 p-4 flex flex-col gap-3'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>This is first task</p>
              <span><BsThreeDotsVertical /></span>
             </div>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, o eiusmod tempor incid.</p>
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>2 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#F8C076] pl-2 pr-2 rounded-[6px] text-white'>Development</span>
             </div>
            </div>
              <div className='bg-white rounded-2xl shadow mt-5 p-4 flex flex-col gap-10'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>Do some projects on React Native with Flutter</p>
              <span><BsThreeDotsVertical /></span>
             </div>
             
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>4 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#0085DB] pl-2 pr-2 rounded-[6px] text-white'>Mobile</span>
             </div>
            </div>
            
            
            </div>
         </div>
         <div className='col-span-1 bg-[#f0f5f9] rounded-2xl shadow p-4'>
            <div className='Header flex justify-between items-center'>
               <p className='text-[16px] leading-[19px] font-semibold'>Todo</p>
               <p className={`w-9 h-9 flex items-center justify-center rounded-full bg-white cursor-pointer transition text-[12px] text-black`}>
                  <FaPlus />
                   </p>
            </div>

            <div>
              <div className='bg-white rounded-t-2xl shadow mt-5 p-4'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>This is first task</p>
              <span><BsThreeDotsVertical /></span>
             </div>
            </div>
            <img src={notes1} className='w-full' alt="" />
            <div className='bg-white rounded-b-2xl p-4'>
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>1 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#4BD08B] pl-2 pr-2 rounded-[6px] text-white'>Design</span>
             </div>
            </div>
            </div>
            <div>
              <div className='bg-white rounded-2xl shadow mt-5 p-4 flex flex-col gap-3'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>This is first task</p>
              <span><BsThreeDotsVertical /></span>
             </div>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, o eiusmod tempor incid.</p>
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>2 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#F8C076] pl-2 pr-2 rounded-[6px] text-white'>Development</span>
             </div>
            </div>
              <div className='bg-white rounded-2xl shadow mt-5 p-4 flex flex-col gap-10'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>Do some projects on React Native with Flutter</p>
              <span><BsThreeDotsVertical /></span>
             </div>
             
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>4 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#0085DB] pl-2 pr-2 rounded-[6px] text-white'>Mobile</span>
             </div>
            </div>
            
            
            </div>
         </div>
         <div className='col-span-1 bg-[#f0f5f9] rounded-2xl shadow p-4'>
            <div className='Header flex justify-between items-center'>
               <p className='text-[16px] leading-[19px] font-semibold'>Todo</p>
               <p className={`w-9 h-9 flex items-center justify-center rounded-full bg-white cursor-pointer transition text-[12px] text-black`}>
                  <FaPlus />
                   </p>
            </div>

            <div>
              <div className='bg-white rounded-t-2xl shadow mt-5 p-4'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>This is first task</p>
              <span><BsThreeDotsVertical /></span>
             </div>
            </div>
            <img src={notes1} className='w-full' alt="" />
            <div className='bg-white rounded-b-2xl p-4'>
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>1 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#4BD08B] pl-2 pr-2 rounded-[6px] text-white'>Design</span>
             </div>
            </div>
            </div>
            <div>
              <div className='bg-white rounded-2xl shadow mt-5 p-4 flex flex-col gap-3'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>This is first task</p>
              <span><BsThreeDotsVertical /></span>
             </div>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, o eiusmod tempor incid.</p>
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>2 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#F8C076] pl-2 pr-2 rounded-[6px] text-white'>Development</span>
             </div>
            </div>
              <div className='bg-white rounded-2xl shadow mt-5 p-4 flex flex-col gap-10'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>Do some projects on React Native with Flutter</p>
              <span><BsThreeDotsVertical /></span>
             </div>
             
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>4 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#0085DB] pl-2 pr-2 rounded-[6px] text-white'>Mobile</span>
             </div>
            </div>
            
            
            </div>
         </div>
         <div className='col-span-1 bg-[#f0f5f9] rounded-2xl shadow p-4'>
            <div className='Header flex justify-between items-center'>
               <p className='text-[16px] leading-[19px] font-semibold'>Todo</p>
               <p className={`w-9 h-9 flex items-center justify-center rounded-full bg-white cursor-pointer transition text-[12px] text-black`}>
                  <FaPlus />
                   </p>
            </div>

            <div>
              <div className='bg-white rounded-t-2xl shadow mt-5 p-4'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>This is first task</p>
              <span><BsThreeDotsVertical /></span>
             </div>
            </div>
            <img src={notes1} className='w-full' alt="" />
            <div className='bg-white rounded-b-2xl p-4'>
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>1 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#4BD08B] pl-2 pr-2 rounded-[6px] text-white'>Design</span>
             </div>
            </div>
            </div>
            <div>
              <div className='bg-white rounded-2xl shadow mt-5 p-4 flex flex-col gap-3'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>This is first task</p>
              <span><BsThreeDotsVertical /></span>
             </div>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, o eiusmod tempor incid.</p>
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>2 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#F8C076] pl-2 pr-2 rounded-[6px] text-white'>Development</span>
             </div>
            </div>
              <div className='bg-white rounded-2xl shadow mt-5 p-4 flex flex-col gap-10'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>Do some projects on React Native with Flutter</p>
              <span><BsThreeDotsVertical /></span>
             </div>
             
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>4 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#0085DB] pl-2 pr-2 rounded-[6px] text-white'>Mobile</span>
             </div>
            </div>
            
            
            </div>
         </div>
        
       </div>
    </div>
  )
}

export default Kanban
