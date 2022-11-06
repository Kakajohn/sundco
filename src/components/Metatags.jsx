import React from 'react';
import { Helmet } from 'react-helmet';

const Metatags = () => {
  return (
    <Helmet>
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000000' />
    </Helmet>
  );
};

export default Metatags;
