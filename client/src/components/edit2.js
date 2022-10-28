import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";

 
export default function Edit() {
 const [form, setForm] = useState({
   BookName2: "",
   BookID2: "",
   AuthorID2: "",
   BatchNo2:"",
   records2: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record2/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record2 = await response.json();
     if (!record2) {
       window.alert(`Record2 with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record2);
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
     BookName2: form.BookName2,
     BookID2: form.BookID2,
     AuthorID2: form.AuthorID2,
     BatchNo2: form.BatchNo2,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/recordList2");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
  <div>
      <Navbar />
  <div class="col-xs-1" align="left" style={{width: 1300}}>
     <h1>Update Record2</h1>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Book Name: </label>
         <input
           type="text"
           className="form-control"
           id="BookName2"
           value={form.BookName2}
           onChange={(e) => updateForm({ BookName2: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="BookID2">Book ID: </label>
         <input
           type="number"
           className="form-control"
           id="BookID2"
           value={form.BookID2}
           onChange={(e) => updateForm({ BookID2: e.target.value })}
         />
       </div>
       
       <div className="form-group">
         <label htmlFor="AuthorID2">Author ID: </label>
         <input
           type="number"
           className="form-control"
           id="AuthorID2"
           value={form.AuthorID2}
           onChange={(e) => updateForm({ AuthorID2: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="BatchNo2">Batch Number: </label>
         <input
           type="number"
           className="form-control"
           id="BatchNo2"
           value={form.BatchNo2}
           onChange={(e) => updateForm({ BatchNo2: e.target.value })}
         />
       </div>
       <br />
 
       <div className="form-group">
        <NavLink className="nav-link" to="/recordList2">
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