import React from 'react'
import Circleicon from '../../pages/CircleIcon/Circleicon'
import Profile from '../../pages/Profile/Profile'
import profile from '../../assets/Main/user3-CoJW3aN6.jpg'
import { IoLocationOutline } from "react-icons/io5";

const Teams = () => {

 const people = [
  { name: "Aarav", place: "Mumbai", followed: true },
  { name: "Ishita", place: "Delhi", followed: true },
  { name: "Vihaan", place: "Bangalore", followed: true },
  { name: "Anaya", place: "Hyderabad", followed: true },
  { name: "Vivaan", place: "Ahmedabad", followed: true },
  { name: "Diya", place: "Chennai", followed: true },
  { name: "Krishna", place: "Pune", followed: true },
  { name: "Meera", place: "Kolkata", followed: true },
  { name: "Rohan", place: "Jaipur", followed: true },
  { name: "Saanvi", place: "Lucknow", followed: true },
  { name: "Arjun", place: "Bhopal", followed: true },
  { name: "Kavya", place: "Surat", followed: true },
  { name: "Dev", place: "Nagpur", followed: true },
  { name: "Anvi", place: "Patna", followed: true },
  { name: "Yuvraj", place: "Kanpur", followed: true },
  { name: "Tanya", place: "Indore", followed: true },
  { name: "Harshit", place: "Thane", followed: true },
  { name: "Nisha", place: "Agra", followed: false },
  { name: "Aryan", place: "Rajkot", followed: false },
  { name: "Priya", place: "Varanasi", followed: false },
];



  return (
    <div className='flex justify-center items-center'>
        <div className='mt-85 lg:mt-38 w-[96%] px-0 lg:px-5 py-5'>
           <div className='flex items-center gap-2'>
             <p className='text-[24px] leading-[32px] font-semibold'>Followers</p>
             <p className={`w-7 h-7 flex items-center justify-center rounded-full bg-[#707A82] cursor-pointer transition text-[12px] text-white`}>
                  20
                   </p>
           </div>
      <div className='grid grid-cols-3 gap-5 mt-5'>
       {people.map((person, index) => (
  <div key={index} className='col-span-3 md:col-span-2 lg:col-span-1 bg-white rounded-2xl shadow p-5'>
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <Profile url={profile} wh={12} />
        <div>
          <p className='text-[18px] leading-[25.6px] font-semibold'>{person.name}</p>
          <p className='text-[14px] leading-[19px] font-semibold flex items-center gap-2 text-[#707c86]'>
            <span><IoLocationOutline /></span> {person.place}
          </p>
        </div>
      </div>

      <div>
        <button
          className={`px-6 py-2 rounded-[6px] border ${
            person.followed
              ? 'border-[#0085DB] text-[#0085DB]'
              : 'bg-[#0085DB] text-white'
          }`}
        >
          {person.followed ? 'Followed' : 'Follow'}
        </button>
      </div>
    </div>
  </div>
))}

        </div>
        </div>
       
       </div>
  )
}

export default Teams
