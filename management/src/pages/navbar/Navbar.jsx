import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 h-16 bg-gray-50/60 flex px-4 items-center">
      <div className="text-4xl font-bold font-openSans">Punjab Engineering College</div>
      <div className="ml-auto">
        <img src="/your-logo.png" alt="Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
