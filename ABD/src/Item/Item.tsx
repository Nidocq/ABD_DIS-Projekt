import React from "react";
import './Item.css';

export interface ItemProps {
    img: string;
    title: string;
    owner: string;
    description: string;
    likes: number;
}

function Item(props: ItemProps) {
    return ( 
        <div className="item-container">
            <img 
                src={props.img}
                className="item-image"
            />
            <h5>{props.title}</h5>
            <p>{props.owner}</p>
            <p>{props.description}</p>
            <p>{props.likes}</p>
        </div>
     );
}

// HomeScreen (ItemView) -> ItemView (array Af items) -> Item
export default Item;