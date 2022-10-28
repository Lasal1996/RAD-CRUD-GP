import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function RecordList() {
return (
<div>
  <nav class="navbar navbar-expand-xl navbar-light bg-dark">
    <button class="btn btn-light " style={{marginLeft: 20, fontSize: 15}} href=".png">User</button>
  </nav>
  
  <div class="row p-5">
      <h1 align="center">BOOK MANAGEMENT SYSTEM</h1>
  <div class="col" align="center"> </div>
  <div class="col" align="center">

  <NavLink className="nav-link" to="/recordList">
     <button type="button" class="btn p-5 mt-5 btn-outline-primary btn-lg btn-block">Book Ordering</button> <br></br><br></br>
  </NavLink>

  <NavLink className="nav-link" to="/recordList">
     <button type="button" class="btn p-5 mt-4 btn-outline-secondary btn-lg btn-block">Payment Management </button><br></br><br></br>
  </NavLink>

  <NavLink className="nav-link" to="/recordList">
     <button type="button" class="btn p-5 mt-4 btn-outline-success btn-lg btn-block ">Book Management</button><br></br><br></br>
  </NavLink>

  <NavLink className="nav-link" to="/recordList">
     <button type="button" class="btn p-5 mt-4 btn-outline-danger btn-lg btn-block">Customer Management</button><br></br><br></br>
  </NavLink>

  <NavLink className="nav-link" to="/recordList">
     <button type="button" class="btn p-5 mt-4 btn-outline-warning btn-lg btn-block">Staff Management</button>
  </NavLink>

    </div>
    <div class="col" align="center"> </div>
   </div>
</div>
 );
}

