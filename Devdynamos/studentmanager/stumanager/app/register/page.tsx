"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NsForm1 from "../components/new-student/NsForm1";
import NsForm2 from "../components/new-student/NsForm2";
import NsForm3 from "../components/new-student/NsForm3";
import NsForm5 from "../components/new-student/NsForm5";
import NsForm7 from "../components/new-student/NsForm7";
import NsForm8 from "../components/new-student/NsForm8";
import Container from "../components/Container";
import axios from "axios";
const data = {
    "sid": null,
    "age": null,
    "step": null,
    "name": null,
    "gender": null,
    "city": null,
    "pincode": null,
    "degree": null,
    "branch": null,
    "batch": null,
    "email": null,
    "quota": null,
    "updatetime": null,
    "cgpa": null,
    "sgpa": null,
    "hostel": null,
    "prof": null,
    "scholar": null
}
export type FormType = {
    "sid": Number | null,
    "step": Number | null,
    "name": string | null,
    "gender": string | null,
    "city": string | null,
    "pincode": Number | null,
    "degree": string | null,
    "branch": string | null,
    "batch": Number | null,
    "email": string | null,
    "quota": string | null,
    "updatetime": Date | null,
    "cgpa": Number | null,
    "sgpa": Number | null,
    "hostel": string | null,
    "prof": string | null,
    "scholar": string | null
    "age" : Number | null
}

const Register = () => {
    const [formData, setData] = useState<any>(data)
    const router = useRouter()
    const searchParameters = useSearchParams()
    let step = (searchParameters?.get('step') ?? '0')
    const updateData = async (data:any)=>{
        const res=await axios.put(`http://127.0.0.1:8000/api/logs/${data.sid}/update/`,{...data});
        console.log(res)
        
    }
    let form = (<NsForm1 data={formData} up={updateData} st={setData} />)
    switch (step) {
        case '2':
            // TODO: add state to backend
            form = <NsForm2 data={formData} up={updateData} st={setData} />
            break;
        case '3':
            form = <NsForm3 data={formData} up={updateData} st={setData}/>
            break;
        case '4':
            form = <NsForm5 data={formData} up={updateData} st={setData}/>
            break;
        case '5':
            form = <NsForm7 data={formData} up={updateData} st={setData}/>
            break;
        case '6':
            form = <NsForm8 data={formData} up={updateData} st={setData}/>
            break;
        default:
            break;
    }
    const handleSubmit = async (data: any) => {
        try{
            const res=await axios.get(`http://127.0.0.1:8000/api/logs/${data.sid}`);
            setData(res.data);
            console.log(res.data)
            const res2= await axios.get('http://localhost:8000/api/api/log-entries/?format=json')
            const fn:any =[]
            res2.data.map((item:any)=>{
                
                    fn.push({id:item.id,changes:JSON.parse(item.changes),timestamp:item.timestamp,object_pk:item.object_pk})
                
            })
            console.log(fn)
        }catch{
            const res=await axios.post('http://127.0.0.1:8000/api/logs/new/',{sid:data.sid, step:1});
            setData({...data,sid:data.sid})
        }
        router.push('/register?step=1')

    }

    return (
        <Container>
            <div className='bg-white pt-20' style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: "120vh", gap: '30px' }}>
                {(step==='0')?<div className='justify-center items-center mb-auto'>
                    <h1 className='my-10' style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
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
                            value={formData.sid===0?'':String(formData.sid??'')}
                            onChange={(e)=>{setData({...formData,sid:e.target.value})}}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '2rem' }}>
                        <button
                            className="btn btn-active btn-warning hover:bg-yellow-600"
                        onClick={()=>{
                            handleSubmit(formData)
                        }}
                        >
                            Start Registration
                        </button>
                    </div>
                </div>:form}
            </div>
        </Container>

    )
}

export default Register