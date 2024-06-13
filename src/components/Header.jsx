import React, { useEffect, useState } from 'react';
import DateClass from './DateClass';

export default function Header() {
  const [currentTime, setCurrentTime] = useState(DateClass.currentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = DateClass.currentTime();
      setCurrentTime(newTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='header-container'>
      <header>
        <h1 className='app-title'>Weather App</h1>
        <h1 className='current-time'>{currentTime}</h1>
        <div className='search-bar'>
          <form>
            <button className='search-button'>&#128269;</button>
            <input
              className='search-input'
              type='text'
              placeholder='City...'
              name='search'
            />
          </form>
        </div>
      </header>
      <hr />
    </div>
  );
}
