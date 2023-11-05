"use client";
import React, { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const userSuggestions = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: "en" }).toLocaleLowerCase(),
      jobTitle: minifaker.jobTitle(),
      id: i,
    }));
    setSuggestions(userSuggestions);
  }, []);
  return (
    <div className="mt-4 ml-10 w-[400px]">
      <div className=" flex justify-between items-center mb-5 text-sm ">
        <h3 className="font-bold text-gray-400">Suggestions for You</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((sug) => {
        return (
          <div className="flex items-center justify-between mt-3">
            <img
              className="h-10 rounded-full border p-[2px]"
              src={`https://i.pravatar.cc/150?img=${Math.ceil(
                Math.random() * 70
              )}`}
              alt={sug.username}
            />
            <div className=" flex-1 ml-4">
              <h2 className="font-semibold text-sm">{sug.username}</h2>
              <h3 className="text-gray-400 text-sm truncate w-[230px]">
                {sug.jobTitle}
              </h3>
            </div>
            <button className="text-blue-400 text-sm font-semibold">
              Follow
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;
