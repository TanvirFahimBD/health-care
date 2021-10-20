import React from "react";
import "./SingleDepartment.css";

const SingleDepartment = ({ picture, name, section }) => {
  return (
    <div className="single-dept">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <div>
        <span>In </span>
        <a href="#">{section}</a>
      </div>
    </div>
  );
};

export default SingleDepartment;
