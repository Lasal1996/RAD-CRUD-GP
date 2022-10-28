import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
// import Navbar from "./components/navbar";
import Login from "./components/login";
import HomePage from "./components/home.js";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList1 from "./components/recordList1";
import Edit1 from "./components/edit1";
import Create1 from "./components/create1";
import RecordList2 from "./components/recordList2";
import Edit2 from "./components/edit2";
import Create2 from "./components/create2";
import RecordList3 from "./components/recordList4";
import Edit3 from "./components/edit3";
import Create3 from "./components/create3";
import RecordList4 from "./components/recordList4";
import Edit4 from "./components/edit4";
import Create4 from "./components/create4";
 
const App = () => {
 return (
   <div>
     <Routes>
       <Route exact path="/" element={<Login />} /> 
       <Route path="/home" element={<HomePage />} /> 
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/recordList" element={<RecordList />} />
       <Route path="/edit1/:id" element={<Edit1 />} />
       <Route path="/create1" element={<Create1 />} />
       <Route path="/recordList1" element={<RecordList1 />} />
       <Route path="/edit2/:id" element={<Edit2 />} />
       <Route path="/create2" element={<Create2 />} />
       <Route path="/recordList2" element={<RecordList2 />} />
       <Route path="/edit3/:id" element={<Edit3 />} />
       <Route path="/create3" element={<Create3 />} />
       <Route path="/recordList3" element={<RecordList3 />} />
       <Route path="/edit4/:id" element={<Edit4 />} />
       <Route path="/create4" element={<Create4 />} />
       <Route path="/recordList4" element={<RecordList4 />} />
     </Routes>
   </div>
 );
};
 
export default App;