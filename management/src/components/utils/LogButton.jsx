import React from "react";
import { BsPersonLinesFill } from 'react-icons/bs';
import { FcDepartment } from 'react-icons/fc';

export const LogButton = ({ AuditType }) => {
  return (
    <div className="fixed bottom-4 right-4">
      <button className="w-16 h-16 bg-blue-500 rounded-md text-white text-3xl flex items-center justify-center">
        {AuditType=='student'?<BsPersonLinesFill/>:""}
        {AuditType=='staff'?<BsPersonLinesFill/>:""}
        {AuditType=='department'?<FcDepartment/>:""}
      </button>
    </div>
  );
};
