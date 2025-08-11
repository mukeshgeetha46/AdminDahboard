import React from 'react';
import logo from '../../assets/sidebar/logo-dark-C4P0U4PI.svg'
import loginimg from '../../assets/sidebar/login-security-Bp8jGJs5.png'
import fb from '../../assets/sidebar/download.svg'
import google from '../../assets/sidebar/download (1).svg'
import Border from '../../pages/Border/Border'
import useWindowSize from '../../utils/useWindowSize';
import { useNavigate } from 'react-router-dom';


const TwoStepAuthentication = () => {

  const {isLaptop} = useWindowSize();
  const navigate = useNavigate();
 

  return (
    <div className="bg-[#f0f5f9] min-h-screen flex items-center justify-center">
      
      <div className={`bg-white rounded-2xl shadow-md p-10 xl:p-20 ${isLaptop ? 'w-[80%]' : 'w-[90%] xl:w-[60%]'}`}>
            <div className='flex justify-start items-center'>
                <img src={logo} className='w-[175px]' />
              </div>
              <div className='grid grid-cols-4'>
                 <div className='hidden xl:block col-span-2 p-5'>
                    <img src={loginimg} className=' w-[450px]' alt="" srcset="" />
                 </div>
                 <div className='col-span-4 xl:col-span-2'>
                    <div className='flex flex-col gap-2'>
                      <p className='text-[30px] leading-[36px] font-bold'>Two Step Verification
</p>
                      <p className='text-[16px] leading-[19px] font-medium'>We sent a verification code to your mobile. Enter the code from the mobile in the field below.</p>
                    </div>

                    <div className='mt-7'>
                         <p className='text-[16px] leading-[19px] font-medium'>******1234</p>
                    </div>
                  
              

              <div className='flex flex-col gap-10 mt-15'>
                <div className='flex flex-col gap-2'>
                  <p className='text-[14px] leading-[17px] font-semibold'>Type your 6 digits security code</p>
                  <div className='grid grid-cols-6 gap-5'>
                     <div className='col-span-1'>
                       <input type="text"  name="" id="" className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
                     </div>
                     <div className='col-span-1'>
                       <input type="text"  name="" id="" className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
                     </div>
                     <div className='col-span-1'>
                       <input type="text"  name="" id="" className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
                     </div>
                     <div className='col-span-1'>
                       <input type="text"  name="" id="" className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
                     </div>
                     <div className='col-span-1'>
                       <input type="text"  name="" id="" className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
                     </div>
                     <div className='col-span-1'>
                       <input type="text"  name="" id="" className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
                     </div>
                  </div>
                  
                </div>
              
              </div>
                 
               

                 <div className='mt-5'>
                  <button className='w-full rounded-full bg-[#0085DB] pt-2 pb-2 text-white'>Verify My Account</button>
                 </div>
  <div className='mt-5'>
                    <p className='text-[14px] leading-[17px] font-medium text-[#707A82]' onClick={()=>navigate('/register')}>Didn't get the code?  <span className='text-[14px] leading-[21px] text-[#0085DB]'>Resend</span></p>
                   </div>
                 </div>
              </div>
      </div>
    </div>
  );
};

export default TwoStepAuthentication;
