import Image from 'next/image';
import { HiChevronRight } from 'react-icons/hi';
import { HiChevronLeft } from 'react-icons/hi';
import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';
import { FBox, Btn } from '../../../styles/index.js';

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

const BtnE = styled(Btn)`
	background-color: rgba(150, 152, 165, 0.5);
	margin-left: 20px;
	padding: 5px 10px;
`;
export const CarouselItem = (props) => {
	return (
		<Container>
			<Image
				// props on img src
				src='/soulEater.png'
				alt='Test image'
				height={400}
				width={800}
				css={{ borderRadius: '40px' }}
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
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'absolute',
	top: '40%',
	cursor: 'pointer',
	backgroundColor: 'rgba(150, 152, 165, .5)',
	borderRadius: '50%',
	padding: 5,
	zIndex: 2
};

export const NextArrow = (props) => {
	const { onClick } = props;
	return (
		<div
			style={{
				...style,
				right: 20
			}}
			onClick={onClick}
		>
			<HiChevronRight color='white' size={30} />
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
