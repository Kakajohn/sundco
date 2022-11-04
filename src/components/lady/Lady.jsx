import React from 'react';
import './_lady.css';
import lad from '../../assets//desktop/desktop-lady.png';
const Lady = () => {
  return (
    <>
      <div className='container'>
        <div className='lady'>
          <div className='column'>
            <div className='your_frame'>
              <div className='lady-back'></div>
              {/* <img src={lad} className='container' alt='a pillow' /> */}
            </div>
          </div>
          <div className='column'>
            <span className='fade-text'>Since the 1500s</span>
            <h3>
              <strong>The standard</strong>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lady;
