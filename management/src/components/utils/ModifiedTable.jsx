import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import { AiOutlineDelete as DeleteIcon } from "react-icons/ai";
import { BiEditAlt as EditIcon } from "react-icons/bi";

// name: 'harman',
// sid: 211,
// phoneNo: 91,
// sem: "1st",
// cgpa: 9.0,
// branch: "ECE"

export const ModifiedTable = ({ columns, data }) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <table className="w3-table w3-striped mt-9 shadow-lg">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <div className="flex">
                <button className="flex bg-green-600 items-center py-1 px-2 text-white rounded-md ">
                  <EditIcon />
                  <div>Edit</div>
                </button>
                <button className="flex bg-red-600 items-center py-1 px-2 text-white rounded-md ml-2">
                  <DeleteIcon />
                  <div>Delete</div>
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
