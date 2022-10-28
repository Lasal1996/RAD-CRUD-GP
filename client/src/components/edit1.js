import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";

 
export default function Edit() {
 const [form, setForm] = useState({
   orderno1: "",
   totalprice1: "",
   customerid1: "",
   receiptNo1:"",
   records1: [],
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
     orderno1: form.orderno1,
     totalprice1: form.totalprice1,
     customerid1: form.customerid1,
     receiptNo1: form.receiptNo1,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/recordList1");
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
           id="orderno1"
           value={form.orderno1}
           onChange={(e) => updateForm({ orderno1: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="totalprice1">Total Price: </label>
         <input
           type="number"
           className="form-control"
           id="totalprice1"
           value={form.totalprice1}
           onChange={(e) => updateForm({ totalprice1: e.target.value })}
         />
       </div>
       
       <div className="form-group">
         <label htmlFor="customerid1">Customer ID: </label>
         <input
           type="number"
           className="form-control"
           id="customerid1"
           value={form.customerid1}
           onChange={(e) => updateForm({ customerid1: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="receiptNo1">Reciept Number: </label>
         <input
           type="number"
           className="form-control"
           id="receiptNo1"
           value={form.receiptNo1}
           onChange={(e) => updateForm({ receiptNo1: e.target.value })}
         />
       </div>
       <br />
 
       <div className="form-group">
        <NavLink className="nav-link" to="/recordList1">
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