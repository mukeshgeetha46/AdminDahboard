import React, { useState } from 'react'
import { BsDot } from "react-icons/bs";
import { RiInboxArchiveLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { RiDraftLine } from "react-icons/ri";
import { RiSpam2Line } from "react-icons/ri";
import { GoTrash } from "react-icons/go";
import { TbSettingsStar } from "react-icons/tb";
import { MdOutlineNotificationImportant } from "react-icons/md";

const Composemenu = () => {

     const [selectedMenu,setSelectedMenu] = useState('Inbox');
    
      const menuItems = [
      { label: 'Inbox', icon: <RiInboxArchiveLine size={24} /> },
      { label: 'Sent', icon: <FiSend size={24} /> },
      { label: 'Draft', icon: <RiDraftLine size={24} /> },
      { label: 'Spam', icon: <RiSpam2Line size={24} /> },
      { label: 'Trash', icon: <GoTrash size={24} /> },
    ];
      const menuItems2 = [
      { label: 'Starred', icon: <TbSettingsStar size={24} /> },
      { label: 'Important', icon: <MdOutlineNotificationImportant size={24} /> },
     
    ];
      const menuItems3 = [
      { label: 'Promotional', icon: <TbSettingsStar size={24} /> },
      { label: 'Social', icon: <MdOutlineNotificationImportant size={24} /> },
      { label: 'Health', icon: <MdOutlineNotificationImportant size={24} /> },
     
    ];
    
    const HandlemenuClick = (label) => {
      setSelectedMenu(label)
    }

  return (
    <div>
      <button className='bg-[#0085DB] text-white text-[14px] font-medium w-full pt-2 pb-2 rounded-2xl shadow-[0_4px_10px_rgba(0,133,219,0.4)]'>
  Compose
</button>


     <div className='mt-3'>
        <div className='p-2 flex flex-col text-[#6f6f6f]'>
          {menuItems.map((item, index) => (
        <p
          onClick={()=>HandlemenuClick(item.label)}
          key={index}
          className={`composeMenu flex items-center gap-2 text-[16px] p-3 leading-[24px] ${selectedMenu === item.label ? 'text-[#0087db]' : ''} hover:bg-[#F5F8FB] rounded-[5px]`}
        >
          <span>{item.icon}</span>
          {item.label}
        </p>
      ))}
        </div>
         <div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-[97%]" />

         <div className='flex items-center justify-start mt-3'><p className='text-[12px] leading-[22px] font-semibold'>SORT BY</p></div>

          <div className='p-2 flex flex-col text-[#6f6f6f]'>
          {menuItems2.map((item, index) => (
        <p
          onClick={()=>HandlemenuClick(item.label)}
          key={index}
          className={`composeMenu flex items-center gap-2 text-[16px] p-3 leading-[24px] ${selectedMenu === item.label ? 'text-[#0087db]' : ''} hover:bg-[#F5F8FB] rounded-[5px]`}
        >
          <span>{item.icon}</span>
          {item.label}
        </p>
      ))}
        </div>
         <div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-[97%]" />

         <div className='flex items-center justify-start mt-3'><p className='text-[12px] leading-[22px] font-semibold'>LABELS</p></div>

          <div className='p-2 flex flex-col text-[#6f6f6f]'>
          {menuItems3.map((item, index) => (
        <p
          onClick={()=>HandlemenuClick(item.label)}
          key={index}
          className={`composeMenu flex items-center gap-2 text-[16px] p-3 leading-[24px] ${selectedMenu === item.label ? 'text-[#0087db]' : ''} hover:bg-[#F5F8FB] rounded-[5px]`}
        >
          <span>{item.icon}</span>
          {item.label}
        </p>
      ))}
        </div>
     </div>
    </div>
  )
}

export default Composemenu
