import React from 'react';
import DateClass from './DateClass';

export default function EventWidget({ event }) {
  return (
    <div className='event-card'>
      <h4>{event.name}</h4>
      <p>
        {DateClass.getEventDateTime(
          event.dates.start.localDate,
          event.dates.start.localTime
        )}
      </p>
      <img className='event-image' src={event.images[0].url} alt={event.name} />
      <a className='tickets-button' href={event.url}>
        GET TICKETS
      </a>
    </div>
  );
}
