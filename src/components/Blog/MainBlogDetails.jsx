import React from 'react'
import divbackground3 from '../../assets/blog/62afd8e7-96a6-425a-afea-232475d1ba26.png'
import profile from '../../assets/Main/user2-CcvFtdw4.jpg'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { BiMessageDetail } from 'react-icons/bi'
import { GoDot } from 'react-icons/go'
import { GoDotFill } from "react-icons/go";
import { HiReply } from "react-icons/hi";


const MainBlogDetails = () => {
  return (

    <div>
      <div className='bg-white rounded-2xl shadow-2xl'>
        <div className="relative bg-no-repeat bg-cover bg-center h-[370px] flex flex-col justify-end items-end rounded-tl-2xl rounded-tr-2xl" style={{
               backgroundImage: `url(${divbackground3})`,
            }}>
   
             <div className=' absolute top-[94%] right-[94%]'>
                <img className="w-11 h-11 rounded-full hover:bg-gray-300 cursor-pointer transition  ml-5 mb-5" src={profile} />
             </div>
               <p className='relative z-10 pl-3 pr-3 pt-1 pb-1 bg-[white] text-black rounded-2xl text-[14px] w-[70px] h-[30px] m-3'>Gadget</p>
                 
                </div>

            <div className='p-7 flex flex-col justify-between gap-5 border-b border-[#e5eaef]'>
              <p className='relative z-10 pl-3 pr-3 pt-1 pb-1 bg-[#707a82] text-white rounded-2xl text-[14px] w-[70px] h-[30px] m-3'>Gadget</p>  

              <p className="font-medium text-[36px] leading-[44px] tracking-[-0.5625px] text-[#111C2D] font-['Plus Jakarta Sans']">Garmins Instinct Crossover is a rugged hybrid smartwatch</p>

               <div className='flex justify-between items-center '>
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

            <div className='p-4 ml-1 flex flex-col gap-5'>
                <p className="font-medium text-[30px] leading-[36px] tracking-[-0.5625px] text-[#111C2D] font-['Plus Jakarta Sans']">Title of the paragraph</p>
                <p className="text-[16px] leading-[24px] tracking-[-0.4375px] text-[#111C2D] font-['Plus Jakarta Sans'] font-normal">But you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p>
                <p className="text-[16px] leading-[24px] tracking-[-0.4375px] text-[#111C2D] font-['Plus Jakarta Sans'] font-normal">Gigure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the</p>

                <div>
                  <p className="text-[14px] leading-[20px] tracking-[-0.13125px] text-[#000000] font-['Plus Jakarta Sans'] font-bold">This is strong text.</p>
                  <p className="text-[14px] leading-[20px] tracking-[-0.13125px] text-[#000000] font-['Plus Jakarta Sans'] font-normal">This is italic text.</p>
                </div>
                
            </div>

            <div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-[97%]" />
            
            <div className='p-4 mt-5'>
                <p className="font-medium text-[30px] leading-[36px] tracking-[-0.5625px] text-[#111C2D] font-['Plus Jakarta Sans']">Unorder list.</p>
                  <div className='p-5'>
                     <li>Gigure out what it is or</li>
                <li>The links it currently</li>
                <li>It allows you to start your bid</li>
                <li>Gigure out what it is or</li>
                <li>The links it currently</li>
                <li>Gigure out what it is or</li>
                  </div>
            </div>
             <div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-[97%]" />
            <div className='p-4 mt-5'>
                <p className="font-medium text-[30px] leading-[36px] tracking-[-0.5625px] text-[#111C2D] font-['Plus Jakarta Sans']">Order list.</p>
                  <div className='p-5'>
                     <li>Gigure out what it is or</li>
                <li>The links it currently</li>
                <li>It allows you to start your bid</li>
                <li>Gigure out what it is or</li>
                <li>The links it currently</li>
                <li>Gigure out what it is or</li>
                  </div>
            </div>
            <div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-[97%]" />

            <div className='p-4 mt-5'>
                <p className="font-medium text-[30px] leading-[36px] tracking-[-0.5625px] text-[#111C2D] font-['Plus Jakarta Sans']">Quotes</p>
                  <p className="text-[16px] leading-[24px] tracking-[-0.4375px] text-[#111C2D] font-['Plus Jakarta Sans'] font-bold p-5" >Life is short, Smile while you still have teeth!
</p>
            </div>
               
    </div>

     <div className='w-full flex justify-center items-center'>
       <div className=' rounded-2xl bg-white shadow-1xl mt-5 flex flex-col items-center'>
    <div className='w-full flex items-start'>
       <div className='flex justify-start items-center'>
      <p className="font-medium text-[20px] leading-[26.6px] tracking-[-0.5625px] text-[#111C2D] font-['Plus Jakarta Sans'] pl-5 pt-5 pb-5 pr-2">Comments</p>
     <p className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 cursor-pointer transition text-[12px] text-white">
             7
             </p>
     </div>
    </div>
       {
           Array.from({ length: 10 }, (_, i) => (
<div className='border border-[#e5eaef] rounded-2xl w-[97%] flex flex-col gap-2 p-4 ml-2 mb-5'>
      <div className='flex justify-start items-center'>
         <img className="w-9 h-9 rounded-full hover:bg-gray-300 cursor-pointer transition m-3" src={profile} />
         <div className='flex'>
            <p>Maurice Carlson</p>
         <p className='flex items-center ml-2 text-[#a4aaaf]'> <GoDotFill size={12} color='#7f7f7f' /> Sun, Apr 15</p>
         </div>
      </div>

      <p className='pl-5 pr-5'>Lalid cadwew juwog caitbok nutanok jivi kelu mophiona kaju zoomubu kokjuvek bog gogni oc pim. Ruj cisiv ri uvuzo gaejoges pakod bug jejbu fol hacneh rekferaw gek sigum piljimap un codvo venagow.</p>

       <div className='pl-5 pr-5'>
          <p className="w-8 h-8 flex items-center justify-center rounded-full bg-[#707a82] cursor-pointer transition text-[12px] text-white ">
            <HiReply />
             </p>
       </div>
     </div>
           ))
       }
     
    </div>
     </div>
    </div>

  )
}

export default MainBlogDetails
