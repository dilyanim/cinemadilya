import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "./API_KEY";
import MovieCard from "./MovieCard";

const Up = () => {
  const [up, setUp] = useState([]);
  const [page, setPage] = useState([1]);

  function getUp() {
    axios(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
    ).then((res) => {
      setUp(res.data.results);
    });
  }
  useEffect(() => {
    getUp();
  }, []);
  console.log(up);
  return (
    <div id="movie">
      <div className="container">
        <div className="movie">
          <div className="movie-div">
            {up.map((el) => (
              <MovieCard element={el} />
            ))}
          </div>
        </div>
      </div>
      <button className="prev" onClick={() => setPage(page - 1)}>
        prev
      </button>

      <button className="next" onClick={() => setPage(page + 1)}>
        next
      </button>
    </div>
  );
};

export default Up;
