import React, { useState } from 'react'
import {Movie} from "./Movie.jsx"
import datas from "../assets/movies.json"
import "./home.css";
export const Home = ({history,setHistory,name,setName,email,setEmail,ph,setPh,price,setPrice,quantity,setQuantity,theater,setTheater,qr,setQr,size,setSize,img,setImg}) => {
    const[movies]=useState(datas);
    
  return (
    
    <div className='moviecontainer'>
        {
           movies.map((movie)=>(
            <Movie key={movie.id} movie={movie} history={history} setHistory={setHistory}
            name={name} setName={setName}  theater={theater} setTheater={setTheater} quantity={quantity} setQuantity={setQuantity} ph={ph} setPh={setPh} email={email}
            setEmail={setEmail} price={price} setPrice={setPrice} qr={qr} setQr={setQr} size={size} setSize={setSize} img={img} setImg={setImg}
            />
           ))
        }
        
    </div>
  )
}
