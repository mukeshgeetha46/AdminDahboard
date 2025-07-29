import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { GoTrash } from 'react-icons/go'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import Profile from '../../pages/Profile/Profile'
import user from '../../assets/Profile/user-2-BtZPKsUg.jpg'
import attach1 from '../../assets/Email/download (1).svg'
import attach2 from '../../assets/Email/download (2).svg'
import attach3 from '../../assets/Email/download.svg'
import { GoReply } from "react-icons/go";
import { LuForward } from "react-icons/lu";

const MailBody = () => {
  return (
    <div className='p-5'>
      <div>
        <div className="flex items-center gap-7">
                        <FaStar color="#F8C076" />
                        <IoMdInformationCircleOutline />
                        <GoTrash />
        </div>
      </div>
      
      <div className='flex justify-between items-center'>
         <div className='profiletag mt-10 flex items-center gap-3'>
          <Profile wh={13} url={user} />
          <div>
            <p className='text-[16px] leading-[24px] font-bold'>James Smith</p>
            <p className='text-[16px]'>abc@company.com</p>
          </div>
        </div>

        <span className={`rounded-2xl pl-3 pt-0.5 pr-3 pb-0.5 text-[14px] leading-[22px] bg-[#0085db] text-white`}>
  Promotional
</span>
      </div>

      <div className='mt-5'>
        <p className='text-[20px] leading-[30px] font-bold'>Kindly check this latest updated</p>
      </div>
      
      <div className='text-[#707A82]'>
        <p className='text-[14px] leading-[21px] mt-3'>Hello Andrew,</p>
        <p className='text-[14px] leading-[21px] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum hendrerit lobortis. Nullam ut lacus eros. Sed at luctus urna, eu fermentum diam. In et tristique mauris.</p>
        <p className='text-[14px] leading-[21px] mt-3'>Ut id ornare metus, sed auctor enim. Pellentesque nisi magna, laoreet a augue eget, tempor volutpat diam.</p>
        <p className='text-[14px] leading-[21px] mt-3'>Regards,</p>
        <p className='text-[14px] leading-[21px] font-bold text-black'>James Smith</p>
      </div>

        <div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-full mt-6 mb-6" />
        
        <div>
            <p className='text-[14px] leading-[24px] font-bold mb-4'>Attachments</p>
            <div className='flex justify-between items-center ml-8 mr-8'>
                <div className='flex items-center gap-4'>
                <img src={attach1} alt="" srcset="" />
                <div className=''>
                    <p className='text-[14px] font-bold'>adobe.pdf</p>
                    <p className='text-[14px] leading-[24px]'>2MB</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <img src={attach2} alt="" srcset="" />
                <div className=''>
                    <p className='text-[14px] font-bold'>adobe.pdf</p>
                    <p className='text-[14px] leading-[24px]'>2MB</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <img src={attach3} alt="" srcset="" />
                <div className=''>
                    <p className='text-[14px] font-bold'>adobe.pdf</p>
                    <p className='text-[14px] leading-[24px]'>2MB</p>
                </div>
            </div>
            </div>
        </div>

        <div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-full mt-6 mb-6" />

        <div className='flex items-center gap-3'>
            <div className='flex items-center gap-3'>
            <span><GoReply /></span>
            <p className='text-[14px] leading-[24px]'>Reply</p>
        </div>
        <div className='flex items-center gap-3'>
            <span><LuForward /></span>
            <p className='text-[14px] leading-[24px]'>Forward</p>
        </div>
        </div>
    </div>
  )
}

export default MailBody
