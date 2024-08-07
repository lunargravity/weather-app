import { useState } from 'react';

export default function SearchBar({ setLocation }) {
  const [query, setQuery] = useState('');
  const key = '3287679688d14c97ad8392d7fa3e2af3';
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${key}`;

  const onSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results) {
        setLocation({
          address: data.results[0].formatted,
          latitude: data.results[0].geometry.lat,
          longitude: data.results[0].geometry.lng,
          timezone: data.results[0].annotations.timezone.name,
        });
      } else {
        setLocation('Invalid location');
      }
    } catch (error) {
      setLocation('Fetching error');
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
