// src/layouts/MainLayout/index.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../MainLayout/Sidebar/mainlyout.css'
import TopNavbar from './TopNavbar';


const MainLayout = () => {
  return (
    <div class="container">
  <div class="left">
  <Sidebar />
  </div>
  <div class="right">
    
  <TopNavbar  />
  </div>
</div>

  );
};

export default MainLayout;