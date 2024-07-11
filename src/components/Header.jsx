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

    const handleShowSidebar = (e) => {
        console.log('click open');
        e.classList.toggle('change');
        setShowSidebar(true);
    };

    const handleHideSidebar = (e) => {
        console.log('click close');
        e.classList.toggle('change');
        setShowSidebar(false);
    };

    return (
        <div className='header-container'>
            <header>
                <div
                    className='hamburger-bars'
                    onClick={(e) => {
                        showSidebar ? handleHideSidebar(e) : handleShowSidebar(e);
                    }}>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
                <h1 className='app-title'>Weather App</h1>
                <h1 className='current-time'>{currentTime}</h1>
                <SearchBar setLocation={setLocation} />
            </header>
            <hr />
        </div>
    );
}
