import React from 'react'

function NsForm0() {
  return (
    <div className='justify-center items-center mb-auto'>
      <h1 className='my-10' style={{ color: "black", fontSize: "2rem", fontWeight: "bold"}}>
        Please Enter Your Student ID
      </h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Student ID</strong>
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div style={{display : 'flex', justifyContent:'space-around', margin:'2rem'}}>
        <button
          className="btn btn-active btn-warning hover:bg-yellow-600"
          // onClick={() => {
          //   router.push("/register?step=1");
          // }}
        >
          Previous
        </button>
        <button
          className="btn btn-active btn-success hover:bg-green-600"
          // onClick={() => {
          //   router.push("/register?step=3");
          // }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default NsForm0