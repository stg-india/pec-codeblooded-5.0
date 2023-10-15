import React from "react";
import Search from "../utils/Search";
import Button from "../utils/Button";

const Main = () => {
  return (
    <>
          <div className="flex h-16">
              <Search text={"Search Student"} />
        <Button text={"Add Student"} />
      </div>
      <Table/>
    </>
  );
};

export default Main;
