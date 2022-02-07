import React, { useState } from "react";

export const Likes = () => {
  const [likes, setLikes] = useState(0);

  const increaseLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      <p>Likes: {likes}</p>
      <button onClick={increaseLikes}>Like</button>
    </>
  );
};
