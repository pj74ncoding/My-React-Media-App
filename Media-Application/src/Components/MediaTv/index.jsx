import { useState, useEffect } from "react";
import { TvCard } from "./tvCard";

import "./mediaTv.css";
export const MediaTv = () => {
  const [tvData, setTvData] = useState([]);

  const fetchTvData = async () => {
    try {
      // const fetchResponse = await fetch(
      //   "https://api.themoviedb.org/3/discover/tv?api_key=5a1dbe02eaed7aed89976013dcbc8aef",
      // );
      //  const fetchResponse = await fetch(
      //   "https://api.themoviedb.org/3/tv/top_rated?api_key=5a1dbe02eaed7aed89976013dcbc8aef",
      // );
      const fetchResponse = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air?api_key=5a1dbe02eaed7aed89976013dcbc8aef",
      );
      const tvResults = await fetchResponse.json();
      setTvData(tvResults.results);
      console.log(tvResults);
    } catch (error) {
      console.error("fetchTvData error is: ");
    }
  };
  useEffect(() => {
    fetchTvData();
  }, []);

  useEffect(() => {
    console.log("tvdata", tvData);
  }, [tvData]);

  return (
    <>
      <p>MediaTv</p>
      <section className="media-tv-section">
        {tvData.map((show) => (
          <TvCard key={show.id} show={show} />
        ))}
          {tvData.map((show) => (
          <TvCard key={show.id} show={show} />
        ))}
      </section>
    </>
  );
};
