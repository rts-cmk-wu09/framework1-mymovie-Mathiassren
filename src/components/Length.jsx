import styled from "styled-components";
import { FaClock } from "react-icons/fa";

const StyledFaClock = styled(FaClock)`
  color: #000000;
`;
const StyledP = styled.p`
  color: #000000;
  margin-left: 4px;
`;
const StyledDiv = styled.div`
  display: flex;
  margin-left: 16px;
  padding-bottom: 8px;
`;

const Date = () => {
  return (
    <StyledDiv>
      <StyledFaClock />
      <StyledP>1h 47m</StyledP>
    </StyledDiv>
  );
};

export default Date;
