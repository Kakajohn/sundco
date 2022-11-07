import React from 'react';
import './_footer.css';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

const Footer = () => {
  /**
   * @returns the footer of the project.
   */
  return (
    <footer className='footer'>
      <div className='row'>
        <div className='col-4'>
          <p className='copyrights'>© The standard Copywrite 2020</p>
        </div>
        <div className='col-4'>
          <p className='cookies'>Cookies. | Privacy.</p>
        </div>
        <div className='col-4' id='small-logo'>
          <Logo className='logo-footer' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
