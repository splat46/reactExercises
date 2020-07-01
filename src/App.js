import React from "react";
import "./App.css";
import LikeButton from "./components/likeButton/LikeButton";
import CountButton from "./components/countButton/CountButton.js";
import AwesomeAnimals from "./components/AwesomeAnimals/AwesomeAnimals.js";
import ArticleList from "./components/ArticleList/ArticleList.js";

function App() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="card">
                <h3>Like Button</h3>
                <LikeButton />
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <h3>Count likes</h3>
                <CountButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="card">
                <h3>Awesome Animals</h3>
                <AwesomeAnimals />
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <h3>Articles</h3>
                <ArticleList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
