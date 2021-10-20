import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import serviecsInfo from "../../data/services.json";
import SingleServiceInfo from "../SingleServiceInfo/SingleServiceInfo";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(serviecsInfo);
  }, []);

  return (
    <div className="service-all">
      {services.map((sc) => (
        <SingleServiceInfo
          id={sc._id}
          name={sc.name}
          picture={sc.picture}
          desc={sc.desc}
        ></SingleServiceInfo>
      ))}
    </div>
  );
};

export default ServiceDetails;
