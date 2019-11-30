import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/ErrorPage.css";

const Errorpage = () => {
  return (
    <div className="errorPage">
      <h1> 404 </h1>
      <h3>
        <i> Page cannot be found </i>
      </h3>
      <NavLink className="errorNav" to="/">
        <h5> ⟵Back to Biography Page</h5>
      </NavLink>
    </div>
  );
};
export default Errorpage;
