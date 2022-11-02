import React from 'react';
import hero from '../../assets/desktop/desktop-bricks.png';
import './_carousel.css';
const Carousel = () => {
  return (
    <div id='carouselExampleIndicators' class='carousel slide' data-ride='carousel'>
      <ol class='carousel-indicators'>
        <li data-target='#carouselExampleIndicators' data-slide-to='0' class='active'></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
      </ol>
      <div class='carousel-inner'>
        <div class='carousel-item active'>
          <img class='d-block w-100' src={hero} alt='...' />
          <div class='carousel-caption d-none d-md-block'>
            <h5>...</h5>
            <p>...</p>
          </div>
        </div>
        <div class='carousel-item'>
          <img class='d-block w-100' src={hero} alt='Second slide' />
        </div>
        <div class='carousel-item'>
          <img class='d-block w-100' src={hero} alt='Third slide' />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
