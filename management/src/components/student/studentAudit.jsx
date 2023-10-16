import React from "react";
import { useState } from "react";
import { AuditLog } from "../utils/AuditLog";
import { useEffect } from "react";
import useAuth from "../../setup/hooks/useAuth";
import useGetCall from "../../setup/hooks/useGetCall";
const studentAudit = () => {
  const {auth} = useAuth();
  const [AuditList, SetAuditList] = useState([{
    id: { $oid: "652bfd7b86922665bdf93b46" },
    message: "Student Nitn Singh has been Created",
    stuId: { $oid: "652c6079ced6761279eb05de" },
    method: "Create",
    newState: {
      student: {
        name: "Nitn Singh",
        id: "3",
        phoneNo: "9053825452",
        address: "Rajasthan",
        gender: "Male",
        age: "21",
        sem: "1",
      },
    },
    createdBy:"nitin@gmail.com",
    createdAt: { $date: "2023-10-15T14:55:55.799Z" },
    updatedAt: { $date: "2023-10-15T21:58:18.165Z" },
    _v: 0,
    version: "1",
    parentAuditId: "null",
  }]);

  const [data, isLoading, status] = useGetCall({
    url: "/audits/get-logs",
    query: {
      params: {
        email: auth.email,
      },
    },
  });
  useEffect(() => {
    if (!isLoading && !data) {
      SetAuditList([...data]);
    }
  }, [data]);

  return (
    <>
      <div className="text-3xl font-bold text-left text-gray-900 mb-9">
        Audit Logs
      </div>
      {AuditList.map((audit) => (
        <AuditLog data={audit} />
      ))}
    </>
  );
};

export default studentAudit;
