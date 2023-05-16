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
            <ul>
                <li><img 
                    className="logo" 
                    src="https://cdn-icons-png.flaticon.com/512/6703/6703157.png" />
                </li>
                <li>
                    <a href="./index.html">Explore</a>
                </li>
                <li>
                    {/* TODO:  */}
                    <a href="">Create</a>
                </li>
                <li><img 
                    className="userlogo" 
                    src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" />
                </li>
            </ul>
        </div> );
}

export default Navbar;