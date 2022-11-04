import React, { useState } from 'react';
import './_form.css';

const Map = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPhone, setErrorPhone] = useState('');

  const emailRegEx =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  const phoneRegEx = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

  const handleSubmit = e => {
    e.preventDefault();
    let isValid = true;
    // form validation in React
    //check if name is empty
    if (!name) {
      setErrorName('Error message');
      isValid = false;
    }

    //check if email is empty
    if (!email) {
      setErrorEmail('Error message');
      isValid = false;
    }
    // check if email is valid
    else if (!email.match(emailRegEx)) {
      setErrorEmail('Invalid Email');
      isValid = false;
    }

    //check if email is empty
    if (!phone) {
      setErrorPhone('Error message');
      isValid = false;
    }
    // check if phone number is valid
    else if (!phone.match(phoneRegEx)) {
      setErrorPhone('Invalid Phone Number');
      isValid = false;
    }

    // if form is valid then submit form
    if (isValid) {
      alert('Validation OK');
    }
  };

  return (
    <div className='container'>
      <div className='row align-items-stretch no-gutters contact-wrap'>
        <div className='col-md-6'>
          <div className='contact-info h-100' id='form-map'>
            {/* <div id='cont'></div> */}
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form h-100'>
            <h3 id='contact-us'>
              <strong>Contact us</strong>
            </h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </span>
            <form className='mb-5' method='post' id='contactForm' name='contactForm' onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-md-12 form-group mb-5'>
                  <input type='text' className='form-control' placeholder='Name' />
                  <div className='text-end text-danger'>{errorName}</div>
                </div>
                <div className='col-md-12 form-group mb-5'>
                  <input className='form-control' type='text' placeholder='Email' />{' '}
                  <div className='text-end text-danger'>{errorEmail}</div>
                </div>
                <div className='col-md-12 form-group mb-5'>
                  <input type='text' className='form-control' name='phone' id='phone' placeholder='Phone' />
                  <div className='text-end text-danger'>{errorPhone}</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 form-group mb-5'></div>
              </div>
              <div className='row'>
                <div className='col-md-12 form-group mb-5'>
                  <label htmlfor='message' className='col-form-label'>
                    Message *
                  </label>
                  <textarea
                    className='form-control'
                    name='message'
                    id='message'
                    cols='30'
                    rows='4'
                    placeholder='Write your message'
                  ></textarea>
                </div>
              </div>
              <div className='row'>
                <div className='text-center col-md-12 form-group'>
                  <input type='submit' value='Submit' className='btn btn-primary rounded-0 py-2 px-4' id='submit' />
                  <span className='submitting'></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
