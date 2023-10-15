import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "./API_KEY";
import Homepopular from "./Homepopular";
import HomeTopRated from "./HomeTop_Rated";

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
const Home = () => {
  const [hello, setHello] = useState(false);
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
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="home-div">
            <div className="home-text">
              <div className="home-btn">
                <div>
                  <h2>В тренде</h2>
                </div>

                <button
                  onClick={() => {
                    setHello(false);
                  }}
                  className="pop"
                  style={{
                    margin: "0 15px",
                    fontSize: "18px",
                    borderRadius: "20px",
                    width: "100px",
                    height: "30px",
                    marginTop: "20px",
                    transition: "2s",
                  }}
                >
                  popular
                </button>

                <button
                  onClick={() => {
                    setHello(true);
                  }}
                  className="top"
                  style={{
                    margin: "0 15px",
                    fontSize: "18px",
                    borderRadius: "20px",
                    width: "100px",
                    height: "30px",
                    marginTop: "20px",
                    transition: "2s",
                  }}
                >
                  top_rated{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: hello ? "none" : "block" }}>
        <Homepopular />
      </div>
      <div style={{ display: hello ? "block" : "none" }}>
        <HomeTopRated />
      </div>
    </div>
  );
};

export default Home;
