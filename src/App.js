import "./App.scss";
import Popular from "./components/pages/Popular";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Top_Rated from "./components/pages/Top_Rated";
import Upcoming from "./components/pages/Upcoming";
import Now_playing from "./components/pages/Now_playing";
import ActorDetail from "./components/pages/ActerDetail";
import HeaderInput from "./components/pages/HeaderInput";
import { useState } from "react";
import Main from "./components/pages/Main";
import DetailPage from "./components/Detail/DetailPage";

function App() {
  const [dark, setDark] = useState();
  return (
    <div
      style={{
        background: dark ? "#212339" : "white",
        transform: "1s",
        transition: "1s",
      }}
      className="App"
    >
      <Header dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/top_rated" element={<Top_Rated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/now_playing" element={<Now_playing />} />
        <Route path="/movie/movie-info/:movieId" element={<DetailPage />} />
        <Route path="/actorDetail/:personId" element={<ActorDetail />} />
        <Route path="/movie-search/:movieName" element={<HeaderInput />} />
      </Routes>
    </div>
  );
}

export default App;
