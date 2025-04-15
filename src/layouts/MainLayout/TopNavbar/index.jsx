import React from 'react'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import './style.css'
import { Outlet } from 'react-router-dom';
import profileLogo from '../../../assets/sidebar/user6-iQEKvgW-.jpg'
import { IoMoonOutline,TfiShoppingCartFull,IoMdNotificationsOutline } from '../../../icons/index';
{/* <HiOutlineMenuAlt2 /> */}
const TopNavbar = () => {
  return (
    <div className="main-topnavbar" >
   
       <div className='divtopnavbar'>


       <div className='topnavbar' >
        
         <div className='top_submenu'>
         <div className='dot'>
          <span className='hoverMenu'>  <HiOutlineMenuAlt2 size={18} /></span>
        </div>

        <div className='right_content'>
          <div className='top_search'>
          <input className='searchinput' type='text' placeholder='Search...' />
          </div>
          <div className='dot'>
          <span className='hoverMenu'>  <IoMoonOutline size={20} /></span>
        </div>
          <div className='dot'>
          <span className='hoverMenu'>  <img width={30} height={30} style={{
            borderRadius:"50%"
          }} src='https://img.freepik.com/premium-vector/indian-flag-illustrator-country-flags_1082479-19135.jpg?ga=GA1.1.1035270016.1740294128&semt=ais_hybrid&w=740' /></span>
        </div>
          <div className='dot'>
          <span className='hoverMenu'>  <TfiShoppingCartFull size={20} /></span>
        </div>
          <div className='dot'>
          <span className='hoverMenu'>  <IoMdNotificationsOutline size={20} /></span>
        </div>
        <div className='topbar_logo'>
                <img src={profileLogo} height={42} width={42} />
                </div>
                <div className='userdata'>
                  <p>Mike Nielsen</p>
                  <p>Admin</p>
                </div>
        </div>


         </div>

      </div>




       </div>
     
      <div className='outlet'>
        <Outlet />
        </div>
      

  </div>
  )
}

export default TopNavbar
