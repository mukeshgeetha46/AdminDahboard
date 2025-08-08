import React from 'react'
import Border from '../../pages/Border/Border'
import ticksvg from '../../assets/Teachers/ctick.svg'

const SalaryReport = () => {
  return (
    <div className='row-span-5 bg-white rounded-2xl shadow p-5'>
       <div>
        <p className='text-[18px] leading-[25p] font-semibold'>Salary Report</p>
       </div>
       <Border width={100} mt={2} />

       <div className='mt-7'>

       <div className='flex justify-between items-center'>
        <p className='text-[18px] leading-[25px] text-[#707A82]'>Standard</p>
        <div className='flex items-start'>
            <p className='text-[18px] leading-[25px] font-semibold text-[#0085DB]'>$</p>
            <h1 className='text-[60px] leading-[54px] text-[#0085DB] font-light'>50<span className='text-[20px] leading-[19px] text-[#707A82]'>/month</span></h1>
        </div>
       </div>

       <div className='flex flex-col gap-3 mt-8'>
        <div className='flex items-center gap-2'>
            <img src={ticksvg} className='text-[#4BD08B]' />
            <p className='text-[14px] leading-[17px] text-[#707A82]'>3 Periods per day</p>
        </div>
        <div className='flex items-center gap-2'>
            <img src={ticksvg} />
            <p className='text-[14px] leading-[17px] text-[#707A82]'>3 Periods per day</p>
        </div>
        <div className='flex items-center gap-2'>
            <img src={ticksvg} />
            <p className='text-[14px] leading-[17px] text-[#707A82]'>3 Periods per day</p>
        </div>
        <div className='flex items-center gap-2'>
            <img src={ticksvg} />
            <p className='text-[14px] leading-[17px] text-[#707A82]'>3 Periods per day</p>
        </div>
       </div>

       <div className='flex flex-col gap-2'>
        <div className='mt-5 flex justify-between items-center'>
        <p className='text-[16px] leading-[19px] font-medium text-[#707A82]'>Days</p>
        <p className='text-[16px] leading-[19px] font-medium text-[#707A82]'>75% Completed</p>
       </div>
       <div className="border-b-8 rounded-2xl" style={{ borderBottomColor:'#0085DB' }} />
       <p className='text-[16px] leading-[19px] font-medium text-[#707A82]'>4 days remaining</p>
       </div>

       <div className='mt-10'>
        <button className='bg-[#0085DB] pl-4 pt-2 pr-4 pb-2 text-white rounded-[5px]'>Pay Full Salary</button>
       </div>

       </div>
    </div>
  )
}

export default SalaryReport
