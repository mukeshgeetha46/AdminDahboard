import React, { useState,useRef } from 'react'
import BreadCrums from '../../pages/HeaderMenu/HeaderMenu'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Faq = () => {

    const [open,setOpen] = useState(false);
const avatars = [
  "https://img.freepik.com/premium-photo/retro-style-art_551707-70225.jpg?uid=R188668785&ga=GA1.1.1035270016.1740294128&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/retro-style-art_551707-70225.jpg?uid=R188668785&ga=GA1.1.1035270016.1740294128&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/retro-style-art_551707-70225.jpg?uid=R188668785&ga=GA1.1.1035270016.1740294128&semt=ais_hybrid&w=740",
];
const FAQ = [
  {
    id: 1,
    question: 'What is an Admin Dashboard?',
    answer:
      'An Admin Dashboard is the backend interface of a website or an application that helps manage overall content and settings. It is used by site owners to monitor, update, and control their site.'
  },
  {
    id: 2,
    question: 'Why is a dashboard important?',
    answer:
      'A dashboard gives administrators quick access to key data and tools, improving productivity and decision-making through a centralized view.'
  },
  {
    id: 3,
    question: 'What are the key features of an admin dashboard?',
    answer:
      'Common features include user management, analytics, content editing, real-time data, notifications, and settings customization.'
  },
  {
    id: 4,
    question: 'Is an admin dashboard mobile-friendly?',
    answer:
      'Most modern dashboards are responsive and optimized for mobile devices to allow access and control from anywhere.'
  },
  {
    id: 5,
    question: 'Can I customize the admin dashboard?',
    answer:
      'Yes, admin dashboards are often highly customizable to meet specific business or user requirements.'
  },
  
];


const [openMenuId, setOpenMenuId] = useState(null);
const anchorRefs = useRef({});

 const Handelopen = (faq) => {
    setOpen(!open);
    setOpenMenuId(prev => (prev === faq.id ? null : faq.id))
 }

  return (
    <div>
      <BreadCrums title={`FAQ`} Breadcrums1={`HOME`} Breadcrums2={`FAQ`} />
      

      <div className='flex justify-center items-center m-6'>
        <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-[24px] leading-[32px] font-semibold'>Frequently asked questions</p>
        <p className='text-[16px] leading-[19px] font-semibold text-[#707A82]'>Get to know more about ready-to-use admin dashboard templates</p>
        </div>
      </div>

      <div className='flex justify-center items-center'>
         <div className='faq bg-white rounded-2xl shadow w-full  xl:w-[70%]'>
            {
                FAQ.map((faq)=>{
                
                     if (!anchorRefs.current[faq.id]) {
                      anchorRefs.current[faq.id] = React.createRef();
                     }

                    return (
                        <div>
  <div className='faqheading p-6 border-b border-[#e5eaef]'>
    <div className='flex justify-between items-center'>
      <p className='font-bold'>{faq.question}</p>
      <span ref={anchorRefs.current[faq.id]} onClick={() => Handelopen(faq)}>
        {openMenuId === faq.id ? <FaChevronDown /> : <FaChevronUp />}
      </span>
    </div>
  </div>

  <div
    className={`transition-all duration-500 ease-in-out overflow-hidden px-6 ${
      openMenuId === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
    }`}
    ref={anchorRefs.current[faq.id]}
  >
    <p className='text-gray-400 py-4'>{faq.answer}</p>
  </div>
</div>

                    )
                })
            }
        
          
      </div>
      </div>

      <div className='flex justify-center items-center'>
        <div className='bg-[#e1f5fa] rounded-2xl shadow p-6 mt-4 w-full xl:w-[80%]'>
         <div className='flex justify-center items-center gap-4'>
             <div className='flex flex-col items-center gap-3'>
                <div className="flex justify-center items-center relative">
                  {avatars.map((url, index) => (
                    <img
      key={index}
      src={url}
      alt={`Avatar ${index + 1}`}
      className={`rounded-full object-cover w-[40px] h-[40px] border-2 border-white ${
        index !== 0 ? '-ml-3' : ''
      }`}
    />
     
  ))}

             </div>

              <div className='flex justify-center items-center'>
                <p className='text-[24px] leading-[32px] font-semibold'>Still have questions</p>
              </div>
               <div className='flex justify-center items-center'>
                <p className='text-[16px] leading-[19px] text-[#707A82]'>Can't find the answer your're looking for ? Please chat to our friendly team.</p>
               </div>
             </div>
        
         </div>
        <div className='flex justify-center items-center mt-4'>
            <button className='bg-[#0085DB] text-[16px] pl-5 pr-5 pt-2 pb-2 rounded-full text-white'>Chat With Us</button>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Faq
