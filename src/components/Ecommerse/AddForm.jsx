import React, { useState } from 'react'
import { BsDot } from "react-icons/bs";
import MyEditor from '../../utils/MyEditor';


const AddFormEcommerse = () => {

  const [tab,setTab] = useState('General');

  const formTab = ['General','Advanced'];
 console.log('tab',tab);
 
  return (
    <div>
      <div className='AddformHeading bg-white rounded-2xl shadow p-6 flex flex-col lg:flex-row justify-between items-center'>
        <p className='text-[20px] leading-[25.5px] font-semibold'>Add Product</p>

        <div className='flex justify-center items-center gap-3'>
            <p className='text-[14px] leading-[17.6px]'>Dashboard</p>
            <p className='text-[14px] leading-[17.6px] flex justify-center items-center'><BsDot /></p>
            <p className='text-[14px] text-[#e4e6e8] leading-[17.6px]'>Add Product</p>
        </div>
      </div>

      <div className='tab flex items-center mt-5 gap-2'> 
        {
          formTab.map((tabdata)=>(
            <p className={`text-[16px] leading-[19.2px] p-4 ${tab === tabdata ? 'text-[#0085db] border-b border-[#0085db]' : ''}`} onClick={()=>setTab(tabdata)}>{tabdata}</p>
          ))
        }
        
      </div>

      <div className='divcontent'>
        <div className='grid grid-cols-4 gap-5'>
           <div className='col-span-4 lg:col-span-3 '>
<div className="grid grid-rows-4 gap-2">
  <div className="row-span-3 bg-white rounded-2xl shadow h-[520px] mt-10">

     <h5 className=' font-semibold pt-8 pl-8'>General</h5>

      <div className='p-8 flex flex-col justify-center gap-1'>
        <p className='text-[16px] leading-[24px]'>Product Name <span className='text-red-500'>*</span></p>
        <input type="text" name="" id="" placeholder='Product Name' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full' />
        <p className='text-[12px] leading-[22px]'>A product name is required and recommended to be unique.</p>
      </div>

      <div className='pl-8 pr-8'>
         <p className='text-[16px] leading-[24px] '>Description</p>
        <MyEditor />
        <p className='text-[12px] leading-[22px] mt-2'>A product name is required and recommended to be unique.</p>
      </div>
  </div>
  <div className="row-span-1">11</div>
  <div className="row-span-1">Content 3</div>
  <div className="row-span-1">Content 4</div>
      </div>
           </div>
           <div className='col-span-4 lg:col-span-1'>
<div className="grid grid-rows-4 gap-2">
  <div className="row-span-3 bg-amber-700">11</div>
  <div className="row-span-1 bg-blue-300">11</div>
  <div className="row-span-1 bg-green-300">Content 3</div>
  <div className="row-span-1 bg-pink-300">Content 4</div>
      </div>
           </div>
        </div>
      

      </div>
    </div>
  )
}

export default AddFormEcommerse
