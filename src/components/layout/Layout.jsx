import React from 'react';
import Metatags from '../Metatags';
import NavigationBar from '../navigationbar/NavigationBar';
import Lady from '../lady/Lady';
import Pillow from '../pillow/Pillow';
import Map from '../map/Map';
import Form from '../form/Form';
import Footer from '../footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../slider/Slider';

const Layout = () => {
  //TODO: Fix metatags willMount warning with maping instead of simple calling directly the json file.
  return (
    <>
      <Metatags />
      <NavigationBar />
      <Slider />
      <Lady />
      <Pillow />
      <Form />
      <Footer />
    </>
  );
};

export default Layout;
