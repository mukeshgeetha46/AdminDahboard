import React, { useState } from 'react'
import { BsDot } from "react-icons/bs";
import MyEditor from '../../utils/MyEditor';
import { BsPaperclip } from "react-icons/bs";
import { MdInfoOutline } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import Slider from '@mui/material/Slider';
import TrackInvertedSlider from '../../utils/TrackSlider';
import preview from '../../assets/Ecommerse/preview-img-DtxRC7kT.png'
import { GoDotFill } from "react-icons/go";
import MultipleSelect from '../../utils/SelectInput';


const AddFormEcommerse = () => {

  const [tab,setTab] = useState('General');
  const [radioButton,setRadioButton] = useState('Nodiscount');

  const handleRadio = (e) => {
    setRadioButton(e.target.name)
  }

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
        <input type="text" name="" id="" placeholder='Product Name' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
        <p className='text-[12px] leading-[22px]'>A product name is required and recommended to be unique.</p>
      </div>

      <div className='pl-8 pr-8'>
         <p className='text-[16px] leading-[24px] '>Description</p>
        <MyEditor />
        <p className='text-[12px] leading-[22px] mt-2'>A product name is required and recommended to be unique.</p>
      </div>
  </div>
  <div className="row-span-1 Media bg-white rounded-2xl shadow mt-5">
      <p className='p-6 text-[18px] leading-[25px] font-semibold'>Media</p>

      <div className='flex justify-center items-center pl-6 pr-6 pb-8 gap-5'>
        <span><BsPaperclip size={20} /></span>
        <input type="text" name="" id="" placeholder='Drop File here or click to upload' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
      </div>
  </div>
  <div className="row-span-1 bg-white rounded-2xl shadow mt-5">
    <p className='p-6 text-[18px] leading-[25px] font-semibold'>Pricing</p>

    <div className='pl-6 pr-6 pb-6 flex flex-col justify-center gap-1'>
        <p className='text-[16px] leading-[24px]'>Base Price <span className='text-red-500'>*</span></p>
        <input type="text" name="" id="" placeholder='Product Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
        <p className='text-[12px] leading-[22px]'>Set the product price.</p>
      </div>

      <div className='pl-6 pr-6 pb-6'>
        <p className='text-[16px] leading-[24px] flex gap-1 items-center'>Discount Type<span> <Tooltip
    title={
    <>
      Select a discount type <br />
      that will be applied <br />
      to this product
    </>
  }
      placement="top"
      slotProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -14],
              },
            },
          ],
        },
      }}
    >
      <MdInfoOutline />
    </Tooltip></span></p>
     
     <div className='grid grid-cols-3 mt-5 gap-5'> 
       <div className='col-span-3 lg:col-span-1'>
         <div className='flex items-center gap-2 border border-[#dfe5ef] border-dashed p-4'>
          <input type="radio" name="Nodiscount" id="Nodiscount" checked={radioButton === 'Nodiscount'} onChange={handleRadio} />
          <p className='text-[16px] leading-[19.2px] font-medium'>No Discount</p>
         </div>
       </div>
       <div className='col-span-3 lg:col-span-1'>
         <div className='flex items-center gap-2 border border-[#dfe5ef] border-dashed p-4'>
          <input type="radio" name="percentage" id="percentage" checked={radioButton === 'percentage'} onChange={handleRadio} />
          <p className='text-[16px] leading-[19.2px] font-medium'>Percentage %</p>
         </div>
       </div>
       <div className='col-span-3 lg:col-span-1'>
         <div className='flex items-center gap-2 border border-[#dfe5ef] border-dashed p-4'>
          <input type="radio" name="fixedprice" id="fixedprice" checked={radioButton === 'fixedprice'} onChange={handleRadio} />
          <p className='text-[16px] leading-[19.2px] font-medium'>Fixed Price</p>
         </div>
       </div>
       
     </div>
      {
        radioButton === 'percentage' && (<TrackInvertedSlider />)
      }
      {
        radioButton === 'fixedprice' && (
           <div className='pt-6 flex flex-col justify-center gap-1'>
        <p className='text-[16px] leading-[24px]'>Fixed Discounted Price</p>
        <input type="text" name="" id="" placeholder='Discounted Price' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
        <p className='text-[12px] leading-[22px]'>Set the discounted product price. The product will be reduced at the determined fixed price.</p>
      </div>
        )
      }
     
     <div className='grid grid-cols-4 gap-3'>
      <div className='col-span-4 lg:col-span-2'>
      <div className='pt-6 flex flex-col justify-center gap-1'>
        <p className='text-[16px] leading-[24px]'>Tax Class <span className='text-red-500'>*</span></p>
        <input type="text" name="" id="" placeholder='Product Name' className='border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]' />
        <p className='text-[12px] leading-[22px]'>A product name is required and recommended to be unique.</p>
      </div>
      </div>
      <div className='col-span-4 lg:col-span-2'>
      <div className='pt-6 flex flex-col justify-center gap-1'>
        <p className='text-[16px] leading-[24px]'>VAT Amount (%)<span className='text-red-500'>*</span></p>
       <select
  className="border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]"
