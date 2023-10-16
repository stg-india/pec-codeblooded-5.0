import React, { useState } from "react";
import useAuth from "../../setup/hooks/useAuth";
import useSubmit from "../../setup/hooks/useSubmit";

export const AuditLog = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { auth } = useAuth();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const oldData = data.oldState ? data.oldState : {};
  const newData = data.newState ? data.newState.student : {};
  const [mutate, isLoading, status, isDone] = useSubmit();
  
  return (
    <div className="max-w-full">
      <div>
        <button
          onClick={toggleDropdown}
          className="w-full rounded-lg bg-gray-200 hover:bg-gray-300 h-16 flex items-center justify-between"
        >
          <div className="w-[25%] h-8overflow-hidden">{data._id}</div>
          <div className="w-[30%] h-8overflow-hidden">{data.message}</div>
          <div className="w-[15%] h-8overflow-hidden">{data.createdBy}</div>
          <div className="w-[20%] h-8overflow-hidden">{data.createdAt}</div>
        </button>
        <div
          className={`transform transition-all ${
            isOpen ? "h-auto scale-y-100 p-4 mb-4" : "h-0 scale-y-0 mb-1"
          } overflow-hidden flex bg-white border rounded-md shadow-lg`}
        >
          <ul className="w-[30%]">
            <li className="mb-4 mt-6">
              <span className="font-bold">Audit ID : </span>
              <span>{data._id}</span>
            </li>
            <li className="mb-4">
              <span className="font-bold">Audit Message : </span>
              {data.message}
            </li>
            <li className="mb-4">
              <span className="font-bold">Created By : </span>
              {data.createdBy}
            </li>
            <li className="mb-4">
              <span className="font-bold">Created At : </span>
              {data.createdAt}
            </li>
          </ul>
          <div className="w-[30%]">
            <span className="font-bold">Old State : </span>
            <table className="w-8">
              <tbody>
                {Object.keys(oldData).map((key) => (
                  <tr key={key}>
                    <td className="px-6 py-4 font-semibold border-gray-400 border-2 bg-gray-100">
                      {key}
                    </td>
                    <td className="px-6 py-4 border-gray-400 border-2">
                      {oldData[key]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-[30%]">
            <span className="font-bold">New State : </span>
            <table className="w-8">
              <tbody>
                {Object.keys(newData).map((key) => (
                  <tr key={key}>
                    <td className="px-6 py-4 font-semibold border-gray-400 border-2 bg-gray-100">
                      {key}
                    </td>
                    <td className="px-6 py-4 border-gray-400 border-2">
                      {newData[key]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            onClick={()=>{
              mutate("/audits/get-revert-logs", {
                body: { id: data._id },
                query: { email: auth.email },
              });
            }}
            className="fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-md shadow-lg"
          >
            Revert
          </button>
        </div>
      </div>
    </div>
  );
};
