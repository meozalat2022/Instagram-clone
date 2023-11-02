import Image from "next/image";
import React from "react";

const Story = ({ img, username }) => {
  console.log("1111111111111111111", img);
  return (
    <div>
      <Image alt="image" width={75} height={85} src={img}></Image>
      <p>{username}</p>
    </div>
  );
};

export default Story;
