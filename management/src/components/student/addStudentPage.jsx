import React, { useState } from "react";
import SetDataPage from "../utils/SetDataPage";
import { BiRename as NameIcon } from "react-icons/bi";
import { MdDateRange as DateIcon } from "react-icons/md";
import { BsGenderAmbiguous as GenderIcon } from "react-icons/bs";
import { AiOutlinePhone as PhoneIcon } from "react-icons/ai";
import { FaRegAddressCard as AddressIcon } from "react-icons/fa";
import { MdOutlineAccountBalance as DepartmentIcon } from "react-icons/md";
import { SlCalender as BatchIcon } from "react-icons/sl";
import { MdFormatListNumbered as SemesterIcon } from "react-icons/md";
import Button from "../utils/Button";
const addStudentPage = () => {
  const [studentState, setstudentData] = useState({
    name: "",
    phone: "",
    address: "",
    gender: "",
    age: "",
    dep_id: "",
    year: "",
    semester:""
  });
  const [parentState, setParentData] = useState({
    name: "",
    occupation: "",
    phone: "",
    address: "",
    gender: "",
  });

  const parentBoxData = {
    head: "Parent Information",
    entry: [
      {
        value: "Name",
        icon: <NameIcon/>,
        placeholder: "Eg:Harman Singh",
      },
      {
        value: "Gender",
        icon: <GenderIcon/>,
        placeholder: "Eg: Male",
      },
      {
        value: "Phone No.",
        icon: <PhoneIcon/>,
        placeholder: "Eg: 70873...",
      },
      {
        value: "Address",
        icon: <AddressIcon/>,
        placeholder: "Eg: Chandigarh, India",
      },
      {
        value: "Occupation",
        icon: <SemesterIcon/>,
        placeholder: "Eg: Government Official ",
      }
    ],
    };
    
     const studentBoxData = {
       head: "Student Information",
       entry: [
         {
           value: "Name",
           icon: <NameIcon />,
           placeholder: "Eg:Harman Singh",
         },
         {
           value: "Gender",
           icon: <GenderIcon />,
           placeholder: "Eg: Male",
         },
         {
           value: "Phone No.",
           icon: <PhoneIcon />,
           placeholder: "Eg: 70873...",
         },
         {
           value: "Address",
           icon: <AddressIcon />,
           placeholder: "Eg: Chandigarh, India",
         },
         {
           value: "Department",
           icon: <DepartmentIcon />,
           element: "",
           placeholder: "Eg: Electronics & Comm",
         },
         {
           value: "Batch Year",
           icon: <BatchIcon />,
           element: "",
           placeholder: "Eg:Harman Singh",
         },
         {
           value: "Semester",
           icon: <SemesterIcon />,
           placeholder: "Eg: 1",
         },
       ],
     };
  return (
    <div className="h-full text-2xl flex flex-col">
      <div className="px-12 pb-4 text-gray-700">Add New Student</div>
      <div className="flex w-full h-fit justify-evenly">
              <SetDataPage State={studentState} Data={studentBoxData} setState={setstudentData} />
              <SetDataPage State={parentState} Data={parentBoxData} setState={setParentData} />
          </div>
          <div className="h-10 mt-[50px] flex">
              <div className="ml-auto">
                  <Button text={"Add Student"} />
              </div>
          </div>
    </div>
  );
};

export default addStudentPage;
