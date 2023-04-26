import "./App.css";
import MovieCard from "./templates/MovieCard";
import SeeMoreButton from "./components/SeeMoreButton";
import Heading from "./components/Heading";
import Switch from "./components/Switch";
import PopularMovieCard from "./templates/Popular";

function App() {
  return (
    <div className="App">
      <header className="gridContainer">
        <Heading title="MyMovie" size="16px" as="h1" />
        <Switch />
      </header>
      <main>
        <section>
          <div className="flexContainer space-between">
            <Heading title="Now Showing" size="16px" as="h2" />
            <SeeMoreButton />
          </div>
          <div className="flexContainer movieCardContainer">
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
        <section>
          <div className="flexContainer space-between">
            <Heading className="popular" title="Popular" size="16px" as="h2" />
            <SeeMoreButton />
          </div>
          <div className="secondFlexContainer">
            <PopularMovieCard />
          </div>
        </section>
      </main>
      <footer>
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;
