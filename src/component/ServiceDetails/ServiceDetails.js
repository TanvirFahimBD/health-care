import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import serviecsInfo from "../../data/services.json";
import SingleServiceDetails from "../SingleServiceDetails/SingleServiceDetails";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(serviecsInfo);
  }, []);

  return (
    <div className="service-all">
      {services.map((sc) => (
        <SingleServiceDetails
          id={sc._id}
          name={sc.name}
          picture={sc.picture}
          desc={sc.desc}
        ></SingleServiceDetails>
      ))}
    </div>
  );
};

export default ServiceDetails;
