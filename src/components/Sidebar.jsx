import React, { useState, useEffect } from 'react';
import '../css/sidebar.css';
import 'font-awesome/css/font-awesome.min.css';
import Socials from './Socials';

export default function Sidebar({
  favoriteCities,
  setFavoriteCities,
  setLocation,
  setShowSidebar,
}) {
  const [currentFavCities, setCurrentFavCities] = useState(favoriteCities);
  const key = '3287679688d14c97ad8392d7fa3e2af3';

  useEffect(() => {
    setCurrentFavCities(favoriteCities);
  }, [favoriteCities, currentFavCities]);

  const onSearch = async (e, address) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${key}`
      );
      const data = await response.json();
      if (data.results) {
        setLocation({
          address: data.results[0].formatted,
          latitude: data.results[0].geometry.lat,
          longitude: data.results[0].geometry.lng,
          timezone: data.results[0].annotations.timezone.name,
        });
        setShowSidebar(false);
      } else {
        setLocation('Invalid location');
        setShowSidebar(false);
      }
    } catch (error) {
      setLocation('Fetching error');
      setShowSidebar(false);
    }
  };

  const handleUnlike = (city) => {
    const updatedCities = favoriteCities.filter((item) => item !== city);
    setFavoriteCities(updatedCities);
  };

  return (
    <div className='modal-backdrop'>
      <div className='sidebar-container'>
        <div className='favorite-cities'>
          <h2 className='favorites-title'>Favorite Cities:</h2>
          <ul>
            {currentFavCities.map((city) => {
              return (
                <li
                  key={`${city.latitude}${city.longitude}`}
                  className='favorite-city'>
                  <div onClick={(e) => onSearch(e, city.address)}>
                    {city.address}
                  </div>
                  <i
                    className='fa fa-heart'
                    aria-hidden='true'
                    onClick={(e) => {
                      handleUnlike(city);
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <Socials />
        </div>
      </div>
    </div>
  );
}
