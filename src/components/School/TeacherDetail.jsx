import React, { useState } from 'react'
import profile from '../../assets/Teachers/2-au8ntQHJ.jpg'
import { TiTick } from "react-icons/ti";
import { HiOutlineChip } from "react-icons/hi";
import Border from '../../pages/Border/Border'
import { MdOutlineEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import SalaryReport from './SalaryReport';
const TeacherDetail = () => {

  const userData = [
  { label: 'Name:', value: 'John Mednath' },
  { label: 'Gender:', value: 'Female' },
  { label: 'Class:', value: '11 (Science)' },
  { label: 'Section:', value: 'B' },
  { label: 'Date Of Birth:', value: '03/08/1993' },
  { label: 'Id No.:', value: '498376' },
  { label: 'Phone:', value: '+ 123 9988568' },
  { label: 'Email:', value: 'johnmednath@gmail.com' }
];

const [tab,setTab] = useState('teacherskill');

const handletab = (tabs) => {
  setTab(tabs)
}

 const teachers = [
  {
    id: 1,
    code: "Budo Masuta",
    subjectName: "Geography",
    grade: "A",
    marks: "90%",
    color:'#4BD08B'
  },
  {
    id: 2,
    code: "Budo Masuta",
    subjectName: "Mathematics",
    grade: "B",
    marks: "80%",
    color:'#F8C076'
  },
  {
    id: 3,
    code: "Budo Masuta",
    subjectName: "Science",
    grade: "C",
    marks: "70%",
     color:'#FB977D'
  },
  {
    id: 4,
    code: "Budo Masuta",
    subjectName: "English",
    grade: "E",
    marks: "50%",
     color:'#0085DB'
  },
  {
    id: 5,
    code: "Budo Masuta",
    subjectName: "Biology",
    grade: "F",
    marks: "25%",
  },
];

  return (
     <div className='divcontent'>
            <div className='grid grid-cols-9 gap-5'>
                 <div className='col-span-9 lg:col-span-3 mt-10'>
    <div className='col-span-9 lg:col-span-3'>
      <div className="flex flex-col gap-4">
        <div className="bg-white rounded-2xl shadow p-8">
           <div className='flex flex-col justify-center items-center gap-2'>
            <img src={profile} className='w-[130px] h-[130px] rounded-[10px] shadow' alt="" />
            <p className='text-[18px] leading-[25px] font-semibold'>John Mednath</p>
                <span className='text-[12px] leading-[17px] text-[#0085DB] bg-[#e0f0fa] pl-2 pr-2 pt-1 pb-1 rounded-full'>Teacher</span>
           </div>

           <div>
          
         <div className='flex justify-between items-center mt-8'>
             <div className='flex items-center gap-2'>
             <span className='w-13 h-13 rounded-full bg-[#DFFFF3] flex items-center justify-center text-white'><TiTick color='#4BD08B' size={24} /></span>
             <div>
              <p className='text-[18px] leading-[25px] font-semibold'>1.23k</p>
              <p className='text-[14px] leading-[17px] text-[#707A82]'>Tasks Done</p>
             </div>
          </div>
          <div className='flex items-center gap-2'>
             <span className='w-13 h-13 rounded-full bg-[#DFFFF3] flex items-center justify-center text-white'><HiOutlineChip color='#4BD08B' size={24} /></span>
             <div>
              <p className='text-[18px] leading-[25px] font-semibold'>1.23k</p>
              <p className='text-[14px] leading-[17px] text-[#707A82]'>Tasks Done</p>
             </div>
          </div>
         </div>

         <div className='mt-7'>
           <p className='text-[14px] leading-[17px] font-semibold'>Details</p>
         </div>
        <Border width={100} mt={4} />

        <div className='data mt-5 flex flex-col gap-5'>
  {userData.map((item, index) => (
    <div key={index} className='flex items-center gap-2'>
      <p className='text-[14px] leading-[17px] font-semibold'>{item.label}</p>
      <p className='text-[14px] leading-[17px] text-[#707A82]'>{item.value}</p>
    </div>
  ))}
        </div>

        <div className='flex justify-between items-center gap-5 mt-5'>
<button className='bg-[#0085DB] text-white rounded-full pl-4 pt-2 pr-4 pb-2 w-[50%] text-center shadow-[0_4px_12px_0_rgba(0,133,219,0.4)]'>
  Edit
</button>

<button className='bg-[#FB977D] text-white rounded-full pl-4 pt-2 pr-4 pb-2 w-[50%] text-center shadow-[0_4px_12px_0_rgba(251,151,125,0.4)]'>
  Delete
</button>

        </div>

           </div>
        </div>
    
      
      </div>
    </div>
    
               </div>
               <div className='col-span-9 lg:col-span-6 '>
    <div className="grid grid-rows-6 gap-2 mt-5">
      
      <div className="row-span-1 pl-5 pt-5 pr-5 pb-3">
       <div className='flex items-center gap-5'>
<button className={`${tab === 'teacherskill' ? 'bg-[#0085DB] text-white rounded-full pl-4 pt-2 pr-4 pb-2 text-center shadow-[0_4px_12px_0_rgba(0,133,219,0.4)]' : 'text-[16px] leading-[19px]'}`} onClick={()=>handletab('teacherskill')}>
  Teacher Skill
</button>

<button className={`${tab === 'salary' ? 'bg-[#0085DB] text-white rounded-full pl-4 pt-2 pr-4 pb-2 text-center shadow-[0_4px_12px_0_rgba(0,133,219,0.4)]' : 'text-[16px] leading-[19px]'}`} onClick={()=>handletab('salary')}>
  Salary
</button>

        </div>
      </div>
     
      {tab === 'teacherskill' && (
        <div className="row-span-5 bg-white rounded-2xl shadow p-6">
       <p className='text-[18px] leading-[25px] font-semibold'>Teacher Skill</p>
       <Border width={100} mt={4} />

       <div className='tables mt-8 overflow-y-auto'>
        <table className='w-full min-w-[800px]'>
                    <thead>
                      <tr className='border-b border-[#dfe5ef]'>
                        <th className='text-left text-[16px] leading-[19px] font-semibold pb-3 w-[250px]'>Code</th>
                        <th className='text-left text-[16px] leading-[19px] font-semibold pb-3 '>Subject Name</th>
                        <th className='text-left text-[16px] leading-[19px] font-semibold pb-3'>Marks</th>
                        <th className='text-left text-[16px] leading-[19px] font-semibold pb-3'>Grade</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {teachers.map((teacher,index) => (
                        <tr key={teacher.id} className={`hover:bg-gray-50 ${index !== teachers.length - 1 ? 'border-b border-[#dfe5ef]':''}`}>
                        
                          <td className='pt-3 pr-3 pb-3'><p className='text-[14px] leading-[17px] font-medium text-left'>{teacher.code}</p></td>
                          <td className='pt-3 pr-3 pb-3'><p className='text-[14px] leading-[17px] font-medium text-left'>{teacher.subjectName}</p></td>
                          <td className='pt-3 pr-3 pb-3'>
                            <div className='flex flex-col gap-1'>
                              <p className='text-[14px] leading-[17px] font-medium text-left'>{teacher.marks}</p>
                             <div
  className="border-b-6 rounded-2xl"
  style={{ borderBottomColor: teacher.color }}
/>


                            </div>
                            </td>
                          <td className='pt-3 pr-3 pb-3'><p className='text-[14px] leading-[17px] font-medium text-left pl-5 flex items-center' style={{
                            color:teacher.color
                          }}>{teacher.grade}</p></td>
                          
                        </tr>
                      ))}
                    </tbody>
                  </table>
       </div>
      </div>
      )}
     

    {tab === 'salary' && <SalaryReport />}
    
    
          </div>
               </div>
              
    
               
            </div>
          
   
          </div>
  )
}

export default TeacherDetail
