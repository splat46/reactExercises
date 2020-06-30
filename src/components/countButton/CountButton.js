// src/components/countButton.js
import React, { useState } from "react";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
      </p>
      <button onClick={() => set_numLikes(numLikes + 1)}>Like</button>
    </div>
  );
}
