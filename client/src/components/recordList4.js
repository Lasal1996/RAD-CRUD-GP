import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

 
const record4 = (props) => (
 <tr>
   <td>{props.record4.STaffID4}</td>
   <td>{props.record4.StaffName4}</td>
   <td>{props.record4.StaffContact4}</td>
   <td>{props.record4.StaffAddress4}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record4._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleterecord4(props.record4._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
  const [record4s, setrecord4s] = useState([]);
 
 // This method fetches the record4s from the database.
 useEffect(() => {
   async function getrecord4s() {
     const response = await fetch(`http://localhost:5000/record4/`);
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
     const record4s = await response.json();
     setrecord4s(record4s);
   }

   getrecord4s();
   return;
 }, [record4s.length]);
 
 // This method will delete a record4
 async function deleterecord4(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newrecord4s = record4s.filter((el) => el._id !== id);
   setrecord4s(newrecord4s);
 }
 
 // This method will map out the record4s on the table
 function record4List() {
   return record4s.map((record4) => {
     return (
       <record4
         record4={record4}
         deleterecord4={() => deleterecord4(record4._id)}
         key={record4._id}
       />
     );
   });
 }

 
 // This following section will display the table with the record4s of individuals.
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
     <h1>Staff Management</h1>
     <table className="table table-hover" style={{ marginTop: 20}}>
       <thead>
         <tr>
           <th>Staff ID</th>
           <th>Staff Name</th>
           <th>Staff Contact Number</th>
           <th>Staff Address</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{record4List()}</tbody>
     </table>
     <div class="d-flex flex-row-reverse">
      <NavLink className="nav-link" to="/create4">
     <button class="btn btn-success d-flex flex-row" style={{marginLeft: 20, fontSize: 15 ,fontWeight:"bold"}}>+ Add record</button>
     </NavLink>
   </div>
   </div>
</div>
 );
}
