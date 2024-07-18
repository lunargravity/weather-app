import React, { useEffect, useState } from 'react';
import DateClass from './DateClass';
import SearchBar from './SearchBar';

export default function Header({ setLocation, timezone, showSidebar, setShowSidebar }) {
  const [currentTime, setCurrentTime] = useState(DateClass.currentTime({ timezone }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = DateClass.currentTime({ timezone });
      setCurrentTime(newTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  const handleToggleSidebar = (e) => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='header-container'>
      <header>
        <div
          className='hamburger-bars'
          onClick={handleToggleSidebar}
        >
          <div className={`bar1 ${showSidebar ? 'bar1-change' : ''}`}></div>
          <div className={`bar2 ${showSidebar ? 'bar2-change' : ''}`}></div>
          <div className={`bar3 ${showSidebar ? 'bar3-change' : ''}`}></div>
        </div>
        <h1 className='app-title'>Weather App</h1>
        <h1 className='current-time'>{currentTime}</h1>
        <SearchBar setLocation={setLocation} />
      </header>
      <hr />
    </div>
  );
}
