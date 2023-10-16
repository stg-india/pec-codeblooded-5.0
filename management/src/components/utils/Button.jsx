import React from 'react'
import { AiOutlinePlus as Plus } from "react-icons/ai";
const Button = ({text}) => {
  return (
    <button className='ml-auto bg-purple rounded-full h-12 text-white px-4'>
      <div className='flex items-center'>
        <Plus size={20}/>
        
      <div className='ml-2'>{text}</div>
      </div>
    </button>
  )
}

export default Button
