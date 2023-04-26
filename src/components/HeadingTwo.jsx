import styled from "styled-components";

const StyledHeading2 = styled.h1`
  font-size: ${(props) => props.size}px;

  grid-column-start: 2;

  justify-self: center;
`;

const Heading2 = (props) => {
  return <StyledHeading2 {...props}>{props.title}</StyledHeading2>;
};

export default Heading2;
