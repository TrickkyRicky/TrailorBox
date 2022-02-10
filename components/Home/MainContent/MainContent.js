import { useRef } from 'react';
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
import {
	CarouselItem,
	NextArrow,
	PrevArrow,
	ContentItem,
	carouselSettings,
	itemCarouselSettings
} from './Carousel/MainCarouselParts';
import Link from 'next/link';

import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainContent = (props) => {
	const carouselRef = useRef();

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
				<FBox jc='space-between' ai='center' m='10px 0px 0px 0px'>
					<OptionHeading>Now Playing</OptionHeading>
					<FBox>
						<BtnE>
							<HiChevronLeft
								size={25}
								onClick={() => carouselRef.current.slickPrev()}
							/>
						</BtnE>
						<BtnE>
							<HiChevronRight
								size={25}
								onClick={() => carouselRef.current.slickNext()}
							/>
						</BtnE>
					</FBox>
				</FBox>

				<Carousel {...itemCarouselSettings} ref={carouselRef}>
					<ContentItem />
					<ContentItem />
					<ContentItem />
					<ContentItem />
					<ContentItem />
					<ContentItem />
				</Carousel>

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
				<FBox jc='flex-start' ai='center' m='10px 0px 0px 0px'>
					<MovieItem></MovieItem>
					<MovieItem></MovieItem>
				</FBox>
			</ScrollContainer>
		</Container>
	);
};

export default MainContent;
