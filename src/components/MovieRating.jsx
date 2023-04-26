import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const StyledFaStar = styled(FaStar)`
  color: #ffc319;
`;
const StyledP = styled.p`
  color: #9c9c9c;
  margin-left: 4px;
`;
const StyledDiv = styled.div`
  display: flex;
  padding-bottom: 8px;
  margin-left: 16px;
`;

const MovieRating = () => {
  return (
    <StyledDiv>
      <StyledFaStar />
      <StyledP>9.1/10 IMDb</StyledP>
    </StyledDiv>
  );
};

export default MovieRating;
