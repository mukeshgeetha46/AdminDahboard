import React from 'react';
import logo from '../../assets/sidebar/logo-dark-C4P0U4PI.svg'
import loginimg from '../../assets/sidebar/login-security-Bp8jGJs5.png'
import useWindowSize from '../../utils/useWindowSize';
import { useNavigate } from 'react-router-dom';


const ForgetPassword = () => {

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
                 <div className='col-span-4 xl:col-span-2 mt-15'>
                    <div className='flex flex-col gap-2'>
                      <p className='text-[30px] leading-[36px] font-bold'>Forgot your password?</p>
                      <p className='text-[16px] leading-[19px] font-medium'>Please enter the email address associated with your account and We will email you a link to reset your password.</p>
                    </div>
                    

              <div className='flex flex-col gap-10 mt-15'>
               
                <div className='flex flex-col gap-2'>
                  <p className='text-[14px] leading-[17px] font-semibold'>Email Adddress</p>
                  <input type="email"  name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
                </div>
              
              </div>
                

                 <div className='mt-5 flex flex-col gap-3'>
                  <button className='w-full rounded-full bg-[#0085DB] pt-2 pb-2 text-white'>Forget Password</button>
                  <button className='w-full rounded-full bg-[#E5F3FB]  pt-2 pb-2 text-[#0085DB]' onClick={()=>navigate('/login')}>Back to Login</button>
                 </div>

                  
                 </div>
              </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
