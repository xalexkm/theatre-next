import MoviesList from "../components/movies-list";

async function getData() {
    const res = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=f1d12aef')

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default function Page() {

    const moviesData = getData()

    return <MoviesList moviesData={moviesData} />
}