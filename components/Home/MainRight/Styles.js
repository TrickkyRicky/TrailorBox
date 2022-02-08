import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
	max-width: 20%;
	width: 100%;
	border-left: 1px solid #414141;
`;

export const ContentContainer = styled.div`
	padding: 50px 32px 32px 32px;
	align-items: center;
`;

export const Search = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 10px;
	border: solid 2px #6b6c74;
	border-radius: 50px;
	margin-bottom: 3rem;
`;

export const SearchIcon = styled(BsSearch)`
	color: #6b6c74;
`;

export const SearchInput = styled.input`
	background-color: transparent;
	border: none;
	margin-left: 10px;
	font-size: medium;
	color: #6b6c74;

	&:focus {
		outline: none;
	}
`;

export const Heading = styled.h3`
	color: #fff;
	margin: 10px 0px;
`;

export const SeeMoreButton = styled.button`
	width: 100%;
	height: 50px;
	padding: 5px 0px;
	font-size: large;
	color: #fff;
	background-color: #d22f27;
	border-radius: 15px;
	border: none;
	margin-top: 10px;

	&:hover {
		background-color: #d2302791;
		transition: all 0.3s ease-in-out;
		cursor: pointer;
	}
`;

export const MovieList = styled.div`
	display: flex;
	flex-direction: column;
`;

export const MovieItem = styled.div`
	display: flex;
	flex-direction: row;
`;

export const MovieImage = styled.div`
	min-height: 85px;
	min-width: 25%;
	background-color: #6b6c74;
	margin: 5px;
	border-radius: 6px;
`;

export const MovieDetail = styled.div`
	margin-left: 5px;
	margin-top: 5px;
	width: 60%;
`;

export const MovieTitle = styled.h5`
	color: #fff;
	font-size: 0.9rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const MovieGenre = styled.p`
	color: #6b6c74;
	font-size: 0.9rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
