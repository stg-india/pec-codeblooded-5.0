import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Student from '../../components/student/main';
import Staff from '../../components/staff/main';
import Department from '../../components/department/main';
const Main = () => {
  return <div className="p-6 h-[calc(100%-64px)]">
    <Routes>
      <Route path='/students/*' element={<Student/>} />
      <Route path='/staff' element={<Staff/>} />
      <Route path='/department' element={<Department/>} />
    </Routes>
  </div>;
}

export default Main
