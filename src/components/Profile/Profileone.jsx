import React, { useState } from 'react'
import profilebanner from '../../assets/Profile/profilebg-2-D09dvhko.jpg'
import profile from '../../assets/Main/user1-D00qJYN4.jpg'
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiTeamFill } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { ImConnection } from "react-icons/im";
import { HiOutlineDotsHorizontal, HiReply } from 'react-icons/hi';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineSkype } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { IoLanguageSharp } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { VscGithubProject } from "react-icons/vsc";
import { MdOutlinePointOfSale } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdArticle } from "react-icons/md";
import Profile from '../../pages/Profile/Profile';
import Circleicon from '../../pages/CircleIcon/Circleicon';
import { FaRegThumbsUp } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import post from '../../assets/Profile/s1-BOu5QFDr.jpg'
import { FiShare2 } from "react-icons/fi";
import ecom1 from '../../assets/Ecommerse/s2-oHJFK5Ck.jpg';
import ecom2 from '../../assets/Ecommerse/s3-9LH-Wryw.jpg';
import Teams from './Teams';

const Profileone = () => {


    const [tab,setTab] = useState('myprofile');


     const commentsData = [
    {
      id: 1,
      name: "Maurice Carlson",
      date: "Sun, Apr 15",
      message: "Lalid cadwew juwog caitbok nutanok jivi kelu mophiona kaju zoomubu kokjuvek bog gogni oc pimLalid cadwew juwog caitbok nutanok jivi kelu mophiona kaju zoomubu kokjuvek bog gogni oc pim.",
      profile: "https://spike-vue-main.netlify.app/assets/user-3-B7IUMcLl.jpg",
      sender:true
    },
    {
      id: 2,
      name: "Ella Thornton",
      date: "Mon, Apr 16",
      message: "Ruj cisiv ri uvuzo gaejoges pakod bug jejbu fol hacneh rekferaw gek sigum piljimap un codvoRuj cisiv ri uvuzo gaejoges pakod bug jejbu fol hacneh rekferaw gek sigum piljimap un codvo.",
      profile: "https://spike-vue-main.netlify.app/assets/user-3-B7IUMcLl.jpg",
      sender:true
    },
    {
      id: 3,
      name: "Samuel Bennett",
      date: "Tue, Apr 17",
      message: "Venagow ris jenvob haz difefik ivdoho cubaz mimu nihmip podo wazijumRuj cisiv ri uvuzo gaejoges pakod bug jejbu fol hacneh rekferaw gek sigum piljimap un codvo.",
      profile: "https://spike-vue-main.netlify.app/assets/user-3-B7IUMcLl.jpg",
      sender:true
    },
    {
      id: 4,
      name: "Isla Moreno",
      date: "Wed, Apr 18",
      message: "Bek ruvi ketnuvup jozru zev muk ugopaw japej hogkiz zebin ew.",
      profile: "https://spike-vue-main.netlify.app/assets/user-3-B7IUMcLl.jpg",
      sender:false
    },
  
  ];


   const commentsData2 = [
    {
      id: 1,
      name: "Maurice Carlson",
      date: "Sun, Apr 15",
      message: "Lalid cadwew juwog caitbok nutanok jivi kelu mophiona kaju zoomubu kokjuvek bog gogni oc pimLalid cadwew juwog caitbok nutanok jivi kelu mophiona kaju zoomubu kokjuvek bog gogni oc pim.",
      profile: "https://spike-vue-main.netlify.app/assets/user-3-B7IUMcLl.jpg",
      sender:true
    }
  ];


  const tabs = [
  { id: 'myprofile', label: 'My Profile', icon: <CgProfile /> },
  { id: 'teams', label: 'Teams', icon: <RiTeamFill /> },
  { id: 'project', label: 'Projects', icon: <GrProjects /> },
  { id: 'connection', label: 'Connection', icon: <ImConnection /> },
];

  return (
   <>
    <div>
       <div className=''>
          <div className='relative flex justify-center items-end'>
            <img src={profilebanner} className='w-full' alt="" srcset="" />
          <div className=' absolute bg-white rounded-2xl shadow w-[96%] pl-5 pt-5 pr-5 top-[90%]'>
        

            <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0'>  
                    <div className='flex flex-col lg:flex-row items-center gap-3'>
             <div className='relative'>
               <img className="w-25 h-25 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition" src={profile} />
              <p className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 cursor-pointer transition text-[12px] text-white absolute top-[70%] right-0">
             <FaPlus />
             </p>
             </div>
              <div className='flex flex-col items-center lg:items-start gap-2'>
                <p className='text-[24px] leading-[32px] font-semibold'>Mike Nielsen <span className='text-[12px] leading-[32px] rounded-2xl bg-[#E5F3FB] text-[#0085DB] border border-[#0085DB] px-2 py-[2px]'>Admin</span></p>
                <p className='text-[16px] leading-[19.2px] font-medium text-[#87abce]'>Dream big. Think different. Do great!</p>
                <p className='flex items-center gap-1'><span><GoDotFill color='#51d28f' /></span>Active</p>
              </div>
            </div>

            <button className='pl-4 pr-4 pt-3 pb-3 bg-[#0085db] rounded-[5px] text-white'>Edit Profile</button>
            </div>
            
            <div className='tab mt-5 flex justify-around lg:justify-start items-center gap-4 text-[#707a82]'>
  {tabs.map(({ id, label, icon }) => (
    <div
      key={id}
      className={`flex justify-center items-center gap-2 ${tab === id ? 'border-b' : ''} p-2 text-[16px]`}
      onClick={()=>setTab(id)}
    >
      <span>{icon}</span>
      <p className='hidden lg:block'>{label}</p>
    </div>
  ))}
</div>
          </div>
          </div>

       
       </div>

         
    </div>





   {
    tab === 'myprofile' && (<div className='flex justify-center items-center'>
   <div className='grid grid-cols-3 gap-5 mt-80 lg:mt-33 w-[96%]'>
       <div className='col-span-3 lg:col-span-1 mt-10'>
    <div className='col-span-3 lg:col-span-1'>
      <div className="flex flex-col gap-4">
        <div className="bg-white rounded-2xl shadow h-auto p-5">
         <div className='flex flex-col gap-4'>
           <p className='text-[18px] leading-[25px] font-semibold'>About me</p>
          <p className='text-[14px] leading-[21px]'>Hello, I’m Mike Nielsen. I’m a professional who designs, develops, tests, and maintains software applications and systems.</p>
          
         </div>

<div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-[97%] mt-6" />
           
         <div className='mt-5'>
           <p className='text-[18px] leading-[25px] font-semibold'>Contact</p>

           <div className='mt-5 flex flex-col gap-4'>
             <div className='flex items-center gap-2'>
              <p className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ffede9] cursor-pointer transition">
                    <IoCallOutline size={20} color='#fca994' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[14px] leading-[17px]'>Call</p>
                      <p className='text-[14px] leading-[17px] text-[#707A82]'>(123) 456-7890</p>
                    </div>
           </div>
             <div className='flex items-center gap-2'>
              <p className="w-10 h-10 flex items-center justify-center rounded-full bg-[#dffff3] cursor-pointer transition">
                    <MdOutlineEmail size={20} color='#70dca5' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[14px] leading-[17px]'>Email</p>
                      <p className='text-[14px] leading-[17px] text-[#707A82]'>jonathan@spike.com</p>
                    </div>
           </div>
             <div className='flex items-center gap-2'>
              <p className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e5f3fb] cursor-pointer transition">
                    <AiOutlineSkype size={20} color='#0085db' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[14px] leading-[17px]'>Skype</p>
                      <p className='text-[14px] leading-[17px] text-[#707A82]'>jonathan.doe</p>
                    </div>
           </div>
           </div>

           <div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-[97%] mt-6 mb-4" />

           <p className='text-[18px] leading-[25px] font-semibold'>Other</p>

           <div className='mt-5 flex flex-col gap-4'>
             <div className='flex items-center gap-2'>
              <p className="w-10 h-10 flex items-center justify-center rounded-full bg-[#feefdb] cursor-pointer transition">
                    <IoLocationOutline size={20} color='#F8C076' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[14px] leading-[17px]'>Location</p>
                      <p className='text-[14px] leading-[17px] text-[#707A82]'>Newyork, USA - 100001</p>
                    </div>
           </div>
             <div className='flex items-center gap-2'>
              <p className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DFFFF3] cursor-pointer transition">
                    <IoSchoolOutline size={20} color='#4BD08B' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[14px] leading-[17px]'>Education</p>
                      <p className='text-[14px] leading-[17px] text-[#707A82]'>Saint Josef Institute of Science</p>
                    </div>
           </div>
             <div className='flex items-center gap-2'>
              <p className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F1EBFF] cursor-pointer transition">
                    <IoLanguageSharp size={20} color='#8763DA' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[14px] leading-[17px]'>Language</p>
                      <p className='text-[14px] leading-[17px] text-[#707A82]'>English</p>
                    </div>
           </div>
           </div>

         </div>

        </div>
    
        <div className="bg-white rounded-2xl shadow h-auto p-5">
        
           
         <div className='mt-5'>
           <p className='text-[18px] leading-[25px] font-semibold'>Teams</p>

           <div className='mt-5 flex flex-col gap-4'>
             <div className='flex items-center gap-2'>
              <p className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E1F5FA] cursor-pointer transition">
                    <IoLogoGithub size={20} color='#46CAEB' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[14px] leading-[17px]'>Backend Developer</p>
                      <p className='text-[14px] leading-[17px] text-[#707A82]'>120 members</p>
                    </div>
           </div>
             <div className='flex items-center gap-2'>
              <p className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E5F3FB] cursor-pointer transition">
                    <IoLogoReact size={20} color='#0085DB' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[14px] leading-[17px]'>React Developer</p>
                      <p className='text-[14px] leading-[17px] text-[#707A82]'>86 members</p>
                    </div>
           </div>
             
           </div>

           <p className='text-[16px] leading-[24px] font-semibold pt-4 text-[#0085DB]'>View all</p>

         </div>

        </div>
      </div>
    </div>
    
               </div>
    
               <div className='col-span-3 lg:col-span-2 '>
    <div className="grid grid-rows-3 gap-3">
      <div className="row-span-3 mt-10">
        
        <div className='grid grid-cols-3 gap-3'>
         <div className='col-span-3 lg:col-span-1 bg-white rounded-2xl shadow'>
          <div className='flex items-center gap-3 p-5'>
              <p className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E5F3FB] cursor-pointer transition">
                    <FaPeopleGroup size={20} color='#0085DB' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[20px] leading-[26px] font-semibold'>680</p>
                      <p className='text-[14px] leading-[17px] text-[#707A82]'>120 members</p>
                    </div>
           </div>
         </div>
         <div className='col-span-3 lg:col-span-1 bg-white rounded-2xl shadow'>
          <div className='flex items-center gap-3 p-5'>
              <p className="w-12 h-12 flex items-center justify-center rounded-full bg-[#DFFFF3] cursor-pointer transition">
                    <VscGithubProject size={20} color='#4BD08B' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[20px] leading-[26px] font-semibold'>42</p>
                      <p className='text-[14px] leading-[17px] text-[#707A82]'>Projects</p>
                    </div>
           </div>
         </div>
         <div className='col-span-3 lg:col-span-1 bg-white rounded-2xl shadow'>
          <div className='flex items-center gap-3 p-5'>
              <p className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ffede9] cursor-pointer transition">
                    <MdOutlinePointOfSale size={20} color='#fca994' />
                    </p>
                    <div className='flex flex-col'>
                      <p className='text-[20px] leading-[26px] font-semibold'>$780</p>
                      <p className='text-[14px] leading-[17px] text-[#707A82]'>Sales</p>
                    </div>
           </div>
         </div>
        </div>
        
      </div>
      <div className="row-span-1 Media bg-white rounded-2xl shadow pl-5 pt-5 pr-5 pb-7">
         <div>
          <textarea className='border w-full h-[140px] focus:outline-none focus:border-blue-500 rounded-[6px] p-2' placeholder='Share your thougths' name="" id=""></textarea>

          
           <div className='flex justify-between items-center mt-3'>
         <div className='flex items-center gap-3'>
            <div className='flex items-center gap-3 pt-3'>
            <p className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 cursor-pointer transition text-[12px] text-white">
            <HiOutlinePhotograph size={20} />
             </p>
             <p className='text-[14px]'>Photo / Video</p>
          </div>
            <div className='flex items-center gap-3 pt-3'>
            <p className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 cursor-pointer transition text-[12px] text-white">
            <MdArticle size={20} />
             </p>
             <p className='text-[14px]'>Article</p>
          </div>
           </div>

           <button className='bg-[#0085DB] text-white pl-5 pr-5 pt-2 pb-3 rounded-[5px]'>Post</button>

           </div>

         </div>
      </div>
      <div className="postsection h-auto row-span-1 bg-white rounded-2xl shadow">
         <div className='flex items-center gap-3 pl-5 pt-5 pr-5 pb-0'>
          <Profile url={profile} wh={10} />
          <p className='text-[16px] leading-[19.2px] font-medium'>David McMichael</p>
          <p className='flex items-center gap-0'><span><GoDotFill /></span>15 min ago</p>
         </div>

         <p className='pt-4 text-[16px] leading-[24px] font-normal pl-5 pt-5 pr-5 pb-0'>Bu lunalte wohohzap olkirlog kezumcuj vito gosag ecigacu wibejile ini zibuhime jas veh. Mo jufugiwef fa zotarulo mu nel con capvosvu haroaj pewepo korase jaktiku birjiti duduz orka sabcesla mo tage.</p>
          
        <div className='pl-5 pt-5 pr-5 pb-0'>
              <img src={post} className='h-[435px] w-full rounded-[6px] mt-4 object-cover' alt="" srcset="" />
        </div>

         <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2 pl-5 pt-5 pr-5 pb-0'>
          <Circleicon icon={<FaRegThumbsUp size={18} />} bg={'#0085DB'} wh={9} />
          <p className='text-[16px] leading-[24px] font-semibold'>102</p>
          <Circleicon icon={<LuMessageCircleMore size={18} />} bg={'#0085DB'} wh={9} />
          <p className='text-[16px] leading-[24px] font-semibold'>2</p>
         </div>

         <span className='pr-5'><FiShare2 size={18} /></span>
         </div>

          <div className='pl-5 pt-2'>
            {commentsData.map((comment) => (
          <div className={`w-full flex ${!comment.sender ? 'justify-end pr-5' : 'justify-start'}`}>
             <div key={comment.id} className={`border border-[#e5eaef] rounded-2xl ${!comment.sender ? 'w-[92%]' : 'w-[97%]'}  flex flex-col gap-2 p-4  mb-5`}>
             <div className='flex justify-start items-center'>
               <img className="w-9 h-9 rounded-full hover:bg-gray-300 cursor-pointer transition m-3" src={comment.profile} />
               <div className='flex'>
                 <p>{comment.name}</p>
                 <p className='flex items-center ml-2 text-[#a4aaaf]'>
                   <GoDotFill size={12} color='#7f7f7f' /> {comment.date}
                 </p>
               </div>
             </div>
             <p className='pl-5 pr-5 text-[14px] leading-[21px]'>{comment.message}</p>
             <div className='pl-5 pr-5 flex items-center gap-2'>
               <Circleicon icon={<FaRegThumbsUp size={18} />} bg={'#0085DB'} wh={8} />
               <p className='text-[16px] leading-[24px] font-semibold'>102</p>
               <p className="w-8 h-8 flex items-center justify-center rounded-full bg-[#707a82] cursor-pointer transition text-[12px] text-white ">
                 <HiReply />
               </p>
                
          
             </div>
           </div>
          </div>
         ))}

          </div>
         <div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-full mt-6 mb-4" />

         <div className="pl-4 pb-4 pr-4">
  <div className="w-full flex items-center gap-2">
    <div className="flex-shrink-0">
      <Profile url={profile} wh={9} />
    </div>
    <input
      type="text"
      placeholder="Comments"
      className="border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]"
    />
    <button disabled={true} className="bg-[#0085DB] pl-5 pt-3 pr-5 pb-3 rounded-[6px] text-white">
      Comment
    </button>
  </div>
