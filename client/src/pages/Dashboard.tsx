import React,{useState} from 'react'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'
import {  Outlet, useLocation } from 'react-router-dom'
import DashboardHome from '../components/Dashboard/DashboardHome'

const Dashboard = () => {
  const [isSideBarOpen,setIsSideBarOpen] = useState(true);

 const location = useLocation();

  const toggleSideBar = ()=>{
    setIsSideBarOpen(()=>!isSideBarOpen)
  }

  return (
    <section className=' w-full flex h-screen'>
      <div className=' w-full flex justify-center  '>
        <div className='bg-white w-full max-w-[2500px] relative'>
          <Header handelSideBar={toggleSideBar}/>
          <div className={`pt-24 lg:w-[350px] h-screen bg-[#F4F4F4] md:h-screen lg:fixed absolute transition-all ${isSideBarOpen? "block": "hidden"} w-full customShadow z-20`}>
            <Sidebar />
          </div>
          <div className='lg:ml-[350px] pt-[4.5rem] md:px-3 px-1'>
           {location.pathname === '/dashboard'  && <DashboardHome/>}
           <Outlet/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard