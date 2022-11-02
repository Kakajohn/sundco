import React from 'react';
import './_pillow.css';
import pil from '../../assets/desktop/desktop-pillow.png';
const Pillow = () => {
return (
<>
  <div className='container'>
    <div className='pillow'>
      <div className='column'>
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
      <div className='column'>
        <div className='your_frame'>
          <img src={pil} className='container' id='effe' alt='a pillow' />
        </div>
      </div>
    </div>
  </div>
</>
);
};

export default Pillow;