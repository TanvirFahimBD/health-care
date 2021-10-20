import React from "react";
import "./Client.css";

const Client = ({ picture, name, speech }) => {
  return (
    <div className="single-client">
      <div className="client-info">
        <img src={picture} alt="" />
        <h5>{name}</h5>
      </div>
      <p>{speech}</p>
    </div>
  );
};

export default Client;
