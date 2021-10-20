import React from "react";
import "./SingleEvent.css";

const SingleEvent = ({ picture, name, desc }) => {
  return (
    <div className="single-event">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <p>{desc}...</p>
    </div>
  );
};

export default SingleEvent;
