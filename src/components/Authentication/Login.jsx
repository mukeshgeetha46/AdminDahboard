import React from 'react';
import logo from '../../assets/sidebar/logo-dark-C4P0U4PI.svg'
import loginimg from '../../assets/sidebar/login-security-Bp8jGJs5.png'
import fb from '../../assets/sidebar/download.svg'
import google from '../../assets/sidebar/download (1).svg'
import Border from '../../pages/Border/Border'
const Login = () => {
  return (
    <div className="bg-[#f0f5f9] min-h-screen flex items-center justify-center">
      <div className='bg-white rounded-2xl shadow-md p-10 xl:p-20 w-full xl:w-[60%]'>
            <div className='flex justify-start items-center'>
                <img src={logo} className='w-[175px]' />
              </div>
              <div className='grid grid-cols-4'>
                 <div className='hidden xl:block col-span-2 p-5'>
                    <img src={loginimg} className=' w-[450px]' alt="" srcset="" />
                 </div>
                 <div className='col-span-4 xl:col-span-2'>
                    <div className='flex flex-col gap-2'>
                      <p className='text-[30px] leading-[36px] font-bold'>Welcome to Spike Admin</p>
                      <p className='text-[16px] leading-[19px] font-medium'>Your Admin Dashboard</p>
                    </div>
                    <div className='mt-7'>
                      <div className='grid grid-cols-2 gap-5'>
                       <div className='col-span-2 xl:col-span-1'>
                       <div className='flex items-center gap-2 border border-gray-300 w-full  pl-6 pt-2 pr-6 pb-2 rounded-[5px]'>
                        <img src={google} className='bg-white w-[20px]' alt="" />
                        <p className='text-[14px] leading-[17px]'>Sign with the Google</p>
                      </div>
                       </div>
                       <div className='col-span-2 xl:col-span-1'>
                     <div className='flex items-center gap-2 border border-gray-300  pl-6 pt-2 pr-6 pb-2 rounded-[5px]'>
                        <img src={fb} className='bg-white w-[20px]' alt="" />
                        <p className='text-[14px] leading-[17px]'>Sign with the FB</p>
                      </div>
                       </div>
                      </div>
                     
                      
                    </div>
                   
                  <div className="flex items-center gap-2 mt-5">
                 <div className="flex-grow border-t border-gray-300"></div>
              <p className="text-gray-500">or sign in with</p>
             <div className="flex-grow border-t border-gray-300"></div>
             </div>

              <div className='flex flex-col gap-10 mt-6'>
                <div className='flex flex-col gap-2'>
                  <p className='text-[14px] leading-[17px] font-semibold'>Username</p>
                  <input type="password" value={`admin@123456`} name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-[14px] leading-[17px] font-semibold'>Username</p>
                  <input type="password" value={`admin@123456`} name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
                </div>
              </div>
                 
                 <div className='mt-5 flex justify-between items-center'>
                   <div className='flex items-center gap-3'>
                     <input type="checkbox" />
                     <p className='text-[14px] leading-[17px]'>Remember this Device</p>
                   </div>
                   <div className='flex items-center gap-3'>
                     <p className='text-[14px] leading-[21px] font-medium text-[#0085DB]'>Forget Password?</p>
                   </div>
                 </div>

                 <div className='mt-5'>
                  <button className='w-full rounded-full bg-[#0085DB] pt-2 pb-2 text-white'>Sign In</button>
                 </div>

                 </div>
              </div>
      </div>
    </div>
  );
};

export default Login;
