import React from 'react'
import Profile from '../../pages/Profile/Profile';
import profile from '../../assets/Profile/user-10-BtaXUAQO.jpg'
import { IoLocationOutline } from 'react-icons/io5';
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from 'react-icons/fa';
import { CiTwitter } from "react-icons/ci";
import { FiGithub } from 'react-icons/fi';

const Projects = () => {

  const team = [
  { name: "Edwin Sharp", role: "Comptroller" },
  { name: "Aarav Mehta", role: "Developer" },
  { name: "Ishita Rao", role: "Manager" },
  { name: "Vihaan Nair", role: "Assistant Manager" },
  { name: "Anaya Patel", role: "Executive" },
  { name: "Vivaan Shah", role: "Project Manager" },
  { name: "Diya Kapoor", role: "UI/UX Designer" },
  { name: "Krishna Verma", role: "Backend Developer" },
  { name: "Rohan Sen", role: "Frontend Developer" },
  { name: "Sneha Iyer", role: "HR Executive" },
  { name: "Yashwant Reddy", role: "Technical Lead" },
  { name: "Meera Joshi", role: "QA Engineer" },
  { name: "Tanvi Malhotra", role: "Business Analyst" },
  { name: "Siddharth Desai", role: "Data Scientist" },
  { name: "Nikita Shukla", role: "Content Strategist" },
  { name: "Karan Bansal", role: "Mobile Developer" },
  { name: "Pooja Mishra", role: "Product Manager" },
  { name: "Harsh Vardhan", role: "Marketing Head" },
  { name: "Aisha Khan", role: "Customer Success Manager" },
  { name: "Rahul Chauhan", role: "DevOps Engineer" },
].map(member => ({
  ...member,
avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(member.name)}`
}));



  return (
   <div className='flex justify-center items-center'>
        <div className='mt-85 lg:mt-38 w-[96%] px-0 lg:px-5 py-5'>
           <div className='flex items-center gap-2'>
             <p className='text-[24px] leading-[32px] font-semibold'>Friends </p>
             <p className={`w-7 h-7 flex items-center justify-center rounded-full bg-[#707A82] cursor-pointer transition text-[12px] text-white`}>
                  20
                   </p>
           </div>
      <div className='grid grid-cols-3 gap-5 mt-5'>
      {team.map((member, index) => (
  <div key={index} className='col-span-3 md:col-span-2 lg:col-span-1 bg-white rounded-2xl shadow'>
    <div className='flex justify-center items-center pl-6 pt-6 pr-6 pb-6'>
      <div className='flex flex-col items-center'>
          <img
          className='w-20 h-20 rounded-full bg-gray-100'
          src={member.avatar}
          alt={member.name}
        />
        <p className='text-[18px] leading-[25px] font-semibold flex items-center mt-2'>
          {member.name}
        </p>
        <p className='text-[12px] leading-[16px] font-medium'>{member.role}</p>
      </div>
    </div>
    <div className='bg-[#E5F3FB] flex justify-center items-center gap-4 p-4'>
      <span><LuFacebook color='#1991df' /></span>
      <span><FaInstagram color='#fb977d' /></span>
      <span><FiGithub color='#48caeb' /></span>
      <span><CiTwitter color='#747e86' /></span>
    </div>
  </div>
))}
        </div>
        </div>
       
       </div>
  )
}

export default Projects
