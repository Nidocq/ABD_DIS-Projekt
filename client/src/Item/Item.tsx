import React from "react";
import './Item.css';

export interface ItemProps {
    id: number;
    isLiked: boolean;
    img: string;
    title: string;
    owner: string;
    description: string;
    likes: number;
}


function Item(props: ItemProps) {

    const [isLiked, setIsLiked] = React.useState(props.isLiked);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    }
    return (
        <div className="item-container">
            <img
                src={props.img}
                className="item-image-big"
            />
            <div className="info-container">
                <div className="prem-container">
                    <div className="image-title-container">
                        <img
                            src={props.img}
                            className="item-image-small"
                        />
                        <h5 className="item-title">{props.title}</h5>
                        <p className="item-owner">by {props.owner}</p>
                    </div>
                        <div className="heart-container">
                            {

                                isLiked ?
                                    <img
                                        onClick={() => toggleLike()}
                                        className="heart-like"
                                        src="https://cdn-icons-png.flaticon.com/512/2077/2077502.png"
                                    />
                                    :
                                    <img
                                        onClick={() => toggleLike()}
                                        className="heart-like"
                                        src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                                    />

                            }
                            <p className="item-num-likes">{props.likes}</p>
                        </div>
                </div>
                <div className="item-description-container">
                    <p className="item-description">{props.description}</p>
                </div>
            </div>
        </div>
    );
}
//                            
// HomeScreen (ItemView) -> ItemView (array Af items) -> Item
export default Item;