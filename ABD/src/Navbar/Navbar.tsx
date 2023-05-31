import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


export interface NavbarItems {
    displayText: string;
    // TODO: This should idealy be Url type
    src: string;
}


function Navbar() {
    return ( 
        <div className='wrapper'>
                <FontAwesomeIcon 
                    onClick={() => alert("hello world")}
                    icon={icon({name: 'coffee'})} 
                    className='nav-bar-logo'
                 />
                <a href="./index.html" className='nav-bar-explore-btn'>Explore</a>
                <a href="./CreateListing.html" className='nav-bar-create-btn'>Create</a>
                <a href="./UserPage.html">
                    <FontAwesomeIcon 
                        icon={icon({name: 'user'})}
                        className='nav-bar-user-btn'
                    />
                </a>
        </div> );
}

export default Navbar;