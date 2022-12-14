import React, { useState } from 'react';
import './slider.css';
// import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';

export default function Slider() {
  /**
   * returns the slider of the project.
   */
  const [slideIndex, setSlideIndex] = useState(1);

  /**
   * Uncomment the follow lines to enable the arrow slider navigation
   */
  // const nextSlide = () => {
  // if (slideIndex !== dataSlider.length) {
  // setSlideIndex(slideIndex + 1);
  // } else if (slideIndex === dataSlider.length) {
  // setSlideIndex(1);
  // }
  // };

  // const prevSlide = () => {
  // if (slideIndex !== 1) {
  // setSlideIndex(slideIndex - 1);
  // } else if (slideIndex === 1) {
  // setSlideIndex(dataSlider.length);
  // }
  // };

  const moveDot = index => {
    setSlideIndex(index);
  };

  return (
    <div className='container-slider'>
      {dataSlider.map((obj, index) => {
        return (
          <div key={obj.id} className='container'>
            <div className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
              <div className='col-6 text-white'>
                <h1 className='title'>
                  <span className='underline'> S.</span>und Co
                </h1>
                <p className='description'>
                  To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain
                  some advantage from it?
                </p>
              </div>
            </div>
            {/* <div className='blur-div'></div> */}
          </div>
        );
      })}
      {/*
  <BtnSlider moveSlide={nextSlide} direction={'next'} />
  <BtnSlider moveSlide={prevSlide} direction={'prev'} /> */}

      <div className='container-dots'>
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  );
}
