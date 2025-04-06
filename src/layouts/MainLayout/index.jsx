// src/layouts/MainLayout/index.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../MainLayout/Sidebar/mainlyout.css'


const MainLayout = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Outlet /> {/* This is where child routes will render */}
      </div>
    </div>
  );
};

export default MainLayout;