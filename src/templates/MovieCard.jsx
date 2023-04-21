//Hoved template, hvor alle vores componenter bliver implementeret.
//Husk at for hver gang at vi laver et component: Opret nyt component med react elementer under mappen "Components"
import HeadingThree from "../components/HeadingThree";
import Image from "../components/Image";
import MovieRating from "../components/MovieRating";

const MovieCard = () => {
  return (
    <article>
      <figure>
        <Image />
        <HeadingThree />
        <MovieRating />
      </figure>
      <h3></h3>
    </article>
  );
};

export default MovieCard;
