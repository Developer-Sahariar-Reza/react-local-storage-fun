import React, { useEffect, useState } from "react";
import "./Movie.css";
import Card from "../Card/Card";

const Movie = ({ handleWatchNow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <Card
          key={movie.id}
          movie={movie}
          handleWatchNow={handleWatchNow}
        ></Card>
      ))}
    </div>
  );
};

export default Movie;
