import React, { useState } from 'react'
import { BsDot } from "react-icons/bs";
import Composemenu from './Composemenu';
import SearchEmailList from './SearchEmailList';
import Drawer from '@mui/material/Drawer';
import useWindowSize from '../../utils/useWindowSize';
import MailBody from './MailBody';
import BreadCrums from '../../pages/HeaderMenu/HeaderMenu';

const EmailPage = () => {

   const [open, setOpen] =useState(false);
   const [openedMail,setOpenedMail] = useState(1);
   const [drawerAncher,setDrawerAncher] = useState('left')
  const { width } = useWindowSize();
  const responseCheck = (width > 1279 && width < 1450);
  return (
    <div>
      
{/* <p className={`${width < 1450? 'text-green-400' : ''}`}>{width}</p> */}
<BreadCrums title={`Email App`} Breadcrums1={`Dashboard`} Breadcrums2={`Email App`} />
     

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
