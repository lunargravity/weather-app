import React, { useEffect, useState } from 'react';

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
        setEvents(data._embedded.events);
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
              {events.map((event) => {
                console.log(event);
                return (
                  <div className='event-card'>
                    <a href={event.url}>{`${event.name}`}</a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
