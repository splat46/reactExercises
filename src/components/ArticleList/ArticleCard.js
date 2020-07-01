// src/components/ArticleList.js
import React, { useState } from "react";

export default function ArticleCard(props) {
  return (
    <div className="Article">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
}
