import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart =()=>{

    const data=[
        {
            id: 1,
            img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/3689152/pexels-photo-3689152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve Graphic T-shirt",
            desc:"Long Sock",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/916148/pexels-photo-916148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Coat",
            desc:"Any Descrption aaaany",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ]

    return(
        <div className="cart">
            
            <h1>Product in your Cart</h1>
            {data?.map(item=>(
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className="price">
                            1 x {item.price}$
                        </div>
                    </div>
                    <DeleteOutlinedIcon className="delete"/>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>99999$</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">RESET CART</span>
            
        </div>
    )
}

export default Cart