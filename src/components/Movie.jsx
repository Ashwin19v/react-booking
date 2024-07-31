import React, { useEffect, useState } from "react";
import "./movie.css";

export const Movie = ({
  movie,
  history,
  setHistory,
  name,
  setName,
  email,
  setEmail,
  ph,
  setPh,
  price,
  setPrice,
  quantity,
  setQuantity,
  theater,
  setTheater,
  qr,
  setQr,
  img,
  setImg,
  size,
  setSize,
}) => {
  const [opendiv, setOpendiv] = useState(false);

  const add = () => {
    if (name && theater && email && ph && quantity) {
      const newMovie = {
        ...movie,
        name,
        email,
        quantity,
        price,
        ph,
        theater,
        img,
      };
      setHistory([...history, newMovie]);
      alert("Booking confirmed check History 😎");
      setOpendiv(false);
      setName("");
      setEmail("");
      setPh("");
      setPrice("");
      setQuantity(1);
      setImg("hi.png");
      console.log("Movie added to history:", newMovie);
    } else {
      console.log("All fields are required");
    }
  };

  const remove = () => {
    setHistory(history.filter((c) => c.id !== movie.id));
    console.log("Movie removed from history");
  };

  const open = () => {
    setOpendiv(true);
  };

  const close = () => {
    setOpendiv(false);
  };

  async function generate() {
    try {
      if (name && theater && email && ph && quantity) {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
          movie.moviename + name + quantity
        )}`;
        setImg(url);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function download() {
    if (name && theater && email && ph && quantity) {
      fetch(img)
        .then((response) => response.blob())
        .then((blob) => {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = `${movie.moviename} ${name} ${quantity}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
    }
  }

  useEffect(() => {
    setPrice(movie.price * quantity);
  }, [quantity]);

  return (
    <div className="movie">
      <div className="img">
        <img src={movie.pic} alt={movie.moviename} />
      </div>
      <h3>{movie.moviename}</h3>
      <div className="det">
        <span>{movie.ratings * 2}⭐</span>
        <span>Price: ${movie.price}</span>
        <button className="genre">{movie.genre}</button>
      </div>
      {history.some((c) => c.id === movie.id) ? (
        <button className="book" onClick={remove}>
          Remove
        </button>
      ) : (
        <button className="book" onClick={open}>
          Book
        </button>
      )}
      {opendiv && (
        <div className="about">
          <div className="dett">
            <div className="title">
              <h2>Bookiee 🎬</h2>
              <button onClick={close}>X</button>
            </div>
            <div className="imgs">
              <img src={img} alt="" />
            </div>
            <div className="name">
              <label htmlFor="name">Full Name :</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="user">
              <div className="userdetails">
                <label htmlFor="phone">Phone no :</label>
                <input
                  type="number"
                  id="phone"
                  value={ph}
                  onChange={(e) => setPh(e.target.value)}
                />
              </div>
              <div className="userdetails">
                <label htmlFor="email">Email id :</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="user">
              <div className="userdetailss">
                <label htmlFor="th">Theater :</label>
                <select
                  id="th"
                  value={theater}
                  onChange={(e) => setTheater(e.target.value)}
                >
                  <option value="PVR cinemas">PVR Cinemas</option>
                  <option value="Vishnu Cinemas">Vishnu Cinemas</option>
                  <option value="IBOX">INOX Selvan Square</option>
                </select>
              </div>
              <div className="userdetailss">
                <label htmlFor="no">Quantity :</label>
                <input
                  type="number"
                  id="no"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
            </div>
            <div className="userdetails">
              <h3>Price: ${price}</h3>
              <button className="sbook" onClick={add}>
                Book
              </button>
              <button onClick={generate}>Generate</button>
              <button onClick={download}>Download QR</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
