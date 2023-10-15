import React, { useState } from "react";
import Search from "../utils/Search";
import Button from "../utils/Button";
import SetDataPage from "../utils/SetDataPage";
import AddStudentPage from "./addStudentPage";
import StudentAudit from "./studentAudit";
import { LogButton } from "../utils/LogButton";
import { data, columns } from "../utils/data";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ModifiedTable } from "../utils//ModifiedTable";
const Main = () => {
  const navigate = useNavigate();
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
              <ModifiedTable columns={columns} data={data} />
              <div onClick={() => { console.log('came'); navigate("/dashboard/students/audit") }}>
                <LogButton AuditType="student" />
              </div>
            </>
          }
        />
        <Route path="/add" element={<AddStudentPage />} />
        <Route path="/audit" element={<StudentAudit />} />
      </Routes>
    </div>
  );
}

export default Main;
