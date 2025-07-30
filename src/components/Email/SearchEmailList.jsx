import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { FaInfo, FaRegStar } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GoTrash } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { getTagColor } from '../../utils/GetTagColors';

const SearchEmailList = ({setOpen,setOpenedMail,setDrawerAncher}) => {


    const [clickedMail,setClickedMail] = useState(1);

    const emails = [
  {
    id: 1,
    sender: "James Smith",
    subject: "Kindly check this latest update",
    date: "Sat, Jul 26",
    tag: "Promotional",
  },
  {
    id: 2,
    sender: "Maria Johnson",
    subject: "Invoice for July 2025",
    date: "Fri, Jul 25",
    tag: "Finance",
  },
  {
    id: 3,
    sender: "Support Team",
    subject: "Your ticket has been resolved",
    date: "Thu, Jul 24",
    tag: "Support",
  },
  {
    id: 4,
    sender: "HR Department",
    subject: "Upcoming holiday reminder",
    date: "Wed, Jul 23",
    tag: "HR",
  },
  {
    id: 5,
    sender: "Google Alerts",
    subject: "Your daily search digest",
    date: "Tue, Jul 22",
    tag: "Updates",
  },
  {
    id: 6,
    sender: "Amazon",
    subject: "Your order has been shipped",
    date: "Mon, Jul 21",
    tag: "Ecommerce",
  },
  {
    id: 7,
    sender: "LinkedIn",
    subject: "New jobs that match your profile",
    date: "Sun, Jul 20",
    tag: "Career",
  },
  {
    id: 8,
    sender: "GitHub",
    subject: "New pull request in your repository",
    date: "Sat, Jul 19",
    tag: "Development",
  },
  {
    id: 9,
    sender: "Netflix",
    subject: "Your subscription has been renewed",
    date: "Fri, Jul 18",
    tag: "Entertainment",
  },
  {
    id: 10,
    sender: "Zoom",
    subject: "Meeting scheduled for tomorrow",
    date: "Thu, Jul 17",
    tag: "Work",
  },
  {
    id: 11,
    sender: "Twitter",
    subject: "New login to your account",
    date: "Wed, Jul 16",
    tag: "Security",
  },
  {
    id: 12,
    sender: "Spotify",
    subject: "Your Weekly Playlist is here",
    date: "Tue, Jul 15",
    tag: "Music",
  },
  {
    id: 13,
    sender: "Flipkart",
    subject: "Mega sale starts now!",
    date: "Mon, Jul 14",
    tag: "Promotional",
  },
  {
    id: 14,
    sender: "Facebook",
    subject: "You have new friend suggestions",
    date: "Sun, Jul 13",
    tag: "Social",
  },
  {
    id: 15,
    sender: "Apple",
    subject: "Your Apple ID was used to sign in",
    date: "Sat, Jul 12",
    tag: "Security",
  },
];




const Handlemail = (id) => {
  setDrawerAncher('right')
  setOpen(true)
  setOpenedMail(id)
    setClickedMail(id)
}
  return (
    <div className=''>
        <div className='block lg:hidden pl-4 pr-4 pt-4'>
            <button className='bg-[#0085DB] w-full pt-2 pb-2 text-white rounded-[6px]' onClick={()=>setOpen(true)}>
          Email Category  
        </button>
        </div>
      <div className='relative flex justify-center items-center pl-4 pr-4 pb-4 pt-4'>
        <input
          type="text"
          placeholder='Search Notes'
          className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db] pr-7'
        />
        <span className='absolute right-3 top-1/2 -translate-y-1/2 flex justify-center items-center'>
          <IoIosSearch size={25} />
        </span>
     </div>
     <div className='h-[630px] overflow-auto thin-scrollbar'>
{emails.map((email) => (
        <div key={email.id} className={`flex gap-1 w-full pt-2 pr-2 pb-2 ${clickedMail === email.id ? 'bg-[#f5f8fb]' : ''}`} onClick={()=>Handlemail(email.id)}>
          <div className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition">
            <input type="checkbox" className="w-3 h-3 scale-150" />
          </div>

          <div className="w-full mt-3 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[16px] leading-[24px] font-semibold text-[#0085DB]">
                  {email.sender}
                </p>
              </div>
              <div>
                <span className={`rounded-2xl pl-3 pt-0.5 pr-3 pb-0.5 text-[14px] leading-[22px] ${getTagColor(email.tag)}`}>
  {email.tag}
</span>

              </div>
            </div>

            <div className="flex justify-start items-center">
              <p className="text-[14px] leading-[24px]">{email.subject}</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaStar color="#F8C076" />
                <IoMdInformationCircleOutline />
                <GoTrash />
              </div>
              <p className="text-[16px] leading-[24px]">{email.date}</p>
            </div>
          </div>
        </div>
      ))}
     </div>
    
    </div>
  )
}

export default SearchEmailList
