import {
	Container,
	CarouselContainer,
	LinkContainer,
	LinkText
} from './Styles';
import CarouselItem from './CarouselItem';
import Link from 'next/link';

import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainContent = (props) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
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
					<LinkText>Animes</LinkText>
				</Link>
			</LinkContainer>
			<CarouselContainer>
				<Carousel {...settings}>
					<CarouselItem />
					<CarouselItem />
					<CarouselItem />
				</Carousel>
			</CarouselContainer>
		</Container>
	);
};

export default MainContent;
