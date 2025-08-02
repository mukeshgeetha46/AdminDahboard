// // src/config/menus.js

import { FaRegNoteSticky, FaRegUser } from 'react-icons/fa6';
import { TbDashboard,VscDashboard,IoCallOutline,SiBlogger,AiOutlineShoppingCart, BsChatDots,MdOutlineEmail,BsKanbanFill,IoPricetagsOutline,
  FaQuestionCircle,IoSettingsOutline
 } from '../icons/index'



const menus = [
    {
      label: 'HOME',
      class: 'menutitle',
      mainmenu: [
        { label: 'Dashboard', class: 'menu',icon:<TbDashboard size={25} />,mainpath:"/" },
      ],
    },
    {
      label: 'APPS',
      class: 'menutitle',
      mainmenu: [
        { label: 'Contact', class: 'menu',icon:<IoCallOutline size={25} /> },
        { 
          label: 'Blog',
          class: 'menu',
          icon:<SiBlogger size={25} />,
          submenu:[
            {s_label:'Posts',path:'blog'},
            {s_label:'Detail',path:'blog/blogdetails'},
          ]
         },
        { label: 'E-Commerse', class: 'menu',icon:<AiOutlineShoppingCart size={25} />, submenu:[
          {s_label:'Shop One',path:'/ecommerce/products-one'},
          {s_label:'Details One',path:'/ecommerce/product/detail/show'},
          {s_label:'List',path:'/ecommerce/checkout'},
          {s_label:'Checkout',path:'/ecommerce/checkout'},
          {s_label:'Add Product',path:'/ecommerce/add-product'},
          {s_label:'Edit Product',path:'/ecommerce/add-product'},
        ] },
        { label: 'Users Profile', class: 'menu',icon:<FaRegUser size={25} />, submenu:[
          {s_label:'Profile One',path:'/user/profileone'},
          {s_label:'Profile two',path:'/user/profileone'},
        ] },
        { label: 'Charts', class: 'menu',icon:<BsChatDots size={25} /> },
        { label: 'Notes', class: 'menu',icon:<FaRegNoteSticky size={25} />,mainpath:"/notes" },
        { label: 'Email', class: 'menu',icon:<MdOutlineEmail size={25} />,mainpath:"/email" },
        { label: 'Kanban', class: 'menu',icon:<BsKanbanFill size={25} />,mainpath:"/kanban" },
        
      ],
    },
    {
      label: 'PAGES',
      class: 'menutitle',
      mainmenu: [
        { label: 'Pricing', class: 'menu',icon:<IoPricetagsOutline size={25} />,mainpath:"/pages/pricing" },
        { label: 'FAQ', class: 'menu',icon:<FaQuestionCircle size={25} />,mainpath:"/pages/faq" },
        { label: 'Account Setting', class: 'menu',icon:<IoSettingsOutline size={25} />,mainpath:"/pages/account-settings" },
      ],
    },
  
  ];
  
  export default menus;