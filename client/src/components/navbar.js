import React from "react";
import { NavLink } from "react-router-dom";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
// import { NavLink } from "react-router-dom";
 
export default function Navbar() {
 return (
   <div>
      <nav class="navbar navbar-expand-xl navbar-light bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="././favicin.pngnavbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav" style={{margin:5}}>
            <NavLink className="nav-link" to="/home">
              <button class="btn btn-outline-light" style={{marginLeft: 20, fontSize: 15}} href=".png">Home</button>
            </NavLink>
            
            <NavLink className="nav-link" to="/recordList">
              <button class="btn btn-outline-light" style={{marginLeft: 40, fontSize: 15}}  href="././favicin.png">Records</button>
            </NavLink>
          </div>
        </div>
      </nav>
   </div>
 );
}