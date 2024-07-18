import React from 'react';

export default function Sidebar({ favoriteCities }) {
  return (
    <div className='modal-backdrop'>
      <div className='sidebar-container'>
        <div className='favorite-cities'>
          <ul>
            <li>Washington</li>
            <li>Chicago</li>
            <li>Seahaven</li>
          </ul>
        </div>
        <div className='other-pages'>
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}
