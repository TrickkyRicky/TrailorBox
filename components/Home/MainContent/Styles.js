import styled from 'styled-components';
import { Btn } from '../../../styles';

export const Container = styled.div`
	height: 100%;
	max-width: 60%;
	width: 100%;
	padding: 60px 60px 0px 60px;
	overflow: hidden;
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

export const OptionHeading = styled.h2`
	color: #fff;
`;

export const BtnE = styled(Btn)`
	background-color: transparent;
	border: solid 1px white;
	border-radius: 50%;
	padding: 10px;
	align-self: center;
	margin-left: 20px;
`;

export const MovieItem = styled.div`
	height: 200px;
	width: 100px;
	background-color: #9597a1;
	border-radius: 5px;
	margin: 0px 20px;
`;

export const ScrollContainer = styled.div`
	overflow-y: scroll;
	height: 49%;
	padding-bottom: 100px;
	margin-top: 24px;

	&::-webkit-scrollbar {
		width: 0;
		background: transparent;
	}
`;
