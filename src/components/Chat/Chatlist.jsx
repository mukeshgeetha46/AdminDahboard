import React, { useState } from 'react'
import profile from '../../assets/Profile/user-2-BtZPKsUg.jpg'
import { GoDotFill } from "react-icons/go";
import HeaderSearch from '../../layouts/MainLayout/Search/HeaderSearch';

const Chatlist = ({chatList,selectedUser,setSelectedUser}) => {

   



  return (
    <div className='pt-5 pb-5'>
                

                <div className='flex items-center gap-3 pl-5 pr-5'>
                <div className='relative w-fit'>
                 <p className='bg-[#4bd08b] rounded-full w-2 h-2 flex justify-center items-center absolute right-0 bottom-2 text-[12px]'></p>
                <img className={`w-[50px] h-[50px] flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition`} src={profile} />
                </div>

                <div>
                    <p className='text-[14px] leading-[17px] font-semibold'>Mike Nielsen</p>
                    <p className='text-[12px] leading-[24px]'>Designer</p>
                </div>
                </div>

                <div className='mt-10 pl-5 pr-5'>
                    <HeaderSearch width='100%' square={true} placeholder={'Search Contact'} />
                </div>

                <div className='filter pl-5 pr-5'>
                  <button className='p-4 text-[14px]'>Recent Chats</button>
                </div>

                <div className="h-[548px] overflow-y-auto hide-scrollbar">
  {chatList.map(user => (
    <div key={user.id} className={`list pt-4 pb-4 ${selectedUser === user.id  ? 'bg-[#e0f0fa]' : ''}`} onClick={()=>setSelectedUser(user.id)}>
      <div className="flex justify-between items-center pl-5 pr-5">
        <div className="flex items-center gap-3">
          <div className="relative w-fit">
            <p className="bg-[#4bd08b] rounded-full w-2 h-2 absolute right-0 bottom-2"></p>
            <img
              className="w-[40px] h-[40px] rounded-full object-cover"
              src={user.profile}
              alt={user.name}
            />
          </div>
          <div>
            <p className="text-[14px] leading-[17px] font-semibold">{user.name}</p>
            <p className="text-[12px] leading-[24px]">{user.role}</p>
          </div>
        </div>
        <div>
          <p className="text-[12px] leading-[16px]">{user.time}</p>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  )
}

export default Chatlist
