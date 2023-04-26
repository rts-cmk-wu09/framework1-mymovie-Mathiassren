import styled from "styled-components";
import Image from "../components/Image";
import Heading from "../components/Heading";
import MovieRating from "../components/MovieRating";
import Length from "../components/Length";
import Catergori from "../components/Catergori";
import MovieHeading from "../components/MoveHeading";

const StyledArticle = styled.article`
  height: 283px;
  display: flex;
`;

const StyledFlex = styled.div`
  display: flex;
`;

const PopularMovieCard = () => {
  return (
    <StyledArticle>
      <figure>
        <Image />
      </figure>
      <div>
        <MovieHeading title="Venom Let There Be Carnage" size="14px" as="h3" />
        <Length />
        <MovieRating />

        <StyledFlex>
          <Catergori category="Horror" />
          <Catergori category="Mystery" />
          <Catergori category="Thriller" />
        </StyledFlex>
      </div>
    </StyledArticle>
  );
};

export default PopularMovieCard;
