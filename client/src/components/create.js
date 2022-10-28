import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./navbar";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   delivery: "",
   ContactNumber: "",
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
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
  
    await fetch("http://localhost:5000/record/add", {
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
  
    setForm({ name: "", position: "", delivery: "", ContactNumber: "",});
    navigate("/");
  }
 
 // This following section will display the form that takes the input from the user.
 return (
  <div>
    <Navbar />
    <div class="col-xs-1" align="left" style={{width: 1300}}>
      <h1>Create New Record</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Order Number</label>
          <input
            type="number"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Customer ID</label>
          <input
            type="number"
            className="form-control"
            id="position"
            value={form.position}
            onChange={(e) => updateForm({ position: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="delivery">Customer delivery Address</label>
          <input
            type="text"
            className="form-control"
            id="delivery"
            value={form.delivery}
            onChange={(e) => updateForm({ delivery: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ContactNumber">Customer Contact Number</label>
          <input
            type="number"
            className="form-control"
            id="ContactNumber"
            value={form.ContactNumber}
            onChange={(e) => updateForm({ ContactNumber: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Records"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  </div>
  );
}