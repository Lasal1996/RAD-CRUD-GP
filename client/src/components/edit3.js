import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";

 
export default function Edit() {
 const [form, setForm] = useState({
   CustomerName3: "",
   CustomerID3: "",
   Delivery3: "",
   Contact3:"",
   records3: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record3/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record3 = await response.json();
     if (!record3) {
       window.alert(`Record3 with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record3);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     CustomerName3: form.CustomerName3,
     CustomerID3: form.CustomerID3,
     Delivery3: form.Delivery3,
     Contact3: form.Contact3,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/recordList3");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
  <div>
      <Navbar />
  <div class="col-xs-1" align="left" style={{width: 1300}}>
     <h1>Update Record</h1>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Customer Name: </label>
         <input
           type="text"
           className="form-control"
           id="CustomerName3"
           value={form.CustomerName3}
           onChange={(e) => updateForm({ CustomerName3: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="CustomerID3">Customer ID: </label>
         <input
           type="number"
           className="form-control"
           id="CustomerID3"
           value={form.CustomerID3}
           onChange={(e) => updateForm({ CustomerID3: e.target.value })}
         />
       </div>
       
       <div className="form-group">
         <label htmlFor="Delivery3">Delivery Address: </label>
         <input
           type="text"
           className="form-control"
           id="Delivery3"
           value={form.Delivery3}
           onChange={(e) => updateForm({ Delivery3: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="Contact3">Contact Number: </label>
         <input
           type="number"
           className="form-control"
           id="Contact3"
           value={form.Contact3}
           onChange={(e) => updateForm({ Contact3: e.target.value })}
         />
       </div>
       <br />
 
       <div className="form-group">
        <NavLink className="nav-link" to="/recordList3">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
         </NavLink>
       </div>
     </form>
   </div>
</div>
   
 );
}