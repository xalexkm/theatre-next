import MoviesList from "../components/moviesList";
import SearchBar from "../components/searchBar";
import {searchMoviesByTitle} from "../lib/api";

export default async function Page() {
    const moviesData = await searchMoviesByTitle('Fragrance');

    return <>
        <SearchBar></SearchBar>
        <MoviesList moviesData={moviesData} />
    </>
}