import React, { useState, useEffect } from 'react';
import "./review.css";

const key = "c8d70e4d"; // API key for OMDB

export const Review = () => {
  const [movie, setMovie] = useState(""); // Default movie name
  const [poster, setPoster] = useState(""); // State to store movie poster URL
  const [mname, setMname] = useState(""); // State to store movie name
  const [rate, setRate] = useState(""); // State to store movie rating
  const [time, setTime] = useState(""); // State to store movie runtime
  const [year, setYear] = useState(""); // State to store movie release year
  const [genre, setGenre] = useState(""); // State to store movie genre
  const [rat, setRat] = useState(""); // State to store IMDb rating
  const [plot, setPlot] = useState(""); // State to store movie plot
  const [cast, setCast] = useState(""); // State to store movie cast
  const [div, setDiv] = useState(false); // State to show/hide movie details
  const [suggestions, setSuggestions] = useState([]); // State to store movie suggestions

  useEffect(() => {
    if (movie.length > 2) {
      fetchSuggestions(movie);
    } else {
      setSuggestions([]);
    }
  }, [movie]);

  const fetchSuggestions = (query) => {
    try {
      let url = `http://www.omdbapi.com/?s=${query}&apikey=${key}`;
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          if (data.Response === "True") {
            setSuggestions(data.Search);
          } else {
            setSuggestions([]);
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  const search = (movieTitle) => {
    try {
      
      let url = `http://www.omdbapi.com/?t=${movieTitle}&apikey=${key}`;
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          if (data.Response === "False") {
            console.log("Movie not found");
            setSuggestions([]);
          } else {
            setSuggestions([]);
            setDiv(true);
            setMname(data.Title);
            setPoster(data.Poster);
            setRate(data.Rated);
            setRat(data.imdbRating);
            setYear(data.Year);
            setGenre(data.Genre);
            setTime(data.Runtime);
            setCast(data.Actors);
            setPlot(data.Plot);
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChange = (e) => {
    setMovie(e.target.value );
  };

  const handleSuggestionClick = (movieTitle) => {
    setMovie(movieTitle);
    setSuggestions([]);
    search(movieTitle);
  };

const handle=(e)=>{
  if(e.key==="Enter"){
    search();
  }
  setSuggestions([]);

}

  return (
  <>
    <div className="review">
      <div className="reviewcontainer">
      <h1>Review</h1>
        <div className="input">
          
          <input
            type="text"
            value={movie}
            onChange={handleInputChange}
            onKeyDown={handle}
            placeholder="Enter movie name"/>
          <button onClick={() => search(movie)}>Search</button>
          </div>
          <div className="suggestion">
          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((suggestion) => (
                <li key={suggestion.imdbID} onClick={() => handleSuggestionClick(suggestion.Title)}>
                  {suggestion.Title} ({suggestion.Year})
                </li>
              ))}
            </ul>
          )}
        </div>
        {div && (
          <div className="moviereview">
            <div className="img">
              <img src={poster} alt="Movie Poster" />
            </div>
            <div className="moviereviewdetails">
              <div className="name">
                <h2>{mname}</h2>
              </div>
              <div className="details">
                <h3>{rat}⭐</h3>
                <h3>{rate}</h3>
                <h3>{year}</h3>
                <h3>{time}</h3>
              </div>
              <div className="genre">
                <button>{genre}</button>
              </div>
              <div className="cast">
                <h3>Cast: {cast}</h3>
              </div>
              <div className="plot">
                <h4>Plot: <br />{plot}</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
 
};