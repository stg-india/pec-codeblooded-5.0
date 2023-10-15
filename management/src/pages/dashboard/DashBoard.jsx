import React from 'react'
import SideBar from '../Sidebar/Sidebar';
import Navbar from '../navbar/navbar';
import Main from '../main/Main';
const DashBoard = () => {
  return (
    <div className="h-full w-full flex">
      <div className="h-full md:w-[18%] sm:w-[70px] w-[55px]">
        <SideBar />
      </div>
      <div className="h-full w-[calc(100%-55px)] md:w-[82%] sm:w-[calc(100%-70px)] overflow-y-scroll">
        <Navbar />
        <Main/>
      </div>
    </div>
  );
}

export default DashBoard
