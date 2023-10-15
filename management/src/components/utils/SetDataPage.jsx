import React from "react";
import { AiFillPlusCircle as Add } from "react-icons/ai";

const SetDataPage = ({ State, Data, setState }) => {
  return (
    <div className="shadow-md h-[500px] rounded-md pb-6">
      <div className="h-10 bg-purple rounded-t-md text-white flex items-center px-4">
        <Add />
        <div className="ml-1">{Data.head}</div>
      </div>
      <div className="grid px-6 pt-6 text-xl space-y-4 center grid-cols-[20%_80%]">
        {Data.entry.map((object, index) => (
          // <div key={index} className="px-10 pt-6 text-xl">
          //   <div className="flex items-center">
          //           <div className="text-gray-600">{object.value}</div>
          //     <div className="flex-grow h-10 border-1 border-[1px] rounded-md ml-16 flex">
          //       <div className="bg-gray-200 text-gray-600 flex items-center justify-center w-10">
          //         {object.icon}
          //       </div>
          //       <input
          //         type="text"
          //         className="flex-grow  outline-none pl-4"
          //         placeholder={object.placeholder}
          //       />
          //     </div>
          //   </div>
          // </div>
          //   <div key={index} className="px-10 pt-6 text-xl flex">
          <>
            <div key={"$"+index} className="text-gray-600 text-center flex justify-center items-center ">
              {object.value}
            </div>
            <div key={"#"+index} className="h-10 border-1 border-[1px] rounded-md ml-16 flex ">
              <div className="bg-gray-200 text-gray-600 flex items-center justify-center w-10">
                {object.icon}
              </div>
                    <input
                        type="text"
                        className="  outline-none pl-4"
                        placeholder={object.placeholder?object.placeholder:""}
                        value={State[getKey(object.value)]}
                        onChange={(e) => {
                            State[getKey(object.value)] = e.target.value;
                            setState({ ...State });
                            console.log(State);
                        }}
              />
            </div>
            {/* </div> */}
          </>
        ))}
      </div>
    </div>
  );
};

function getKey(value) {
  let key = "";
  switch (value) {
    case "Name":
      key = "name";
      break;
    case "Date Of Birth":
      key = "age";
      break;
    case "Gender":
      key = "gender";
      break;
    case "Phone No.":
      key = "phone";
      break;
    case "Address":
      key = "address";
      break;
    case "Department":
      key = "dep_id";
      break;
    case "Batch Year":
      key = "year";
      break;
    case "Semester":
      key = "semester";
      break;
    default:
      key = "occupation";
  }
  return key;
}

export default SetDataPage;
