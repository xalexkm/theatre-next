import MovieDetails from "../../../components/movieDetails";


type MovieData = {
    title: string;
    year: string;
    id: string;
    type: string;
    posterSrc: string;
    rated: string;
    timeLength: string;
    genre: string;
    language: string;
    actors: string;
};

async function fetchMovieData(movieId: string): Promise<MovieData> {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${movieId}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        const sanitizedData: MovieData = {
            title: data.Title,
            year: data.Year,
            id: data.imdbID,
            type: data.Type,
            posterSrc: data.Poster,
            rated: data.Rated,
            timeLength: data.Runtime,
            genre: data.Genre,
            language: data.Language,
            actors: data.Actors,
        };

        return sanitizedData;
    } catch (error) {
        console.error('Error fetching movie data:', error);
        throw new Error('An error occurred while fetching movie data');
    }
}

export default async function Page({ params }) {
    const { movie } = params;

    const movieDetails = await fetchMovieData(movie);

    return <MovieDetails movieDetails={movieDetails}></MovieDetails>
}