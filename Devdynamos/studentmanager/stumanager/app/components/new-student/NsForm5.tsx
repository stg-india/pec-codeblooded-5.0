import { FormType } from "@/app/register/page";
import { useRouter } from "next/navigation";
import React from "react";
// import "globals.css"

function NsForm5({ data, up, st }: { data: FormType, up: Function, st: Function }) {
  const router = useRouter()
  const handleClick = () => {
    up(data)

    st({ ...data, step: 5 })
    router.push(`/register?step=5`)
  }
  return (
    <>
      <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
        Admission Details
      </h1>
      
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Degree</strong>
          </span>
        </label>
        <input
          value={data.degree ?? ''}
          onChange={(e) => { st({ ...data, degree: e.target.value }) }}
          type="text"
          placeholder="BTech/Mtech/PhD"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Batch</strong>
          </span>
        </label>
        <input
        value={data.batch ?? ''}
        onChange={(e) => { st({ ...data, batch: e.target.value }) }}
          type="text"
          placeholder="2021-2025"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Branch</strong>
          </span>
        </label>
        <input
        value={data.branch ?? ''}
        onChange={(e) => { st({ ...data, branch: e.target.value }) }}
          type="text"
          placeholder="CSE/ECE/EE/MECH"
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
        <button className="btn btn-active btn-warning hover:bg-yellow-600" onClick={()=>{router.push('/register?step=3')}}>
          Previous
        </button>
        <button className="btn btn-active btn-success hover:bg-green-600" onClick={handleClick}>
          Save & Next
        </button>
      </div>
    </>
  );
}

export default NsForm5;
