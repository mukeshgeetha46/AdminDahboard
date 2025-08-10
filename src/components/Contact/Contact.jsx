import React from 'react'
import BreadCrums from '../../pages/HeaderMenu/HeaderMenu'
import HeaderSearch from '../../layouts/MainLayout/Search/HeaderSearch'
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import profile from '../../assets/Profile/user-2-BtZPKsUg.jpg'
import { MdOutlineEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const Contact = () => {
  // Dummy data with 12 teacher entries
  const Contacts = [
  {
    id: '#101',
    username: "Alice Johnson",
    useremail: 'alice.johnson@example.com',
    phone: "+1 234 567 890",
    jd: '12-03-2015',
    role: 'Designer',
    profileImg: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: '#102',
    username: "Michael Smith",
    useremail: 'michael.smith@example.com',
    phone: "+1 987 654 321",
    jd: '05-06-2016',
    role: 'Developer',
    profileImg: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: '#103',
    username: "Sophia Williams",
    useremail: 'sophia.williams@example.com',
    phone: "+44 20 7946 0958",
    jd: '18-11-2017',
    role: 'Manager',
    profileImg: 'https://randomuser.me/api/portraits/women/12.jpg'
  },
  {
    id: '#104',
    username: "James Brown",
    useremail: 'james.brown@example.com',
    phone: "+61 7 3456 7890",
    jd: '21-08-2018',
    role: 'UI/UX Designer',
    profileImg: 'https://randomuser.me/api/portraits/men/11.jpg'
  },
  {
    id: '#105',
    username: "Emma Davis",
    useremail: 'emma.davis@example.com',
    phone: "+1 555 678 123",
    jd: '15-02-2019',
    role: 'Product Owner',
    profileImg: 'https://randomuser.me/api/portraits/women/36.jpg'
  },
  {
    id: '#106',
    username: "Daniel Wilson",
    useremail: 'daniel.wilson@example.com',
    phone: "+49 30 123456",
    jd: '30-09-2019',
    role: 'Backend Developer',
    profileImg: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    id: '#107',
    username: "Olivia Miller",
    useremail: 'olivia.miller@example.com',
    phone: "+33 1 2345 6789",
    jd: '12-04-2020',
    role: 'Frontend Developer',
    profileImg: 'https://randomuser.me/api/portraits/women/28.jpg'
  },
  {
    id: '#108',
    username: "Ethan Martinez",
    useremail: 'ethan.martinez@example.com',
    phone: "+34 91 234 5678",
    jd: '07-07-2020',
    role: 'QA Engineer',
    profileImg: 'https://randomuser.me/api/portraits/men/60.jpg'
  },
  {
    id: '#109',
    username: "Ava Taylor",
    useremail: 'ava.taylor@example.com',
    phone: "+1 876 234 567",
    jd: '25-12-2020',
    role: 'Scrum Master',
    profileImg: 'https://randomuser.me/api/portraits/women/15.jpg'
  },
  {
    id: '#110',
    username: "Liam Anderson",
    useremail: 'liam.anderson@example.com',
    phone: "+1 456 789 012",
    jd: '19-01-2021',
    role: 'System Admin',
    profileImg: 'https://randomuser.me/api/portraits/men/24.jpg'
  },
  {
    id: '#111',
    username: "Isabella Thomas",
    useremail: 'isabella.thomas@example.com',
    phone: "+1 321 654 987",
    jd: '04-03-2021',
    role: 'HR Manager',
    profileImg: 'https://randomuser.me/api/portraits/women/22.jpg'
  },
  {
    id: '#112',
    username: "Benjamin Lee",
    useremail: 'benjamin.lee@example.com',
    phone: "+82 2-312-3456",
    jd: '17-06-2021',
    role: 'DevOps Engineer',
    profileImg: 'https://randomuser.me/api/portraits/men/50.jpg'
  },
  {
    id: '#113',
    username: "Mia Harris",
    useremail: 'mia.harris@example.com',
    phone: "+81 3-1234-5678",
    jd: '23-08-2021',
    role: 'Marketing Lead',
    profileImg: 'https://randomuser.me/api/portraits/women/19.jpg'
  },
  {
    id: '#114',
    username: "Noah Clark",
    useremail: 'noah.clark@example.com',
    phone: "+1 707 456 789",
    jd: '09-11-2021',
    role: 'Security Analyst',
    profileImg: 'https://randomuser.me/api/portraits/men/18.jpg'
  },
  {
    id: '#115',
    username: "Charlotte Lewis",
    useremail: 'charlotte.lewis@example.com',
    phone: "+1 678 901 234",
    jd: '28-01-2022',
    role: 'Content Writer',
    profileImg: 'https://randomuser.me/api/portraits/women/42.jpg'
  }
];


// Role to background color mapping
const roleColors = {
  Designer: "bg-pink-500",
  Developer: "bg-green-500",
  Manager: "bg-purple-500",
  "UI/UX Designer": "bg-indigo-500",
  "Product Owner": "bg-yellow-500",
  "Backend Developer": "bg-blue-500",
  "Frontend Developer": "bg-orange-500",
  "QA Engineer": "bg-teal-500",
  "Scrum Master": "bg-red-500",
  "System Admin": "bg-gray-600",
  "HR Manager": "bg-cyan-500",
  "DevOps Engineer": "bg-lime-500",
  "Marketing Lead": "bg-amber-500",
  "Security Analyst": "bg-rose-500",
  "Content Writer": "bg-fuchsia-500"
};


  return (
    <div>
    

      <div className='bg-white rounded-2xl shadow p-5 mt-5'>
         <p className='text-[18px] leading-[25px] font-semibold pb-5'>Contact List</p>
        <div className='flex justify-between items-center'>
            <HeaderSearch square={true} placeholder={'Search Contact'} />
            <button className='bg-[#0085DB] rounded-full text-white pl-4 pt-2 pr-4 pb-2 flex justify-center items-center gap-2'>
              <span><AiOutlineUsergroupAdd size={22} /></span> 
              Add Contact
            </button>
        </div>

        <div className='mt-10 overflow-x-auto'>
          <table className='w-full min-w-[1100px] xl:min-w-[800px]'>
            <thead>
              <tr className='border-b border-[#dfe5ef]'>
                <th className='text-left text-[14px] leading-[17px] font-semibold pb-3 w-[100px]'>Id</th>
                <th className='text-left text-[14px] leading-[17px] font-semibold pb-3 w-[400px]'>UserInfo</th>
                <th className='text-left text-[14px] leading-[17px] font-semibold pb-3'>Phone</th>
                <th className='text-left text-[14px] leading-[17px] font-semibold pb-3'>Joining Date</th>
                <th className='text-left text-[14px] leading-[17px] font-semibold pb-3'>Role</th>
                <th className='text-left text-[14px] leading-[17px] font-semibold pb-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              {Contacts.map((contact,index) => (
                <tr key={index} className='border-b border-[#dfe5ef] hover:bg-gray-50'>
                  
                  <td className='pb-3'><p className='text-[14px] leading-[17px]'>{contact.id}</p></td>
                  <td className='p-3'>
                    <div className='flex items-center gap-5'>
                      <img 
                        className='w-12 h-12 rounded-full object-cover hover:bg-gray-300 cursor-pointer transition' 
                        src={contact.profileImg} 
                        alt={contact.username} 
                      />
                      <div>
                        <p className='text-[14px] leading-[17px] font-semibold'>{contact.username}</p>
                        <p className='text-[14px] leading-[17px]'>{contact.useremail}</p>
                      </div>
                    </div>
                  </td>
                  <td className='pb-3'><p className='text-[14px] leading-[17px]'>{contact.phone}</p></td>
                  <td className='pb-3'><p className='text-[14px] leading-[17px]'>{contact.jd}</p></td>
                  <td className='pb-3'><p
  className={`text-[14px] leading-[17px] text-white w-fit rounded-full pl-2 pr-2 pt-1 pb-1 ${roleColors[contact.role] || "bg-gray-400"}`}
>
  {contact.role}
</p>
</td>
                 
                  <td className='pb-3'>
                    <div className='flex items-center gap-3'>
                      <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
                        <MdOutlineEdit size={18} color='#0085DB' />
                      </button>
                      <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
                        <IoTrashOutline size={18} color='#FB977D' />
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

export default Contact