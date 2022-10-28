import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

 
const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.position}</td>
   <td>{props.record.delivery}</td>
   <td>{props.record.ContactNumber}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
     const records = await response.json();
     setRecords(records);
   }

   getRecords();
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }

 
 // This following section will display the table with the records of individuals.
 return (
<div>
<nav class="navbar navbar-expand-xl navbar-light bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="././favicin.pngnavbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav" style={{margin:5}}>
          <NavLink className="nav-link" to="/">
            <button class="btn btn-outline-light" style={{marginLeft: 20, fontSize: 15}} href=".png">Home</button>
          </NavLink>
          </div>
        </div>
      </nav>
   <div class="col-xs-1" align="center" style={{width: 1500}}>
     <h1>Book Ordering</h1>
     <table className="table table-hover" style={{ marginTop: 20}}>
       <thead>
         <tr>
           <th>Order Number</th>
           <th>Customer ID</th>
           <th>Customer Delivery Address</th>
           <th>Customer Contact Number</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
     <div class="d-flex flex-row-reverse">
      <NavLink className="nav-link" to="/create">
     <button class="btn btn-success d-flex flex-row" style={{marginLeft: 20, fontSize: 15 ,fontWeight:"bold"}}>+ Add Record</button>
     </NavLink>
   </div>
   </div>
</div>
 );
}

