import React from 'react';
import './_footer.css';
import logo from '../../assets/svg/logo.svg';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='row'>
        <div className='col-4'>
          <p className='copyrights'>© The standard Copywrite 2020</p>
        </div>
        <div className='col-4'>
          <p className='cookies'>Cookies. | Privacy.</p>
        </div>
        <div className='col-4'>
          <p></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
