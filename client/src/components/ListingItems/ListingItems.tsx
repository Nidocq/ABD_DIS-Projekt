import React, { useContext, useEffect, useState } from "react";
import Item, { ItemProps } from "../Item/Item";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import './ListingItems.css';
import { useNavigate } from "react-router";


// TODO: This should idealy be a json file
const itemArray: ItemProps[] = [
    {
        id: 2,
        isLiked: true, // CHECK IF USER HAS LIKED THIS ITEM IN SQL
        img: 'https://images.unsplash.com/photo-1453747063559-36695c8771bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0MTE3NTl8fGVufDB8fHx8&w=1000&q=80',
        title: 'Summer Vibes',
        owner: 'Mariah',
        description: 'Enjoying the sun and sand at the beach ☀️🏖️',
        likes: 75, // CHECK HOW MANY LIKES THIS ITEM HAS IN SQL
        sold: false,
        location: 'San Diego, CA',
        price: 20

    }
];


function ListingItems() {
    // TODO: This should be fetched from database
    const [items, setItems] = React.useState(

        [
            {
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
            }
        ]
    );
    const [error, setError] = useState(null);
    const navigate = useNavigate();
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
                setItems([ ...data ]);
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
                    id={index}
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