import React from 'react'
import profile from '../../assets/Teachers/2-au8ntQHJ.jpg'

const TeacherDetail = () => {
  return (
     <div className='divcontent'>
            <div className='grid grid-cols-9 gap-5'>
                 <div className='col-span-9 lg:col-span-3 mt-10'>
    <div className='col-span-9 lg:col-span-3'>
      <div className="flex flex-col gap-4">
        <div className="bg-white rounded-2xl shadow h-[380px] p-8">
           <div className='flex flex-col justify-center items-center'>
            <img src={profile} className='w-[130px] h-[130px] rounded-[10px] shadow' alt="" />
            <p className='text-[18px] leading-[25px] font-semibold'>John Mednath</p>
                <span className='text-[12px] leading-[17px] text-[#0085DB] bg-[#e0f0fa]'>Teacher</span>
           </div>
        </div>
    
      
      </div>
    </div>
    
               </div>
               <div className='col-span-9 lg:col-span-6 '>
    <div className="grid grid-rows-9 gap-2">
      <div className="row-span-3 bg-white rounded-2xl shadow h-[520px] mt-10">
    1
      </div>
     
    
    
          </div>
               </div>
              
    
               
            </div>
          
   
          </div>
  )
}

export default TeacherDetail
