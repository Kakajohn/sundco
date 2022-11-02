import React from 'react';
import Metatags from '../Metatags';
import NavigationBar from '../navigationbar/NavigationBar';
import Carousel from '../carousel/Carousel';
import Lady from '../lady/Lady';
import Pillow from '../pillow/Pillow';
import Map from '../map/Map';
import Form from '../form/Form';
import Footer from '../footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
//TODO: Fix metatags willMount warning with maping instead of simple calling directly the json file.
return (
<>
  <Metatags />
  <NavigationBar />
  <Carousel />
  <Lady />
  <Pillow />
  <Map />
  <Form />
  <Footer />
</>
);
};

export default Layout;