import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ItemCarousel = (props) => {
	const settings = {
		infinite: true,
		dots: false,
		arrows: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1
	};
	return (
		<Carousel
			style={{
				marginTop: '15px'
			}}
			{...settings}
		>
			{props.children}
		</Carousel>
	);
};
