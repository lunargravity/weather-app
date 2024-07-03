import { useState } from 'react';

export default function SearchBar({ setLocation }) {
    const [searchedLocation, setSearchedLocation] = useState('');

    const onSearch = (e) => {
        e.preventDefault();
        setLocation(searchedLocation);
    };

    return (
        <form onSubmit={onSearch}>
            <label className='expand-search'>
                <input
                    type='text'
                    placeholder='City...'
                    name='search'
                    value={searchedLocation}
                    onChange={(e) => setSearchedLocation(e.target.value)}
                />
                <i className='material-icons'>search</i>
            </label>
        </form>
    );
}
