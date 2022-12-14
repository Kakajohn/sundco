import React from 'react';
import './_lady.css';
import lad from '../../assets//desktop/desktop-lady.png';
const Lady = () => {
  /**
   * @returns the lady section.
   */
  return (
    <>
      <div className='container'>
        <div className='lady'>
          <div className='col-6'>
            <div className='lady_frame'>
              <img src={lad} className='container' id='' alt='a pillow' />
            </div>
          </div>
          <div className='col-6'>
            <span className='fade-text'>Since the 1500s</span>
            <h3 className='titles'>
              <strong>The standard</strong>
            </h3>
            <p className='lady-inside-text'>
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
