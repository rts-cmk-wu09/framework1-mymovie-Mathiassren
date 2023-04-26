import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: ${(props) => props.size}px;

  grid-column-start: 2;

  justify-self: center;

  width: 160px;
`;

const Heading = (props) => {
  return <StyledHeading {...props}>{props.title}</StyledHeading>;
};

export default Heading;
