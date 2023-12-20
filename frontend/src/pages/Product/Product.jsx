import React from 'react'
import "./Product.scss";
import { useState } from 'react';

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
const Product = () => {

  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const images=[
    "https://images.pexels.com/photos/3754151/pexels-photo-3754151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1851291/pexels-photo-1851291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)} />

        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>199$</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nesciunt incidunt inventore nobis est iure provident possimus recusandae corporis, libero, quibusdam, rem suscipit fuga. Rerum dicta veritatis pariatur enim quaerat!</p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=>prev===1 ? 1:prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon/> ADD TO CART
          
        </button>
      <div className='links'>
        <div className="item">
        <FavoriteBorderIcon/> ADD To WISH LIST
        </div>
        <div className="item">
        <BalanceIcon/> ADD TO COMPARE
        </div>
      </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt ,Woman,Polo</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
        <hr />
        <span>ADDITIONAL INFORMATION</span>
        <hr />
        <span>FAQ</span>
        </div>

        </div>
      </div>

  )
}

export default Product
