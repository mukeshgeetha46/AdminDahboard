import React from 'react'
import { BsDot } from 'react-icons/bs'

const BreadCrums = ({title,Breadcrums1,Breadcrums2}) => {
  return (
    <div className='AddformHeading bg-white rounded-2xl shadow p-6 flex flex-col lg:flex-row justify-between items-center'>
            <p className='text-[20px] leading-[25.5px] font-semibold'>{title}</p>
    
            <div className='flex justify-center items-center gap-3'>
                <p className='text-[14px] leading-[17.6px]'>{Breadcrums1}</p>
                <p className='text-[14px] leading-[17.6px] flex justify-center items-center'><BsDot /></p>
                <p className='text-[14px] text-[#e4e6e8] leading-[17.6px]'>{Breadcrums2}</p>
            </div>
          </div>
  )
}

export default BreadCrums
