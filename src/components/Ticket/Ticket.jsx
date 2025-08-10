import React from 'react'
import BreadCrums from '../../pages/HeaderMenu/HeaderMenu'
import profile from '../../assets/Profile/user-10-BtaXUAQO.jpg'
import { MdOutlineEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import HeaderSearch from '../../layouts/MainLayout/Search/HeaderSearch';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

const Ticket = () => {

    const ticketCards = [
  {
    bg: '#E5F3FB',
    color: '#0085DB',
    count: 8,
    label: 'Total Tickets',
  },
  {
    bg: '#FFF6EA',
    color: '#F8C076',
    count: 2,
    label: 'Pending Tickets',
  },
  {
    bg: '#DFFFF3',
    color: '#4BD08B',
    count: 2,
    label: 'Open Tickets',
  },
  {
    bg: '#FFEDE9',
    color: '#FB977D',
    count: 4,
    label: 'Closed Tickets',
  },
];



  const tickets = [
  {
    id: 1,
    ticket: "User cannot log in due to password reset issues.",
    assign_to: "Steve",
    status: "Pending",
    date: "Sun, Sep 27",
    profileImg: profile
  },
  {
    id: 2,
    ticket: "Website crashes when clicking the checkout button.",
    assign_to: "Anna",
    status: "Resolved",
    date: "Mon, Sep 28",
    profileImg: profile
  },
  {
    id: 3,
    ticket: "Feature request: Add dark mode to dashboard.",
    assign_to: "John",
    status: "In Progress",
    date: "Tue, Sep 29",
    profileImg: profile
  },
  {
    id: 4,
    ticket: "Bug found in the report generation module.",
    assign_to: "Sophia",
    status: "Pending",
    date: "Wed, Sep 30",
    profileImg: profile
  },
  {
    id: 5,
    ticket: "Database backup failed over the weekend.",
    assign_to: "Liam",
    status: "Resolved",
    date: "Thu, Oct 01",
    profileImg: profile
  },
  {
    id: 6,
    ticket: "Users are not receiving verification emails.",
    assign_to: "Olivia",
    status: "Pending",
    date: "Fri, Oct 02",
    profileImg: profile
  },
  {
    id: 7,
    ticket: "Add analytics support for usage tracking.",
    assign_to: "Noah",
    status: "In Progress",
    date: "Sat, Oct 03",
    profileImg: profile
  },
  {
    id: 8,
    ticket: "UI misalignment on mobile devices.",
    assign_to: "Emma",
    status: "Closed",
    date: "Sun, Oct 04",
    profileImg: profile
  },
  {
    id: 9,
    ticket: "Client reporting a slow load time.",
    assign_to: "Lucas",
    status: "Resolved",
    date: "Mon, Oct 05",
    profileImg: profile
  },
  {
    id: 10,
    ticket: "Text overlap issue in the sidebar menu.",
    assign_to: "Mia",
    status: "Pending",
    date: "Tue, Oct 06",
    profileImg: profile
  },
];


const getStatusStyles = (status) => {
  switch (status) {
    case "Pending":
      return "text-[#F8C076] bg-[#FEF7EE]";
    case "Resolved":
      return "text-[#4BD08B] bg-[#DFFFF3]";
    case "In Progress":
      return "text-[#0085DB] bg-[#E5F3FB]";
    case "Closed":
      return "text-[#FB977D] bg-[#FFEDE9]";
    default:
      return "text-gray-500 bg-gray-100";
  }
};


  return (
    <div>
         <BreadCrums title={`Tickets App`} Breadcrums1={`Dashboard`} Breadcrums2={`Tickets App`} />
         <div className='bg-white rounded-2xl shadow p-5 mt-5'>
          <div className="grid grid-cols-4 gap-4">
  {ticketCards.map((card, index) => (
    <div
      key={index}
      className={`col-span-4 xl:col-span-1 rounded-[10px] p-8 flex justify-center items-center`}
      style={{ backgroundColor: card.bg }}
    >
      <div className="flex flex-col justify-center items-center">
        <p className="text-[24px] leading-[34px] font-bold" style={{ color: card.color }}>
          {card.count}
        </p>
        <p
          className="text-[16px] leading-[19px] font-medium"
          style={{ color: card.color }}
        >
          {card.label}
        </p>
      </div>
    </div>
  ))}
</div>
  <div className='flex justify-between items-center mt-5'>
            <button className='bg-[#0085DB] rounded-full text-white pl-4 pt-2 pr-4 pb-2 flex justify-center items-center gap-2'>
              <span><AiOutlineUsergroupAdd size={22} /></span> 
              Add Teachers
            </button>
            <HeaderSearch square={true} placeholder={'Search Teachers'} />
        </div>
<div className='mt-10 overflow-x-auto'>
  <table className='w-full min-w-[800px] table-fixed'>
    <thead>
      <tr className='border-b border-[#dfe5ef]'>
        <th className='text-left text-[14px] leading-[17px] font-semibold pb-3 w-[80px]'>Id</th>
        <th className='text-left text-[14px] leading-[17px] font-semibold pb-3 w-[300px]'>Ticket</th>
        <th className='text-left text-[14px] leading-[17px] font-semibold pb-3 pl-5 w-[220px]'>Assigned To</th>
        <th className='text-left text-[14px] leading-[17px] font-semibold pb-3 w-[120px]'>Status</th>
        <th className='text-left text-[14px] leading-[17px] font-semibold pb-3 w-[120px]'>Date</th>
        <th className='text-left text-[14px] leading-[17px] font-semibold pb-3 w-[80px]'>Action</th>
      </tr>
    </thead>
    <tbody>
      {tickets.map((ticket) => (
        <tr key={ticket.id} className='border-b border-[#dfe5ef] hover:bg-gray-50'>
          <td className='p-2 w-[80px]'>
            <p className='text-[14px] leading-[17px] truncate'>{ticket.id}</p>
          </td>
          <td className='p-2 w-[300px]'>
            <p className='text-[16px] leading-[19px] font-medium line-clamp-2'>{ticket.ticket}</p>
          </td>
          <td className='p-2 w-[220px] pl-5'>
            <div className='flex items-center gap-3'>
              <img 
                className='w-10 h-10 rounded-full object-cover' 
                src={ticket.profileImg} 
                alt='profile'
              />
              <p className='text-[16px] leading-[19px] font-medium'>{ticket.assign_to}</p>
            </div>
          </td>
          <td className='p-2 w-[120px]'>
           <p
  className={`text-[14px] leading-[17px] rounded-full pl-3 pt-1 pr-3 pb-1 w-fit ${getStatusStyles(ticket.status)}`}
>
  {ticket.status}
</p>

          </td>
          <td className='p-2 w-[120px]'>
            <p className='text-[14px] leading-[17px] truncate'>{ticket.date}</p>
          </td>
          <td className='p-2 w-[80px]'>
            <div className='flex items-center gap-3'>
             <button className='w-9 h-9 rounded-full flex items-center justify-center bg-[#FFEDE9] shadow-md transition'>
  <IoTrashOutline size={18} color='#FB977D' />
</button>

            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


         </div>
    </div>
  )
}

export default Ticket
