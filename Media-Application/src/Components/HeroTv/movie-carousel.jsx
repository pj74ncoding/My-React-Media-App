export const TvCarousel = ({
  index,
  setIndex,
  tvBackDrop,
  tvTitle,
  tvOverview,
}) => {
  return (
    <>
      <section className="carousel-container">
        <div className="title-overview-container">
          <h1>{tvTitle[index]}</h1>
          <div className="overview-container">
            <p>{tvOverview[index]}</p>
          </div>
          <div className="markers-container">
            <button
              style={{ backgroundColor: index == 0 ? "white" : "Grey" }}
              onClick={() => setIndex(0)}
              className="marker"
            ></button>
            <button
              style={{ backgroundColor: index == 1 ? "white" : "Grey" }}
              onClick={() => setIndex(1)}
              className="marker"
            ></button>
            <button
              style={{ backgroundColor: index == 2 ? "white" : "Grey" }}
              onClick={() => setIndex(2)}
              className="marker"
            ></button>
            <button
              style={{ backgroundColor: index == 3 ? "white" : "Grey" }}
              onClick={() => setIndex(3)}
              className="marker"
            ></button>
            <button
              style={{ backgroundColor: index == 4 ? "white" : "Grey" }}
              onClick={() => setIndex(4)}
              className="marker"
            ></button>
            <button
              style={{ backgroundColor: index == 5 ? "white" : "Grey" }}
              onClick={() => setIndex(5)}
              className="marker"
            ></button>
          </div>
        </div>

        <div className="carousel">
          <img
            src={`https://image.tmdb.org/t/p/w500${tvBackDrop[index]}`}
            alt=""
          />
        </div>
      </section>
    </>
  );
};
