import React from 'react'
import BreadCrums from '../../pages/HeaderMenu/HeaderMenu'
import HeaderSearch from '../../layouts/MainLayout/Search/HeaderSearch'
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import profile from '../../assets/Profile/user-2-BtZPKsUg.jpg'
import { MdOutlineEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const Allteachers = () => {
  // Dummy data with 12 teacher entries
  const teachers = [
    {
      id: 1,
      name: "Budo Masuta",
      class: "6",
      section: "A",
      subject: "Geography",
      dob: "06/07/2007",
      phone: "+123 9988568",
      email: "sparkdoe@gmail.com",
      profileImg: profile
    },
    {
      id: 2,
      name: "Sarah Johnson",
      class: "7",
      section: "B",
      subject: "Mathematics",
      dob: "15/03/1985",
      phone: "+123 4567890",
      email: "sarahj@example.com",
      profileImg: profile
    },
    {
      id: 3,
      name: "Michael Chen",
      class: "8",
      section: "C",
      subject: "Physics",
      dob: "22/11/1978",
      phone: "+123 7890123",
      email: "michaelc@example.com",
      profileImg: profile
    },
    {
      id: 4,
      name: "Emily Wilson",
      class: "9",
      section: "A",
      subject: "English",
      dob: "30/05/1990",
      phone: "+123 2345678",
      email: "emilyw@example.com",
      profileImg: profile
    },
    {
      id: 5,
      name: "David Brown",
      class: "10",
      section: "B",
      subject: "Chemistry",
      dob: "12/09/1982",
      phone: "+123 3456789",
      email: "davidb@example.com",
      profileImg: profile
    },
    {
      id: 6,
      name: "Jessica Lee",
      class: "6",
      section: "C",
      subject: "Biology",
      dob: "08/04/1988",
      phone: "+123 4567891",
      email: "jessical@example.com",
      profileImg: profile
    },
    {
      id: 7,
      name: "Robert Taylor",
      class: "7",
      section: "A",
      subject: "History",
      dob: "19/12/1975",
      phone: "+123 5678912",
      email: "robertt@example.com",
      profileImg: profile
    },
    {
      id: 8,
      name: "Lisa Martinez",
      class: "8",
      section: "B",
      subject: "Art",
      dob: "25/07/1983",
      phone: "+123 6789123",
      email: "lisam@example.com",
      profileImg: profile
    },
    {
      id: 9,
      name: "James Wilson",
      class: "9",
      section: "C",
      subject: "Music",
      dob: "03/01/1979",
      phone: "+123 7891234",
      email: "jamesw@example.com",
      profileImg: profile
    },
    {
      id: 10,
      name: "Patricia White",
      class: "10",
      section: "A",
      subject: "Computer Science",
      dob: "14/10/1986",
      phone: "+123 8912345",
      email: "patriciaw@example.com",
      profileImg: profile
    },
    {
      id: 11,
      name: "Daniel Harris",
      class: "6",
      section: "B",
      subject: "Physical Education",
      dob: "27/02/1981",
      phone: "+123 9123456",
      email: "danielh@example.com",
      profileImg: profile
    },
    {
      id: 12,
      name: "Jennifer Clark",
      class: "7",
      section: "C",
      subject: "Economics",
      dob: "09/06/1984",
      phone: "+123 1234567",
      email: "jenniferc@example.com",
      profileImg: profile
    }
  ];

  return (
    <div>
      <BreadCrums title={`Teachers Data`} Breadcrums1={`Home`} Breadcrums2={`Teachers Data`} /> 

      <div className='bg-white rounded-2xl shadow p-5 mt-5'>
        <div className='flex justify-between items-center'>
            <HeaderSearch square={true} placeholder={'Search Teachers'} />
            <button className='bg-[#0085DB] rounded-full text-white pl-4 pt-2 pr-4 pb-2 flex justify-center items-center gap-2'>
              <span><AiOutlineUsergroupAdd size={22} /></span> 
              Add Teachers
            </button>
        </div>

        <div className='mt-10 overflow-x-auto'>
          <table className='w-full min-w-[800px]'>
            <thead>
              <tr className='border-b border-[#dfe5ef]'>
                <th className='text-left text-[14px] leading-[17px] font-semibold pb-3 w-[250px]'>Profile</th>
                <th className='text-left text-[14px] leading-[17px] font-semibold pb-3'>Sec.</th>
                <th className='text-left text-[14px] leading-[17px] font-semibold pb-3'>Subject</th>
                <th className='text-left text-[14px] leading-[17px] font-semibold pb-3'>D.O.B</th>
                <th className='text-left text-[14px] leading-[17px] font-semibold pb-3'>Phone</th>
                <th className='text-left text-[14px] leading-[17px] font-semibold pb-3'>Email</th>
                <th className='text-left text-[14px] leading-[17px] font-semibold pb-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id} className='border-b border-[#dfe5ef] hover:bg-gray-50'>
                  <td className='p-3'>
                    <div className='flex items-center gap-5'>
                      <img 
                        className='w-12 h-12 rounded-full object-cover hover:bg-gray-300 cursor-pointer transition' 
                        src={teacher.profileImg} 
                        alt={teacher.name} 
                      />
                      <div>
                        <p className='text-[14px] leading-[17px] font-semibold'>{teacher.name}</p>
                        <p className='text-[14px] leading-[17px]'>Class: {teacher.class}</p>
                      </div>
                    </div>
                  </td>
                  <td className='pb-3'><p className='text-[14px] leading-[17px]'>{teacher.section}</p></td>
                  <td className='pb-3'><p className='text-[14px] leading-[17px]'>{teacher.subject}</p></td>
                  <td className='pb-3'><p className='text-[14px] leading-[17px]'>{teacher.dob}</p></td>
                  <td className='pb-3'><p className='text-[14px] leading-[17px]'>{teacher.phone}</p></td>
                  <td className='pb-3'><p className='text-[14px] leading-[17px]'>{teacher.email}</p></td>
                  <td className='pb-3'>
                    <div className='flex items-center gap-3'>
                      <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
                        <MdOutlineEdit size={18} color='#0085DB' />
                      </button>
                      <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
                        <IoTrashOutline size={18} color='#FB977D' />
                      </button>
                      <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
                        <IoEyeOutline size={18} color='#46CAEB' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Allteachers