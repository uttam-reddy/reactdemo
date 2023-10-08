import { useEffect, useState } from "react";
import ListGroup from "./components/ListGroup";
import "./App.css";
import SearchIcon from "./search.svg";
import { MovieCard } from "./MovieCard";
const API_URL = "http://www.omdbapi.com?apikey=9b7b4bce";

const movie = {
  Title: "Superman & Lois",
  Year: "2021–",
  imdbID: "tt11192306",
  Type: "series",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTA2MDVhMWItNTYwYi00OTcyLWJjZmEtNTQ2NTAxMDQyYTQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
};
//9b7b4bce
function App() {
  const [movies, setMoives] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const searchMovies = async (title: any) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    setMoives(data.Search);
  };

  useEffect(() => {
    searchMovies("superman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
