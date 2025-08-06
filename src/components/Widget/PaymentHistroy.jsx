import React from 'react'
import { RiPaypalLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { BsCreditCard } from "react-icons/bs";
import { CiBank } from "react-icons/ci";
import { VscDebugRestart } from "react-icons/vsc";

const PaymentHistroy = () => {

    const transactions = [
        {
            name:'Paypal',
            description:'Big Brands',
            amount:'+$6,235',
            icon:<RiPaypalLine color='#0085DB' />,
            bg:'#E5F3FB',
        },
        {
            name:'Wallet',
            description:'Bill payment',
            amount:'+$6,235',
             icon:<IoWalletOutline color='#fb977d' />,
             bg:'#FFEDE9'
        },
        {
            name:'Credit Card',
            description:'Money reversed',
            amount:'+$6,235',
             icon:<BsCreditCard color='#916fdd' />,
             bg:'#F1EBFF'
        },
        {
            name:'Bank Transfer',
            description:'Money added',
            amount:'+$6,235',
             icon:<CiBank color='#09c97f' />,
             bg:'#DFFFF3'
        },
        {
            name:'Refund',
            description:'Bill Payment',
            amount:'+$6,235',
             icon:<VscDebugRestart color='#f8b564' />,
             bg:'#FFF6EA'
        },
    ]

  return (
    <div className='bg-white rounded-2xl shadow p-6 h-[600px]'>
       <div>
        <p className='text-[18px] leading-[25px] font-semibold'>Payment Gateways</p>
        <p className='text-[14px] leading-[19px] text-[#707A82]'>Platform For Income</p>
       </div>
      <div className='flex flex-col gap-3'>
 {
        transactions.map((transaction)=>(
            <div className='flex justify-between items-center'>
         <div className='flex items-center gap-2 mt-5'>
                  <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                        style={{ backgroundColor: transaction.bg }}
                      >
                        {transaction.icon}
                      </div>

                      <div>
                         <p className='text-[16px] leading-[19px] font-semibold'>{transaction.name}</p>
        <p className='text-[14px] leading-[19px] text-[#707A82]'>{transaction.description}</p>
                      </div>
       </div>
         <p className='text-[14px] leading-[19px] text-[#707A82]'>{transaction.amount}</p>
      </div>
        )
    )
       }
      </div>
      <div className='flex justify-center mt-10'>
        <button className='border border-[#0085db] rounded-full w-full pt-2 pb-2 text-[#0085db]'>View All Transactions</button>
      </div>
      
    </div>
  )
}

export default PaymentHistroy
