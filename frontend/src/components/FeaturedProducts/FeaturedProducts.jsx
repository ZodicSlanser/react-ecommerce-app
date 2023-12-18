import React from 'react';
import "./FeaturedProducts.scss";
import { Card } from '@mui/material';

const FeaturesProducts = ({type}) => {

  const data=[
    {
      id:1,
      img:"https://www.pexels.com/photo/smiling-woman-looking-upright-standing-against-yellow-wall-1536619/",
      img2:"https://www.pexels.com/photo/woman-wearing-gray-shirt-holding-head-428338/",
      title:"Long Sleeve Graphic T-shirt",
      isNew:true,
      oldPrice:19,
      price:12,
    },
    {
      id:2,
      img:"https://www.pexels.com/photo/black-framed-eyeglasses-on-white-jacket-and-blue-denim-bottoms-934070/",
      title:"Coat",
      isNew:true,
      oldPrice:19,
      price:12,
    },
    {
      id:3,
      img:"https://www.pexels.com/photo/close-up-on-woman-in-sweater-and-skirt-9947842/",
      title:"Skirt",
      
      oldPrice:19,
      price:12,
    },
    {
      id:4,
      img:"https://www.pexels.com/photo/woman-wearing-sun-hat-601168/",
      title:"Hat",
      oldPrice:19,
      price:12,
    },
  ];


  return (
    <div className='featuredPsroducts'>
        <div className='top'>
          <h1>{type} Products</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>

        </div>
        <div className='bottom'>
          {data.map(item=>{
            <Card item={item} key={item.id}/>

          })}


           
        </div>
      
    </div>
  )
}

export default FeaturesProducts
