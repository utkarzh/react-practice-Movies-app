import React, { useState, useEffect } from "react";

import MovieCard from "./movie-card";
import SearchIcon from "./search.svg";
import "./App.css";

const url = "http://www.omdbapi.com?apikey=3287336f";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>Films Practice</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="page updates on search..that is the goal for now!!"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>why are you searching these crazy names..not found!</h2>
        </div>
      )}
    </div>
  );
};

export default App;