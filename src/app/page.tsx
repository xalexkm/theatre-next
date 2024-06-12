import MoviesList from "../components/movies-list";

async function getData() {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=Fragrance&type=movie`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const { Search } = await res.json();

    const sanitisiedData = Search.map((movie) => ({
        title: movie.Title,
        year: movie.Year,
        id: movie.imdbID,
        type: movie.Type,
        poster: movie.Poster
    }));

    return sanitisiedData
}

export default async function Page() {

    const moviesData = await getData()

    console.log(moviesData);

    return <MoviesList moviesData={moviesData} />
}