import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, TextArea, Dropdown, Checkbox } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './_form.css';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 }
  ];

  const suboptions = [
    { key: 1, text: 'Choice 1.1', value: 1 },
    { key: 2, text: 'Choice 2.2', value: 2 },
    { key: 3, text: 'Choice 3.3', value: 3 }
  ];

  return (
    <div className='container'>
      <div className='row align-items-stretch no-gutters contact-wrap'>
        <div className='col-md-6'>
          <div className='contact-info h-100' id='form-map'>
            {/* <div id='cont'></div> */}
          </div>
        </div>
        <div className='col-md-6'>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h2>
              <strong>Contact us</strong>
            </h2>
            <span className='my-4 contact-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </span>
            <Form.Field>
              <label>Name</label>
              <input
                className={` ${errors.firstName ? 'border-fields-error' : 'border-fields'}`}
                placeholder='Name*'
                type='text'
                {...register('firstName', { required: true, maxLength: 10, pattern: /^([ \u00c0-\u01ffa-zA-Z'])+$/ })}
              />
            </Form.Field>
            {errors.firstName ? (
              <p className='text-end error-message '>Please check the Name</p>
            ) : (
              <p className='text-end info-text'>required field</p>
            )}
            <Form.Field>
              <label>Phone</label>
              <input
                className={` ${errors.phone ? 'border-fields-error' : 'border-fields'}`}
                placeholder='Phone*'
                type='number'
                {...register('phone', {
                  required: true,
                  minLength: 10,
                  maxLength: 12,
                  pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
                })}
              />
            </Form.Field>
            {errors.phone ? (
              <p className='text-end error-message '>Please check the Phone</p>
            ) : (
              <p className='text-end info-text'>reqired field</p>
            )}
            <Form.Field>
              <label>Email</label>
              <input
                className={` ${errors.email ? 'border-fields-error' : 'border-fields'}`}
                placeholder='Email*'
                type='email'
                {...register('email', {
                  required: true,
                  pattern: /^[A-Za-z0-9._%+-]+@spitogatos\.gr$/
                  // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })}
              />
            </Form.Field>
            {errors.email ? (
              <p className='text-end error-message '>Wrong email values</p>
            ) : (
              <p className='text-end info-text'>reqired field</p>
            )}
            <div className='drop-down'>
              <Form.Field>
                <div className='col-6'>
                  <Dropdown
                    className={`my-1 mx-4   ${errors.category ? 'border-fields-error' : 'border-fields'}`}
                    placeholder='Category'
                    clearable
                    options={options}
                    selection
                    {...register('category', { required: true })}
                  />
                  {errors.category ? (
                    <p className='text-center error-message '>Message Error</p>
                  ) : (
                    <p className='text-center info-text'>required field</p>
                  )}
                </div>
              </Form.Field>
              <Form.Field>
                <div className='col-6'>
                  <Dropdown
                    className={`my-1 mx-4   ${errors.subcategory ? 'border-fields-error' : 'border-fields'}`}
                    placeholder='Subcategory'
                    clearable
                    options={suboptions}
                    selection
                    {...register('subcategory', { required: true })}
                  />
                  {errors.subcategory ? (
                    <p className='text-center error-message '>Message Error</p>
                  ) : (
                    <p className='text-center info-text'>required field</p>
                  )}
                </div>
              </Form.Field>
            </div>
            <Form.Field>
              <label>Message</label>
              <TextArea
                className={`fields ${errors.message ? 'border-fields-error' : 'border-fields'}`}
                placeholder='Message'
                type='text'
                {...register('message', { required: true, maxLength: 100 })}
              />
            </Form.Field>
            {errors.message ? (
              <p className='text-end error-message '>Message cannot be empty</p>
            ) : (
              <p className='text-end info-text'>500</p>
            )}
            <Form.Field>
              <div className='row'>
                <span className='info-text text-start' id='check-text'>
                  Please select at least one of the following:
                </span>
                <div className='col-12'>
                  <Checkbox className='mx-1' label='Option 1' />
                  <Checkbox className='mx-4' label='Option 2' />
                </div>
              </div>
            </Form.Field>
            <div className='col-12 text-center'>
              <Button className='form-control' type='submit'>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
