import { useState } from 'react';

export default function SearchBar({ setLocation }) {
    const [query, setQuery] = useState('');
    const key = '3287679688d14c97ad8392d7fa3e2af3';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${key}`;

    const onSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(url);
            const data = response.data.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching data: ', error);
            setLocation('Invalid location');
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
