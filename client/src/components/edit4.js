import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";

 
export default function Edit() {
 const [form, setForm] = useState({
   StaffID4: "",
   StaffName4: "",
   StaffContact4: "",
   StaffAddress4:"",
   records4: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record4/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record4 = await response.json();
     if (!record4) {
       window.alert(`Record4 with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record4);
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
     StaffID4: form.StaffID4,
     StaffName4: form.StaffName4,
     StaffContact4: form.StaffContact4,
     StaffAddress4: form.StaffAddress4,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/recordList4");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
  <div>
      <Navbar />
  <div class="col-xs-1" align="left" style={{width: 1300}}>
     <h1>Update Record</h1>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Staff ID: </label>
         <input
           type="number"
           className="form-control"
           id="StaffID4"
           value={form.StaffID4}
           onChange={(e) => updateForm({ StaffID4: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="StaffName4">Staff Name: </label>
         <input
           type="text"
           className="form-control"
           id="StaffName4"
           value={form.StaffName4}
           onChange={(e) => updateForm({ StaffName4: e.target.value })}
         />
       </div>
       
       <div className="form-group">
         <label htmlFor="StaffContact4">Staff Contact Number:</label>
         <input
           type="number"
           className="form-control"
           id="StaffContact4"
           value={form.StaffContact4}
           onChange={(e) => updateForm({ StaffContact4: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="StaffAddress4">Staff Address: </label>
         <input
           type="text"
           className="form-control"
           id="StaffAddress4"
           value={form.StaffAddress4}
           onChange={(e) => updateForm({ StaffAddress4: e.target.value })}
         />
       </div>
       <br />
 
       <div className="form-group">
        <NavLink className="nav-link" to="/recordList4">
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