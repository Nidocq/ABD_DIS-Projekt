import { Url } from 'url';
import './Navbar.css';

export interface NavbarItems {
    displayText: string;
    // TODO: This should idealy be Url type
    src: string;
}

// const NavbarItems : NavbarItems[] = [
//     {
//         displayText: "Explore",
//         src: "./index.html"
//     },
//     {
//         displayText: "Create",
//         //TODO: MISSING
//         src: ""
//     }
// ]

function Navbar() {
    return ( 
        <div className='wrapper'>
                <img className="logo" 
                    src="https://cdn-icons-png.flaticon.com/512/6703/6703157.png" />
                <a href="./index.html">Explore</a>
                <a href="">Create</a>
                <img 
                    className="userlogo" 
                    src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" />
        </div> );
}

export default Navbar;