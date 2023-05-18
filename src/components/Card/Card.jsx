import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ movie, handleWatchNow }) => {
  return (
    <div className="card">
      <div className="movie-poster">
        <img src={movie.poster} alt="" />
      </div>
      <div className="movie-details">
        <h3 className="movie-name">{movie.movieName}</h3>
        <p className="movie-details-common">Details: {movie.description}</p>
        <p className="movie-details-common">Category: {movie.category}</p>
        <p className="movie-details-common">
          Ratings: {movie.imdbRating}{" "}
          <FontAwesomeIcon icon={faStar} className="star" />
        </p>
        <p className="movie-details-common">Watch Time: {movie.watchTime}</p>
      </div>
      <div className="btn">
        <button
          className="btn-watch-now"
          onClick={() => handleWatchNow(movie.watchTime)}
        >
          Watch Now <FontAwesomeIcon icon={faVideo} />
        </button>
      </div>
    </div>
  );
};

export default Card;
