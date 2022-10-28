import { NavLink } from "react-router-dom";

export default function RecordList() {
return (
<div>
      <div className="container"       style={{padding: 25 , backgroundColor :"white"}} >
  <div class="col-xs-4"></div>
  <div class="col-xs-1" align="left" style={{width: 500}}>
     <h1 align="center">Login</h1>
     <form>
       <div className="form-group">
         <label htmlFor="name">User Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
         />
       </div>

       <div className="form-group">
         <label htmlFor="position">Password: </label>
         <input
           type="password"
           className="form-control"
           id="position"
         />
       </div>
       <br />
 
       <div className="form-group">
        <NavLink className="nav-link" to="/home">
         <input
           type="submit"
           value="Login"
           className="btn btn-primary"
         />
         </NavLink>
       </div>
     </form>
   </div>
   <div class="col-xs-1"></div>
</div>
</div>
 );
}

