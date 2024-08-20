import React from 'react';
import '../css/socials.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Socials() {
  return (
    <div className='socials-container'>
      <h4>
        Created by: <em>Anu Altankhuyag</em>
        <a
          href='https://github.com/lunargravity/weather-app'
          target='_blank'
          rel='noopener noreferrer'>
          <i class='fa fa-github'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/anu-altankhuyag/'
          target='_blank'
          rel='noopener noreferrer'>
          <i className='fa fa-linkedin'></i>
        </a>
      </h4>
    </div>
  );
}
