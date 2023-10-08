import { useEffect } from "react";
import ListGroup from "./components/ListGroup";

const API_URL = "http://www.omdbapi.com?apikey=9b7b4bce";
//9b7b4bce
function App() {
  const searchMovies = async (title: any) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("pushpa");
  }, []);
  return <div></div>;
}

export default App;
