import React from "react";
import Home from "./Home";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "./API_KEY";
import { useNavigate } from "react-router-dom";

const Main = (key) => {
  const [value, setValue] = useState([]);
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  const handleChange = () => {
    navigate(`/movie-search/${value}`);
  };
  const Add = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    ).then((res) => setValue(res.data.results));
  };
  useEffect(() => {
    Add(API_KEY);
  }, []);
  const state = Math.floor(Math.random() * 30);
  return (
    <>
      <div id="main">
        <div className="container">
          <div
            style={{
              height: "60vh",
              background: `url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)//${
                value.map((el) => el.poster_path)[state]
              }")
                     no-repeat center/cover`,
            }}
            className="main"
          >
            <div className="main-text">
              <div className="main-sub">
                <h1>Добро пожаловать.</h1>
                <h3>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>
              </div>

              <div className="main-search">
                <div>
                  <input
                    className="input"
                    onChange={(el) => {
                      setValue(el.target.value);
                    }}
                    style={{
                      display: search ? "none" : "block",
                      transition: "2s",
                    }}
                    value={value}
                    type="text"
                    placeholder="Поиск..."
                  />
                </div>
                <div>
                  <button className="btn-main"> Search </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home />
    </>
  );
};

export default Main;
