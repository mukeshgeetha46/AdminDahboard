import React from 'react'
import BreadCrums from '../../pages/HeaderMenu/HeaderMenu'
import ToggleSwitch from '../../pages/ToggleSwich/Toggleswitch'
import silverMedal from '../../assets/Pricing/silver-pot-BgZ5AR88.svg'
import bronzeMedal from '../../assets/Pricing/bronze-pot-BwagRgyb.svg'
import goldMedal from '../../assets/Pricing/gold-pot-BSEiMSHc.svg'
import { TiTick } from "react-icons/ti";

const Pricing = () => {
  return (
    <div>
      <BreadCrums title={`Pricing`} Breadcrums1={`Dashboard`} Breadcrums2={`Pricing`} />

      <div className='flex justify-center items-center mt-10'>
        <div className='flex flex-col items-center'>
            <p className='text-[30px] leading-[36px] font-bold flex items-center'>Flexible Plans Tailored to Fit Your</p>
        <p className='text-[30px] leading-[36px] font-bold flex items-center'>Community's Unique Needs!</p>
        </div>
      </div>
         
         <div className='flex justify-center items-center m-10'>
          <div className='flex items-center gap-2'>
             <p className='text-[14px] leading-[17px] font-medium'>Monthly</p>
           <ToggleSwitch />
           <p className='text-[14px] leading-[17px] font-medium'>Yearly</p> 
          </div>
         </div>
        

        <div className='grid grid-cols-6 gap-7'>
          <div className='col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-2xl shadow p-4 flex flex-col gap-7'>
             <p className='text-[12px] leading-[17px] font-medium text-[#707A82]'>SILVER</p>

             <div>
              <img src={silverMedal} className='w-[80px] h-[80px]' />
             </div>
                <p className='text-[44px] leading-[55px] font-bold'>FREE</p>

                <div className='flex flex-col gap-6'>
                  <div className='flex gap-2 items-center'>
                  <span><TiTick /></span>
                  <p className='text-[16px] leading-[24px] font-medium'>3 Members</p>
                </div>
                  <div className='flex gap-2 items-center'>
                  <span><TiTick /></span>
                  <p className='text-[16px] leading-[24px] font-medium'>Single Device</p>
                </div>
                  <div className='flex gap-2 items-center'>
                  <span><TiTick /></span>
                  <p className='text-[16px] leading-[24px] font-medium'>50GB Storage</p>
                </div>
                  <div className='flex gap-2 items-center'>
                  <span><TiTick /></span>
                  <p className='text-[16px] leading-[24px] font-medium'>Monthly Backups</p>
                </div>
                  <div className='flex gap-2 items-center'>
                  <span><TiTick /></span>
                  <p className='text-[16px] leading-[24px] font-medium'>Permissions & workflows</p>
                </div>
                </div>

                <button className='bg-[#0085DB] text-[16px] pl-20 pr-20 pt-2 pb-2 rounded-3xl text-white'>Choose Silver</button>
          </div>
          <div className='col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-2xl shadow p-4 flex flex-col gap-7'>
             <p className='text-[12px] leading-[17px] font-medium text-[#707A82]'>SILVER</p>

             <div>
              <img src={bronzeMedal} className='w-[80px] h-[80px]' />
             </div>
                <p className='text-[44px] leading-[55px] font-bold'><span className='text-[16px] leading-[19px] font-medium items-start'>$</span> 4.99<span className='text-[16px] leading-[24px]'>/mo</span></p>

                <div className='flex flex-col gap-6'>
                  <div className='flex gap-2 items-center'>
                  <span><TiTick /></span>
                  <p className='text-[16px] leading-[24px] font-medium'>5 Members</p>
                </div>
                  <div className='flex gap-2 items-center'>
                  <span><TiTick /></span>
                  <p className='text-[16px] leading-[24px] font-medium'>Multiple Device</p>
                </div>
                  <div className='flex gap-2 items-center'>
                  <span><TiTick /></span>
                  <p className='text-[16px] leading-[24px] font-medium'>80GB Storage</p>
                </div>
                  <div className='flex gap-2 items-center'>
                  <span><TiTick /></span>
                  <p className='text-[16px] leading-[24px] font-medium'>Monthly Backups</p>
                </div>
                  <div className='flex gap-2 items-center'>
                  <span><TiTick /></span>
                  <p className='text-[16px] leading-[24px] font-medium'>Permissions & workflows</p>
                </div>
                </div>

                <button className='bg-[#0085DB] text-[16px] pl-20 pr-20 pt-2 pb-2 rounded-3xl text-white'>Choose Silver</button>
          </div>
          <div className='col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-2xl shadow p-4 flex flex-col gap-7'>
             <p className='text-[12px] leading-[17px] font-medium text-[#707A82]'>SILVER</p>

             <div>
              <img src={goldMedal} className='w-[80px] h-[80px]' />
             </div>
                <p className='text-[44px] leading-[55px] font-bold'><span className='text-[16px] leading-[19px] font-medium items-start'>$</span> 9.99<span className='text-[16px] leading-[24px]'>/mo</span></p>

                <div className='flex flex-col gap-6'>
                  <div className='flex gap-2 items-center'>
                  <span><TiTick /></span>
                  <p className='text-[16px] leading-[24px] font-medium'>5 Members</p>
                </div>
                  <div className='flex gap-2 items-center'>
                  <span><TiTick /></span>
                  <p className='text-[16px] leading-[24px] font-medium'>Single Device</p>
                </div>
                  <div className='flex gap-2 items-center'>
                  <span><TiTick /></span>
                  <p className='text-[16px] leading-[24px] font-medium'>120GB Storage</p>
                </div>
                  <div className='flex gap-2 items-center'>
                  <span><TiTick /></span>
                  <p className='text-[16px] leading-[24px] font-medium'>Monthly Backups</p>
                </div>
                  <div className='flex gap-2 items-center'>
                  <span><TiTick /></span>
                  <p className='text-[16px] leading-[24px] font-medium'>Permissions & workflows</p>
                </div>
                </div>

                <button className='bg-[#0085DB] text-[16px] pl-20 pr-20 pt-2 pb-2 rounded-3xl text-white'>Choose Silver</button>
          </div>
         
        </div>

    </div>
  )
}

export default Pricing
