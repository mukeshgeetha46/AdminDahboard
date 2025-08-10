import React from 'react'
import BreadCrums from '../../pages/HeaderMenu/HeaderMenu'
import class1 from '../../assets/class/jquery-xu6DRiAK.png'
import class2 from '../../assets/class/bootstrap-DFI8mf-U.png'
import class3 from '../../assets/class/flutter-CQzfZJ0A.png'
import class4 from '../../assets/class/js-33HrBDUB.png'
import class5 from '../../assets/class/vuejs-DHk7VLHO.png'
import class6 from '../../assets/class/python-DA0lPrPN.png'
import class7 from '../../assets/class/download.jpg'
import { FaRegClock } from "react-icons/fa6";
import Profile from '../../assets/Profile/user-2-BtZPKsUg.jpg'
import { RiBook2Line } from "react-icons/ri";

const Class = () => {

    const classes = [
        {
            id:1,
            img:class1,
            title:'Bootstrap Classes',
            description:'Flutter & Firebase: Build a Complete App for iOS',
            lesson:'8 lessons',
            time:'18h 20m',
            username:'Dr. Angela Burr',
            userprofile:Profile
        },
        {
            id:1,
            img:class2,
            title:'Bootstrap Classes',
            description:'Flutter & Firebase: Build a Complete App for iOS',
            lesson:'8 lessons',
            time:'18h 20m',
            username:'Dr. Angela Burr',
            userprofile:Profile
        },
        {
            id:1,
            img:class3,
            title:'Bootstrap Classes',
            description:'Flutter & Firebase: Build a Complete App for iOS',
            lesson:'8 lessons',
            time:'18h 20m',
            username:'Dr. Angela Burr',
            userprofile:Profile
        },
        {
            id:1,
            img:class4,
            title:'Bootstrap Classes',
            description:'Flutter & Firebase: Build a Complete App for iOS',
            lesson:'8 lessons',
            time:'18h 20m',
            username:'Dr. Angela Burr',
            userprofile:Profile
        },
        {
            id:1,
            img:class5,
            title:'Bootstrap Classes',
            description:'Flutter & Firebase: Build a Complete App for iOS',
            lesson:'8 lessons',
            time:'18h 20m',
            username:'Dr. Angela Burr',
            userprofile:Profile
        },
        {
            id:1,
            img:class6,
            title:'Bootstrap Classes',
            description:'Flutter & Firebase: Build a Complete App for iOS',
            lesson:'8 lessons',
            time:'18h 20m',
            username:'Dr. Angela Burr',
            userprofile:Profile
        },
        {
            id:1,
            img:class7,
            title:'Bootstrap Classes',
            description:'Flutter & Firebase: Build a Complete App for iOS',
            lesson:'8 lessons',
            time:'18h 20m',
            username:'Dr. Angela Burr',
            userprofile:Profile
        },
    ]

  return (
    <div>
      <BreadCrums title={`Classes`} Breadcrums1={`Home`} Breadcrums2={`Classes`} /> 

      <div className='bg-white rounded-2xl shadow p-5 mt-5'>
        <div className='flex justify-between items-center'>
            <p className='text-[18px] leading-[25px] font-semibold'>Todays Classes</p>
        <button className='bg-[#0085DB] rounded-full text-white pl-4 pt-2 pr-4 pb-2 flex justify-center items-center gap-2'>
                     
                      Add Classes
                    </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 mt-5 gap-5">

          {
            classes.map((item,index)=>(
                <div key={index} className='col-span-3 md:col-span-2 xl:col-span-1'>
            <img src={item.img} className='rounded-t-2xl sh w-full' alt="" />
            <div className='rounded-b-2xl shadow p-7'>
              <p className='text-[14px] leading-[17px] text-[#707A82]'>{item.title}</p>
              <p className='text-[18px] leading-[25px] font-semibold mt-3'>{item.description}</p>
               <div className='flex items-center gap-5 text-[#707A82] my-4'>
                <p className='flex items-center gap-2'><span><FaRegClock /></span>{item.lesson}</p>
                <p className='flex items-center gap-2'>/</p>
               <p className='flex items-center gap-2'><span><RiBook2Line /></span>{item.time}</p>
               </div>
                 <div className='flex items-center gap-5'>
                      <img 
                        className='w-12 h-12 rounded-full object-cover hover:bg-gray-300 cursor-pointer transition' 
                        src={Profile} 
                        alt={'profile'} 
                      />
                      <div>
                        <p className='text-[14px] leading-[17px] font-medium'>{item.username}</p>
                       
                      </div>
                    </div>
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Class
