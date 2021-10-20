import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import clientsInfo from "../../data/clients.json";
import serviecsInfo from "../../data/services.json";
import Bg1 from "../../images/carousel (1).jpg";
import Bg2 from "../../images/carousel (2).jpg";
import Bg3 from "../../images/carousel (3).jpg";
import philosophy from "../../images/philosophy.jpg";
import Client from "../Clients/Client";
import SingleServiceInfo from "../SingleServiceInfo/SingleServiceInfo";
import "./Home.css";

const Home = () => {
  const [services, setServices] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setServices(serviecsInfo);
    setClients(clientsInfo);
  }, []);

  return (
    <div>
      <div className="carousel">
        {/* homepage top carousel part */}
        <Carousel>
          {/* first carousel */}
          <Carousel.Item>
            <img className="d-block w-100" src={Bg1} alt="First slide" />
          </Carousel.Item>
          {/* second carousel */}
          <Carousel.Item>
            <img className="d-block w-100" src={Bg2} alt="Second slide" />
          </Carousel.Item>
          {/* third carousel */}
          <Carousel.Item>
            <img className="d-block w-100" src={Bg3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      {/* services area */}
      <h2 className="services-header">OUR SERVICES</h2>
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

      {/* philosophy area */}
      <div className="our-philosophy">
        <div className="philosophy">
          <img src={philosophy} alt="" />
        </div>
        <div className="philosophy">
          <div className="philosophy-info">
            <h1>OUR PHILOSOPHY</h1>
            <h4>We are focused on patient happy face</h4>
            <p>
              Patients have an important role to play at each stage of their
              care and the five safety tips will serve to encourage them to be
              more involved in their health care.
            </p>
            <p>
              Patients have an important role to play at each stage of their
              care and the five safety tips will serve to encourage them to be
              more involved in their health care.
            </p>
            <p>
              Hospitals are places of recovery and healing but there are also
              safety risks for patients, such as infections, falls and
              medication errors that can happen despite our best efforts.
            </p>
            <button className="philosophy-btn">Learn More</button>
          </div>
        </div>
      </div>

      {/* clients area */}
      <div>
        <div className="clients-header">
          <h5>Testimonials</h5>
          <h2>What Our Clients Say</h2>
        </div>
        <div className="clients-all">
          {clients.map((cl) => (
            <Client
              key={cl._id}
              picture={cl.picture}
              name={cl.name}
              speech={cl.speech}
            ></Client>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
