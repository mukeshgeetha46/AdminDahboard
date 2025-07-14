import React from 'react'
import profilebanner from '../../assets/Profile/profilebg-2-D09dvhko.jpg'
import profile from '../../assets/Main/user1-D00qJYN4.jpg'
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";

const Profileone = () => {
  return (
    <div>
       <div className='relative flex justify-center items-end'>
          <img src={profilebanner} className='w-full' alt="" srcset="" />
          <div className=' absolute bg-white rounded-2xl shadow w-[96%] p-5 top-[90%] flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0'>
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
       </div>
    </div>
  )
}

export default Profileone
