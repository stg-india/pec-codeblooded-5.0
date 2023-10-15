import React from 'react'
import { useState } from 'react';
const studentAudit = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const jsonData = {
      name: "Nitin",
      sid: "12344",
      hello: "sjfn",
    };
  return (
    <>
      <div className="text-3xl font-bold text-left text-gray-900 mb-9">
        Audit Logs
      </div>
      <div className="max-w-full">
        <div>
          <button
            onClick={toggleDropdown}
            className="w-full rounded-lg bg-gray-200 hover:bg-gray-300 h-16 flex items-center justify-between"
          >
            <div className="w-[20%] h-8overflow-hidden">AuditId</div>
            <div className="w-[40%] h-8overflow-hidden">AuditMessage</div>
            <div className="w-[20%] h-8overflow-hidden">AuditCreatedBy</div>
            <div className="w-[15%] h-8overflow-hidden">AuditCreatedAt</div>
          </button>
          <div
            className={`transform transition-all ${
              isOpen ? "h-auto scale-y-100 p-4 mb-4" : "h-0 scale-y-0 mb-1"
            } overflow-hidden flex bg-white border rounded-md shadow-lg`}
          >
            <ul className="w-[30%]">
              <li className="mb-4 mt-6">
                <span className="font-bold">Audit ID : </span>
                <span>1234555</span>
              </li>
              <li className="mb-4">
                <span className="font-bold">Audit Message : </span>Created
                Student
              </li>
              <li className="mb-4">
                <span className="font-bold">Created By : </span>Amit
              </li>
              <li className="mb-4">
                <span className="font-bold">Created At : </span>12/13/2003
              </li>
            </ul>
            <div className="w-[30%]">
              <span className="font-bold">Old State : </span>
              <table className="w-8">
                <tbody>
                  {Object.keys(jsonData).map((key) => (
                    <tr key={key}>
                      <td className="px-6 py-4 font-semibold border-gray-400 border-2 bg-gray-100">
                        {key}
                      </td>
                      <td className="px-6 py-4 border-gray-400 border-2">
                        {jsonData[key]}
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
                  {Object.keys(jsonData).map((key) => (
                    <tr key={key}>
                      <td className="px-6 py-4 font-semibold border-gray-400 border-2 bg-gray-100">
                        {key}
                      </td>
                      <td className="px-6 py-4 border-gray-400 border-2">
                        {jsonData[key]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default studentAudit
