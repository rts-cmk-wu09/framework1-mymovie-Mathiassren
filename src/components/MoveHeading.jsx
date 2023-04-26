import styled from "styled-components";

const StyledMovieHeading = styled.h1`
  font-size: ${(props) => props.size}px;

  grid-column-start: 2;

  justify-self: center;

  width: 160px;

  padding-bottom: 20px;

  margin-left: 16px;
`;

const MovieHeading = (props) => {
  return <StyledMovieHeading {...props}>{props.title}</StyledMovieHeading>;
};

export default MovieHeading;
