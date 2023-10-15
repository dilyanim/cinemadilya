import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_KEY } from "./API_KEY";
import Slider from "react-slick";
import user from "../../img/default-user-image.png";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const MovieActor = () => {
  const [film, setFilm] = useState([]);
  const { personId } = useParams();
  function getFilm() {
    axios(
      `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${API_KEY}&language=en-US`
    ).then((res) => {
      console.log(res.data);
      setFilm(res.data.cast);
    });
  }
  useEffect(() => {
    getFilm();
  }, []);

  return (
    <div id="film">
      <div className="container">
        <div className="film">
          <Slider className="film" {...settings}>
            {film.map((el) => (
              <div>
                <NavLink to={`/movie/movie-info/${el.id}`}>
                  <img
                    src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2${el.poster_path}`}
                    alt=""
                  />
                </NavLink>

                <p>{el.title}</p>
              </div>
            ))}
          </Slider>

          <h1>{film.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default MovieActor;
