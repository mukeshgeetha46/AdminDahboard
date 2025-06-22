// src/layouts/MainLayout/index.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../MainLayout/Sidebar/mainlyout.css'
import logo from '../../assets/sidebar/logo-dark-C4P0U4PI.svg'
import menus from '../../config/menus';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
import { MdNotificationsNone } from 'react-icons/md';
import { IoSettingsOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const MainLayout = () => {

  const [menuopen,setMenuopen] = useState('hidden')

  return (
 <>


<div class=" flex  justify-start bg-gray-100 relative " onClick={()=>setMenuopen((pre)=> pre == 'hidden' ? 'block' : 'hidden')}>
		<div class={`${menuopen} xl:block absolute xl:relative w-[280px] h-[98vh] xl:h-auto p-4 bg-white rounded-0 xl:rounded-2xl shadow-xl/20 ml-0 xl:ml-3 mt-0 xl:mt-6 mb-0 xl:mb-6 mr-0 xl:mr-6 pl-[0px] z-9999`}>
		  <div className='flex justify-center '>
        <img src={logo} className='w-[175px]' />
      </div>

      <div className='divmainMenu mt-10'>
        {
          menus && menus.map((item)=> (
             <div>
              <p className='pr-3 pt-3 pb-3 pl-8 text-gray-500 text-sm'>{item.label}</p>
             <div className='subMenu block'>
            {
              item.mainmenu.map((item)=>(
                <div>
                   <p className="relative pr-3 pt-3 pb-3 pl-8 group overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-[#e0f0fb] to-[#128ede] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out  rounded-tr-2xl rounded-br-2xl"></span>
           
         <span className="relative flex z-10 group-hover:text-[#128ede] transition-colors duration-500"><p className='mr-2'>{item.icon}</p> {item.label}</span>
            </p>
            {
              item.submenu && item.submenu.map((smenu)=>(
                <div  className='p-2 ml-5 flex items-center gap-2'>
                  <p><GoDotFill size={14} /></p>
                <p> {smenu.s_label}</p>
                </div>
              ))
            }
                </div>
              ))
            }
       
       </div>  
             </div>
          ))
        }
      
       
      </div>
		</div>

    <div className='w-full lg:w-[80%] h-[100vh] overflow-y-auto'>
      <HeaderMenu setMenuopen={setMenuopen} />
    <div className='m-2 lg:m-7'>

    <Outlet />

    </div>
    </div>
   <div className="absolute bottom-4 right-4">
  <p className="w-15 h-15 flex items-center justify-center rounded-full bg-[#0085db] cursor-pointer transition">
    <IoSettingsOutline className='animate-spin' color='white' size={25} />
  </p>
</div>

</div>
    

 </>
  );
};

export default MainLayout;