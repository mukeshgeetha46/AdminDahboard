import React from 'react'
import image1 from '../../assets/chat/product-1-C2bm6yWA.jpg'
import profile from '../../assets/Profile/user-6-DXcW9yFx.jpg'
const ChatBody = () => {
  return (
    <div className='h-[597px] overflow-auto hide-scrollbar'>
  <div className='p-5 flex flex-col gap-10'>
       <div className='flex justify-end items-center'>
        <div className='flex flex-col gap-1'>
            <div className='flex justify-end items-center'>
                <p className='text-[12px] leading-[16px]'>5 hours ago</p>
            </div>
        <p className='text-[14px] leading-[21px] pl-[12px] pt-[8px] pr-[12px] pb-[8px] bg-[#E5F3FB] w-fit rounded-[5px]'>Nug gi fulzu futetu hilawu.</p>
        </div>
       </div>
       <div className='flex justify-end items-center'>
        <div className='flex flex-col gap-1'>
            <div className='flex justify-end items-center'>
                <p className='text-[12px] leading-[16px]'>5 hours ago</p>
            </div>
        <p className='text-[14px] leading-[21px] pl-[12px] pt-[8px] pr-[12px] pb-[8px] bg-[#E5F3FB] w-fit rounded-[5px]'>Nug gi fulzu futetu hilawu.</p>
        </div>
       </div>
       <div className='flex justify-end items-center'>
        <div className='flex flex-col gap-1'>
            <div className='flex justify-end items-center'>
                <p className='text-[12px] leading-[16px]'>5 hours ago</p>
            </div>
        <p className='text-[14px] leading-[21px] pl-[12px] pt-[8px] pr-[12px] pb-[8px] bg-[#E5F3FB] w-fit rounded-[5px]'>Nug gi fulzu futetu hilawu.</p>
        </div>
       </div>
       <div className='flex justify-start items-start gap-4'>
        <img
                              className="w-[40px] h-[40px] rounded-full object-cover"
                              src={profile}
                           
                            />
        <div className='flex flex-col gap-1'>
            <div className='flex justify-start items-center'>
                <p className='text-[12px] leading-[16px]'>
James Johnson,5 hours ago</p>
            </div>
        <p className='text-[14px] leading-[21px] pl-[12px] pt-[8px] pr-[12px] pb-[8px] bg-[#E5F3FB] w-fit rounded-[5px]'>Nug gi fulzu futetu hilawu.</p>
        </div>
       </div>
       <div className='flex justify-start items-start gap-4'>
        <img
                              className="w-[40px] h-[40px] rounded-full object-cover"
                              src={profile}
                           
                            />
        <div className='flex flex-col gap-1'>
            <div className='flex justify-start items-center'>
                <p className='text-[12px] leading-[16px]'>
James Johnson,5 hours ago</p>
            </div>
            <img src={image1} className='w-[220px] rounded-[6px]' alt="" />
        </div>
       </div>
    </div>
    </div>
  )
}

export default ChatBody
