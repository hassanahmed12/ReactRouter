import React from 'react'
import {Link} from 'react-router-dom'

export default function nav(props) {
    return (
        <div >
           <ul className="navbar navbar-dark bg-dark">
               <li className="text-success"><Link to="/">Home</Link></li>
               <li className="text-success"><Link to="/Shop">Shop</Link></li>
               <li className="text-success"><Link to="/Aboutus">Aboutus</Link></li>
               

           </ul>
        </div>
    )
}
