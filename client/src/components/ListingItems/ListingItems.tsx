import React from "react";
import Item, { ItemProps } from "../Item/Item";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import './ListingItems.css';


// TODO: This should idealy be a json file
const itemArray:ItemProps[] = [
   {
        id: 2,
        isLiked: true,
        img:'https://images.unsplash.com/photo-1453747063559-36695c8771bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0MTE3NTl8fGVufDB8fHx8&w=1000&q=80',
        title:'Summer Vibes',
        owner:'Mariah',
        description:'Enjoying the sun and sand at the beach ☀️🏖️',
        likes: 75,
    },
    {
        id: 3,
        isLiked: false,
        img:'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?b=1&s=170667a&w=0&k=20&c=EGX6DZJON7-jDZi8kL67qrNtNGooCFVtPP_weO2gFq4=',
        title:'Fireworks Night',
        owner:'Jackie',
        description:'A perfect end to a fun-filled night of celebrations 🎆🎇',
        likes: 23,
    },
    {
        id: 4,
        isLiked: false,
        img:'https://i.redd.it/k2q0f17ob3t41.jpg',
        title:'Portrait',
        owner:'Stephanie',
        description:'Capturing emotions in a single shot ❤️',
        likes: 56,
    },
    {
        id: 5,
        isLiked: true,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHqw_yg5DM8rpFFd0b7XwWQbXJCQv_jG97Q&usqp=CAU',
        title:'Golden Hour',
        owner:'Chris',
        description:'The most beautiful time of the day 🌅😍',
        likes: 88,
    },
    {
        id: 6,
        isLiked: false,
        img:'https://media.wired.com/photos/59322a9126780e6c04d2a1cb/master/w_2560%2Cc_limit/galacticfireworks.jpg',
        title:'Foodie Delight',
        owner:'Jessica',
        description:'Tempting your taste buds with visual delights 🍴😋',
        likes: 42,
    },
    {
        id: 7,
        isLiked: true,
        img:'https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        title:'Serene Wilderness',
        owner:'Lisa',
        description:'Capturing the beauty of nature 🌿🌳',
        likes: 102,
    },
    {
        id: 8,
        isLiked: false,
        img:'https://storage.googleapis.com/gweb-interland.appspot.com/en-us/hub/images/peardeck/slides_hero.jpg',
        title:'Wedding Bells',
        owner:'Sarah',
        description:'Memories that last forever 💍❤️',
        likes: 47,
    },
    {
        id: 9,
        isLiked: false,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QRtWbe9bd_-TXfc4UD_F8o76vwUlkTWC2-5OEws85RwApYbtzsnBz9bxiakAxcIMagQ&usqp=CAU',
        title:'My Furry Friend',
        owner:'Charlie',
        description:'The lovable companions we cherish 🐾❤️',
        likes: 64,
    },
    {
        id: 10,
        isLiked: true,
        img:'https://repository-images.githubusercontent.com/21737465/46445f80-a5ae-11ea-921f-c39aefbcdcac',
        title:'Street Scene',
        owner:'Jasmine',
        description:'The hustle and bustle of city life 🏙️',
        likes: 34,
    },
    {
        id: 11,
        isLiked: false,
        img:'https://img.fortawesome.com/1ce05b4b/open-source-illustration.svg',
        title:'Nature\'s Symphony of the gods master outdoors',
        owner:'Matt',
        description:'The sounds and sights of the great outdoors 🍃🌻',
        likes: 78,
    },
    {
        id: 12,
        isLiked: true,
        img:'https://cdn.britannica.com/09/174009-050-82793AAE/Frog-Amphibian-Blue-poison-dart-frog-arrow.jpg?w=840&h=460&c=crop',
        title:'Winter Wonderland',
        owner:'David',
        description:'The magic of falling snowflakes ❄️✨',
        likes: 56,
    },
    {
        id: 13,
        isLiked: true,
        img:'https://images.pexels.com/photos/1044330/pexels-photo-1044330.jpeg?cs=srgb&dl=pexels-deva-darshan-1044330.jpg&fm=jpg',
        title:'Up Close and Personal',
        owner:'Emily',
        description:'Revealing the intricate details of small objects 🌸🔎',
        likes: 92,
    },
    {
        id: 14,
        isLiked: false,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDypQL1e2VqKrv8_cGhSz-p8mSSfGNEJR2Dg&usqp=CAU',
        title:'Endless Horizons',
        owner:'Brandon',
        description:'The peaceful solitude of wide open spaces 🌄',
        likes: 23,
    },
    {
        id: 15,
        isLiked: true,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oUwNkmKUutW91vTrb8tE5oXEJznogH_lOw&usqp=CAU',
        title:'City Nights',
        owner:'Avery',
        description:'The vibrant energy of city streets after dark 🌃',
        likes: 79,
    },
    {
        id: 16,
        isLiked: false,
        img:'https://e0.pxfuel.com/wallpapers/559/408/desktop-wallpaper-super-cool-super-cool-awesome-thumbnail.jpg',
        title:'Magical Moments',
        owner:'Gabriel',
        description:'The surreal beauty of sunset on the beach 🧡🏖️',
        likes: 37,
    }
];


function ListingItems() {
    // TODO: This should be fetched from database
    const [items, setItems] = React.useState(itemArray);


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
                    />
        })}
    </div>
    );
}

export default ListingItems;