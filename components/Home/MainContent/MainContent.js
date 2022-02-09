import {
	Container,
	CarouselContainer,
	LinkContainer,
	LinkText,
	OptionHeading,
	BtnE,
	MovieItem,
	ScrollContainer
} from './Styles.js';
import { HiChevronRight } from 'react-icons/hi';
import { HiChevronLeft } from 'react-icons/hi';
import { FBox } from '../../../styles/index.js';
import { CarouselItem, NextArrow, PrevArrow } from './CarouselParts';
import Link from 'next/link';

import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainContent = (props) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 600,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />
	};

	return (
		<Container>
			<LinkContainer>
				<Link href='/' passHref>
					<LinkText>TV Series</LinkText>
				</Link>
				<Link href='/' passHref>
					<LinkText selected>Movies</LinkText>
				</Link>
				<Link href='/' passHref>
					<LinkText>People</LinkText>
				</Link>
			</LinkContainer>
			<CarouselContainer>
				<Carousel {...settings}>
					<CarouselItem />
					<CarouselItem />
					<CarouselItem />
				</Carousel>
			</CarouselContainer>
			<ScrollContainer>
				<FBox jc='space-between' ai='center' m='10px 0px 0px 0px'>
					<OptionHeading>Best Artists</OptionHeading>
					<FBox>
						<BtnE>
							<HiChevronLeft size={25} />
						</BtnE>
						<BtnE>
							<HiChevronRight size={25} />
						</BtnE>
					</FBox>
				</FBox>

				<FBox jc='space-between' ai='center' m='15px 0px 0px 0px'>
					<MovieItem></MovieItem>
					<MovieItem></MovieItem>

					<MovieItem></MovieItem>
					<MovieItem></MovieItem>
				</FBox>

				<FBox jc='space-between' ai='center' m='5px 0px 0px 0px'>
					<OptionHeading>Trending</OptionHeading>
					<FBox jc='space-between' ai='center' m='10px 0px 0px 0px'>
						<BtnE>
							<HiChevronLeft size={25} />
						</BtnE>
						<BtnE>
							<HiChevronRight size={25} />
						</BtnE>
					</FBox>
				</FBox>
				<FBox jc='space-between' ai='center' m='10px 0px 0px 0px'>
					<MovieItem></MovieItem>
					<MovieItem></MovieItem>
					<MovieItem></MovieItem>
					<MovieItem></MovieItem>
				</FBox>
			</ScrollContainer>
		</Container>
	);
};

export default MainContent;
