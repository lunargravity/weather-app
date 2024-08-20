import React, { useState, useEffect } from 'react';

export default function SearchBar({ setLocation }) {
  const [query, setQuery] = useState('');
  const key = '3287679688d14c97ad8392d7fa3e2af3';

  const onSearch = async (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${trimmedQuery}&key=${key}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setLocation({
            address: data.results[0].formatted,
            latitude: data.results[0].geometry.lat,
            longitude: data.results[0].geometry.lng,
            timezone: data.results[0].annotations.timezone.name,
          });
        } else {
          setLocation({
            address:
              'Needmore, San Augustine County, Texas, United States of America',
            latitude: 31.1324149,
            longitude: -94.0535239,
            timezone: 'America/Chicago',
          });
        }
      } catch (error) {
        setLocation({
          address: 'Nowhere, Caddo County, Oklahoma, United States of America',
          latitude: 35.1592,
          longitude: 98.4423,
          timezone: 'America/Chicago',
        });
      }
    }
  };

  return (
    <form onSubmit={onSearch}>
      <label className='expand-search'>
        <input
          type='text'
          placeholder='City, Country Code...'
          name='search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <i className='material-icons'>search</i>
      </label>
    </form>
  );
}
