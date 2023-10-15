import React from 'react'
import { data } from './data'

const Table = () => {
    
    const columns = React.useMemo(() => [
        {
            Header: "Name",
            accessor:"name",
        },
        {
            Header: "Student Id",
            accessor:"sid",
        },
        {
            Header: "Phone",
            accessor:"phone",
        },
        {
            Header: "Year",
            accessor:"year",
        },
        {
            Header: "CGPA",
            accessor:"cgpa",
        },
        {
            Header: "Branch",
            accessor:"branch",
        },
    ])
    const table = useReactTable({columns, data});
  return (
    <div>
      
    </div>
  )
}

export default Table
