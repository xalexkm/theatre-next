import MoviesList from "../components/moviesList";
import SearchBar from "../components/searchBar";

export async function searchMoviesByTitle(title) {
    const res = await fetch(`https://www.omdbapi.com/?apikey=f1d12aef&s=${title}&type=movie`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const body = await res.json();

    if (!Object.hasOwn(body, 'Search')) {
        return []
    }

    const { Search } = body;

    const sanitisiedData = Search.map((movie) => ({
        title: movie.Title,
        year: movie.Year,
        id: movie.imdbID,
        type: movie.Type,
        poster: movie.Poster.includes('https') ? movie.Poster : undefined,
        moviePath: `/movies/${movie.imdbID}`
    }));

    return sanitisiedData
}

export default async function Page() {

    const moviesData = await searchMoviesByTitle('Fragrance');

    return <><SearchBar></SearchBar><MoviesList moviesData={moviesData} /></>
}