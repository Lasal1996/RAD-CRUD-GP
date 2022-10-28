import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./navbar";
import { NavLink } from "react-router-dom";

 
export default function Create() {
 const [form, setForm] = useState({
   CustomerName3: "",
   CustomerID3: "",
   Delivery3: "",
   Contact3: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
// This function will handle the submission.
async function onSubmit(e) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record3 to the database.
    const newPerson = { ...form };
  
    await fetch("http://localhost:5000/record3/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({ CustomerName3: "", CustomerID3: "", Delivery3: "", Contact3: "",});
    navigate("/recordList3");
  }
 
 // This following section will display the form that takes the input from the user.
 return (
  <div>
    <Navbar />
    <div class="col-xs-1" align="left" style={{width: 1300}}>
      <h1>Create New Record</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Customer name</label>
          <input
            type="text"
            className="form-control"
            id="CustomerName3"
            value={form.CustomerName3}
            onChange={(e) => updateForm({ CustomerName3: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Customer ID</label>
          <input
            type="number"
            className="form-control"
            id="CustomerID3"
            value={form.CustomerID3}
            onChange={(e) => updateForm({ CustomerID3: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Delivery3">Delivery Address</label>
          <input
            type="text"
            className="form-control"
            id="Delivery3"
            value={form.Delivery3}
            onChange={(e) => updateForm({ Delivery3: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Contact3">Contact Number</label>
          <input
            type="number"
            className="form-control"
            id="Contact3"
            value={form.Contact3}
            onChange={(e) => updateForm({ Contact3: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Record"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  </div>
  );
}