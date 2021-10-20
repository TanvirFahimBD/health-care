import React from "react";
import notFound from "../../images/NotFound.gif";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
