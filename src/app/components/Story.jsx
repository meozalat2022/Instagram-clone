import Image from "next/image";
import React from "react";

const Story = ({ img, username }) => {
  return (
    <div>
      <img
        src={img}
        className="border-red-600 border-2 h-14  rounded-full p-[1.5px] hover:scale-110 transition-transform duration-200 ease-out cursor-pointer"
        alt="image"
      />

      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
};

export default Story;
