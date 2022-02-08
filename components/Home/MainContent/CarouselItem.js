import Image from 'next/image';

export const CarouselItem = (props) => {
	return (
		<Image
			// props on img src
			src='/soulEater.png'
			alt='Test image'
			height={400}
			width={800}
			css={{ borderRadius: '40px' }}
		/>
	);
};

export const NextArrow = () => {};
export const PrevArrow = () => {};
