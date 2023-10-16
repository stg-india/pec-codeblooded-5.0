import { FormType } from "@/app/register/page";
import { useRouter } from "next/navigation";
import React from "react";

function NsForm7({ data, up, st }: { data: FormType, up: Function, st: Function }) {
  const router = useRouter();
  const handleClick = () => {
    up(data)

    st({ ...data, step: 6 })
    router.push(`/register?step=6`)
  }
  return (
    <>
      <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
        Additional Information
      </h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Quota</strong>
          </span>
        </label>
        <input
          value={data.quota ?? ''}
          onChange={(e) => { st({ ...data, quota: e.target.value }) }}
          type="text"
          placeholder="Gen/SC/ST/OBC"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Scholarship(if applicable)</strong>
          </span>
        </label>
        <input
          value={data.scholar ?? ''}
          onChange={(e) => { st({ ...data, scholar: e.target.value }) }}
          type="text"
          placeholder="None/Acad/Sports/PWD"
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
        <button className="btn btn-active btn-warning hover:bg-yellow-600" onClick={()=>{router.push('/register?step=4')}}>
          Previous
        </button>
        <button className="btn btn-active btn-success hover:bg-green-600" onClick={handleClick}>
          Save & Next
        </button>
      </div>
    </>
  );
}

export default NsForm7;
