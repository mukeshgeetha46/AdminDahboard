import React from 'react'
import { BsDot } from "react-icons/bs";

const AddFormEcommerse = () => {
  return (
    <div>
      <div className='AddformHeading bg-white rounded-2xl shadow p-6 flex flex-col lg:flex-row justify-between items-center'>
        <p className='text-[20px] leading-[25.5px] font-semibold'>Add Product</p>

        <div className='flex justify-center items-center gap-3'>
            <p className='text-[14px] leading-[17.6px]'>Dashboard</p>
            <p className='text-[14px] leading-[17.6px] flex justify-center items-center'><BsDot /></p>
            <p className='text-[14px] text-[#e4e6e8] leading-[17.6px]'>Add Product</p>
        </div>
      </div>

      <div className='tab flex items-center mt-5 gap-2'> 
        <p className='text-[16px] leading-[19.2px] p-4 text-[#0085db] border-b border-[#0085db]'>General</p>
        <p className='text-[16px] leading-[19.2px] p-4'>Advanced</p>
      </div>
    </div>
  )
}

export default AddFormEcommerse
