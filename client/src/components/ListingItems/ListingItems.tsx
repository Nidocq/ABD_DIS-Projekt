import React, { useContext, useEffect, useState } from "react";
import Item, { ItemProps } from "../Item/Item";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import './ListingItems.css';
import { useNavigate } from "react-router";

function ListingItems() {
    // TODO: This should be fetched from database
    const [items, setItems] = React.useState([{
        id: 0,
        isLiked: false, // CHECK IF USER HAS LIKED THIS ITEM IN SQL
        img: "",
        title: '',
        owner: '',
        description: '',
        likes: 0, // CHECK HOW MANY LIKES THIS ITEM HAS IN SQL
        sold: false,
        location: '',
        price: 0
    }]);

    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3001/auth/listingitems", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .catch(err => {
                return;
            })
            .then(res => {
                if (!res || !res.ok || res.status >= 400) {
                    return;
                }
                return res.json();
            })
            .then(data => {
                if (!data) return;
                console.log(data)
                setItems([...data]);
                if (data.status) {
                    setError(data.status);
                }
            });
    }, []);

    return (
        <div className="item-view-container">
            {items.map((item, index) => {
                return <Item
                    key={index}
                    id={item.id}
                    isLiked={item.isLiked}
                    img={item.img}
                    title={item.title}
                    owner={item.owner}
                    description={item.description}
                    likes={item.likes}
                    sold={item.sold}
                    price={item.price}
                    location={item.location}
                />
            })}
        </div>
    );
}

export default ListingItems;