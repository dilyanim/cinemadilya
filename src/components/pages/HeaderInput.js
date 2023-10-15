import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { API_KEY } from "./API_KEY";
import { useParams } from "react-router-dom";

const HeaderInput = () => {
  const [search, setSearch] = useState([]);
  const { movieName } = useParams();
  function getSearch() {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`
    ).then((res) => {
      setSearch(res.data.results);
    });
  }
  useEffect(() => {
    getSearch(API_KEY);
  });

  return (
    <div id="search">
      <div className="container">
        <div className="serch">
          <div className="search-div">
            {search.map((el) => (
              <MovieCard element={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInput;
