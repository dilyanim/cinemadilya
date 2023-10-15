import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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
const Actors = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  function getActors() {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    ).then((res) => {
      setActors(res.data.cast);
    });
  }
  useEffect(() => {
    getActors();
  }, []);
  return (
    <div id="actors">
      <div className="container">
        <Slider className="slider" {...settings}>
          <div className="actors">
            {actors.map((el) => (
              <div className="actors">
                {el.profile_path ? (
                  <NavLink to={`/actorDetail/${el.id}`}>
                    <img
                      src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`}
                      alt=""
                    />{" "}
                  </NavLink>
                ) : (
                  <img src={user}></img>
                )}
                <p>{el.name}</p>
              </div>
            ))}
          </div>{" "}
        </Slider>
      </div>
    </div>
  );
};
export default Actors;
