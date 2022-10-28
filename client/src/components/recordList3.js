import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

 
const record3 = (props) => (
 <tr>
   <td>{props.record3.CustomerName3}</td>
   <td>{props.record3.CustomerID3}</td>
   <td>{props.record3.Delivery3}</td>
   <td>{props.record3.Contact3}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record3._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleterecord3(props.record3._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
    const [record3s, setrecord3s] = useState([]);
 
 // This method fetches the record3s from the database.
 useEffect(() => {
   async function getrecord3s() {
     const response = await fetch(`http://localhost:5000/record3/`);
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
     const record3s = await response.json();
     setrecord3s(record3s);
   }

   getrecord3s();
   return;
 }, [record3s.length]);
 
 // This method will delete a record3
 async function deleterecord3(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newrecord3s = record3s.filter((el) => el._id !== id);
   setrecord3s(newrecord3s);
 }
 
 // This method will map out the record3s on the table
 function record3List() {
   return record3s.map((record3) => {
     return (
       <record3
         record3={record3}
         deleterecord3={() => deleterecord3(record3._id)}
         key={record3._id}
       />
     );
   });
 }

 
 // This following section will display the table with the record3s of individuals.
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
          </div>
        </div>
      </nav>
   <div class="col-xs-1" align="center" style={{width: 1500}}>
     <h1>Book Management</h1>
     <table className="table table-hover" style={{ marginTop: 20}}>
       <thead>
         <tr>
           <th>Customer name</th>
           <th>Customer ID</th>
           <th>Delivery Address</th>
           <th>Conatct Number</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{record3List()}</tbody>
     </table>
     <div class="d-flex flex-row-reverse">
      <NavLink className="nav-link" to="/create3">
     <button class="btn btn-success d-flex flex-row" style={{marginLeft: 20, fontSize: 15 ,fontWeight:"bold"}}>+ Add record</button>
     </NavLink>
   </div>
   </div>
</div>
 );
}

