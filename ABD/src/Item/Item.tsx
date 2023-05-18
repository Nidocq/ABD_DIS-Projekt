import React from "react";
import './Item.css';

export interface ItemProps {
    isLiked: boolean;
    img: string;
    title: string;
    owner: string;
    description: string;
    likes: number;
}


function Item(props: ItemProps ) {
    return ( 
        <div className="item-container">
            <img 
                src={props.img}
                className="item-image"
            />
            <div className="info-container">
                <h5>{props.title}</h5>
                <p>{props.owner}</p>
                {
                    props.isLiked ?
                    <img onClick={() =>console.log('2')} className="heart-like" src="https://cdn-icons-png.flaticon.com/512/2077/2077502.png"/>
                    :
                    <img onClick={() => console.log('2')} className="heart-like" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"/>
                }
                <p>{props.likes}</p>
            </div>
        </div>
     );
}

// HomeScreen (ItemView) -> ItemView (array Af items) -> Item
export default Item;