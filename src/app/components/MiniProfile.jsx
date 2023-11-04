import React from "react";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="h-16 rounded-full border p-[2px] "
        src="https://i.pravatar.cc/150?img=2"
        alt="user"
      />
      <div className="flex-1 ml-14">
        <h2 className="font-bold ">codewithMohammed</h2>
        <h3 className="text-sm text-gray-400 ">Welcome to Instagram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
