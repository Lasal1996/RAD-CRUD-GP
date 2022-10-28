import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./navbar";
import { NavLink } from "react-router-dom";

 
export default function Create() {
 const [form, setForm] = useState({
   orderno1: "",
   totalprice1: "",
   customerid1: "",
   receiptNo1: "",
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
  
    // When a post request is sent to the create url, we'll add a new record1 to the database.
    const newPerson = { ...form };
  
    await fetch("http://localhost:5000/record1/add", {
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
  
    setForm({ orderno1: "", totalprice1: "", customerid1: "", receiptNo1: "",});
    navigate("/recordList2");
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
            id="orderno1"
            value={form.orderno1}
            onChange={(e) => updateForm({ orderno1: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Total Price</label>
          <input
            type="number"
            className="form-control"
            id="totalprice1"
            value={form.totalprice1}
            onChange={(e) => updateForm({ totalprice1: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerid1">Customer ID</label>
          <input
            type="number"
            className="form-control"
            id="customerid1"
            value={form.customerid1}
            onChange={(e) => updateForm({ customerid1: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="receiptNo1">Receipt Number</label>
          <input
            type="number"
            className="form-control"
            id="receiptNo1"
            value={form.receiptNo1}
            onChange={(e) => updateForm({ receiptNo1: e.target.value })}
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