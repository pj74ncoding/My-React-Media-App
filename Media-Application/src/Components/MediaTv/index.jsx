import { useState, useEffect } from "react";
import { TvCard } from "./tvCard";

export const MediaTv = ({ category, heading }) => {
  const [tvData, setTvData] = useState([]);

  const fetchTvData = async () => {
    try {
      const tvResponse = await fetch(
        `https://api.themoviedb.org/3/tv/${category}?api_key=5a1dbe02eaed7aed89976013dcbc8aef`,
      );
      const tvResults = await tvResponse.json();
      setTvData(tvResults.results);
      console.log(tvResults);
    } catch (error) {
      console.error("fetchTvData error is:", error);
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
      <section className="media-tv-section">
        <h2>{heading}</h2>
        <div className="media-tv-card-container">
          {tvData.map((show) => (
            <TvCard key={show.id} show={show} />
          ))}
        </div>
      </section>
    </>
  );
};
