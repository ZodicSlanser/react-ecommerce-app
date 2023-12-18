import React from 'react';
import Slider from '../../components/Slider/Slider'
import "./Home.scss";
import FeaturesProducts from '../../components/FeaturedProducts/FeaturedProducts';

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturesProducts type="featured"/>
      <FeaturesProducts type="trending"/>
    </div>
  )
}

export default Home
