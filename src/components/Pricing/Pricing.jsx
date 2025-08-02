import React from 'react'
import BreadCrums from '../../pages/HeaderMenu/HeaderMenu'
import ToggleSwitch from '../../pages/ToggleSwich/Toggleswitch'
import silverMedal from '../../assets/Pricing/silver-pot-BgZ5AR88.svg'
import bronzeMedal from '../../assets/Pricing/bronze-pot-BwagRgyb.svg'
import goldMedal from '../../assets/Pricing/gold-pot-BSEiMSHc.svg'
import { TiTick } from "react-icons/ti";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Pricing = () => {

  const pricingDetails = [
    {
      title:'SILVER',
      rate:'FREE',
      monthly:false,
      pricingDetails:[
        {available:true,lable:"3 Members",valid:true},
        {available:true,lable:"Single Device",valid:true},
        {available:false,lable:"50GB Storage",valid:false},
        {available:false,lable:"Monthly Backups",valid:false},
        {available:false,lable:"Permissions & workflows",valid:false},
      ],
      action:'Choose Silver'
    },
    {
      title:'bronze',
      rate:'4.99',
      monthly:true,
      pricingDetails:[
        {available:true,lable:"5 Members",valid:true},
        {available:true,lable:"Multiple Device",valid:true},
        {available:false,lable:"80GB Storage",valid:true},
        {available:false,lable:"Monthly Backups",valid:false},
        {available:false,lable:"Permissions & workflows",valid:false},
      ],
      action:'Choose Bronz'
    },
    {
      title:'SILVER',
      rate:'9.99',
      monthly:true,
      pricingDetails:[
        {available:true,lable:"5 Members",valid:true},
        {available:true,lable:"Single Device",valid:true},
        {available:false,lable:"120GB Storage",valid:true},
        {available:false,lable:"Monthly Backups",valid:true},
        {available:false,lable:"Permissions & workflows",valid:true},
      ],
      action:'Choose Gold'
    },
  ]

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
          {
            pricingDetails.map((pricing)=>(
             <div className='col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-2xl shadow p-4 flex flex-col gap-7'>
             <p className='text-[12px] leading-[17px] font-medium text-[#707A82]'>{pricing.title}</p>

             <div>
              <img src={silverMedal} className='w-[80px] h-[80px]' />
             </div>
                 <p className='text-[44px] leading-[55px] font-bold'>
                  {pricing.monthly && (
                    <span className="text-[16px] leading-[19px] font-medium items-start">$</span>
                   )}
                  {pricing.rate}
                  {pricing.monthly && (
    <span className='text-[16px] leading-[24px]'>/mo</span>
  )}
                  </p>

                <div className='flex flex-col gap-6'>
                  {
                    pricing.pricingDetails.map((details)=>(
                  <div className='flex gap-2 items-center'>
                  <span>{details.valid ? <TiTick /> : <IoIosCloseCircleOutline />}</span>
                 <p
  className={`text-[16px] leading-[24px] font-medium ${!details.valid ? 'text-gray-400 select-none pointer-events-none' : ''}`}
>
  {details.lable}
</p>

                </div>
                    ))
                  }
                  
                 
                </div>

                <button className="bg-[#0085DB] text-[16px] pl-20 pr-20 pt-2 pb-2 rounded-3xl text-white shadow-md hover:shadow-lg transition-shadow">
  {pricing.action}
</button>

          </div> 
            ))
          }
         
         
        </div>

    </div>
  )
}

export default Pricing
