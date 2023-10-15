import React, { useState } from "react";
import SetDataPage from "../utils/SetDataPage";
import { studentBoxData } from "../utils/student_page_data";
import { parentBoxData } from "../utils/student_page_data";
import Button from "../utils/Button";
const addStudentPage = ({studentState, setStudentState, parentState, setParentState}) => {
 
  return (
    <div className="h-full text-2xl flex flex-col">
      <div className="px-12 pb-4 text-gray-700">Add New Student</div>
      <div className="flex w-full h-fit justify-evenly">
              <SetDataPage State={studentState} Data={studentBoxData} setState={setStudentState} />
              <SetDataPage State={parentState} Data={parentBoxData} setState={setParentState} />
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
