import styled from "styled-components";
import Heading from "../components/Heading";
import Button from "../components/Button";
import Tom from "../assets/Tom.png";
import Zarya from "../assets/Zarya.png";
import Benedict from "../assets/Benedict.png";
import Baldy from "../assets/Baldy.png";
import Actor from "../components/Actor";

const NewLine = styled.div`
  flex-basis: 100%;
  height: 1rem;
`;

const MovieCast = () => {
  return (
    <section>
      <div className="flexContainer justify-space-between wrap">
        <Heading title="Cast" size="16" as="h2" />
        <Button title="See More" />
        <NewLine />
        <Actor imgsrc={Tom} name="Tom Holland" />
        <Actor imgsrc={Zarya} name="Zendaya" />
        <Actor
          imgsrc={Benedict}
          name="Benedict
          Cumberbatch"
        />
        <Actor
          imgsrc={Baldy}
          name="Jacon
          Batalon"
        />
      </div>
    </section>
  );
};

export default MovieCast;
