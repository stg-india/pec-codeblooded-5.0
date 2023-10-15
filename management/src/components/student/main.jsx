import React from "react";
import Search from "../utils/Search";
import Button from "../utils/Button";
import SetDataPage from "../utils/SetDataPage";
import AddStudentPage from "./addStudentPage";
import { Route, Routes, useNavigate} from "react-router-dom";
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
                <div onClick={() => { console.log('came'); navigate("/dashboard/students/add")}} className="ml-auto">
                  <Button text={"Add Student"} />
                </div>
              </div>
              <div></div>
            </>
          }
        />
        <Route path="/add" element={<AddStudentPage />} />
      </Routes>
    </div>
  );
};

export default Main;
