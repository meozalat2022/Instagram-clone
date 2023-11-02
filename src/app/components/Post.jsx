import Image from "next/image";
import React from "react";

const Post = ({ key, id, userImage, username, img, caption }) => {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* post header */}

      <div className="flex items-center">
        <Image
          className="h-12 rounded-full object-cover border p-1 mr-3"
          width={75}
          height={75}
          src={userImage}
          alt={username}
        ></Image>
        <p className="font-bold flex-1">{username}</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
      {/* post image */}
      <Image
        className="object-cover w-full"
        width={350}
        height={350}
        src={img}
        alt={username}
      ></Image>
    </div>
  );
};

export default Post;
