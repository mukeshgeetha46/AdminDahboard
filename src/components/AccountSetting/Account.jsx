import React from 'react'
import Profile from '../../pages/Profile/Profile'
import user from '../../assets/Profile/user-10-BtaXUAQO.jpg'
import MultipleSelect from '../../utils/SelectInput'

const Account = () => {
  return (
    <div>
       <div className='grid grid-cols-4 gap-4'>
          <div className='col-span-4 xl:col-span-2 mt-5 rounded-2xl shadow-lg p-6'>
             <div>
                <p className='text-[18px] leading-[25px] font-semibold'>Change Profile</p>
                <p className='text-gray-400'>Change your profile picture from here</p>
             </div>

             <div className='profile flex justify-center items-center mt-5'>
              <div>
                 <Profile wh={25} url={user} /> 
              </div>
             </div>

              <div className='flex items-center justify-center gap-3 mt-5'>
                <button className='text-[14px] bg-[#0085DB] text-white rounded-full pl-5 pr-5 pt-2 pb-2'>Upload</button>
                <button className='text-[14px] rounded-full pl-5 pr-5 pt-2 pb-2 border border-[#FB977D]'>Reset</button>
               </div>

               <div className='flex justify-center items-center mt-5 mb-15'>
                <p className='text-[14px] leading-[17px] text-[#707A82]'>Allowed JPG, GIF or PNG. Max size of 800K</p>
               </div>
          </div>
            <div className='col-span-4 xl:col-span-2 mt-5 rounded-2xl shadow-lg p-6'>
              <div>
                <p className='text-[18px] leading-[25px] font-semibold'>Change Password</p>
                <p className='text-gray-400'>To change your password please confirm here</p>
             </div>
              <div className=' flex flex-col justify-center gap-1 mt-4'>
        <p className='text-[14px] leading-[19px] font-medium'>Current Password</p>
        <input type="password" value={`admin@123456`} name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
      </div>
              <div className=' flex flex-col justify-center gap-1 mt-4'>
        <p className='text-[14px] leading-[19px] font-medium'>Current Password</p>
        <input type="password" value={`admin@123456`} name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
      </div>
              <div className=' flex flex-col justify-center gap-1 mt-4'>
        <p className='text-[14px] leading-[19px] font-medium'>Current Password</p>
        <input type="password" value={`admin@123456`} name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
      </div>
          </div>
           <div className='col-span-4 mt-5 rounded-2xl shadow-lg p-6'>
              <div>
                <p className='text-[18px] leading-[25px] font-semibold'>Personal Details</p>
                <p className='text-gray-400'>To change your personal detail , edit and save from here</p>
             </div>

             <div className='grid grid-cols-4 gap-4'>
                <div className='col-span-4 lg:col-span-2'>
                  <div className=' flex flex-col justify-center gap-1 mt-4'>
        <p className='text-[14px] leading-[19px] font-medium'>Your Name</p>
        <input type="text" value={`Mike Nielsen`} name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
      </div>
                </div>
                <div className='col-span-4 lg:col-span-2'>
                  <div className=' flex flex-col justify-center gap-1 mt-4'>
        <p className='text-[14px] leading-[19px] font-medium'>Store Name</p>
        <input type="text" value={`Maxima Studio`} name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
      </div>
                </div>
                <div className='col-span-4 lg:col-span-2'>
                  <div className=' flex flex-col justify-center gap-1 mt-4'>
        <p className='text-[14px] leading-[19px] font-medium'>Location</p>
        <MultipleSelect />
      </div>
                </div>
                <div className='col-span-4 lg:col-span-2'>
                  <div className=' flex flex-col justify-center gap-1 mt-4'>
        <p className='text-[14px] leading-[19px] font-medium'>Currency</p>
        <MultipleSelect />
      </div>
                </div>
                <div className='col-span-4 lg:col-span-2'>
                  <div className=' flex flex-col justify-center gap-1 mt-4'>
        <p className='text-[14px] leading-[19px] font-medium'>Email</p>
        <input type="text" value={`info@Spike.com`} name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
      </div>
                </div>
                <div className='col-span-4 lg:col-span-2'>
                  <div className=' flex flex-col justify-center gap-1 mt-4'>
        <p className='text-[14px] leading-[19px] font-medium'>Phone</p>
        <input type="text" value={`+91 12345 65478`} name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
      </div>
                </div>
                <div className='col-span-4'>
                   <div className=' flex flex-col justify-center gap-1 mt-4'>
        <p className='text-[14px] leading-[19px] font-medium'>Address</p>
        <input type="text" value={`814 Howard Street, 120065, India`} name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
      </div>
                </div>
             </div>
          </div>
       </div>
       <div className='m-5 flex justify-end items-start gap-3'>
         <button className='text-[16px] bg-[#0085DB] pl-4 pr-4 pt-2 pb-2 rounded-full text-white'>Save</button>
         <button className='text-[16px] bg-[#FFEDE9] pl-4 pr-4 pt-2 pb-2 rounded-full text-[#FB977D]'>Cancel</button>
       </div>
    </div>
  )
}

export default Account
