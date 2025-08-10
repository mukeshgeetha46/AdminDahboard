import React from 'react'
import image1 from '../../assets/chat/product-1-C2bm6yWA.jpg'
import mail from '../../assets/Email/download (1).svg'
import mail1 from '../../assets/Email/download (2).svg'
import mail2 from '../../assets/Email/download.svg'
import figma from '../../assets/Email/figma.svg'
import js from '../../assets/Email/java.svg'

const Chatsidebar = () => {
  return (
    <div className='p-5 h-[597px]'>
       <div>
        <p className='text-[16px] leading-[19px] font-medium'>Media (1)</p>
        <img src={image1} alt="" className='mt-4 w-[130px]' />
       </div>

       <div className='py-5'>
        <p className='text-[16px] leading-[19px] font-medium'>Attachments (5)</p>
       </div>

       <div className='flex flex-col item-center gap-5'>
        <div className='flex items-center gap-3'>
          <div className='bg-[#E7ECF0] w-fit p-3 rounded-[5px]'>
            <img src={mail} alt="" />
          </div>
          <div>
            <p className='text-[16px] leading-[24px] font-semibold'>service-task.pdf</p>
            <p className='text-[12px] leading-[16px] font-semibold'>2MB</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <div className='bg-[#E7ECF0] w-fit p-3 rounded-[5px]'>
            <img src={mail1} alt="" />
          </div>
          <div>
            <p className='text-[16px] leading-[24px] font-semibold'>homepage-design.fig</p>
            <p className='text-[12px] leading-[16px] font-semibold'>3MB</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <div className='bg-[#E7ECF0] w-fit p-3 rounded-[5px]'>
            <img src={mail2} alt="" />
          </div>
          <div>
            <p className='text-[16px] leading-[24px] font-semibold'>about-us.htmlf</p>
            <p className='text-[12px] leading-[16px] font-semibold'>1Kb</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <div className='bg-[#E7ECF0] w-fit p-3 rounded-[5px]'>
            <img src={figma} alt="" />
          </div>
          <div>
            <p className='text-[16px] leading-[24px] font-semibold'>work-project.zip</p>
            <p className='text-[12px] leading-[16px] font-semibold'>20MB</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <div className='bg-[#E7ECF0] w-fit p-3 rounded-[5px]'>
            <img src={js} alt="" />
          </div>
          <div>
            <p className='text-[16px] leading-[24px] font-semibold'>custom.js</p>
            <p className='text-[12px] leading-[16px] font-semibold'>2MB</p>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Chatsidebar
