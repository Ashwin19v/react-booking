import React from 'react'
import "./history.css"
export const History = ({history,setHistory,name,setName,email,setEmail,ph,setPh,price,setPrice,quantity,setQuantity,theater,setTheater,img,setImg,size,setSize}) => {
   const del=(id)=>{
    setHistory(history.filter((c)=>c.id!== id))
    }
  return (
    <>
        <h1>History</h1>
        <div className="history">
            {
                history.map((movie)=>(
                    <div className="movies" key={movie.id}>
                <div className="img">
                    <img src={movie.pic}></img>
                </div>
                <div className="details">
                    <h3>{movie.moviename}</h3>
                    <h2>{movie.ratings*2}⭐</h2><span>{movie.genre}</span>
                    <h4>{movie.director}</h4>
                    <h4>{movie.musicdirector}</h4>
                </div>
                <div className="qr">
                    <img src={movie.img}/>
                </div>
                <div className="rate">
                    <h3>{movie.name}</h3>
                    <h3>{movie.ph}</h3>
                    <h3>{movie.email}</h3>
                    <h3>{movie.theater}</h3>
                    <span>Seats : {movie.quantity}</span><span> price : $ {movie.price}</span>
                </div>
                <div className="del">
                    <button onClick={()=>del(movie.id)}> X</button>
                </div>
            </div>
                ))
            }
        </div>
    </>
  )
}
