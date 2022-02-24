import Image from "next/image";
import { HiChevronRight } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { FBox, Btn } from "../../../../styles/index.js";
import {
  InfoContainer,
  Genre,
  BtnE,
  Container,
  Title,
  Item,
} from "./Styles.js";

export const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 600,
  autoplaySpeed: 5000,
  cssEase: "linear",
};

export const CarouselItem = (props) => {
  return (
    <Container>
      <Image
        // props on img src
        src="/soulEater.png"
        alt="Test image"
        height={400}
        width={800}
        css={{ borderRadius: "40px" }}
      />
      <InfoContainer>
        {/* props all in here */}
        <Title>Soul Eater</Title>
        {/* render in commas through map function */}
        <Genre>Action, Adventure, Shounen</Genre>
        <FBox>
          {/* wrap in link to watch trailer and see details */}
          <Btn>Watch</Btn>
          <BtnE>
            <AiOutlinePlus size={25} />
          </BtnE>
        </FBox>
      </InfoContainer>
    </Container>
  );
};

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "40%",
  cursor: "pointer",
  backgroundColor: "rgba(150, 152, 165, .5)",
  borderRadius: "50%",
  padding: 5,
  zIndex: 2,
};

export const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        ...style,
        right: 20,
      }}
      onClick={onClick}
    >
      <HiChevronRight color="white" size={30} />
    </div>
  );
};
export const PrevArrow = () => {
  return null;
};

export const itemCarouselSettings = {
  infinite: true,
  dots: false,
  arrows: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

export const ContentItem = () => {
  return <Item />;
};
