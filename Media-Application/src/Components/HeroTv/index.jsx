import { TvCarousel } from "./movie-carousel";
import { useState, useEffect, useMemo } from "react";
export const TvHero = () => {
  const [heroTvData, setHeroMovieData] = useState([]);
  const [tvBackDrop, setMovieBackdrop] = useState([]);
  const [tvTitle, setMovieTitle] = useState([]);
  const [tvOverview, setMovieOverView] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchMovieData = async () => {
    try {
      const tvResponse = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=5a1dbe02eaed7aed89976013dcbc8aef`,
      );
      const tvResults = await tvResponse.json();
      setHeroMovieData(tvResults.results);
    } catch (error) {
      console.warn("fetchMovieData error is: ", error);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  const slicedHeroTvData = useMemo(
    () => heroTvData.slice(0, 6),
    [heroTvData])


  useEffect(() => {
    const backdrops = slicedHeroTvData.map((movie) => movie.backdrop_path);
    setMovieBackdrop(backdrops);
    const titles = slicedHeroTvData.map((movie) => movie.name);
    setMovieTitle(titles);
    const overView = slicedHeroTvData.map((movie) => movie.overview);
    setMovieOverView(overView);
  }, [slicedHeroTvData]);

  let slideShow;
  const slideNext = () => {
    if (index == 5) {
      setIndex(0);
    } else {
      setIndex((current) => current + 1);
    }
  };

  useEffect(() => {
    slideShow = setInterval(() => {
      slideNext();
    }, 5000);
    return () => clearInterval(slideShow);
  }, [index]);



  return (
    <>
      <TvCarousel
        tvTitle={tvTitle}
        tvBackDrop={tvBackDrop}
        tvOverview={tvOverview}
        index={index}
        setIndex={setIndex}
      />
    </>
  );
};
