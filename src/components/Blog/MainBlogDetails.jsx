import React from 'react'
import divbackground3 from '../../assets/blog/62afd8e7-96a6-425a-afea-232475d1ba26.png'
import profile from '../../assets/Main/user2-CcvFtdw4.jpg'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { BiMessageDetail } from 'react-icons/bi'
import { GoDot } from 'react-icons/go'

const MainBlogDetails = () => {
  return (

    <div>
        <div className="bg-no-repeat bg-cover bg-center h-[370px] flex flex-col justify-end items-end shadow-2xl rounded-tl-2xl rounded-tr-2xl" style={{
               backgroundImage: `url(${divbackground3})`,
            }}>
   
             <div className=' absolute top-[66%] right-[94%]'>
                <img className="w-11 h-11 rounded-full hover:bg-gray-300 cursor-pointer transition  ml-5 mb-5" src={profile} />
             </div>
               <p className='relative z-10 pl-3 pr-3 pt-1 pb-1 bg-[white] text-black rounded-2xl text-[14px] w-[70px] h-[30px] m-3'>Gadget</p>
                 
                </div>
                <div className='bg-white'>
                     <div className='flex justify-between items-center m-5'>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'>
                   <p className=''><MdOutlineRemoveRedEye /></p>  
                   <p>8769</p>
                </div>
                <div className='flex items-center gap-2'>
                   <p className=''><BiMessageDetail /></p>  
                   <p>3</p>
                </div>
                </div>   

                <div>
                   <div className='flex items-center'>
                   <p className=''><GoDot  size={20}/></p>  
                   <p>Tue, Jun 24</p>
                </div>
                </div>

         
            </div>
                </div>
    </div>

  )
}

export default MainBlogDetails
