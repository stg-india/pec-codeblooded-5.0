import { useRouter } from "next/navigation";
import React from "react";
// import "globals.css"

function NsForm6() {
  const router = useRouter()
  return (
    <>
      <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
        Documents Verification
      </h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span
            className="label-text"
            style={{ color: "black", fontSize: "1.1rem" }}
          >
            Attach your Aadhar Card
          </span>
        </label>
        <input type="file" className="file-input w-full max-w-xs bg-gray-100" />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span
            className="label-text"
            style={{ color: "black", fontSize: "1.1rem" }}
          >
            Attach your JEE Admit Card
          </span>
        </label>
        <input type="file" className="file-input w-full max-w-xs bg-gray-100" />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span
            className="label-text"
            style={{ color: "black", fontSize: "1.1rem" }}
          >
            Attach your JEE Marksheet
          </span>
        </label>
        <input type="file" className="file-input w-full max-w-xs bg-gray-100" />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span
            className="label-text"
            style={{ color: "black", fontSize: "1.1rem" }}
          >
            Attach your 12th Marksheet
          </span>
        </label>
        <input
          type="file"
          className="file-input w-full max-w-xs bg-gray-100"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span
            className="label-text"
            style={{ color: "black", fontSize: "1.1rem" }}
          >
            Attach your 10th Marksheet
          </span>
        </label>
        <input
          type="file"
          className="file-input w-full max-w-xs bg-gray-100"
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
        <button className="btn btn-active btn-success hover:bg-green-600" onClick={()=>{router.push('/register?step=7')}}>
          Next
        </button>
      </div>
    </>
  );
}

export default NsForm6;
