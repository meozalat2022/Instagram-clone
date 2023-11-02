"use client";
import React, { useState, useEffect } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
import Story from "./Story";
import Image from "next/image";
const Stories = () => {
  const [storyUsers, setStoryUsers] = useState([]);
  useEffect(() => {
    const stories = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: "en" }).toLocaleLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(stories);
  }, []);
  return (
    <div className="scrollbar flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm">
      {storyUsers.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
};

export default Stories;
