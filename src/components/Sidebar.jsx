import React from 'react';

export default function Sidebar({ favoriteCities }) {
    return (
        <div className='sidebar-container'>
            <div className='favorite-cities'>
                <li>
                    <ul>Washington</ul>
                    <ul>Chicago</ul>
                    <ul>Seahaven</ul>
                </li>
            </div>
            <div className='other-pages'>
                <p>Settings</p>
            </div>
        </div>
    );
}
