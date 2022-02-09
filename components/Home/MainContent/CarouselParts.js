import Image from "next/image";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 8%;
  z-index: 2;
`;

const Title = styled.h3`
  color: white;
  font-size: 40px;
  padding-bottom: 10px;
`;
const Genre = styled.p`
  color: silver;
  // color: #9597a1;
  font-size: 20px;
  padding-bottom: 15px;
`;

const Btn = styled.a`
  color: white;
  font-size: 16px;
  background-color: #d22f27;
  padding: 15px 35px;
  text-decoration: none;
  cursor: pointer;
  width: fit-content;
  border-radius: 12px;
`;

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
        <Btn>Watch</Btn>
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
export const PrevArrow = (props) => {
  const { onClick } = props;
  return null;
  // <div
  //   style={{
  //     ...style,
  //     left: 20,
  //   }}
  //   onClick={onClick}
  // >
  //   {/* <HiChevronLeft color="white" size={30} /> */}
  // </div>
};
