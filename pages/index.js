import Head from "next/head";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 16px;
  color: green;
`;

const Home = () => {
  return (
    <>
      <Heading>HELLO WORLD</Heading>
    </>
  );
};

export default Home;
