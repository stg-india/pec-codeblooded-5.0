import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 h-16 bg-gray-50/60 flex px-4 items-center">
      <div className="ml-auto h-10 w-10">
        <img src="/images/user.png" alt="Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
