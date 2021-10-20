import React from "react";

const SingleServiceDetails = ({ name, picture, desc }) => {
  return (
    <div className="single-service">
      <img src={picture} alt="" />
      <h5 className="service-name">{name}</h5>
      <p>{desc}</p>
    </div>
  );
};

export default SingleServiceDetails;
