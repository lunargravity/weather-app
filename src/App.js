import React, { useState, useEffect } from 'react';
import './css/toggle.css';
import ForecastWidget from './components/ForecastWidget';
import Header from './components/Header';
import Toggle from './components/Toggle';
import DateClass from './components/DateClass';
import WeatherDetails from './components/WeatherDetails';
import Sidebar from './components/Sidebar';
import Events from './components/Events';

export default function App() {
  const [isCelsius, setIsCelsius] = useState(false);
  const [location, setLocation] = useState({
    address: 'Washington, District of Columbia, United States of America',
    latitude: '38.890259',
    longitude: '-77.019913',
    timezone: 'America/New_York',
  });
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState(null);
  const days = DateClass.getDays();
  const dates = DateClass.getDates();
  const [showSidebar, setShowSidebar] = useState(false);
  const [favoriteCities, setFavoriteCities] = useState([
    {
      address: 'Ulaanbaatar, Mongolia',
      latitude: '47.9184676',
      longitude: '106.9177016',
      timezone: 'Asia/Ulaanbaatar',
    },
    {
      address: 'New York, New York, United States of America',
      latitude: 40.7127281,
      longitude: -74.0060152,
      timezone: 'America/New_York',
    },
    {
      address: 'London, United Kingdom',
      latitude: 51.4893335,
      longitude: -0.1440551,
      timezone: 'Europe/London',
    },
    {
      address: 'Tokyo, Japan',
      latitude: 35.6821936,
      longitude: 139.762221,
      timezone: 'Asia/Tokyo',
    },
    {
      address: 'Paris, France',
      latitude: 48.8534951,
      longitude: 2.3483915,
      timezone: 'Europe/Paris',
    },
    {
      address: 'Sydney, New South Wales, Australia',
      latitude: -33.8698439,
      longitude: 151.2082848,
      timezone: 'Australia/Sydney',
    },
  ]);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (
      favoriteCities.find((city) => city.address === location.address) !==
      undefined
    ) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [location, favoriteCities]);

  const handleTempChange = () => {
    setIsCelsius(!isCelsius);
  };

  const handleDetails = (data, index) => {
    setShowModal(true);
    setDetails(data.list[index]);
  };

  const handleLike = () => {
    if (isLiked) {
      const index = favoriteCities.indexOf(location);
      delete favoriteCities[index];
    } else {
      console.log(location);
      favoriteCities.push(location);
    }
    setIsLiked(!isLiked);
  };

  const ForecastDisplay = () => {
    return days.slice(0, 7).map((day, index) => {
      return (
        <ForecastWidget
          key={index}
          isCelsius={isCelsius}
          dayOfWeek={day}
          date={dates[index]}
          index={index}
          latitude={location.latitude}
          longitude={location.longitude}
          handleDetails={handleDetails}
        />
      );
    });
  };

  return (
    <div>
      <div>
        {showSidebar && (
          <Sidebar
            favoriteCities={favoriteCities}
            setFavoriteCities={setFavoriteCities}
            setLocation={setLocation}
            setShowSidebar={setShowSidebar}
          />
        )}
        <Header
          setLocation={setLocation}
          timezone={location.timezone}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        <div className='toggle-title-container'>
          <Toggle
            left='°F'
            right='°C'
            checked={isCelsius}
            onChange={handleTempChange}
            className='toggle'
          />
          <h1 className='title'>
            <div>{location.address}</div>
            <i
              className={isLiked ? 'fa fa-heart' : 'fa fa-heart-o'}
              aria-hidden='true'
              onClick={(e) => {
                handleLike(e);
              }}></i>
          </h1>
        </div>
        <div className='seven-day-forecast'>{ForecastDisplay()}</div>
        {showModal && (
          <WeatherDetails
            setShowModal={setShowModal}
            isCelsius={isCelsius}
            details={details}
            timezone={location.timezone}
          />
        )}
      </div>
      <div>
        <Events location={location} />
      </div>
    </div>
  );
}
