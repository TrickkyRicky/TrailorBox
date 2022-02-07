import styled from 'styled-components';

export const NavBar = styled.div`
	max-width: 20%;
	width: 100%;
	height: 100%;
	border-right: 3px solid #414141;
	padding-top: 32px;
	padding-left: 32px;
`;

export const LogoContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	cursor: pointer;
	margin-bottom: 5rem;
`;

export const LogoText = styled.h1`
	font-size: 24px;
	margin-left: 10px;
	color: #fff;
`;

export const LogoTextPeriod = styled.span`
	color: red;
`;

export const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 10px 0px;
`;

export const MenuItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

export const MenuHeading = styled.h4`
	color: #6b6c74;
	font-size: 16px;
	text-transform: uppercase;
`;

export const MenuText = styled.h4`
	font-size: 18px;
	margin-left: 8px;
	font-weight: 400;
`;
