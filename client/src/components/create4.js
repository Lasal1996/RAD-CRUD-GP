import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./navbar";
import { NavLink } from "react-router-dom";

 
export default function Create() {
 const [form, setForm] = useState({
   StaffID4: "",
   StaffName4: "",
   StaffContact4: "",
   StaffAddress4: "",
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
  
    // When a post request is sent to the create url, we'll add a new record4 to the database.
    const newPerson = { ...form };
  
    await fetch("http://localhost:5000/record4/add", {
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
  
    setForm({ StaffID4: "", StaffName4: "", StaffContact4: "", StaffAddress4: "",});
    navigate("/recordList4");
  }
 
 // This following section will display the form that takes the input from the user.
 return (
  <div>
    <Navbar />
    <div class="col-xs-1" align="left" style={{width: 1300}}>
      <h1>Create New Record</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Staff ID</label>
          <input
            type="number"
            className="form-control"
            id="StaffID4"
            value={form.StaffID4}
            onChange={(e) => updateForm({ StaffID4: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Staff Name</label>
          <input
            type="text"
            className="form-control"
            id="StaffName4"
            value={form.StaffName4}
            onChange={(e) => updateForm({ StaffName4: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="StaffContact4">Staff Contact Number</label>
          <input
            type="number"
            className="form-control"
            id="StaffContact4"
            value={form.StaffContact4}
            onChange={(e) => updateForm({ StaffContact4: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="StaffAddress4">Staff Address</label>
          <input
            type="text"
            className="form-control"
            id="StaffAddress4"
            value={form.StaffAddress4}
            onChange={(e) => updateForm({ StaffAddress4: e.target.value })}
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