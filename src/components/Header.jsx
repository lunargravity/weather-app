import React, { useEffect, useState } from 'react';
import DateClass from './DateClass';
import SearchBar from './SearchBar';

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
        <SearchBar />
      </header>
      <hr />
    </div>
  );
}
