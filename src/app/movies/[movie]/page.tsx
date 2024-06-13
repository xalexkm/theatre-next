import MovieDetails from "../../../components/movie-details";


async function getData(movieId: string) {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${movieId}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const rawData = await res.json();

    console.log(rawData);

    const sanitisiedData = {
        title: rawData.Title,
        year: rawData.Year,
        id: rawData.imdbID,
        type: rawData.Type,
        posterSrc: rawData.Poster,
        rated: rawData.Rated,
        timeLength: rawData.Runtime,
        genre: rawData.Genre,
        language: rawData.Language,
        actors: rawData.Actors,
    };

    return sanitisiedData
}

export default async function Page({ params }) {
    const { movie } = params;

    const movieDetails = await getData(movie);

    console.log(movieDetails);

    return <MovieDetails movieDetails={movieDetails}></MovieDetails>
}