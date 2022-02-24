import { useRef } from "react";
import {
  Container,
  CarouselContainer,
  LinkContainer,
  LinkText,
  OptionHeading,
  BtnE,
  MovieItem,
  ScrollContainer,
} from "./Styles.js";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";
import { FBox } from "../../../styles/index.js";
import {
  CarouselItem,
  NextArrow,
  PrevArrow,
  ContentItem,
  carouselSettings,
  itemCarouselSettings,
} from "./Carousel/MainCarouselParts";
import Link from "next/link";

import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ItemCarousel } from "./Styles.js";

const MainContent = (props) => {
  const itemRef1 = useRef();
  const itemRef2 = useRef();

  return (
    <Container>
      <LinkContainer>
        <Link href="/" passHref>
          <LinkText>TV Series</LinkText>
        </Link>
        <Link href="/" passHref>
          <LinkText selected>Movies</LinkText>
        </Link>
        <Link href="/" passHref>
          <LinkText>People</LinkText>
        </Link>
      </LinkContainer>
      <CarouselContainer>
        <Carousel
          {...carouselSettings}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </CarouselContainer>
      <ScrollContainer>
        <FBox jc="space-between" ai="center" m="25px 0px 15px 0px">
          <OptionHeading>Now Playing</OptionHeading>
          <FBox>
            <BtnE>
              <HiChevronLeft
                size={25}
                onClick={() => itemRef1.current.slickPrev()}
              />
            </BtnE>
            <BtnE>
              <HiChevronRight
                size={25}
                onClick={() => itemRef1.current.slickNext()}
              />
            </BtnE>
          </FBox>
        </FBox>

        <ItemCarousel {...itemCarouselSettings} ref={itemRef1}>
          <ContentItem />
          <ContentItem />
          <ContentItem />
          <ContentItem />
          <ContentItem />
          <ContentItem />
        </ItemCarousel>

        <FBox jc="space-between" ai="center" m="55px 0px 15px 0px">
          <OptionHeading>Trending</OptionHeading>
          <FBox>
            <BtnE>
              <HiChevronLeft
                size={25}
                onClick={() => itemRef2.current.slickPrev()}
              />
            </BtnE>
            <BtnE>
              <HiChevronRight
                size={25}
                onClick={() => itemRef2.current.slickNext()}
              />
            </BtnE>
          </FBox>
        </FBox>

        <ItemCarousel {...itemCarouselSettings} ref={itemRef2}>
          <ContentItem />
          <ContentItem />
          <ContentItem />
          <ContentItem />
          <ContentItem />
          <ContentItem />
        </ItemCarousel>
      </ScrollContainer>
    </Container>
  );
};

export default MainContent;
