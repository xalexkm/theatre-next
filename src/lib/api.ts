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

export async function fetchMovieData(movieId: string): Promise<MovieData> {
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