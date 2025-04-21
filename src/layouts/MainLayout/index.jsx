// src/layouts/MainLayout/index.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../MainLayout/Sidebar/mainlyout.css'
import logo from '../../assets/sidebar/logo-dark-C4P0U4PI.svg'


const MainLayout = () => {
  return (
 <>

<div className="grid grid-cols-5 grid-rows-6 gap-4 h-screen bg-[#f0f5f9]">

    {/* sidebar */}
    <div className="hidden xl:block row-span-6  bg-white w-[89%]  m-5 rounded-4xl"> 
       <div className='flex items-center justify-center'>
        <img src={logo} className='mt-[20px]' />
      </div>
    </div>



    <div className="w-full col-span-6 bg-amber-700">2</div>

    <div className=" col-span-6 row-span-6 col-start-1 xl:col-start-2  row-start-2 bg-blue-800">
      <Outlet />
    </div>
</div>
    

 </>
  );
};

export default MainLayout;