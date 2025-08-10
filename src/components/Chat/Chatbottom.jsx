import React from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { IoImageOutline } from "react-icons/io5";
import { GoPaperclip } from "react-icons/go";

const Chatbottom = () => {
  return (
    <div>
     <div className='flex justify-between items-center'>
          <div className='flex items-center gap-5'>
         <span><MdOutlineEmojiEmotions size={25} /></span>
        <input
  type="text"
  placeholder="Type a Message..."
  className="border-none outline-none focus:ring-0 focus:border-none"
/>

       </div>
         <div className='flex items-center gap-5'>
                           <span><FiSend color='#000000' size={22}  /></span>
                           <span><IoImageOutline color='#000000' size={22} /></span>
                           <span><GoPaperclip color='#000000' size={22} /></span>
                       </div>
     </div>
    </div>
  )
}

export default Chatbottom
