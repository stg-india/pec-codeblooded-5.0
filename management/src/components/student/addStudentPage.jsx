import React, { useEffect, useState } from "react";
import SetDataPage from "../utils/SetDataPage";
import { studentBoxData } from "../utils/student_page_data";
import { parentBoxData } from "../utils/student_page_data";
import Button from "../utils/Button";
import { useMutation } from "react-query";
import useSubmit from "../../setup/hooks/useSubmit";
import useAuth from "../../setup/hooks/useAuth";
import { toast } from "react-toastify";
const addStudentPage = ({ studentState, setStudentState, parentState, setParentState }) => {
    const { auth } = useAuth();

    const { name, phone, address, gender, age, dep_id, student_id, year, semester, branch } = studentState;
    const addStudent = {
        body: {
            name: name,
            id: student_id,
            phoneNo: phone,
            address: address,
            gender: gender,
            age: age,
            depId: dep_id,
            branch:branch,
            sem: semester,
            year:year,
            CGPA: null,
            parentName: parentState.name,
            parentGender: parentState.gender,
            occupation: parentState.occupation,
            parentAddress: parentState.address,
            parentphone: parentState.phone
        },
        query: {
            params: { email: auth.email }
        }
    }
    const [mutate, isLoading, status, isDone] = useSubmit();
    useEffect(() => {
        console.log(status);
        if (status == 200) {
            toast('Successfully Created')
        }else toast('Something Went Wrong')
    },[isLoading])
  return (
    <div className="h-full text-2xl flex flex-col">
      <div className="px-12 pb-4 text-gray-700 flex">
        <div>Add New Student</div>
        <div
          className="ml-auto"
          onClick={() => mutate("/students/create-student", addStudent)}
        >
          <Button text={"Add Student"} />
        </div>
      </div>
      <div className="flex w-full h-fit justify-evenly">
        <SetDataPage
          State={studentState}
          Data={studentBoxData}
          setState={setStudentState}
        />
        <SetDataPage
          State={parentState}
          Data={parentBoxData}
          setState={setParentState}
        />
      </div>
      <div className="h-10 mt-[50px] flex"></div>
    </div>
  );
};

export default addStudentPage;
