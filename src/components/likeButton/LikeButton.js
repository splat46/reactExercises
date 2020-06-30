// src/components/LikeCounter.js
import React, { useState } from "react"; // <- note the added import of useState

export default function LikeCounter() {
  const [isClicked, set_isClicked] = useState(false);

  const newValue = isClicked === false ? "Like us" : "You've already liked us";

  return (
    <div>
      <button
        onClick={() => {
          set_isClicked(!isClicked);
        }}
      >
        {newValue}
      </button>
    </div>
  );
}
