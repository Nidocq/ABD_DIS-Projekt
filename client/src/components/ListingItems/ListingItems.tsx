import React, { useContext, useEffect, useState } from "react";
import Item, { ItemProps } from "../Item/Item";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import './ListingItems.css';
import { useNavigate } from "react-router";

function ListingItems() {
    // TODO: This should be fetched from database
    const [items, setItems] = React.useState([{
        id: 0,
        title: '',
        description: '',
        price: 0,
        categories: [],
        img: [],
        username: '',
        sold: false,
        time_listed: '',
        location:'',

        likes: 0, // CHECK HOW MANY LIKES THIS ITEM HAS IN SQL
        isLiked: false, // CHECK IF USER HAS LIKED THIS ITEM IN SQL
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
                    likes={item.likes}
                    img={item.img[0]}
                    title={item.title}
                    categories={item.categories[0]}
                    owner={item.username}
                    description={item.description}
                    sold={item.sold}
                    price={item.price}
                    location={item.location}
                />
            })}
        </div>
    );
}

export default ListingItems;