</div>

      </div>
    

    <div className="postsection h-auto row-span-1 bg-white rounded-2xl shadow">
      <div className='flex items-center gap-3 pl-5 pt-5 pr-5 pb-0'>
          <Profile url={profile} wh={10} />
          <p className='text-[16px] leading-[19.2px] font-medium'>David McMichael</p>
          <p className='flex items-center gap-0'><span><GoDotFill /></span>15 min ago</p>
         </div>

         <p className='pt-4 text-[14px] leading-[21px] font-normal pl-5 pt-5 pr-5 pb-0'>Bu lunalte wohohzap olkirlog kezumcuj vito gosag ecigacu wibejile ini zibuhime jas veh. Mo jufugiwef fa zotarulo mu nel con capvosvu haroaj pewepo korase jaktiku birjiti duduz orka sabcesla mo tage.</p>
          
       

         <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2 pl-5 pt-5 pr-5 pb-0'>
          <Circleicon icon={<FaRegThumbsUp size={18} />} bg={'#0085DB'} wh={9} />
          <p className='text-[16px] leading-[24px] font-semibold'>102</p>
          <Circleicon icon={<LuMessageCircleMore size={18} />} bg={'#0085DB'} wh={9} />
          <p className='text-[16px] leading-[24px] font-semibold'>2</p>
         </div>

         <span className='pr-5'><FiShare2 size={18} /></span>
         </div>
          <div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-full mt-16 mb-4" />

         <div className="pl-4 pb-4 pr-4">
  <div className="w-full flex items-center gap-2">
    <div className="flex-shrink-0">
      <Profile url={profile} wh={9} />
    </div>
    <input
      type="text"
      placeholder="Comments"
      className="border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]"
    />
    <button disabled={true} className="bg-[#0085DB] pl-5 pt-3 pr-5 pb-3 rounded-[6px] text-white">
      Comment
    </button>
  </div>
