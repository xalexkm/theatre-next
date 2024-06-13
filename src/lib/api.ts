type MovieDetails = {
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

export async function fetchMovieData(movieId: string): Promise<MovieDetails> {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${movieId}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        const sanitizedData: MovieDetails = {
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

interface Movie {
    title: string;
    year: string;
    id: string;
    type: string;
    posterSrc?: string;
    moviePath: string;
}

export async function searchMoviesByTitle(title: string): Promise<Movie[]> {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${title}&type=movie`);

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (!data.Search) {
            return [];
        }

        const sanitizedData: Movie[] = data.Search.map((movie: any) => ({
            title: movie.Title,
            year: movie.Year,
            id: movie.imdbID,
            type: movie.Type,
            posterSrc: movie.Poster.startsWith('https') ? movie.Poster : undefined,
            moviePath: `/movies/${movie.imdbID}`,
        }));

        return sanitizedData;
    } catch (error) {
        console.error('Error searching movies:', error);
        throw new Error('An error occurred while searching for movies');
    }
}