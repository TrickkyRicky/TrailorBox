import styled from 'styled-components';
import { Btn } from '../../../../styles/index.js';

export const Container = styled.div`
	position: relative;
`;
export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 50%;
	left: 8%;
	z-index: 2;
`;

export const Title = styled.h3`
	color: white;
	font-size: 40px;
	padding-bottom: 10px;
`;
export const Genre = styled.p`
	color: silver;
	// color: #9597a1;
	font-size: 20px;
	padding-bottom: 15px;
`;

export const BtnE = styled(Btn)`
	background-color: rgba(150, 152, 165, 0.5);
	margin-left: 20px;
	padding: 5px 10px;
`;

export const Item = styled.div`
	width: 200px;
	height: 200px;
	margin-right: 20%;
	background-color: #9597a1;
	border-radius: 25px;
`;
