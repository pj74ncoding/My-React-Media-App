import { useState, useEffect } from "react";
import { MovieCard } from "./movie.card";

export const MediaMovies = ({ heading, category }) => {
  const [movieData, setMovieData] = useState([]);

  const fetchMovieData = async () => {
    try {
      const movieResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?api_key=5a1dbe02eaed7aed89976013dcbc8aef`,
      );
      const movieResults = await movieResponse.json();
      setMovieData(movieResults.results);
    } catch (error) {
      console.log("fetchMovieData error is: ", error);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  useEffect(() => {
    console.log("movieData", movieData);
  }, [movieData]);

  return (
    <>
      <section className="media-movie-section">
        <h2>{heading}</h2>
        <div className="media-movie-card-container">
          {movieData.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </>
  );
};
