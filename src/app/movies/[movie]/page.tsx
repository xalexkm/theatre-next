import MovieDetails from "../../../components/movieDetails";
import { fetchMovieData } from "../../../lib/api";

export default async function Page({ params }) {
  const { movie } = params;

  const movieDetails = await fetchMovieData(movie);

  return <MovieDetails movieDetails={movieDetails}></MovieDetails>;
}
