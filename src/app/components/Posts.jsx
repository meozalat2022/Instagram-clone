import React from "react";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: "1",
      username: "Mohammed",
      userImag:
        "https://images.unsplash.com/photo-1682687218904-de46ed992b58?auto=format&fit=crop&q=80&w=1843&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "beautiful view",
    },
    {
      id: "2",
      username: "Ahmed",
      userImag:
        "https://images.unsplash.com/photo-1698402532181-78b834538a86?auto=format&fit=crop&q=80&w=1954&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Nice Picture",
    },
    {
      id: "3",
      username: "Hassan",
      userImag:
        "https://images.unsplash.com/photo-1698778874232-6a0a58d84055?auto=format&fit=crop&q=80&w=2003&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Nice Image",
    },
    {
      id: "4",
      username: "Youssef",
      userImag:
        "https://images.unsplash.com/photo-1698785235568-90fe4cf251d2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Nice view",
    },
  ];
  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            img={post.userImag}
            caption={post.caption}
          />
        );
      })}
    </div>
  );
};

export default Posts;
