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
        { label: 'Charts', class: 'menu',icon:<BsChatDots size={25} /> },
        { label: 'User Profile', class: 'menu',icon:<FaRegUser size={25} /> },
      ],
    },
  
  ];
  
  export default menus;