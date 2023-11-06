"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const MiniProfile = () => {
  const { data: session } = useSession();
  return (
    <div className="flex w-full items-center justify-between mt-14 ml-10">
      <img
        className="h-16 rounded-full border p-[2px] "
        src={session?.user.image}
        alt="user"
      />
      <div className=" ml-14 flex-1">
        <h2 className="font-bold ">{session?.user.username}</h2>
        <h3 className="text-sm text-gray-400 ">Welcome to Instagram</h3>
      </div>
      <button
        onClick={() => signOut()}
        className="font-semibold text-blue-400 text-sm"
      >
        Sign Out
      </button>
    </div>
  );
};

export default MiniProfile;
