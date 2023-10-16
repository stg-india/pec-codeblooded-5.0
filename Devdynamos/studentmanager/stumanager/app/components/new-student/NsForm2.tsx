import { FormType } from "@/app/register/page";
import { useRouter } from "next/navigation";
import React from "react";

function NsForm2({ data, up, st }: { data: FormType, up: Function, st: Function }) {
  const router = useRouter()
  const handleClick = () => {
    up(data)

    st({ ...data, step: 3 })
    router.push(`/register?step=3`)
  }
  return (
    <>
      <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
        Address Details
      </h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>City</strong>
          </span>
        </label>
        <input
          type="text"
          value={data.city ?? ''}
          onChange={(e) => { st({ ...data, city: e.target.value }) }}
          placeholder="Chd/Pkl/Moh/Others"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Pincode</strong>
          </span>
        </label>
        <input
          value={String(data.pincode ?? '')}
          onChange={(e) => { st({ ...data, pincode: e.target.value }) }}
          type="text"
          placeholder="Type here"
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
        <button className="btn btn-active btn-warning hover:bg-yellow-600" onClick={() => { router.push('/register?step=1') }}>
          Previous
        </button>
        <button className="btn btn-active btn-success hover:bg-green-600" onClick={handleClick}>
          Save & Next
        </button>
      </div>
    </>
  );
}

export default NsForm2;
