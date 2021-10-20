import React from "react";
import { Link } from "react-router-dom";
import "./SingleServiceInfo.css";

const SingleServiceInfo = ({ id, name, picture, desc }) => {
  console.log("key", id);
  return (
    <div className="single-service">
      <img src={picture} alt="" />
      <h5 className="service-name">{name}</h5>
      <p>{desc}</p>
      <Link to={`/service/${id}`} className="service-btn">
        <button className="service-btn">More</button>
      </Link>
    </div>
  );
};

export default SingleServiceInfo;
