import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import checkoutImg from '../../assets/Ecommerse/empty-shopping-cart-C-a9p3Jc.svg'

const Checkout = () => {
  return (
    <div>
      <div className='bg-white rounded-2xl shadow-2xl '>
         <div className='max-w-[700px] p-5'>
            <div className='grid grid-cols-3'>
            <div className='col-span-3 lg:col-span-1'>
             <div className='flex items-center gap-2 p-4 bg-[#e5f3fb] rounded-[6px]'>
             <button className="bg-[#0085DB] p-3 rounded-full shadow">
                  <FaShoppingCart className="text-white" />
                </button>
               <div>
                <p>item Cart</p> 
               <p>Product Summary</p> 
               </div>
           </div>

       
            </div>
            <div className='col-span-3 lg:col-span-1'>
            

            <div className='flex items-center gap-2 p-4 rounded-[6px] text-[#d9dbde]'>
             <button className="bg-[#fcfdfe] p-3 rounded-full">
                  <FaShoppingCart className="text-[#d9dbde]" />
                </button>
               <div>
                <p>Billing</p> 
               <p>Billing Information</p> 
               </div>
           </div>
         
            </div>
            <div className='col-span-3 lg:col-span-1'>
         

          <div className='flex items-center gap-2 p-4  rounded-[6px] text-[#d9dbde]'>
             <button className="bg-[#fcfdfe] p-3 rounded-full">
                  <FaShoppingCart className="text-[#d9dbde]" />
                </button>
               <div>
                <p>Payment</p> 
               <p>Add & Update Card</p> 
               </div>
           </div>
            </div>
         </div>
         </div>
         <div className='divimage h-[450px] flex justify-center items-center'>
           <div>
             <div>
                <img src={checkoutImg} className='w-[310px]' alt="" srcset="" />
            </div>
             <div className='flex flex-col justify-center items-center'>
                 <p className='text-[18px] leading-[25.6px] font-semibold'>Cart is Empty</p>
                  <button className='bg-[#0085db] text-white pl-4 pr-4 pt-1 pb-1 rounded-2xl mt-3 cursor-pointer'>
                    Go Back To Shopping
                  </button>
             </div>
           </div>
         </div>
         
       
           <button className='bg-[#e0f0fa] text-[#0085DB] pl-4 pr-4 pt-1 pb-1 rounded-2xl m-5 cursor-pointer'>
                    Go Back To Shopping
                  </button>
      </div>
    </div>
  )
}

export default Checkout
