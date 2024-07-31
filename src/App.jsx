import { useState } from 'react'
import {Header} from "./components/Header.jsx"
import {Home} from "./components/Home.jsx"
import {History} from "./components/History.jsx"
import {Aboutus} from "./components/Aboutus.jsx"
import {Review} from "./components/Review.jsx"
import {Faq} from "./components/Faq.jsx";
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const [history,setHistory]=useState([]);
  const[name,setName]=useState("");
 
  const[theater,setTheater]=useState("PVR velocity");
  const[quantity,setQuantity]=useState(1);
  const[ph,setPh]=useState("");
  const[email,setEmail]=useState("");
  const[price,setPrice]=useState();
  const[qr,setQr]=useState("");
  const[size,setSize]=useState("150");
  const [img,setImg]=useState("hi.png");


  return (
    <>
      <BrowserRouter>
      <Header/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home history={history} setHistory={setHistory} 
         name={name} setName={setName}  theater={theater} setTheater={setTheater} quantity={quantity} setQuantity={setQuantity} ph={ph} setPh={setPh} email={email}
         setEmail={setEmail} price={price} setPrice={setPrice}  qr={qr} setQr={setQr} size={size} setSize={setSize} img={img} setImg={setImg}
        />} />
        <Route path="/History" element={<History history={history} setHistory={setHistory}
         name={name} setName={setName}  theater={theater} setTheater={setTheater} quantity={quantity} setQuantity={setQuantity} ph={ph} setPh={setPh} email={email}
         setEmail={setEmail} price={price} setPrice={setPrice} qr={qr} setQr={setQr} size={size} setSize={setSize} img={img} setImg={setImg}
        />}/>
        <Route path="/Review" element={<Review/>}/>
        <Route path="/Faq" element={<Faq/>}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
      </Routes>
      </div>

      </BrowserRouter>
    </>
  )
}

export default App
