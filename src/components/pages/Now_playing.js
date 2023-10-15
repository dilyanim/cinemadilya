import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "./API_KEY";
import MovieCard from "./MovieCard";

const Playing = () => {
  const [playing, setPlaying] = useState([]);
  const [page, setPage] = useState([1]);

  function getPlaying() {
    axios(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
    ).then((res) => {
      setPlaying(res.data.results);
    });
  }
  useEffect(() => {
    getPlaying();
  }, []);
  console.log(playing);
  return (
    <div id="movie">
      <div className="container">
        <div className="movie">
          <div className="movie-div">
            {playing.map((el) => (
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

export default Playing;
