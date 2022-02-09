import styled from 'styled-components';

export const FBox = styled.div`
	display: flex;
	width: ${(props) => (props.w ? props.w : 'unset')};
	margin: ${(props) => (props.m ? props.m : '0px')};
	padding: ${(props) => (props.p ? props.p : '0px')};
	flex-direction: ${(props) => (props.fd ? props.fd : 'unset')};
	justify-content: ${(props) => (props.jc ? props.jc : 'unset')};
	align-items: ${(props) => (props.ai ? props.ai : 'unset')};
	flex-wrap: ${(props) => (props.fw ? props.fw : 'unset')};
	align-self: ${(props) => (props.as ? props.as : 'unset')};
`;

export const Btn = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 16px;
	background-color: #d22f27;
	padding: 13px 38px;
	text-decoration: none;
	cursor: pointer;
	width: fit-content;
	border-radius: 12px;
`;