</div>
    </div>
    <div className="postsection h-auto row-span-1 bg-white rounded-2xl shadow">
      <div className='flex items-center gap-3 pl-5 pt-5 pr-5 pb-0'>
          <Profile url={profile} wh={10} />
          <p className='text-[16px] leading-[19.2px] font-medium'>David McMichael</p>
          <p className='flex items-center gap-0'><span><GoDotFill /></span>15 min ago</p>
         </div>
         <div className='grid grid-cols-2 gap-8 p-5'>
          <div className='col-span-2 lg:col-span-1'>
            <div className='h-[85%]'> <img src={ecom1} className=' w-full object-cover rounded-[6px]' alt="" /></div>
          </div>
          <div className='col-span-2 lg:col-span-1'>
            <div className='h-[85%]'><img src={ecom2} className='w-full object-cover rounded-[6px]' alt="" /></div>
          </div>
         </div>
         <p className='pt-4 text-[16px] leading-[24px] font-normal pl-5 pt-5 pr-5 pb-0'>Bu lunalte wohohzap olkirlog kezumcuj vito gosag ecigacu wibejile ini zibuhime jas veh. Mo jufugiwef fa zotarulo mu nel con capvosvu haroaj pewepo korase jaktiku birjiti duduz orka sabcesla mo tage.</p>
          
       

         <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2 pl-5 pt-5 pr-5 pb-0'>
          <Circleicon icon={<FaRegThumbsUp size={18} />} bg={'#0085DB'} wh={9} />
          <p className='text-[16px] leading-[24px] font-semibold'>102</p>
          <Circleicon icon={<LuMessageCircleMore size={18} />} bg={'#0085DB'} wh={9} />
          <p className='text-[16px] leading-[24px] font-semibold'>2</p>
         </div>

         <span className='pr-5'><FiShare2 size={18} /></span>
         </div>

