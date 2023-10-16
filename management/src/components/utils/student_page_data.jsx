import { BiRename as NameIcon } from "react-icons/bi";
import { MdDateRange as DateIcon } from "react-icons/md";
import { BsGenderAmbiguous as GenderIcon } from "react-icons/bs";
import { AiOutlinePhone as PhoneIcon } from "react-icons/ai";
import { FaRegAddressCard as AddressIcon } from "react-icons/fa";
import { MdOutlineAccountBalance as DepartmentIcon } from "react-icons/md";
import { SlCalender as BatchIcon } from "react-icons/sl";
import { MdFormatListNumbered as SemesterIcon } from "react-icons/md";

export const parentBoxData = {
  head: "Parent Information",
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
      value: "Occupation",
      icon: <SemesterIcon />,
      placeholder: "Eg: Government Official ",
    },
  ],
};

export const studentBoxData = {
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
      value: "Age",
      icon: <PhoneIcon />,
      placeholder: "Eg: 18",
    },
    {
      value: "Address",
      icon: <AddressIcon />,
      placeholder: "Eg: Chandigarh, India",
    },
    {
      value: "Department",
      icon: <SemesterIcon />,
      element: "",
      placeholder: "Eg: 12211",
    },
    {
      value: "Branch",
      icon: <DepartmentIcon />,
      element: "",
      placeholder: "Eg: Electronics & Comm",
    },
    {
      value: "Student ID",
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
