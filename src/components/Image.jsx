//Importere styled fra vores NPM biblotek
import styled from "styled-components";
//Importere coverimage fra vores asset folder
import coverimage from "../assets/moviecover.png";

//Styling sker her
const StyledImg = styled.img`
  box-shadow: 0px 5px 10px rgb(0 0 0 / 0.5);
`;

//Oprettelse af component sker her.
const Image = () => {
  return <StyledImg src={coverimage} alt="blablabla" />;
};
export default Image;
