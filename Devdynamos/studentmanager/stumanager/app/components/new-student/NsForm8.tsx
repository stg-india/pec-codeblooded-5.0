import { FormType } from "@/app/register/page";
import { useRouter } from "next/navigation";
import React from "react";
// import "globals.css"

function NsForm8({ data, up, st }: { data: FormType, up: Function, st: Function }) {
  const router = useRouter()
  const handleClick = () => {
    // change data in backend
    up(data)
  }
  return (
    <>
      <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
        Performance Details
      </h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>SGPA</strong>
          </span>
        </label>
        <input
        value={data.sgpa ?? ''}
        onChange={(e) => { st({ ...data, sgpa: e.target.value }) }}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>CGPA</strong>
          </span>
        </label>
        <input
        value={data.cgpa ?? ''}
        onChange={(e) => { st({ ...data, cgpa: e.target.value }) }}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Club Proficiency</strong>
          </span>
        </label>
        <input
        value={data.prof ?? ''}
        onChange={(e) => { st({ ...data, prof: e.target.value }) }}
          type="text"
          placeholder="Cultural/Tech/Sports"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Hostel</strong>
          </span>
        </label>
        <input
        value={data.hostel ?? ''}
        onChange={(e) => { st({ ...data, hostel: e.target.value }) }}
          type="text"
          placeholder="Kuruk/Vindh/Hima/Kalp"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "80px",
          margin: "20px 0",
        }}
      >
        <button className="btn btn-active btn-warning hover:bg-yellow-600" onClick={()=>{router.push('/register?step=5')}}>
          Previous
        </button>
        <button className="btn btn-active btn-primary hover:bg-purple-700" onClick={handleClick}>
          Finish
        </button>
      </div>
    </>
  );
}

export default NsForm8;
