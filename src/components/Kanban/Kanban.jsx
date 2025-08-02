import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import notes1 from '../../assets/Kanban/task-img1-LwkOVRuW.png'
import notes2 from '../../assets/Kanban/task-img2-CS2JxB4_.png'
import notes3 from '../../assets/Kanban/blog-img4-CP-h0QWo.jpg'
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsCalendar2Date } from "react-icons/bs";
import { useRef } from 'react';

import ThreeDotMenu from '../../pages/ThreeDotMenu/ThreeDotMenu';


const Kanban = () => {



  
const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'This is first task',
      date: '1 month ago',
      category: 'Design',
      categoryColor: '#4BD08B',
      description: '',
      image: notes1
    },
    {
      id: '2',
      title: 'This is first task',
      date: '2 month ago',
      category: 'Development',
      categoryColor: '#F8C076',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, o eiusmod tempor incid.'
    },
    {
      id: '3',
      title: 'Do some projects on React Native with Flutter',
      date: '4 month ago',
      category: 'Mobile',
      categoryColor: '#0085DB',
      description: ''
    }
  ]);

  const Menus = ["Edit","Delete"]

  const [draggedItem, setDraggedItem] = useState(null);
       const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleDragStart = (e, index) => {
    setDraggedItem(tasks[index]);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index);
    e.currentTarget.style.opacity = '0.4';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    const draggedOverItem = tasks[index];
    
    // If the item is dragged over itself, ignore
    if (draggedItem === draggedOverItem) {
      return;
    }

    // Filter out the currently dragged item
    let newItems = tasks.filter(item => item !== draggedItem);
    
    // Add the dragged item after the dragged over item
    newItems.splice(index, 0, draggedItem);
    
    setTasks(newItems);
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = '1';
    setDraggedItem(null);
  };

  
