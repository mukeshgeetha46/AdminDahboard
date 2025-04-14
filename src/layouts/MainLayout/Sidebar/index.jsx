import '../Sidebar/sidebar.css';
import logo from '../../../assets/sidebar/logo-dark-C4P0U4PI.svg';
import menus from '../../../config/menus';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { GoDotFill } from 'react-icons/go';
import profileLogo from '../../../assets/sidebar/user6-iQEKvgW-.jpg'
import { IoMdLogOut } from "react-icons/io";
import { HiOutlineMenuAlt2 } from '../../../icons/index'
import TopNavbar from '../TopNavbar';



const Sidebar = () => {
 
  const [submenuopen,setSubmenuopen] = useState(false);
  const [clickedMenu,setClickedmenu] = useState('Dashboard');
  const [SelectedSubMenu,setSelectedSubMenu] = useState('');


  const handelMenuClick = (menu) => {
    setClickedmenu(menu.label);
    if(menu.submenu){
      setSubmenuopen(true);
    }
  }
  const handelSubMenuClick = (items) => {
    setSelectedSubMenu(items.s_label);
  }


  return (
   <>
   <div style={{ display:"flex",width:'100%' }}>
     <div className="sidebar">
     <aside>
      <div className="">
        <div className="logo">
          <img src={logo} width={190} height={44} alt="logo" />
        </div>
      </div>

     
       <div className='scrollMenu' style={{ height:"600px",overflow:"auto" }}>
       {menus.map((menu, index) => (
           <div className="main_menu" >
          <div key={index}>
            <p className={menu.class}>{menu.label}</p>
            {menu.mainmenu.map((m, i) => (
               <div>
                <div className='main-items' onClick={()=>handelMenuClick(m)} style={
                clickedMenu === m.label
                  ? { backgroundColor: 'rgb(224 240 251)', borderRadius: '0 20px 20px 0',color:'#1991df' }
                  : {}
              }>
               <div className='menus'>
                <p key={i} className="menu-icon">{m.icon}</p>
                <p key={i} className={m.class}>{m.label}</p>
              </div>

              {
              m.submenu && (
            <div style={{margin:"20px"}} onClick={()=>setSubmenuopen(!clickedMenu)}>
            {m.submenu && submenuopen && m.label == clickedMenu ? <IoIosArrowUp size={20} /> : <MdOutlineKeyboardArrowDown size={20} />}
           </div>
         )
         }
            
               </div>

               <div className={`submenu-wrapper ${submenuopen && m.label === clickedMenu ? 'open' : ''}`}>
  {m.submenu && submenuopen && m.label === clickedMenu && (
    m.submenu.map((items, idx) => (
      <div className="submenulist" key={idx} onClick={()=>handelSubMenuClick(items)} style={SelectedSubMenu == items.s_label ? {color:"#1991df"} : {color:"gray"}}>
        <p><GoDotFill color={SelectedSubMenu == items.s_label ? '#1991df' : 'black'} /></p>
        <p style={{ marginLeft: "23px" }}>{items.s_label}</p>
      </div>
    ))
  )}
</div>

               </div>

              
            ))}


          </div>
            
     
           </div>
        ))}
       </div>
     
    </aside>


    <div className='bottomContainer'>
        <div className='b_logo'>
        <img src={profileLogo} height={50} width={50} />
        </div>

        <div className='userdata'>
          <p>Mike Nielsen</p>
          <p>Admin</p>
        </div>
        <div className='logout_logo'>
            <IoMdLogOut size={25} />
        </div>
    </div>
   </div>
   {/* <TopNavbar  /> */}
   
   </div>
   
   </>
  );
};

export default Sidebar;