>
  <option value="">Select Product</option>
  <option value="product1">Product 1</option>
  <option value="product2">Product 2</option>
  <option value="product3">Product 3</option>
</select>

        <p className='text-[12px] leading-[22px]'>A product name is required and recommended to be unique.</p>
      </div>
      </div>
     </div>
     
      </div>
  </div>

 <div className='flex gap-3 pt-6'>
    <button className='bg-[#0085db] text-white pl-5 pr-5 pt-1 pb-1 rounded-[5px]'>Save Changes</button>
    <button className='bg-[#f1e9ea] text-[#faa7a0] pl-5 pr-5 pt-1 pb-1 rounded-[5px]'>Cancel</button>
 </div>
      </div>
           </div>
           <div className='col-span-4 lg:col-span-1 mt-10'>
<div className='col-span-4 lg:col-span-1'>
  <div className="flex flex-col gap-4">
    <div className="bg-white rounded-2xl shadow h-[380px]">
      <p className='text-[18px] leading-[25px] font-semibold pl-8 pr-8 pt-8'>Thumbnail</p>
      <div className='flex justify-center items-center p-5'>
        <img src={preview} className='w-[200px] shadow-2xl' alt="preview" />
      </div>
      <p className='pl-8 pr-8 pb-8 text-[12px] leading-[22px]'>
        Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow">
      <div className='flex justify-between items-center p-5'>
        <h5 className='text-[22px] leading-[24px] font-semibold'>Status</h5>
        <GoDotFill size={22} color='#4bd08b' />
      </div>
      <div className='px-5'>
        <MultipleSelect />
        <p className='text-[12px] leading-[22px] mt-2'>Set the product status.</p>
      </div>
    </div>
    <div className="bg-white rounded-2xl shadow h-[380px]">
      <p className='text-[18px] leading-[25px] font-semibold pl-8 pr-8 pt-8'>Thumbnail</p>
      <div className='flex justify-center items-center p-5'>
        <img src={preview} className='w-[200px] shadow-2xl' alt="preview" />
      </div>
      <p className='pl-8 pr-8 pb-8 text-[12px] leading-[22px]'>
        Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow">
      <div className='flex justify-between items-center p-5'>
        <h5 className='text-[22px] leading-[24px] font-semibold'>Status</h5>
        <GoDotFill size={22} color='#4bd08b' />
      </div>
      <div className='px-5'>
        <MultipleSelect />
        <p className='text-[12px] leading-[22px] mt-2'>Set the product status.</p>
      </div>
    </div>
  </div>
</div>

           </div>
        </div>
      

      </div>
    </div>
  )
}

export default AddFormEcommerse
