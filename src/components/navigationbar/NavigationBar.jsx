import { useState } from 'react';
import { ReactComponent as Burger } from '../../assets/svg/Group 1154.svg';
import { ReactComponent as Logo } from '../../assets/svg/S.svg';
import { ReactComponent as Search } from '../../assets/svg/Path 629.svg';
import { ReactComponent as Close } from '../../assets/svg/Group 1156.svg';
import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/svg/Path 3.svg';
import { ReactComponent as Browser } from '../../assets/svg/Path 4.svg';
import './_navigationbar.css';

const NavigationBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(prev => !prev);
  };

  return (
    <nav className='navbar'>
      <div className='logo'>{showNavbar ? '' : <Logo className='mobile' />}</div>
      <div className='navigation'>
        <div className='menu-icon' onClick={handleShowNavbar}>
          {showNavbar ? <Close /> : <Burger />}
        </div>
        <div className={` nav-elements ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <a href='/' className='active-example'>
                <span className='active-underline'>Main One</span>
              </a>
            </li>
            <li>
              <a href='/'>Page Two</a>
            </li>
            <li>
              <a href='/'>Page Three</a>
            </li>
            <li>
              <a href='/'>About us</a>
            </li>
            <li>
              <a href='/'>Our work</a>
            </li>
            <li>
              <a href='/'>Contact us</a>
            </li>
            {showNavbar ? (
              <li>
                <a href='/' className='lang'>
                  EN <span className='inactive'>| GR</span>
                </a>
              </li>
            ) : (
              ''
            )}
          </ul>
          {showNavbar ? (
            <footer className='navFooter'>
              <div className='container'>
                <div className='row'>
                  <div className='col-12 my-3' id='social'>
                    <Facebook />
                    <Twitter />
                    <Instagram />
                    <Browser />
                  </div>
                </div>
                <div className='row'>
                  <p className='text-center text-white'>Cookies. | Privacy.</p>
                  <span className='text-start infos'>S.und@themail.com</span>
                  <span className='text-start infos'>+30 210 1234 567</span>
                  <span className='text-start infos'>© The standard Copywrite 2020</span>
                </div>
              </div>
            </footer>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className='locale'>
        <a href='/' className='lang'>
          EN <span className='inactive'>| GR</span>
        </a>
      </div>

      <div className='search'>
        <Search />
      </div>
    </nav>
  );
};

export default NavigationBar;
