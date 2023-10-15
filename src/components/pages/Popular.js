import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "./API_KEY";
import MovieCard from "./MovieCard";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState([1]);
  function getPopular() {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    ).then((res) => {
      setPopular(res.data.results);
    });
  }
  useEffect(() => {
    getPopular();
  });
  console.log(popular);
  return (
    <div id="movie">
      <div className="container">
        <div className="movie">
          <div className="movie-div">
            {popular.map((el) => (
              <MovieCard element={el} />
            ))}
          </div>
          <button className="prev" onClick={() => setPage(page - 1)}>
            prev
          </button>
          <button className="next" onClick={() => setPage(page + 1)}>
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
