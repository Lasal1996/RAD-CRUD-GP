import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "./navbar";

 
export default function Edit() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   delivery: "",
   ContactNumber:"",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
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
     name: form.name,
     position: form.position,
     delivery: form.delivery,
     ContactNumber: form.ContactNumber,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
  <div>
      <Navbar />
  <div class="col-xs-1" align="left" style={{width: 1300}}>
     <h1>Update Record</h1>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Order Number: </label>
         <input
           type="number"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="position">Customer ID: </label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       
       <div className="form-group">
         <label htmlFor="delivery">Customer Delivery Address: </label>
         <input
           type="text"
           className="form-control"
           id="delivery"
           value={form.delivery}
           onChange={(e) => updateForm({ delivery: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="ContactNumber">Customer Contact Number: </label>
         <input
           type="text"
           className="form-control"
           id="ContactNumber"
           value={form.ContactNumber}
           onChange={(e) => updateForm({ ContactNumber: e.target.value })}
         />
       </div>
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
</div>
   
 );
}