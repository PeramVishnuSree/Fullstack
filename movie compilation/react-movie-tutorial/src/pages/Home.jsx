import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        {id: 1, title: "John wick", release_date: "2020"},
        {id: 2, title: "Godzilla", release_date: "2013"},
        {id: 3, title: "baby driver", release_date: "2010"},
        {id: 4, title: "Troy", release_date: "2000"},
    ]

    const handleSearch = () => {

    }

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="search for movies..." className="search-input"/>
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movie-grid">
            {movies.map(movie => (<MovieCard movie={movie}/>))}
        </div>
    </div>
    )
}

export default Home