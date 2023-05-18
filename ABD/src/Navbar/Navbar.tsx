import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

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
                <FontAwesomeIcon 
                    onClick={() => alert("hello world")}
                    icon={icon({name: 'user'})} 
                 />
                <a href="./index.html">Explore</a>
                <a href="">Create</a>
                <FontAwesomeIcon 
                    icon={icon({name: 'user'})}
                />
        </div> );
}

export default Navbar;