import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
	max-width: 60%;
	width: 100%;
	// background-color: #835300;
	padding: 60px 60px 0px 60px;
`;

export const CarouselContainer = styled.div`
	width: 100%;
	position: relative;
`;

export const LinkContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	padding-bottom: 20px;
	align-items: center;
`;

export const LinkText = styled.a`
	color: ${(props) => (props.selected ? 'white' : '#9597a1')};
	font-size: 21px;
	cursor: pointer;
	text-decoration: none;
	&:not(:first-child) {
		margin-left: 25px;
	}
`;
