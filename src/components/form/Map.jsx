import React from 'react';
import map from '../../assets/desktop/desktop-map.png';
import './_form.css';
const Map = () => {
  return (
    <div className='container'>
      <div className='form-section'>
        <div className='item1'>
          <div className='map-section'>
            <img src={map} className='container' alt='a pillow' />
          </div>
        </div>
        <div className='item2'>
          <span>Since the 1500s</span>
          <h3>
            <strong>The standard</strong>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <a className='btn' id='search' href='https://beproblemsolver.com/'>
            Search
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;
