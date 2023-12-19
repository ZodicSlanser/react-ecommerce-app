import React from 'react';
import Slider from '../../components/Slider/Slider'
import "./Home.scss";
import FeaturesProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/contact';

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturesProducts type="featured"/>
      <Categories/>
      <FeaturesProducts type="trending"/>
      <Contact/>

    </div>
  )
}

export default Home
