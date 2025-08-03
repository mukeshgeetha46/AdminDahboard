import React, { useState } from 'react'
import BreadCrums from '../../pages/HeaderMenu/HeaderMenu'
import { RiAccountCircleLine, RiBillLine } from "react-icons/ri";
import { MdOutlineNotifications } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import Account from './Account';
import Bills from './Bills';
import Notification from './Notification';
import Security from './Security';

const AccountSetting = () => {

    const [selectTab,setSelectTab] = useState('Account');

    const tab = [
        {label:"Account",icon:<RiAccountCircleLine size={20} />},
        {label:"Notification",icon:<MdOutlineNotifications size={20} />},
        {label:"Bills",icon:<RiBillLine size={20} />},
        {label:"Security",icon:<GrSecure size={20} />},
    ]

    const handleTab = (tab) => {
        setSelectTab(tab)
    }
  return (
    <div>
      <BreadCrums title={`Account Setting`} Breadcrums1={`HOME`} Breadcrums2={`Account Setting`} />

      <div className='bg-white rounded-t-2xl shadow mt-6 flex justify-start items-center gap-3 border-b border-[#e5eaef]'>
         {
            tab.map((t,i)=>(
                <div key={i} className={`flex items-center p-6 gap-1  ${selectTab == t.label ? 'border-b-2 text-[#0085DB]' : 'hover:bg-gray-100 text-gray-700'}`} onClick={()=>handleTab(t.label)}>
                    <span>{t.icon}</span>
                    <p className='hidden lg:block text-[14px]'>{t.label}</p>
                </div>
            ))
         }
      </div>
      <div className='bg-white rounded-b-2xl pl-2 pr-2 pb-2 xl:pl-6 xl:pr-6 xl:pb-6'>
        { selectTab === 'Account' && (<Account />) }
        { selectTab === 'Bills' && (<Bills />) }
        { selectTab === 'Notification' && (<Notification />) }
        { selectTab === 'Security' && (<Security />) }
      </div>
    </div>
  )
}

export default AccountSetting
