import React from 'react'
import { IoAddOutline } from "react-icons/io5";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";


const Menu = () => {
  return (
    <div className='bg-white shadow-md w-[120px] flex justify-center gap-2'>

     <div className='icon flex flex-col justify-between items-start'>
      <p className='pl-2 pt-2 pb-2'><IoAddOutline size={23}/></p>
      <p className='pl-2 pt-2 pb-2'><LiaEdit size={23}/></p>
      <p className='pl-2 pt-2 pb-2'><RiDeleteBin6Line size={23}/></p>
     
    
     </div>
     <div className='icon flex flex-col justify-between items-start'>
      <p className='pt-2 pb-2 pr-2'>Add</p>
      <p className='pt-2 pb-2 pr-2 flex justify-start'>Edit</p>
      <p className='pt-2 pb-2 pr-2'>Delete</p>
     </div>

      
    </div>
  )
}

export default Menu


