import { useState } from "react";

import "./App.css";
import { MediaNav } from "./Components/Nav";
import { MediaFooter } from "./Components/Footer";
import { MediaMovies } from "./Components/MediaMovies";
import { MediaTv } from "./Components/MediaTv";

function App() {
  return (
    <>
      <div className="nav-and-main-container">
        <MediaNav />
        <div className="main-container">
          <h1>Movies</h1>
          <MediaMovies category="popular" heading="Popular" />
          <MediaMovies category="top_rated" heading="Top Rated" />
          <MediaMovies category="upcoming" heading="Upcoming" />
          <h1>TV series</h1>
          <MediaTv category="popular" heading="Popular" />
          <MediaTv category="top_rated" heading="Top Rated" />
          <MediaTv category="on_the_air" heading="On The Air" />
          <MediaFooter />
        </div>
      </div>
    </>
  );
}

export default App;
