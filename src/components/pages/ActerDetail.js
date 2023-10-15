import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "./API_KEY";
import { useParams } from "react-router-dom";
import MovieActor from "./MovieActor";

const ActorPage = () => {
  const [page, setPage] = useState({});
  const [info, setInfo] = useState(200);
  const { personId } = useParams();
  function getPage() {
    axios(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY}&language=en-US`
    ).then((res) => {
      console.log(res.data);
      setPage(res.data);
    });
  }
  useEffect(() => {
    getPage();
  }, []);
  // const infoMore = (text) =>{
  //   if (infoMore === 200) {
  //     setInfo(infoMore)
  //     setInfo(text.lenth)
  //   } else {
  //     setInfo(prevInfoMore)
  //   }
  // }
  return (
    <>
      <div id="page">
        <div className="container">
          <div className="page">
            <img
              src={`https://www.themoviedb.org/t/p/w375_and_h375_face${page.profile_path}`}
            />
            <div className="pageText">
              <p style={{ color: "#c179db" }}>{page.name}</p>
              <h4
                style={{
                  color: "#c179db",
                }}
              >
                {page.place_of_birth}
              </h4>

              <h3
                style={{
                  color: "#c179db",
                }}
              >
                {page.birthday}
              </h3>
              <h6
                style={{
                  color: "#c179db",
                }}
              >
                {page.biography}
                {/* <p>
                        {
                          ActorPage.biography ? ActorPage.biography.slice(0 , infoMore) : ActorPage
                        }
                        <button  onClick={() => {
                          toggleMore(ActorPage.biography)
                        }} >{infoMore === 200 ? 'more' : 'close'}
                           
                        </button>

                      </p> */}
              </h6>

              <h3
                style={{
                  color: "#c179db",
                }}
              >
                {page.deathday}
              </h3>
              <h3
                style={{
                  color: "#c179db",
                }}
              >
                {page.popularity}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <MovieActor />
    </>
  );
};

export default ActorPage;
