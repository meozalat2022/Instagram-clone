import Image from "next/image";
import React from "react";

const Story = ({ img, username, isUser }) => {
  return (
    <div className="relative group cursor-pointer">
      <img
        src={img}
        className="border-red-600 border-2 h-14  rounded-full p-[1.5px] group-hover:scale-110 transition-transform duration-200 ease-out "
        alt="image"
      />
      {isUser && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute top-4 left-4 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      )}

      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
};

export default Story;
