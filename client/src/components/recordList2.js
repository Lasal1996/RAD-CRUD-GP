import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

 
const record2 = (props) => (
 <tr>
   <td>{props.record2.BookName2}</td>
   <td>{props.record2.BookID2}</td>
   <td>{props.record2.AuthorID2}</td>
   <td>{props.record2.BatchNo2}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record2._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleterecord2(props.record2._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
  const [record2s, setrecord2s] = useState([]);
 
 // This method fetches the record2s from the database.
 useEffect(() => {
   async function getrecord2s() {
     const response = await fetch(`http://localhost:5000/record2/`);
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
     const record2s = await response.json();
     setrecord2s(record2s);
   }

   getrecord2s();
   return;
 }, [record2s.length]);
 
 // This method will delete a record2
 async function deleterecord2(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newrecord2s = record2s.filter((el) => el._id !== id);
   setrecord2s(newrecord2s);
 }
 
 // This method will map out the record2s on the table
 function recordList() {
   return record2s.map((record2) => {
     return (
       <record2
         record2={record2}
         deleterecord2={() => deleterecord2(record2._id)}
         key={record2._id}
       />
     );
   });
 }

 
 // This following section will display the table with the record2s of individuals.
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
           <th>Book name</th>
           <th>Book ID</th>
           <th>Author ID</th>
           <th>Batch Number</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
     <div class="d-flex flex-row-reverse">
      <NavLink className="nav-link" to="/create2">
     <button class="btn btn-success d-flex flex-row" style={{marginLeft: 20, fontSize: 15 ,fontWeight:"bold"}}>+ Add record</button>
     </NavLink>
   </div>
   </div>
</div>
 );
}

