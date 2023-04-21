import React from "react";
import "./app.css";
import HeadingOne from "./components/HeadingOne";
import MovieCard from "./templates/MovieCard";
import HeadingTwo from "./components/HeadingTwo";
import SeeMoreBtn from "./components/SeeMoreButton";

function MyButton() {
  return (
    <div className="App">
      <header>
        <HeadingOne />
      </header>
      <main>
        {" "}
        <section className="scrollOverflow">
          {" "}
          <div className="flexContainer justify">
            <HeadingTwo />
            <SeeMoreBtn />
          </div>
        </section>
        <div className="flexContainer">
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </main>
      <footer>
        <nav></nav>
      </footer>
    </div>
  );
}

export default MyButton;
