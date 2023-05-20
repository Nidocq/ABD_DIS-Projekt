import React from "react";
import Item, { ItemProps } from "../Item/Item";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import './ItemView.css';


// TODO: This should idealy be a json file
const itemArray:ItemProps[] = [{
    id: 1,
    toggleLike: (index: number) => {},
    isLiked: false,
    img:'https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png',
    title:'This is a title',
    owner:'Hanzomain', 
    description:'Hanzo is a strong guy',
    likes:42,
},
{
    id: 1,
    toggleLike: (index: number) => {},
    isLiked: false,
    img:'https://imgv3.fotor.com/images/blog-richtext-image/take-a-picture-with-camera.png',
    title:'This is a title',
    owner:'Hanzomain',
    description:'can you feel the love?',
    likes:42,
},
{
    id: 1,
    toggleLike: (index: number) => {},
    isLiked: true,
    img:'https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg?w=1600&h=1600&q=88&f=bb45f0cd0324ae5e04827f684a9da7e8',
    title:'This is a title',
    owner:'Hanzomain',
    description:'never gonna give you up',
    likes:42,
},
{
    id: 1,
    toggleLike: (index: number) => {},
    isLiked: true,
    img:'https://sb.kaleidousercontent.com/67418/3840x2200/40b6488625/individuals-org.png',
    title:'This is a title',
    owner:'Hanzomain',
    description:'Dancing queeeeeeeen',
    likes:42,
},
{
    id: 1,
    toggleLike: (index: number) => {},
    isLiked: false,
    img:'https://imgv3.fotor.com/images/blog-richtext-image/take-a-picture-with-camera.png',
    title:'This is a title',
    owner:'Hanzomain',
    description:'can you feel the love?',
    likes:42,
},
{
    id: 1,
    toggleLike: (index: number) => {},
    isLiked: true,
    img:'https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg?w=1600&h=1600&q=88&f=bb45f0cd0324ae5e04827f684a9da7e8',
    title:'This is a title',
    owner:'Hanzomain',
    description:'never gonna give you up',
    likes:42,
},
{
    id: 1,
    toggleLike: (index: number) => {},
    isLiked: false,
    img:'https://imgv3.fotor.com/images/blog-richtext-image/take-a-picture-with-camera.png',
    title:'This is a title',
    owner:'Hanzomain',
    description:'can you feel the love?',
    likes:42,
},
{
    id: 1,
    toggleLike: (index: number) => {},
    isLiked: true,
    img:'https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg?w=1600&h=1600&q=88&f=bb45f0cd0324ae5e04827f684a9da7e8',
    title:'This is a title',
    owner:'Hanzomain',
    description:'never gonna give you up',
    likes:42,
},
{
    id: 1,
    toggleLike: (index: number) => {},
    isLiked: false,
    img:'https://imgv3.fotor.com/images/blog-richtext-image/take-a-picture-with-camera.png',
    title:'This is a title',
    owner:'Hanzomain',
    description:'can you feel the love?',
    likes:42,
},
{
    id: 1,
    toggleLike: (index: number) => {},
    isLiked: true,
    img:'https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg?w=1600&h=1600&q=88&f=bb45f0cd0324ae5e04827f684a9da7e8',
    title:'This is a title',
    owner:'Hanzomain',
    description:'never gonna give you up \lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed ultricies ultrices, nunc nisl ultricies nunc, nec ultricies ninever gonna give you up \lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed ultricies ultrices, nunc nisl ultricies nunc, nec ultricies ninever gonna give you up \lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed ultricies ultrices, nunc nisl ultricies nunc, nec ultricies ni',
    likes:42,
},
{
    id: 1,
    toggleLike: (index: number) => {},
    isLiked: false,
    img:'https://imgv3.fotor.com/images/blog-richtext-image/take-a-picture-with-camera.png',
    title:'This is a title',
    owner:'Hanzomain',
    description:'can you feel the love?',
    likes:42,
},
{
    id: 1,
    toggleLike: (index: number) => {},
    isLiked: true,
    img:'https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg?w=1600&h=1600&q=88&f=bb45f0cd0324ae5e04827f684a9da7e8',
    title:'This is a title',
    owner:'Hanzomain',
    description:'never gonna give you up',
    likes:42,
},
];


function ItemView() {
    // TODO: This should be fetched from database
    const [items, setItems] = React.useState(itemArray);

    const toggleLike = (index: number) => {
        setItems((prevItems) => {
            // Create a copy of the array
            let updatedItems = [...prevItems]; 

            // Update the specific item
            // Assuming the item has an 'isLiked' property
            updatedItems[index] = { ...updatedItems[index], 
                                    isLiked: !updatedItems[index].isLiked };
            return updatedItems; // Set the updated array as the new state
          });
    }

    return ( <div className="item-view-container">
        {items.map((item, index) => {
            return <Item 
                        key={index}
                        id={index}
                        toggleLike={toggleLike}
                        isLiked={item.isLiked}
                        img={item.img}
                        title={item.title}
                        owner={item.owner}
                        description={item.description}
                        likes={item.likes}
                    />
        })}
    </div> );
}

export default ItemView;