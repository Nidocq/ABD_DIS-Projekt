import React from "react";
import Item, { ItemProps } from "../Item/Item";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import './ItemView.css';


// TODO: This should idealy be a json file
const itemArray:ItemProps[] = [{
    isLiked: false,
    img:'https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png',
    title:'This is a title',
    owner:'Hanzomain', 
    description:'Hanzo is a strong guy',
    likes:42,
},
{
    isLiked: false,
    img:'https://imgv3.fotor.com/images/blog-richtext-image/take-a-picture-with-camera.png',
    title:'This is a title',
    owner:'Hanzomain',
    description:'can you feel the love?',
    likes:42,
},
{
    isLiked: true,
    img:'https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg?w=1600&h=1600&q=88&f=bb45f0cd0324ae5e04827f684a9da7e8',
    title:'This is a title',
    owner:'Hanzomain',
    description:'never gonna give you up',
    likes:42,
},
{
    isLiked: true,
    img:'https://sb.kaleidousercontent.com/67418/3840x2200/40b6488625/individuals-org.png',
    title:'This is a title',
    owner:'Hanzomain',
    description:'Dancing queeeeeeeen',
    likes:42,
}   
];


function ItemView() {
    // TODO: This should be fetched from database
    const [items, setItems] = React.useState(itemArray);

    const setIsLiked = () => {
        setItems(items.map((item) => {  
            return {...item, isLiked: !item.isLiked}
        }));
    }
    return ( <div className="item-view-container">
        {items.map((item) => {
            return <Item 
                        {...item}
                    />
        })}
    </div> );
}

export default ItemView;