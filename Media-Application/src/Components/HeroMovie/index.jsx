import { MovieCarousel } from "./movie-carousel";
import { useState, useEffect, useMemo } from "react";
export const MediaHero = () => {
  const [heroMovieData, setHeroMovieData] = useState([]);
  const [movieBackDrop, setMovieBackdrop] = useState([]);
  const [movieTitle, setMovieTitle] = useState([]);
  const [movieOverview, setMovieOverView] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchMovieData = async () => {
    try {
      const movieResponse = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=5a1dbe02eaed7aed89976013dcbc8aef",
      );

      const movieResults = await movieResponse.json();
      setHeroMovieData(movieResults.results);
    } catch (error) {
      console.warn("fetchMovieData error is: ", error);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  const slicedHeroMovieData = useMemo(
    () => heroMovieData.slice(0, 6),
    [heroMovieData],
  );

  // const backdrop = useMemo(() => heroMovieData.slice(0, 5), [heroMovieData]);
  // const title = useMemo(() => heroMovieData.slice(0.5), [heroMovieData]);

  useEffect(() => {
    const backdrops = slicedHeroMovieData.map((movie) => movie.backdrop_path);
    setMovieBackdrop(backdrops);
    const titles = slicedHeroMovieData.map((movie) => movie.title);
    setMovieTitle(titles);
    const overView = slicedHeroMovieData.map((movie) => movie.overview);
    setMovieOverView(overView);
  }, [slicedHeroMovieData]);

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

  // =================================================
  // const movies = heroMovieData.slice(0, 5);
  // const array = [];
  // const test = movies.map((movie) => movie.backdrop_path);
  // {
  //   test.map((movie) => array.push({ background: movie }));
  // }
  // console.log("normaljsarray", array);
  // array.push(test);

  return (
    <>
      <MovieCarousel
        movieTitle={movieTitle}
        movieBackDrop={movieBackDrop}
        movieOverview={movieOverview}
        index={index}
        setIndex={setIndex}
      />
    </>
  );
};
