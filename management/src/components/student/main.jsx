import React from "react";
import Search from "../utils/Search";
import Button from "../utils/Button";
import { ModifiedTable } from "../utils//ModifiedTable";
import { data,columns } from "../utils/data";

const Main = () => {
  return (
    <>
          <div className="flex h-16">
              <Search text={"Search Student"} />
        <Button text={"Add Student"} />
      </div>
      <ModifiedTable columns={columns} data={data}/>
    </>
  );
};

export default Main;
