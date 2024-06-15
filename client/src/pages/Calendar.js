import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('http://localhost:5000/api/events');
      setEvents(res.data);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events Calendar</h1>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <h2>{event.title}</h2>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Calendar;
