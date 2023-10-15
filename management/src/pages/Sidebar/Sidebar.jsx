import React from "react";
import { Link } from "react-router-dom";
import { MdSpaceDashboard as Dash } from "react-icons/md";
import { HiUserGroup as EventIcon } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Sidebar = () => {
  const location = useLocation();
  const list = [
    {
      name: "DashBoard",
      path: "/dashboard",
      icon: Dash,
      on: false,
    },
    {
      name: "Student Management",
      path: "/dashboard/students",
      icon: EventIcon,
      on: false,
    },
    {
      name: "Staff Management",
      path: "/dashboard/staff",
      icon: EventIcon,
      on: false,
    },
    {
      name: "Department Management",
      path: "/dashboard/department",
      icon: EventIcon,
      on: false,
    },
  ];

  return (
    <div className="flex flex-col h-full text-white bg-gray-50 border-r-[1px] w-full shadow-sm font-NunitoSans">
      <div className="relative justify-end w-full h-full bg-black-gradient">
        <div className="p-4">
          <div className="text-white text-4xl">
            <svg
              fill="none"
              // height="15%"
              viewBox="0 0 24 24"
              // width="15%"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[100%] w-[100%] md:h-[15%] md:w-[15%]"
            >
              <path
                opacity="0.16"
                d="M7.242 11.083c.449-1.674 2.17-3.394 3.843-3.843l10.434-2.796c1.673-.448 2.666.545 2.218 2.218L20.94 17.096c-.449 1.674-2.17 3.394-3.843 3.843L6.664 23.735c-1.673.448-2.666-.545-2.218-2.218l2.796-10.434Z"
                fill="#6366F1"
              ></path>
              <path
                d="M3.06 6.9c.448-1.674 2.168-3.394 3.842-3.843L17.336.261c1.673-.448 2.667.545 2.218 2.218l-2.796 10.434c-.449 1.674-2.169 3.394-3.843 3.843L2.481 19.552C.808 20-.185 19.007.263 17.334L3.06 6.9Z"
                fill="#6366F1"
              ></path>
            </svg>
          </div>
          <div className="h-16 w-full bg-white/10 rounded-lg mt-4 p-4 flex-col justify-center font-openSans hidden md:flex">
            <div className="text-xl font-openSans font-bold tracking-wider">
              Student Management
            </div>
            <div className="text-white/70">Create | Save | Validate</div>
          </div>
        </div>
        <hr className="border-white/30 my-4" />
        <div className="h-2/3  px-4">
          {list.map((item, i) =>
            element(i, item.name, item.path, item.icon, item.on)
          )}
        </div>
        <hr className="border-white/30 my-4" />
      </div>
    </div>
  );
};

function element(index, value, path, Icon, isSelect) {
  return (
    <Link
      onClick={() => toast(`Landed On ${value}`)}
      key={index}
      to={path}
      className="relative group flex items-center justify-start h-12 hover:bg-white/10 rounded-lg px-2"
    >
      <Icon
        size={25}
        className="text-gray-400 group-hover:text-purple-600 "
        style={{ color: isSelect && "rgb(126, 34, 206)" }}
      />

      <div className="hidden md:block">
        <div
          className=" text-lg ml-2"
          style={{ color: isSelect && "rgb(126, 34, 206)" }}
        >
          {value}
        </div>
        <div
          className="bg-purple-700 max-w-0 h-[1px]"
          style={{ maxWidth: isSelect && "100%" }}
        ></div>
      </div>

      {/* hover-title */}
      <div className="hidden md:opacity-0 transition-opacity duration-300 group-hover:block absolute z-20 top-5 left-14 md:left-2 p-1 rounded-lg whitespace-nowrap bg-gray-700 text-white">
        <div className="relative z-20">{value}</div>
        <div className="absolute top-2 -left-1 bg-gray-700 h-4 w-4  skew-x-12 -rotate-[38deg]"></div>
      </div>
    </Link>
  );
}

export default Sidebar;

