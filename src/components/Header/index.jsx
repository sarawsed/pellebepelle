import React from "react";
import resumeData from "../../data";

function Header() {
  return (
    <div className="bg-red-800 text-white p-6 rounded-t-xl relative flex">
      <div className="relative flex justify-start w-[50%] sm:w-[20%]">
        <img
          className="w-28 h-28 rounded-full object-cover sm:absolute sm:-bottom-12"
          src={resumeData.header.profileImage}
          alt="Profile"
        />
      </div>
      <div className="sm:text-center w-[50%] sm:w-[80%] ">
        <h1 className="text-4xl font-bold">{resumeData.header.name}</h1>
        <p className="text-md">{resumeData.header.title}</p>
      </div>
    </div>
  );
}

export default Header;
