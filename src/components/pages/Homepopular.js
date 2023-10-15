import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "./API_KEY";
import Slider from "react-slick";
import { useParams } from "react-router-dom";

const settings = {
  className: "slider variable-width",
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
};
const Homepopular = ({ element }) => {
  const [detail, setDetail] = useState({});

  const [popular, setPopular] = useState([]);

  function getPopular() {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => {
      setPopular(res.data.results);
    });
  }
  useEffect(() => {
    getPopular();
  });
  console.log(popular);
  return (
    <div id="popular_img">
      <div className="container">
        <Slider {...settings}>
          {" "}
          {popular.map((el) => (
            <div>
              <img
                style={{
                  margin: "40px 20px",
                }}
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                alt=""
              />
              {/* <div className="detail--block__reiting">
                                <div className="detail--block__reiting--krug" style={res}>
                                    <h5 className="detail--block__reiting--krug__h5">{progressValue}<sup>%</sup></h5>
                                </div>
                               
                            </div> */}
            </div>
          ))}{" "}
        </Slider>
      </div>
    </div>
  );
};

export default Homepopular;
