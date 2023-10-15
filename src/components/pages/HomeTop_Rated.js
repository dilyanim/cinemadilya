import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "./API_KEY";
import Slider from "react-slick";

const settings = {
  className: "slider variable-width",
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
};
const HomeTopRated = () => {
  const [rated, setRated] = useState([]);
  function getRated() {
    axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => {
      setRated(res.data.results);
    });
  }
  useEffect(() => {
    getRated();
  }, []);
  console.log(rated);
  return (
    <div id="top_img">
      <div className="container">
        <Slider {...settings}>
          {rated.map((el) => (
            <div>
              <img
                style={{
                  margin: "40px 20px",
                }}
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeTopRated;
