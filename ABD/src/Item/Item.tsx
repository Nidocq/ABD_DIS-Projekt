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


function Item({isLiked, img, title, owner, description, likes, toggleLike, key}: any  ) {
    return ( 
        <div className="item-container">
            <img 
                src={img}
                className="item-image"
            />
            <div className="info-container">
                <h5>{title}</h5>
                <p>{owner}</p>
                {
                    isLiked ?
                    <img onClick={() => toggleLike(key)} className="heart-like" src="https://cdn-icons-png.flaticon.com/512/2077/2077502.png"/>
                    :
                    <img onClick={() => toggleLike(key)} className="heart-like" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"/>
                }
                <p>{likes}</p>
            </div>
        </div>
     );
}

// HomeScreen (ItemView) -> ItemView (array Af items) -> Item
export default Item;