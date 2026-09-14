export const MovieCard = ({ movie }) => {
  return (
    <>

      <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank">
        <div className="tv-card-container">
          <img
            className="show-image"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={""}
          />
          <div className="show-info-container">
            <h2>{movie.original_title}</h2>
            <div className="show-rating-and-date">
              <p>{movie.vote_average}</p>
              <p>{movie.release_date}</p>
            </div>

            <div className="show-overview">
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};
