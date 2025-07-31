import React, { useState } from 'react'
import { BsDot } from "react-icons/bs";
import Composemenu from './Composemenu';
import SearchEmailList from './SearchEmailList';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import useWindowSize from '../../utils/useWindowSize';
import MailBody from './MailBody';

const EmailPage = () => {

   const [open, setOpen] =useState(false);
   const [openedMail,setOpenedMail] = useState(1);
   const [drawerAncher,setDrawerAncher] = useState('left')
  const { width } = useWindowSize();
  const responseCheck = (width > 1279 && width < 1450);
  return (
    <div>
      
{/* <p className={`${width < 1450? 'text-green-400' : ''}`}>{width}</p> */}
      <div className='AddformHeading bg-white rounded-2xl shadow p-6 flex flex-col lg:flex-row justify-between items-center'>
        <p className='text-[20px] leading-[25.5px] font-semibold'>Email App</p>

        <div className='flex justify-center items-center gap-3'>
            <p className='text-[14px] leading-[17.6px]'>Dashboard</p>
            <p className='text-[14px] leading-[17.6px] flex justify-center items-center'><BsDot /></p>
            <p className='text-[14px] text-[#e4e6e8] leading-[17.6px]'>Email App</p>
        </div>
      </div>

     <div className="grid grid-cols-12 mt-2 lg:mt-10 bg-white rounded-2xl">
  <div className={`${responseCheck ? 'col-span-7' : 'col-span-12 lg:col-span-4 xl:col-span-5'}`}>

     
  <div className={`grid ${responseCheck ? 'grid-cols-10' : 'grid-cols-12'}`}>
  <div className={`hidden xl:block ${responseCheck ? 'col-span-4' : 'xl:col-span-5'} p-5 border-r border-[#e5eaef]`}>
    <Composemenu />
  </div>

  <div className={`col-span-12 ${responseCheck ? 'lg:col-span-6' : 'xl:col-span-7'} border-r border-[#e5eaef]`}>
    <SearchEmailList setOpen={setOpen} setOpenedMail={setOpenedMail}  setDrawerAncher={setDrawerAncher}/>
  </div>
</div>


    </div> {/* Takes 4/12 = 33% */}
  <div className={`hidden lg:block ${responseCheck ? 'col-span-5' : 'col-span-12 md:col-span-8 xl:col-span-7'}`}>
    <MailBody openedMail={openedMail} /></div> {/* Takes 8/12 = 66% */}
</div>


      <Drawer
  open={open}
  onClose={() => setOpen(false)}
  anchor={drawerAncher} // or "right"
  sx={{
    '& .MuiDrawer-paper': {
      width:drawerAncher === 'left' ? '260px' : '350px', // or '50%', '30vw', etc.
    },
  }}
>
       <div className='p-5'>
        {
          drawerAncher === 'left' ? (<Composemenu />) : ( <MailBody setOpen={setOpen} openedMail={openedMail} />)
        }
         
        </div> 
      </Drawer>
    </div>
  )
}

export default EmailPage
