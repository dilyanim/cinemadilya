import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "./API_KEY";
import Slider from "react-slick";

// const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     speed: 500,
//     rows: 2,
//     slidesPerRow: 2
//   };

const Trailer = () => {
  const [trailer, setTrailer] = useState([]);
  const { movieId } = useParams();
  function getTrailer() {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
    ).then((res) => {
      console.log(res);
      setTrailer(res.data.results);
    });
  }
  useEffect(() => {
    getTrailer();
  }, []);
  return (
    <div id="trailer">
      <div className="container">
        <div>
          {trailer.map((el) => (
            // <Slider {...settings}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${el.key}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            // </Slider>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trailer;
