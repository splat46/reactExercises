// src/components/ArticleList.js
import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Timeout from "await-timeout";
import axios from "axios";

export default function ArticleList() {
  const [articles, set_articles] = useState(false);

  /*{
      id: 1,
      title: "What is React all about?",
      body:
        "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
    },
    {
      id: 2,
      title: "A lovely kid",
      body: "In fact, a kid is also the name of a baby goat!",
    },
    {
      id: 3,
      title: "On placeholder image URLs",
      body:
        "So yeah, you won't be able to look these images up. They're placeholders",
    },*/
  const clear = () => {
    set_articles([]);
  };

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      // getting data from the internet
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      await Timeout.set(2000);
      console.log("Got back", res);
      set_articles(res.data);
    }
    doSomeDataFetching();
  }, []);

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {articles
        ? articles.map((article) => (
            <ArticleCard title={article.title} body={article.body} />
          ))
        : "Loading..."}
      <button onClick={clear}>clear</button>
    </div>
  );
}
