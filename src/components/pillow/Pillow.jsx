import React from 'react';
import './_pillow.css';
import pil from '../../assets/desktop/desktop-pillow.png';
const Pillow = () => {
  /**
   * @returns the pillow section.
   */
  return (
    <>
      <div className='container'>
        <div className='pillow'>
          {/* <div className=''> */}
          <div className='col-6'>
            <div className='pillow-text'>
              <span className='fade-text'>Since the 1500s</span>
              <h3 className='titles'>
                <strong>The standard</strong>
              </h3>
              <p className='pil-text-inside'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <a className='btn' id='search' href='/'>
                Search
              </a>
            </div>
          </div>
          {/* </div> */}
          <div className='col-6'>
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
