import React from 'react'
import profile from '../../assets/Profile/profilebg-2-D09dvhko.jpg'
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineVideoCall } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import useWindowSize from '../../utils/useWindowSize';

import { FaArrowLeft } from "react-icons/fa";

const ChatHeader = ({setOpensidebar,opensidebar,setSelectedUser}) => {
   const { isMobile } = useWindowSize();
  
  return (
    <div>
      <div className='flex justify-between items-center'>
         <div className="flex items-center gap-3">
                   <span onClick={()=>setSelectedUser(0)} className='block xl:hidden'><FaArrowLeft /></span>

                  <div className="relative w-fit">
                    <p className="bg-[#4bd08b] rounded-full w-2 h-2 absolute right-0 bottom-2"></p>
                    <img
                      className="w-[40px] h-[40px] rounded-full object-cover"
                      src={profile}
                   
                    />
                  </div>
                  <div>
                    <p className="text-[18px] leading-[25px] font-semibold">Loren Rodriguez</p>
                    <p className="text-[12px] leading-[19px]">online</p>
                  </div>
                </div>

                <div className='flex items-center gap-5'>
                    <span><FiPhoneCall color='#000000' size={22}  /></span>
                    <span><MdOutlineVideoCall color='#000000' size={22} /></span>
                    <span onClick={()=>setOpensidebar(!opensidebar)}><FiMenu color='#000000' size={22} /></span>
                </div>
      </div>
    </div>
  )
}

export default ChatHeader
