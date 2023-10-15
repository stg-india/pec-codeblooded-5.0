import React, { useEffect, useState } from "react";
import Search from "../utils/Search";
import Button from "../utils/Button";
import SetDataPage from "../utils/SetDataPage";
import AddStudentPage from "./addStudentPage";
import StudentAudit from "./studentAudit";
import { LogButton } from "../utils/LogButton";
import { sample, columns } from "../utils/student_sampleData";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ModifiedTable } from "../utils/ModifiedTable";
import ModifyStudentPage from "./modifyStudentPage";
import useGetCall from "../../setup/hooks/useGetCall";
const Main = () => {
  const navigate = useNavigate();
  const [studentList, setStudentList] = useState([{
    name: "",
    sid: "",
    phoneNo: "",
    batchYear: "",
    branch: "",
    cgpa: "",
  }]);

  const [studentState, setStudentState] = useState({
    name: "",
    phone: "",
    address: "",
    gender: "",
    age: "",
    dep_id: "",
    year: "",
    semester: "",
  });
  const [parentState, setParentState] = useState({
    name: "",
    occupation: "",
    phone: "",
    address: "",
    gender: "",
  });

  const [data, isLoading, status] = useGetCall({
    url: "/get-students",
    query: {},
  });

  useEffect(() => {
    if (!isLoading) {
      console.log(data);
    }
  }, [data])

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <div className="flex h-16">
                <Search text={"Search Student"} />
                <div
                  onClick={() => {
                    console.log("came");
                    navigate("/dashboard/students/add");
                  }}
                  className="ml-auto"
                >
                  <Button text={"Add Student"} />
                </div>
              </div>
              <ModifiedTable columns={columns} data={sample} />
              <div
                onClick={() => {
                  console.log("came");
                  navigate("/dashboard/students/audit");
                }}
              >
                <LogButton AuditType="student" />
              </div>
            </>
          }
        />
        <Route
          path="/add"
          element={
            <AddStudentPage
              studentState={studentState}
              setStudentState={setStudentState}
              parentState={parentState}
              setParentState={setParentState}
            />
          }
        />
        <Route path="/audit" element={<StudentAudit />} />
        <Route
          path="/modify/:id"
          element={
            <ModifyStudentPage
              studentState={studentState}
              setStudentState={setStudentState}
              parentState={parentState}
              setParentState={setParentState}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Main;
