import React from "react";
import "./List.scss"
import Card from "../Card/Card";
const List = () => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/3689152/pexels-photo-3689152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/916148/pexels-photo-916148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/2864806/pexels-photo-2864806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Skirt",

            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/2804977/pexels-photo-2804977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Hat",
            oldPrice: 19,
            price: 12,
        },
       
        
    ];

    return (
        <div className="list">{data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}</div>
    )
}
export default List