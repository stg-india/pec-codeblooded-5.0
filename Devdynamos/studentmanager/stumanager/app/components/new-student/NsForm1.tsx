"use client"
import { FormType } from "@/app/register/page";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function NsForm1({ data, up, st }: { data: FormType, up: Function, st: Function }) {
  const router = useRouter()
  const handleClick = () => {
    up(data)
    st({ ...data, step: 2 })
    

    router.push(`/register?step=2`)
  }
  return (
    <>
      <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
        Personal Details
      </h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Full Name</strong>
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-white"
          value={data.name ?? ''}
          onChange={e => { st({ ...data, name: (e.target.value) }) }}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Gender</strong>
          </span>
        </label>
        <input
          type="text"
          placeholder="Male/Female/Others"
          className="input input-bordered w-full max-w-xs bg-white"
          value={data.gender ?? ''}
          onChange={e => { st({ ...data, gender: (e.target.value) }) }}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Age</strong>
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-white"
          value={String(data.age ?? '')}
          onChange={e => { st({ ...data, age: Number(e.target.value) }) }}
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
        {data.step && <button className="btn btn-active btn-warning hover:bg-yellow-600" onClick={() => {
          router.push(`/register?step=${data.step}`)
        }}>
          Continue to where you left
        </button>}
        <button className="btn btn-active btn-success hover:bg-green-600" onClick={handleClick}>
          Save & Next
        </button>
      </div>
    </>
  );
}
export default NsForm1;
