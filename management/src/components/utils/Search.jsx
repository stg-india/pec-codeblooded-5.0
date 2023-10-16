import React, { useState } from 'react'

const Search = ({text}) => {
    const [value, setValue] = useState("");
  return (
      <input value={value} onChange={(e) => setValue(e.target.value)} className='w-52 h-12 border-[1px] px-4 rounded-full' placeholder={text} />
  )
}

export default Search
