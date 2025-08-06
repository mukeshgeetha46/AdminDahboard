import React from 'react'
import Border from '../../pages/Border/Border'

const WidgetHistory = () => {
  const items = [
    { time: '09:30 am', text: 'Payment received from John Doe of $385.90' },
    { time: '10:00 am', text: 'New sale recorded /n #ML-3467' },
    { time: '12:00 am', text: 'Payment was made of $64.95 to Michael' },
    { time: '09:30 am', text: 'New sale recorded /n #ML-3467' },
    { time: '09:30 am', text: 'Payment received from John Doe of $385.90' },
    { time: '09:30 am', text: 'Payment Done /n #ML-3467' },
  ]

  return (
    <div className='bg-white rounded-2xl shadow p-6 max-h-[600px] overflow-y-auto w-full max-w-[500px] mx-auto'>
      <div>
        <p className='text-[18px] leading-[25px] font-semibold'>Recent Transactions</p>
      </div>

      <div className='pt-6 flex flex-col gap-4'>
        {items.map((item, index) => (
          <div key={index} className='flex sm:flex-row flex-col sm:items-start items-start sm:gap-4 gap-1'>
            {/* Time */}
            <p className='text-[14px] leading-[17px] min-w-[70px]'>{item.time}</p>

            {/* Dot & Line */}
            <div className='flex flex-col items-center'>
              <div className='w-3 h-3 rounded-full border border-[#0085DB]' />
              {index !== items.length - 1 && (
                <Border width={30} mt={1} vertical={true} height={40} />
              )}
            </div>

            {/* Text */}
            <p className='text-[14px] leading-[17px] break-words sm:max-w-none max-w-[200px]'>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WidgetHistory
