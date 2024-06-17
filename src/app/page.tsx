import MoviesList from "../components/moviesList";
import SearchBar from "../components/searchBar";
import { searchMoviesByTitle } from "../lib/api";
import Wrapper from "../components/wrapper";

export default async function Page() {
  const moviesData = await searchMoviesByTitle("Fragrance");

  return (
    <>
        <Wrapper>
            <SearchBar></SearchBar>
            <MoviesList moviesData={moviesData} />
        </Wrapper>
    </>
  );
}
