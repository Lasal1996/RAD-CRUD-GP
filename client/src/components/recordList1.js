import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

 
const Record1 = (props) => (
 <tr>
   <td>{props.record1.orderno1}</td>
   <td>{props.record1.totalprice1}</td>
   <td>{props.record1.customerid1}</td>
   <td>{props.record1.recieptNo1}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record1._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord1(props.record1._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function Record1List() {
 const [record1s, setRecord1s] = useState([]);
 
 // This method fetches the record1s from the database.
 useEffect(() => {
   async function getRecord1s() {
     const response = await fetch(`http://localhost:5000/record1/`);
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
     const record1s = await response.json();
     setRecord1s(record1s);
   }

   getRecord1s();
   return;
 }, [record1s.length]);
 
 // This method will delete a record1
 async function deleteRecord1(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecord1s = record1s.filter((el) => el._id !== id);
   setRecord1s(newRecord1s);
 }
 
 // This method will map out the record1s on the table
 function record1List() {
   return record1s.map((record1) => {
     return (
       <Record1
         record1={record1}
         deleteRecord1={() => deleteRecord1(record1._id)}
         key={record1._id}
       />
     );
   });
 }

 
 // This following section will display the table with the record1s of individuals.
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
     <h1>Payment Management</h1>
     <table className="table table-hover" style={{ marginTop: 20}}>
       <thead>
         <tr>
           <th>Order Number</th>
           <th>Total Price</th>
           <th>Customer ID</th>
           <th>Reciept Number</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{record1List()}</tbody>
     </table>
     <div class="d-flex flex-row-reverse">
      <NavLink className="nav-link" to="/create1">
     <button class="btn btn-success d-flex flex-row" style={{marginLeft: 20, fontSize: 15 ,fontWeight:"bold"}}>+ Add Record</button>
     </NavLink>
   </div>
   </div>
</div>
 );
}

