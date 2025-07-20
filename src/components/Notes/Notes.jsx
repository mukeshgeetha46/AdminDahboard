import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { IoIosSearch } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";


const Notes = () => {

    const notes = [
  {
    bgColor: '#FFEDE9',
    textColor: '#FB977D',
    text: 'Lorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, cons',
    date: '6/4/2023',
  },
  {
    bgColor: '#FFF6EA',
    textColor: '#F8C076',
    text: 'Lorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, cons',
    date: '6/4/2023',
  },
  {
    bgColor: '#DFFFF3',
    textColor: '#4BD08B',
    text: 'Lorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, cons',
    date: '6/4/2023',
  },
  {
    bgColor: '#E5F3FB',
    textColor: '#0085DB',
    text: 'Lorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, cons',
    date: '6/4/2023',
  },
];


  return (
     <div className='grid grid-cols-3'>
           <div className='col-span-3 lg:col-span-1 mt-10 bg-white shadow p-6 border-r border-[#e5eaef]'>
             <p className='text-[16px] leading-[19.2px] font-semibold pb-4'>All Notes</p>
             <div className='relative flex justify-center items-center'>
  <input
    type="text"
    placeholder='Search Notes'
    className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db] pr-10'
  />
  <span className='absolute right-3 top-1/2 -translate-y-1/2 flex justify-center items-center'>
    <IoIosSearch size={25} />
  </span>
             </div>

        <div className='grid grid-cols-1 mt-4 gap-3'>
        {notes.map((note, index) => (
  <div
    key={index}
    className={`col-span-1 p-6 rounded-2xl`}
    style={{ backgroundColor: note.bgColor }}
  >
    <p
      className="text-[16px] leading-[19px] truncate"
      style={{ color: note.textColor }}
    >
      {note.text}
    </p>

    <div className="flex justify-between items-center pt-4">
      <p className="text-[14px] leading-[16px]">{note.date}</p>
      <span>
        <IoTrashOutline size={20} />
      </span>
    </div>
  </div>
))}

        </div>

                   </div>
        
                   <div className='col-span-3 lg:col-span-2 '>
        <div className="grid grid-rows-3 gap-3">
          <div className="row-span-3 mt-10 bg-white shadow h-[600px]">
          <div className='flex justify-between items-center border-b border-[#e5eaef] pl-6 pt-3 pr-6 pb-3'>
            <p className='text-[16px] leading-[19.2px] font-semibold'>Edit Notes</p>
            <button className='text-[14px] px-[16px] py-[9px] bg-[#0085DB] rounded-3xl text-white'>Add Notes</button>
          </div>
          <p className='pl-6 pt-4 pr-6 pb-3 text-[16px] leading-[24px] font-medium'>Change Title</p>
          <div className='pl-6 pt-3 pr-6 pb-3'>
            <textarea className='border w-full h-[140px] focus:outline-none focus:border-blue-500 rounded-[6px] p-2' placeholder='Share your thougths' value={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}></textarea>
          </div>

          <div>
             <p className='pl-6 pt-4 pr-6 pb-3 text-[16px] leading-[24px] font-medium'>Change Notes Color</p>
             <div className='flex items-center gap-2 pl-6'>
                 <p className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F8C076] cursor-pointer transition text-[12px] text-white"></p>
                 <p className="w-9 h-9 flex items-center justify-center rounded-full bg-[#707A82] cursor-pointer transition text-[12px] text-white"></p>
                 <p className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FB977D] cursor-pointer transition text-[12px] text-white"></p>
                 <p className="w-9 h-9 flex items-center justify-center rounded-full bg-[#4BD08B] cursor-pointer transition text-[12px] text-white"></p>
                 <p className="w-9 h-9 flex items-center justify-center rounded-full bg-[#0085DB] cursor-pointer transition text-[12px] text-white"></p>
             </div>
          </div>
          </div>
          
         
        
              </div>
                   </div>
                  
                   
                </div>
  )
}

export default Notes
