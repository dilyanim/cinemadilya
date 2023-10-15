import React from "react";
import { NavLink } from "react-router-dom";

const MovieCard = ({ element }) => {
  return (
    <NavLink to={`/movie/movie-info/${element.id}`}>
      <div className="img">
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${element.poster_path}`}
          alt=""
        />
        <h4>{element.title}</h4>
      </div>
    </NavLink>
  );
};

export default MovieCard;
