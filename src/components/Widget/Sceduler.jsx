import { BsThreeDotsVertical } from "react-icons/bs";
import Border from '../../pages/Border/Border'
import { FaRegClock } from "react-icons/fa6";
import profile from '../../assets/widget/user1-D00qJYN4.jpg'
import giftcard from '../../assets/widget/gifts-CJw-WHkP.png'
import profile2 from '../../assets/Profile/user-10-BtaXUAQO.jpg'
import profile3 from '../../assets/Profile/user-2-BtZPKsUg.jpg'
import profile4 from '../../assets/Profile/user-6-DXcW9yFx.jpg'
const Sceduler = () => {

    const meetings = [
  {
    id: 1,
    title: "Applied Mathematics",
    time: "10:15 - 11:45",
    attendees: [profile, profile2, profile3, profile4],
    totalAttendees: 18,
  },
  {
    id: 2,
    title: "Physics - Quantum Mechanics",
    time: "12:00 - 13:30",
    attendees: [profile2, profile3, profile4, profile],
    totalAttendees: 22,
  },
  {
    id: 3,
    title: "Software Engineering",
    time: "14:00 - 15:30",
    attendees: [profile3, profile4, profile, profile2],
    totalAttendees: 14,
  },
];


  return (
    <div className='bg-white rounded-2xl shadow p-5 h-[600px]'>
      <div className="flex justify-between">
        <p className='text-[18px] leading-[25px] font-semibold'>Upcoming Scheduls</p>
      <span><BsThreeDotsVertical /></span>
      </div>

      <div className="tab flex justify-between items-center pt-5 pb-1">
         <p className="text-[16px] leading-[19px] bg-[#0085db] text-white rounded-full pl-5 pt-3 pr-5 pb-3">1 to 3</p>
         <p className="text-[16px] leading-[19px]">4 to 7</p>
         <p className="text-[16px] leading-[19px]">8 to 10</p>
      </div>
      <Border width={100} mt={0} />

      <div className="w-full overflow-auto h-[480px]">
        <div className="pt-5 flex  gap-5">
        <div className="flex flex-col gap-3">
            <p className="text-[16px] leading-[17px] text-[#707A82]">8:00</p>
            <p className="text-[16px] leading-[17px] text-[#707A82]">8:00</p>
            <p className="text-[16px] leading-[17px] text-[#707A82]">8:00</p>
            <p className="text-[16px] leading-[17px] text-[#707A82]">8:00</p>
            <p className="text-[16px] leading-[17px] text-[#707A82]">8:00</p>

        </div>
        <div className="bg-white rounded-2xl shadow border-l-4 border-[#1E90FF] p-4 w-full">
           <div className="flex flex-col gap-3">
             <p className="text-[16px] leading-[19px] font-semibold">Applied mathematics</p>
             <div className="flex items-center gap-1">
                <span><FaRegClock color="#707A82" /></span>
                <p className="text-[14px] leading-[17px] text-[#707A82]">10:15 - 11:45</p>
             </div>
           </div>

           <div className='flex items-center mt-10 relative'>
  <div className="flex -space-x-2">
    <img src={profile} className='w-8 h-8 rounded-full border-2 border-white' alt="" />
    <img src={profile2} className='w-8 h-8 rounded-full border-2 border-white' alt="" />
    <img src={profile3} className='w-8 h-8 rounded-full border-2 border-white' alt="" />
    <img src={profile4} className='w-8 h-8 rounded-full border-2 border-white' alt="" />
  </div>
  <p className='ml-3 text-[14px] leading-[17px] text-[#707A82]'>+18</p>
</div>

      </div>

         </div>
        <div className="pt-5 flex  gap-5">
        <div className="flex flex-col gap-3">
            <p className="text-[16px] leading-[17px] text-[#707A82]">8:00</p>
            <p className="text-[16px] leading-[17px] text-[#707A82]">8:00</p>
            <p className="text-[16px] leading-[17px] text-[#707A82]">8:00</p>
            <p className="text-[16px] leading-[17px] text-[#707A82]">8:00</p>
            <p className="text-[16px] leading-[17px] text-[#707A82]">8:00</p>

        </div>
        <div className="bg-white rounded-2xl shadow border-l-4 border-[#18b320] p-4 w-full">
           <div className="flex flex-col gap-3">
             <p className="text-[16px] leading-[19px] font-semibold">Applied mathematics</p>
             <div className="flex items-center gap-1">
                <span><FaRegClock color="#707A82" /></span>
                <p className="text-[14px] leading-[17px] text-[#707A82]">10:15 - 11:45</p>
             </div>
           </div>

           <div className='flex items-center mt-10 relative'>
  <div className="flex -space-x-2">
    <img src={profile} className='w-8 h-8 rounded-full border-2 border-white' alt="" />
    <img src={profile2} className='w-8 h-8 rounded-full border-2 border-white' alt="" />
    <img src={profile3} className='w-8 h-8 rounded-full border-2 border-white' alt="" />
    <img src={profile4} className='w-8 h-8 rounded-full border-2 border-white' alt="" />
  </div>
  <p className='ml-3 text-[14px] leading-[17px] text-[#707A82]'>+18</p>
</div>

      </div>

         </div>
        <div className="pt-5 flex  gap-5">
        <div className="flex flex-col gap-3">
            <p className="text-[16px] leading-[17px] text-[#707A82]">8:00</p>
            <p className="text-[16px] leading-[17px] text-[#707A82]">8:00</p>
            <p className="text-[16px] leading-[17px] text-[#707A82]">8:00</p>
            <p className="text-[16px] leading-[17px] text-[#707A82]">8:00</p>
            <p className="text-[16px] leading-[17px] text-[#707A82]">8:00</p>

        </div>
        <div className="bg-white rounded-2xl shadow border-l-4 border-[#ce1f59] p-4 w-full">
           <div className="flex flex-col gap-3">
             <p className="text-[16px] leading-[19px] font-semibold">Applied mathematics</p>
             <div className="flex items-center gap-1">
                <span><FaRegClock color="#707A82" /></span>
                <p className="text-[14px] leading-[17px] text-[#707A82]">10:15 - 11:45</p>
             </div>
           </div>

           <div className='flex items-center mt-10 relative'>
  <div className="flex -space-x-2">
    <img src={profile} className='w-8 h-8 rounded-full border-2 border-white' alt="" />
    <img src={profile2} className='w-8 h-8 rounded-full border-2 border-white' alt="" />
    <img src={profile3} className='w-8 h-8 rounded-full border-2 border-white' alt="" />
    <img src={profile4} className='w-8 h-8 rounded-full border-2 border-white' alt="" />
  </div>
  <p className='ml-3 text-[14px] leading-[17px] text-[#707A82]'>+18</p>
</div>

      </div>

         </div>
      </div>
    </div>
  )
}

export default Sceduler
