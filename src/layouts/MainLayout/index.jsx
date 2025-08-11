// src/layouts/MainLayout/index.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../MainLayout/Sidebar/mainlyout.css'
import logo from '../../assets/sidebar/logo-dark-C4P0U4PI.svg'
import menus from '../../config/menus';
import HeaderMenu from './HeaderMenu';
import { useEffect, useRef, useState } from 'react';
import { MdNotificationsNone } from 'react-icons/md';
import { IoSettingsOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/Profile/user-10-BtaXUAQO.jpg'
import { AiOutlineLogout } from "react-icons/ai";
import useWindowSize from '../../utils/useWindowSize';


const MainLayout = () => {

  const [menuopen,setMenuopen] = useState(false)
  const [mainmenu,setMainmenu] = useState('Dashboard')
const [openSubmenus, setOpenSubmenus] = useState({});
const [menu,setMenu] = useState('');

const navigate = useNavigate();

console.log('🎃🎃',menu,menuopen)

const toggleSubmenu = (label,submenu,mainpath) => {
  setMainmenu(label);
  if(!submenu){
    navigate(mainpath)
  }
  setOpenSubmenus((prev) => ({
    ...prev,
    [label]: !prev[label],
  }));
};


const handleMenu = (label,path) => {
  setMenu(label);
  navigate(path);
   setMenuopen(false);
}


 const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMenuopen(false);
      }
    }

    if (menuopen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuopen, setMenuopen]);
  const {isLaptop} = useWindowSize();

  return (
 <>


<div class=" flex  justify-start bg-gray-100 relative ">
		<div ref={sidebarRef} class={`${menuopen ? 'block' : 'hidden'} xl:block absolute xl:relative w-[280px] h-[98vh] xl:h-auto p-4
     bg-white rounded-0 xl:rounded-2xl shadow-xl/20 ml-0 xl:ml-3 mt-0 xl:mt-6 mb-0 xl:mb-6 mr-0 xl:mr-6 pl-[0px] z-9999`}>
		  <div className='flex justify-center '>
        <img src={logo} className='w-[175px]' />
      </div>

       <div className={`divmainMenu mt-10 overflow-y-auto pr-2 ${isLaptop ?'h-[500px]' : 'h-[690px]'}`}>
      {menus && menus.map((item) => (
  <div key={item.label}>
    <p className='pr-3 pt-3 pb-3 pl-8 text-gray-500 text-sm'>{item.label}</p>

    <div className='subMenu block'>
      {item.mainmenu.map((main) => (
        <div key={main.label}>
          {/* Main Menu Label (Clickable) */}
          <p
            className="relative pr-3 pt-3 pb-3 pl-8 group overflow-hidden cursor-pointer flex justify-between items-center"
            onClick={() => toggleSubmenu(main.label,main.submenu,main.mainpath)}
          >
            <span className={`absolute inset-0 bg-gradient-to-r from-[#e0f0fb] to-[#128ede] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-tr-2xl rounded-br-2xl ${mainmenu === main.label ? 'translate-x-0 transition-transform  rounded-tr-2xl rounded-br-2xl' : ''}`}></span>
            <span className="relative flex z-10 group-hover:text-[#128ede] transition-colors duration-500">
              <p className='mr-2'>{main.icon}</p> {main.label}
            </span>
            {main.submenu && <span className='z-10'>{openSubmenus[main.label] ? <FaChevronUp /> : <FaChevronDown />}</span>}
            
          </p>

          {/* Submenu - Conditionally Rendered */}
         {main.submenu && (
  <div
    className={`ml-5 overflow-hidden transition-all duration-500 ease-in-out ${
      openSubmenus[main.label] ? 'max-h-[999px] opacity-100' : 'max-h-0 opacity-0'
    }`}
  >
    {main.submenu.map((smenu) => (
      <div key={smenu.s_label} className={`p-2 flex items-center gap-2 ${menu === smenu.s_label ? 'text-[#128ede]' : null}`} onClick={()=>handleMenu(smenu.s_label,smenu.path)}>
        <p><GoDotFill size={14} /></p>
        <p>{smenu.s_label}</p>
      </div>
    ))}
  </div>
)}

        </div>
      ))}
    </div>
  </div>
))}

      
       
      </div>

      <div className='bg-[#E5F3FB] rounded-[5px] m-4 flex justify-between items-center'>
      <div className='flex items-center p-3 gap-3'>
         <img className="w-13 h-13 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition" src={profile} />
        <div>
            <p className="font-bold">Mike Nileson</p>
            <p className="text-sm text-[#8d959b]">Admin</p>
         </div>
      </div>
      <div className='pr-1'>
        <span><AiOutlineLogout color='#0085DB' size={25} /></span>
      </div>
      </div>
		</div>

    <div className='w-full xl:w-[80%] h-[100vh] overflow-y-auto'>
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