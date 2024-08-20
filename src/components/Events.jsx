import React, { useEffect, useState } from 'react';
import '../css/events.css';
import EventWidget from './EventWidget';

export default function Events({ location }) {
  const [events, setEvents] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const city = location.address;
        const key = 'qW9IAV9nzW1oE26xlPp3teI751kXxuE1';
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?city=${city}&apikey=${key}`;
        const response = await fetch(url);
        const data = await response.json();
        setShowError(false);

        const eventsList = data._embedded.events;
        eventsList.sort((a, b) => {
          const dateA = new Date(a.dates.start.dateTime);
          const dateB = new Date(b.dates.start.dateTime);
          return dateA - dateB;
        });

        setEvents(eventsList);
      } catch (e) {
        setShowError(true);
      }
    };
    fetchData();
  }, [location]);

  return (
    <div>
      {showError ? (
        <div className='events-area-title'>
          <h1>{`CANNOT FIND EVENTS IN THE AREA WITH TICKETMASTER :(`}</h1>
        </div>
      ) : (
        <div className='events-area-container'>
          <div className='events-area-title'>
            <h1>EVENTS IN THE AREA USING TICKETMASTER:</h1>
          </div>
          {events && (
            <div className='all-event-cards'>
              {events.map((event, index) => {
                return <EventWidget key={index} event={event} />;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
