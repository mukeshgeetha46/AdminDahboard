// // src/config/menus.js

import { FaRegUser } from 'react-icons/fa6';
import { TbDashboard,VscDashboard,IoCallOutline,SiBlogger,AiOutlineShoppingCart, BsChatDots } from '../icons/index'


const menus = [
    {
      label: 'HOME',
      class: 'menutitle',
      mainmenu: [
        { label: 'Dashboard', class: 'menu',icon:<TbDashboard size={25} /> },
        { label: 'Dashboard2', class: 'menu',icon:<VscDashboard size={25} /> },
      ],
    },
    {
      label: 'Apps',
      class: 'menutitle',
      mainmenu: [
        { label: 'Contact', class: 'menu',icon:<IoCallOutline size={25} /> },
        { 
          label: 'Blog',
          class: 'menu',
          icon:<SiBlogger size={25} />,
          submenu:[
            {s_label:'Posts'},
            {s_label:'Detail'},
          ]
         },
        { label: 'E-Commerse', class: 'menu',icon:<AiOutlineShoppingCart size={25} />, submenu:[
          {s_label:'Shop One'},
          {s_label:'Shop Two'},
          {s_label:'Details One'},
          {s_label:'Details Two'},
          {s_label:'List'},
          {s_label:'Checkout'},
        ] },
        { label: 'Charts', class: 'menu',icon:<BsChatDots size={25} /> },
        { label: 'User Profile', class: 'menu',icon:<FaRegUser size={25} /> },
      ],
    },
  
  ];
  
  export default menus;