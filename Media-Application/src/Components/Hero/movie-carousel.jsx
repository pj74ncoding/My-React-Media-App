export const MovieCarousel = ({
  index,
  setIndex,
  movieBackDrop,
  movieTitle,
  movieOverview,
}) => {
  return (
    <>
      <section className="carousel-container">
        <div className="title-overview-container">
          <h1>{movieTitle[index]}</h1>
          <div className="overview-container">
            <p>{movieOverview[index]}</p>
          </div>
          <div className="markers-container">
            <button
              style={{ backgroundColor: index == 0 ? "white" : "Grey" }}
              onClick={() => setIndex(0)}
              className="movie-marker"
            ></button>
            <button
              style={{ backgroundColor: index == 1 ? "white" : "Grey" }}
              onClick={() => setIndex(1)}
              className="movie-marker"
            ></button>
            <button
              style={{ backgroundColor: index == 2 ? "white" : "Grey" }}
              onClick={() => setIndex(2)}
              className="movie-marker"
            ></button>
            <button
              style={{ backgroundColor: index == 3 ? "white" : "Grey" }}
              onClick={() => setIndex(3)}
              className="movie-marker"
            ></button>
            <button
              style={{ backgroundColor: index == 4 ? "white" : "Grey" }}
              onClick={() => setIndex(4)}
              className="movie-marker"
            ></button>
            <button
              style={{ backgroundColor: index == 5 ? "white" : "Grey" }}
              onClick={() => setIndex(5)}
              className="movie-marker"
            ></button>
          </div>
        </div>

        <div className="carousel">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieBackDrop[index]}`}
            alt=""
          />
        </div>
      </section>
    </>
  );
};
