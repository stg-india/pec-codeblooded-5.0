import { FormType } from "@/app/register/page";
import { useRouter } from "next/navigation";
import React from "react";

function NsForm3({ data, up, st }: { data: FormType, up: Function, st: Function }) {
  const router = useRouter()
  const handleClick = () => {
    // change data in backend
    up(data)

    st({ ...data, step: 4 })
    router.push(`/register?step=4`)
  }
  return (
    <>
      <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
        Contact Details
      </h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Email Address</strong>
          </span>
        </label>
        <input
          value={data.email ?? ''}
          onChange={(e) => { st({ ...data, email: e.target.value }) }}
          type="text"
          placeholder="someone@xyz.com"
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
        <button className="btn btn-active btn-warning hover:bg-yellow-600" onClick={() => { router.push('/register?step=2') }}>Previous</button>
        <button className="btn btn-active btn-success hover:bg-green-600" onClick={handleClick}>Save & Next</button>
      </div>
    </>
  );
}

export default NsForm3;
