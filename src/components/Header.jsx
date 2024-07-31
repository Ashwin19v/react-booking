import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <div className='navbar'>
        <div className="logo">Bookiee 🎬</div>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li> 
                <Link to={"/History"}>History</Link>
            </li>
            <li> 
                <Link to={"/Review"}>Review</Link>
            </li>
            <li> 
                <Link to={"/Faq"}>FAQ</Link>
            </li>
            <li> 
                <Link to={"/Aboutus"}>About US</Link>
            </li>
        </ul>
    </div>
  )
}
