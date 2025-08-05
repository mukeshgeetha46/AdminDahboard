import React from 'react'
import { RiPaypalLine } from "react-icons/ri";

const PaymentHistroy = () => {
  return (
    <div className='bg-white rounded-2xl shadow p-6 h-[600px]'>
       <div>
        <p className='text-[18px] leading-[25px] font-semibold'>Payment Gateways</p>
        <p className='text-[14px] leading-[19px] text-[#707A82]'>Platform For Income</p>
       </div>

      <div className='flex justify-between items-center'>
         <div className='flex items-center gap-2 mt-5'>
                  <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                        style={{ backgroundColor: '#E5F3FB' }}
                      >
                        <RiPaypalLine color='#0085DB' />
                      </div>

                      <div>
                         <p className='text-[16px] leading-[19px] font-semibold'>Paypal</p>
        <p className='text-[14px] leading-[19px] text-[#707A82]'>Big Brands
</p>
                      </div>
       </div>
         <p className='text-[14px] leading-[19px] text-[#707A82]'>+$6,235</p>
      </div>
    </div>
  )
}

export default PaymentHistroy
