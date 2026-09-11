export const TvCard = ({ show }) => {
  return (
    <>
      <div className="tv-card-container">
        <img
          className="show-image"
          src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
          alt={""}
        />
        <div className="show-info-container">
          <h5>{show.name}</h5>
          <div className="show-rating-and-date">
            <p>{show.vote_average}</p>
            <p>{show.first_air_date}</p>
          </div>

          <div className="show-overview">
            <p>{show.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};
