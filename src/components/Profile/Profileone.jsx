import React from 'react'
import profilebanner from '../../assets/Profile/profilebg-2-D09dvhko.jpg'
import profile from '../../assets/Main/user1-D00qJYN4.jpg'
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiTeamFill } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { ImConnection } from "react-icons/im";
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineSkype } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { IoLanguageSharp } from "react-icons/io5";


const Profileone = () => {
  return (
   <>
    <div>
       <div className=''>
          <div className='relative flex justify-center items-end'>
            <img src={profilebanner} className='w-full' alt="" srcset="" />
          <div className=' absolute bg-white rounded-2xl shadow w-[96%] pl-5 pt-5 pr-5 top-[90%]'>
        

            <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0'>  
                    <div className='flex flex-col lg:flex-row items-center gap-3'>
             <div className='relative'>
               <img className="w-25 h-25 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition" src={profile} />
              <p className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 cursor-pointer transition text-[12px] text-white absolute top-[70%] right-0">
             <FaPlus />
             </p>
             </div>
              <div className='flex flex-col items-center lg:items-start gap-2'>
                <p className='text-[24px] leading-[32px] font-semibold'>Mike Nielsen</p>
                <p className='text-[16px] leading-[19.2px] font-medium text-[#87abce]'>Dream big. Think different. Do great!</p>
                <p className='flex items-center gap-1'><span><GoDotFill color='#51d28f' /></span>Active</p>
              </div>
            </div>

            <button className='pl-4 pr-4 pt-3 pb-3 bg-[#0085db] rounded-[5px]'>Edit Profile</button>
            </div>
            
            <div className='tab mt-5 flex justify-around lg:justify-start items-center gap-4 text-[#707a82]'> 
             <div className='flex justify-center items-center gap-2 border-b p-2  text-[16px]'>
              <span><CgProfile   /></span> <p className='hidden lg:block'> My Profile</p>
             </div>
             <div className='flex justify-center items-center gap-2 border-b p-2  text-[16px]'>
              <span><RiTeamFill   /></span> <p className='hidden lg:block'> My Profile</p>
             </div>
             <div className='flex justify-center items-center gap-2 border-b p-2  text-[16px]'>
              <span><GrProjects   /></span> <p className='hidden lg:block'> My Profile</p>
             </div>
             <div className='flex justify-center items-center gap-2 border-b p-2  text-[16px]'>
              <span><ImConnection   /></span> <p className='hidden lg:block'> My Profile</p>
             </div>
             
            </div>
          </div>
          </div>

       
       </div>

         
    </div>






   <div className='flex justify-center items-center'>
   <div className='grid grid-cols-3 gap-5 mt-80 lg:mt-33 w-[96%]'>
       <div className='col-span-3 lg:col-span-1 mt-10'>
    <div className='col-span-3 lg:col-span-1'>
      <div className="flex flex-col gap-4">
        <div className="bg-white rounded-2xl shadow h-auto p-5">
         <div className='flex flex-col gap-4'>
           <p className='text-[18px] leading-[25px] font-semibold'>About me</p>
          <p className='text-[14px] leading-[21px]'>Hello, I’m Mike Nielsen. I’m a professional who designs, develops, tests, and maintains software applications and systems.</p>
          
         </div>

<div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-[97%] mt-6" />
           
         <div className='mt-5'>
           <p className='text-[18px] leading-[25px] font-semibold'>Contact</p>

           <div className='mt-5 flex flex-col gap-4'>
             <div className='flex items-center gap-2'>
              <p className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ffede9] cursor-pointer transition">
                    <IoCallOutline size={20} color='#fca994' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[14px] leading-[17px]'>Call</p>
                      <p className='text-[14px] leading-[17px]'>(123) 456-7890</p>
                    </div>
           </div>
             <div className='flex items-center gap-2'>
              <p className="w-10 h-10 flex items-center justify-center rounded-full bg-[#dffff3] cursor-pointer transition">
                    <MdOutlineEmail size={20} color='#70dca5' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[14px] leading-[17px]'>Email</p>
                      <p className='text-[14px] leading-[17px]'>jonathan@spike.com</p>
                    </div>
           </div>
             <div className='flex items-center gap-2'>
              <p className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e5f3fb] cursor-pointer transition">
                    <AiOutlineSkype size={20} color='#0085db' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[14px] leading-[17px]'>Skype</p>
                      <p className='text-[14px] leading-[17px]'>jonathan.doe</p>
                    </div>
           </div>
           </div>

           <div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-[97%] mt-6 mb-4" />

           <p className='text-[18px] leading-[25px] font-semibold'>Other</p>

           <div className='mt-5 flex flex-col gap-4'>
             <div className='flex items-center gap-2'>
              <p className="w-10 h-10 flex items-center justify-center rounded-full bg-[#feefdb] cursor-pointer transition">
                    <IoLocationOutline size={20} color='#F8C076' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[14px] leading-[17px]'>Location</p>
                      <p className='text-[14px] leading-[17px]'>Newyork, USA - 100001</p>
                    </div>
           </div>
             <div className='flex items-center gap-2'>
              <p className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DFFFF3] cursor-pointer transition">
                    <IoSchoolOutline size={20} color='#4BD08B' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[14px] leading-[17px]'>Education</p>
                      <p className='text-[14px] leading-[17px]'>Saint Josef Institute of Science</p>
                    </div>
           </div>
             <div className='flex items-center gap-2'>
              <p className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F1EBFF] cursor-pointer transition">
                    <IoLanguageSharp size={20} color='#8763DA' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[14px] leading-[17px]'>Language</p>
                      <p className='text-[14px] leading-[17px]'>English</p>
                    </div>
           </div>
           </div>

         </div>

        </div>
    
        <div className="bg-white rounded-2xl shadow h-auto p-5">
        
           
         <div className='mt-5'>
           <p className='text-[18px] leading-[25px] font-semibold'>Teams</p>

           <div className='mt-5 flex flex-col gap-4'>
             <div className='flex items-center gap-2'>
              <p className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ffede9] cursor-pointer transition">
                    <IoCallOutline size={20} color='#fca994' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[14px] leading-[17px]'>Call</p>
                      <p className='text-[14px] leading-[17px]'>(123) 456-7890</p>
                    </div>
           </div>
             <div className='flex items-center gap-2'>
              <p className="w-10 h-10 flex items-center justify-center rounded-full bg-[#dffff3] cursor-pointer transition">
                    <MdOutlineEmail size={20} color='#70dca5' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[14px] leading-[17px]'>Email</p>
                      <p className='text-[14px] leading-[17px]'>jonathan@spike.com</p>
                    </div>
           </div>
             
           </div>

           

         </div>

        </div>
        <div className="bg-white rounded-2xl shadow">
         6
        </div>
    
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col gap-3">
          7
        </div>
      </div>
    </div>
    
               </div>
    
               <div className='col-span-3 lg:col-span-2 '>
    <div className="grid grid-rows-3 gap-3">
      <div className="row-span-3 bg-white rounded-2xl shadow h-[520px] mt-10">
    
       1
      </div>
      <div className="row-span-1 Media bg-white rounded-2xl shadow">
         2
      </div>
      <div className="row-span-1 bg-white rounded-2xl shadow">
       3
      </div>
    
    
          </div>
               </div>
              
               
            </div>
   </div>







   </>
  )
}

export default Profileone
