import { useEffect } from "react";
import ListGroup from "./components/ListGroup";
import "./App.css";
import SearchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=9b7b4bce";

//9b7b4bce
function App() {
  const searchMovies = async (title: any) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("superman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="Search for movies" />
        
      </div>
    </div>
  );
}

export default App;
