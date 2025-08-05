import React from 'react'
import Border from '../../pages/Border/Border'

const WidgetHistory = () => {
  return (
    <div className='bg-white rounded-2xl shadow p-6 h-[600px] flex flex-col items-center'>
       <div>
        <p className='text-[18px] leading-[25px] font-semibold'>Payment Gateways</p>
       </div>

       <div className='pt-10 flex flex-col gap-2'>
        <div className='flex items-start gap-4'>
            <p className='text-[14px] leading-[17px]'>09:30 am</p>

       <div className='flex flex-col items-center'>
         <div className='w-3 h-3 rounded-full border border-[#0085DB]' />
          <Border width={30} mt={1} vertical={true} height={40} />
       </div>
        <p className='text-[14px] leading-[17px]'>Payment received from John Doe of $385.90</p>
        </div>
        <div className='flex items-start gap-4'>
            <p className='text-[14px] leading-[17px]'>10:00 am</p>

       <div className='flex flex-col items-center'>
         <div className='w-3 h-3 rounded-full border border-[#0085DB]' />
          <Border width={30} mt={1} vertical={true} height={40} />
       </div>
        <p className='text-[14px] leading-[17px]'>New sale recorded
#ML-3467</p>
        </div>
        <div className='flex items-start gap-4'>
            <p className='text-[14px] leading-[17px]'>12:00 am</p>

       <div className='flex flex-col items-center'>
         <div className='w-3 h-3 rounded-full border border-[#0085DB]' />
          <Border width={30} mt={1} vertical={true} height={40} />
       </div>
        <p className='text-[14px] leading-[17px]'>Payment was made of $64.95 to Michael</p>
        </div>
        <div className='flex items-start gap-4'>
            <p className='text-[14px] leading-[17px]'>09:30 am</p>

       <div className='flex flex-col items-center'>
         <div className='w-3 h-3 rounded-full border border-[#0085DB]' />
          <Border width={30} mt={1} vertical={true} height={40} />
       </div>
        <p className='text-[14px] leading-[17px]'>New sale recorded
#ML-3467</p>
        </div>
        <div className='flex items-start gap-4'>
            <p className='text-[14px] leading-[17px]'>09:30 am</p>

       <div className='flex flex-col items-center'>
         <div className='w-3 h-3 rounded-full border border-[#0085DB]' />
          <Border width={30} mt={1} vertical={true} height={40} />
       </div>
        <p className='text-[14px] leading-[17px]'>Payment received from John Doe of $385.90</p>
        </div>
        <div className='flex items-start gap-4'>
            <p className='text-[14px] leading-[17px]'>09:30 am</p>

       <div className='flex flex-col items-center'>
         <div className='w-3 h-3 rounded-full border border-[#0085DB]' />
          <Border width={30} mt={1} vertical={true} height={40} />
       </div>
        <p className='text-[14px] leading-[17px]'>Payment Done</p>
        </div>
        
        
        {/* <div className='flex flex-col items-center gap-1'>
            <div className='w-3 h-3 rounded-full border border-[#0085DB]' />
            <Border width={30} mt={1} vertical={true} height={40} />
            <div className='w-3 h-3 rounded-full border border-[#0085DB]' />
             <Border width={30} mt={1} vertical={true} height={40} />
            <div className='w-3 h-3 rounded-full border border-[#0085DB]' />
             <Border width={30} mt={1} vertical={true} height={40} />
            <div className='w-3 h-3 rounded-full border border-[#0085DB]' />
             <Border width={30} mt={1} vertical={true} height={40} />
            <div className='w-3 h-3 rounded-full border border-[#0085DB]' />
             <Border width={30} mt={1} vertical={true} height={40} />
        </div> */}
       </div>
    </div>
  )
}

export default WidgetHistory
