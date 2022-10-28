import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./navbar";
import { NavLink } from "react-router-dom";

 
export default function Create() {
 const [form, setForm] = useState({
   BookName2: "",
   BookID2: "",
   AuthorID2: "",
   BatchNo2: "",
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
  
    // When a post request is sent to the create url, we'll add a new record2 to the database.
    const newPerson = { ...form };
  
    await fetch("http://localhost:5000/record2/add", {
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
  
    setForm({ BookName2: "", BookID2: "", AuthorID2: "", BatchNo2: "",});
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
          <label htmlFor="name">Book name</label>
          <input
            type="text"
            className="form-control"
            id="BookName2"
            value={form.BookName2}
            onChange={(e) => updateForm({ BookName2: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Book ID</label>
          <input
            type="number"
            className="form-control"
            id="BookID2"
            value={form.BookID2}
            onChange={(e) => updateForm({ BookID2: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="AuthorID2">Author ID</label>
          <input
            type="number"
            className="form-control"
            id="AuthorID2"
            value={form.AuthorID2}
            onChange={(e) => updateForm({ AuthorID2: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="BatchNo2">Batch Number</label>
          <input
            type="number"
            className="form-control"
            id="BatchNo2"
            value={form.BatchNo2}
            onChange={(e) => updateForm({ BatchNo2: e.target.value })}
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