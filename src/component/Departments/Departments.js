import React, { useEffect, useState } from "react";
import departments from "../../data/services.json";
import SingleDepartment from "../SingleDepartment/SingleDepartment";
import "./Departments.css";

const Departments = () => {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    setDepartment(departments);
  }, []);

  return (
    // all department
    <div className="department-info">
      <div className="department-all">
        {department.map((dp) => (
          <SingleDepartment
            key={dp._id}
            picture={dp.picture}
            name={dp.name}
            section={dp.section}
          ></SingleDepartment>
        ))}
      </div>
      {/* department info */}
      <div className="department-all department-details">
        <div className="dept">
          <h3>Our Departments</h3>
          <br />
          <p>Laboratory Analysis</p>
          <hr />
          <p>Pediatric Clinic</p>
          <hr />
          <p>Laryngological Clinic</p>
          <hr />
          <p>Gynaecological Clinic</p>
          <hr />
          <p>Ophthalmology Clinic</p>
          <hr />
          <p>Cardiac Clinic</p>
          <hr />
          <p>Outpatient Surgery</p>
          <hr />
          <p>Outpatient Rehabilitation</p>
          <hr />
        </div>
        {/* department time */}
        <div className="time">
          <br />
          <h3>Opening Hours</h3>
          <br />
          <p>Monday - Friday:8.00 - 17.00</p>
          <hr />
          <p>Saturday:9.30 - 18.30</p>
          <hr />
          <p>Sunday:9.30 - 18.30</p>
          <hr />
        </div>
        {/* department contact  */}
        <div className="contact">
          <br />
          <h3>Contacts</h3>
          <br />
          <p>227 Marion street</p>
          <hr />
          <p>med.health@gmail.com</p>
          <hr />
          <p>17 Street Khulna</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Departments;
