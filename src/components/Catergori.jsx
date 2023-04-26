import styled from "styled-components";

const StyledCatergori = styled.p`
  color: #88a4e8;
  margin-left: 4px;
  background-color: #dbe3ff;
  width: 61px;
  border-radius: 24px;
  text-align: center;
  padding: 4px 12px;
  margin-left: 16px;
`;

const StyledFlex = styled.div`
  display: flex;
`;

const Catergori = ({ category }) => {
  return (
    <StyledFlex>
      <StyledCatergori>{category}</StyledCatergori>
    </StyledFlex>
  );
};

export default Catergori;
