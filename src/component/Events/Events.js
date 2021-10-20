import React, { useEffect, useState } from "react";
import events from "../../data/event.json";
import SingleEvent from "../SingleEvent/SingleEvent";
import "./Events.css";

const Events = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    setEvent(events);
  }, []);

  return (
    <div className="event-all">
      {event.map((ev) => (
        <SingleEvent
          key={ev._id}
          picture={ev.picture}
          name={ev.name}
          desc={ev.desc}
        ></SingleEvent>
      ))}
    </div>
  );
};

export default Events;
