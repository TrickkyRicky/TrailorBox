import {
	Container,
	ContentContainer,
	Search,
	SearchInput,
	SearchIcon,
	SeeMoreButton,
	Heading,
	MovieList,
	MovieItem,
	MovieImage,
	MovieTitle,
	MovieDetail,
	MovieGenre
} from './Styles';
import { SiImdb } from 'react-icons/si';

const movies = [
	{
		title: 'John Wick 6: The Last Wick'
	},
	{
		title: 'The Dark Knight'
	},
	{
		title: 'Avengers: Endgame'
	}
];

const MainRight = (props) => {
	let iconColor = '#D22F27';
	let menuItemColor = '#6B6C74';
	let menuItemHeading = '#9597A1';

	return (
		<Container>
			<ContentContainer>
				<Search>
					<SearchIcon size={25} />
					<SearchInput placeholder='Search' />
				</Search>
				<Heading>Popular Movies</Heading>
				<MovieList>
					{movies.map((movie, index) => (
						<MovieItem key={index}>
							<MovieImage />
							<MovieDetail>
								<MovieTitle>{movie.title}</MovieTitle>
								<MovieGenre>Action, Adventure</MovieGenre>
							</MovieDetail>
						</MovieItem>
					))}
				</MovieList>
				<SeeMoreButton>See More</SeeMoreButton>
				<Heading>Favorites</Heading>
				<MovieList>
					{movies.map((movie, index) => (
						<MovieItem key={index}>
							<MovieImage />
							<MovieDetail>
								<MovieTitle>{movie.title}</MovieTitle>
								<MovieGenre>Action, Adventure</MovieGenre>
							</MovieDetail>
						</MovieItem>
					))}
				</MovieList>
				<SeeMoreButton>See More</SeeMoreButton>
			</ContentContainer>
		</Container>
	);
};

export default MainRight;