<div className='pl-5 pt-5'>
            {commentsData2.map((comment) => (
          <div className={`w-full flex ${!comment.sender ? 'justify-end pr-5' : 'justify-start'}`}>
             <div key={comment.id} className={`border border-[#e5eaef] rounded-2xl ${!comment.sender ? 'w-[92%]' : 'w-[97%]'}  flex flex-col gap-2 p-4  mb-5`}>
             <div className='flex justify-start items-center'>
               <img className="w-9 h-9 rounded-full hover:bg-gray-300 cursor-pointer transition m-3" src={comment.profile} />
               <div className='flex'>
                 <p>{comment.name}</p>
                 <p className='flex items-center ml-2 text-[#a4aaaf]'>
                   <GoDotFill size={12} color='#7f7f7f' /> {comment.date}
                 </p>
               </div>
             </div>
             <p className='pl-5 pr-5 text-[14px] leading-[21px]'>{comment.message}</p>
             <div className='pl-5 pr-5 flex items-center gap-2'>
               <Circleicon icon={<FaRegThumbsUp size={18} />} bg={'#0085DB'} wh={8} />
               <p className='text-[16px] leading-[24px] font-semibold'>102</p>
               <p className="w-8 h-8 flex items-center justify-center rounded-full bg-[#707a82] cursor-pointer transition text-[12px] text-white ">
                 <HiReply />
               </p>
                
          
             </div>
           </div>
          </div>
         ))}

          </div>

          <div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-full mt-6 mb-4" />

         <div className="pl-4 pb-4 pr-4">
  <div className="w-full flex items-center gap-2">
    <div className="flex-shrink-0">
      <Profile url={profile} wh={9} />
    </div>
    <input
      type="text"
      placeholder="Comments"
      className="border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]"
    />
    <button disabled={true} className="bg-[#0085DB] pl-5 pt-3 pr-5 pb-3 rounded-[6px] text-white">
      Comment
    </button>
  </div>
