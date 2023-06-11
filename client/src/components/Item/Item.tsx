import React from "react";
import './Item.css';
import { useNavigate } from "react-router";
import IItem from '../../interfaces/IItem';


function Item(props: IItem) {

    const [isLiked, setIsLiked] = React.useState(props.isLiked);
    const navigate = useNavigate();
    const toggleLike = () => {
        setIsLiked(!isLiked);
    }
    return (
        <div
        onClick={() => navigate(`/item-preview/${props.lid}`)}
        className="item-container">

            <img
                src={props.img}
                className="item-image-big"
            />
            <div className="info-container">
                <div className="prem-container">
                    <div className="image-title-container">
                        <img
                            src={props.sellerPicture}
                            className="item-image-small"
                        />
                        <h5 className="item-title">{props.title}</h5>
                        <p className="item-owner">by {props.username}</p>
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

export default Item;