const [openMenuId, setOpenMenuId] = useState(null);
const anchorRefs = useRef({});
  return (
    <div className='bg-white shadow rounded-2xl p-5'>
       <div>
        <p className='text-[16px] leading-[24px] font-semibold'>Kanban Application</p>
       </div>
       <div className='grid grid-cols-1 lg:grid-cols-4 mt-5 gap-5'>
         <div className='col-span-1 bg-[#f0f5f9] rounded-2xl shadow p-4'>
      <div className='Header flex justify-between items-center'>
        <p className='text-[16px] leading-[19px] font-semibold'>Todo</p>
        <p className={`w-9 h-9 flex items-center justify-center rounded-full bg-white cursor-pointer transition text-[12px] text-black`}>
          <FaPlus />
        </p>
      </div>

      <div className='tasks-container'>
        {tasks.map((task, index) => {

          if (!anchorRefs.current[task.id]) {
           anchorRefs.current[task.id] = React.createRef();
           }
          return (
            <div
      key={task.id}
      draggable
      onDragStart={(e) => handleDragStart(e, index)}
      onDragOver={(e) => handleDragOver(e, index)}
      onDragEnd={handleDragEnd}
      onDrop={(e) => e.preventDefault()}
      className='mt-5 bg-white rounded-2xl shadow p-4 flex flex-col gap-3 cursor-move'
    >
            <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>{task.title}</p>
              <div
          ref={anchorRefs.current[task.id]}
          aria-controls={openMenuId === task.id ? 'three-dot-menu' : undefined}
          aria-expanded={openMenuId === task.id ? 'true' : undefined}
          onClick={() => setOpenMenuId(prev => (prev === task.id ? null : task.id))}
        >
              <BsThreeDotsVertical />
              <ThreeDotMenu
        open={openMenuId === task.id}
        setOpen={(isOpen) => setOpenMenuId(isOpen ? task.id : null)}
        anchorRef={anchorRefs.current[task.id]}
        Menus={Menus}
      />
              </div>
            </div>
            
            {task.description && (
              <p>{task.description}</p>
            )}
            
            {task.image && (
              <img src={task.image} className='w-full' alt="" />
            )}
            
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>{task.date}</p>
              </div>
              <span 
                className='text-[11px] leading-[20px] pl-2 pr-2 rounded-[6px] text-white'
                style={{ backgroundColor: task.categoryColor }}
              >
                {task.category}
              </span>
            </div>
          </div>)
        })}
      </div>
    </div>
         <div className='col-span-1 bg-[#e7ecf0] rounded-2xl shadow p-4'>
            <div className='Header flex justify-between items-center'>
               <p className='text-[16px] leading-[19px] font-semibold'>In Progress</p>
               <p className={`w-9 h-9 flex items-center justify-center rounded-full bg-white cursor-pointer transition text-[12px] text-black`}>
                  <FaPlus />
                   </p>
            </div>
 <div className='bg-white rounded-2xl shadow mt-5 p-4 flex flex-col gap-10'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>Do some projects on React Native with Flutter</p>
              <span><BsThreeDotsVertical /></span>
             </div>
             
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>4 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#0085DB] pl-2 pr-2 rounded-[6px] text-white'>Mobile</span>
             </div>
            </div>
            <div>
              <div className='bg-white rounded-t-2xl shadow mt-5 p-4'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>This is first task</p>
              <span><BsThreeDotsVertical /></span>
             </div>
            </div>
            <img src={notes2} className='w-full' alt="" />
            <div className='bg-white rounded-b-2xl p-4'>
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>1 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#4BD08B] pl-2 pr-2 rounded-[6px] text-white'>Design</span>
             </div>
            </div>
            </div>
            <div>
              
              <div className='bg-white rounded-2xl shadow mt-5 p-4 flex flex-col gap-10'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>Do some projects on React Native with Flutter</p>
              <span><BsThreeDotsVertical /></span>
             </div>
             
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>4 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#0085DB] pl-2 pr-2 rounded-[6px] text-white'>Mobile</span>
             </div>
            </div>
            
            
            </div>
         </div>
         <div className='col-span-1 bg-[#e1f5fa] rounded-2xl shadow p-4'>
            <div className='Header flex justify-between items-center'>
               <p className='text-[16px] leading-[19px] font-semibold'>Pending</p>
               <p className={`w-9 h-9 flex items-center justify-center rounded-full bg-white cursor-pointer transition text-[12px] text-black`}>
                  <FaPlus />
                   </p>
            </div>

            <div>
              <div className='bg-white rounded-t-2xl shadow mt-5 p-4'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>This is first task</p>
              <span><BsThreeDotsVertical /></span>
             </div>
            </div>
            
            <div className='bg-white rounded-b-2xl p-4'>
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>1 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#4BD08B] pl-2 pr-2 rounded-[6px] text-white'>Design</span>
             </div>
            </div>
            </div>
            <div>
              <div className='bg-white rounded-2xl shadow mt-5 p-4 flex flex-col gap-3'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>This is first task</p>
              <span><BsThreeDotsVertical /></span>
             </div>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, o eiusmod tempor incid.</p>
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>2 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#F8C076] pl-2 pr-2 rounded-[6px] text-white'>Development</span>
             </div>
            </div>
             
            
            
            </div>
         </div>
         <div className='col-span-1 bg-[#dffff3] rounded-2xl shadow p-4'>
            <div className='Header flex justify-between items-center'>
               <p className='text-[16px] leading-[19px] font-semibold'>Done</p>
               <p className={`w-9 h-9 flex items-center justify-center rounded-full bg-white cursor-pointer transition text-[12px] text-black`}>
                  <FaPlus />
                   </p>
            </div>

            <div>
              <div className='bg-white rounded-t-2xl shadow mt-5 p-4'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>This is first task</p>
              <span><BsThreeDotsVertical /></span>
             </div>
            </div>
            <img src={notes3} className='w-full' alt="" />
            <div className='bg-white rounded-b-2xl p-4'>
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>1 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#4BD08B] pl-2 pr-2 rounded-[6px] text-white'>Design</span>
             </div>
            </div>
            </div>
            <div>
              <div className='bg-white rounded-2xl shadow mt-5 p-4 flex flex-col gap-3'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>This is first task</p>
              <span><BsThreeDotsVertical /></span>
             </div>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, o eiusmod tempor incid.</p>
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>2 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#F8C076] pl-2 pr-2 rounded-[6px] text-white'>Development</span>
             </div>
            </div>
              <div className='bg-white rounded-2xl shadow mt-5 p-4 flex flex-col gap-10'>
             <div className='flex justify-between items-center'>
              <p className='text-[13px] leading-[16px] font-semibold'>Do some projects on React Native with Flutter</p>
              <span><BsThreeDotsVertical /></span>
             </div>
             
             <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span><BsCalendar2Date /></span>
                <p className='text-[11px] leading-[20px]'>4 month ago</p>
              </div>
              <span className='text-[11px] leading-[20px] bg-[#0085DB] pl-2 pr-2 rounded-[6px] text-white'>Mobile</span>
             </div>
            </div>
            
            
            </div>
         </div>
        
       </div>
    </div>
  )
}

export default Kanban