</div>
    </div>

     <div className="postsection h-auto row-span-1 bg-white rounded-2xl shadow">
         <div className='flex items-center gap-3 pl-5 pt-5 pr-5 pb-0'>
          <Profile url={profile} wh={10} />
          <p className='text-[16px] leading-[19.2px] font-medium'>David McMichael</p>
          <p className='flex items-center gap-0'><span><GoDotFill /></span>15 min ago</p>
         </div>

         <p className='pt-4 text-[16px] leading-[24px] font-normal pl-5 pt-5 pr-5 pb-0'>Bu lunalte wohohzap olkirlog kezumcuj vito gosag ecigacu wibejile ini zibuhime jas veh. Mo jufugiwef fa zotarulo mu nel con capvosvu haroaj pewepo korase jaktiku birjiti duduz orka sabcesla mo tage.</p>
          
        <div className='pl-5 pt-5 pr-5 pb-0'>
              <img src={post} className='h-[435px] w-full rounded-[6px] mt-4 object-cover' alt="" srcset="" />
        </div>

         <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2 pl-5 pt-5 pr-5 pb-0'>
          <Circleicon icon={<FaRegThumbsUp size={18} />} bg={'#0085DB'} wh={9} />
          <p className='text-[16px] leading-[24px] font-semibold'>102</p>
          <Circleicon icon={<LuMessageCircleMore size={18} />} bg={'#0085DB'} wh={9} />
          <p className='text-[16px] leading-[24px] font-semibold'>2</p>
         </div>

         <span className='pr-5'><FiShare2 size={18} /></span>
         </div>

        
         <div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-full mt-6 mb-4" />

         <div className="pl-4 pb-4 pr-4">
  <div className="w-full flex items-center gap-2">
    <div className="flex-shrink-0">
      <Profile url={profile} wh={9} />
    </div>
    <input
      type="text"
      placeholder="Comments"
      className="border border-[#dfe5ef] p-3 rounded-[5px] w-full focus:outline-none focus:border-[#0085db]"
    />
    <button disabled={true} className="bg-[#0085DB] pl-5 pt-3 pr-5 pb-3 rounded-[6px] text-white">
      Comment
    </button>
  </div>
</div>

      </div>
    
          </div>
               </div>
              
               
            </div>
   </div>)
   }
   

   {
    tab === 'teams' && (<Teams />)
   }

   {
    tab === 'project' && (<div></div>)
   }

   {
    tab === 'connection' && (<div></div>

    )
   }







   </>
  )
}

export default Profileone
