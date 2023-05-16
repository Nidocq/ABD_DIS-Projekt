import React from "react";
import Item, { ItemProps } from "../Item/Item";
import './ItemView.css';


// TODO: This should idealy be a json file
const itemArray:ItemProps[] = [{
    img:'https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png',
    title:'This is a title',
    owner:'Hanzomain',
    description:'this product is likable',
    likes:42,
},
{
    img:'https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png',
    title:'This is a title',
    owner:'Hanzomain',
    description:'this product is likable',
    likes:42,
},
{
    img:'https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png',
    title:'This is a title',
    owner:'Hanzomain',
    description:'this product is likable',
    likes:42,
},
{
    img:'https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png',
    title:'This is a title',
    owner:'Hanzomain',
    description:'this product is likable',
    likes:42,
}   
];

function ItemView() {
    return ( <div className="item-view-container">
        {itemArray.map((item) => {
            return <Item {...item} />
        })}
    </div> );
}

export default ItemView;