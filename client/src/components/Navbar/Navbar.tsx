import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import { AccountContext } from "../AccountContext";
import ToggleColorMode from '../toggleColorMode';

export interface NavbarItems {
    displayText: string;
    // TODO: This should idealy be Url type
    src: string;
}


function Navbar() {
    const { setUser } = useContext<any>(AccountContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    return (
        <div className='wrapper'>
            <FontAwesomeIcon
                onClick={() => navigate("/home")}
                icon={icon({ name: 'coffee' })}
                className='nav-bar-logo'
            />
            <a onClick={() => navigate("/home")} className='nav-bar-explore-btn'>Explore</a>
            <a onClick={() => navigate("/createlistingitem")} className='nav-bar-create-btn'>Create</a>
            <a onClick={() => navigate("/updateuser")}>
                <FontAwesomeIcon
                    icon={icon({ name: 'user' })}
                    className='nav-bar-user-btn'
                />
                <ToggleColorMode />
            </a>
        </div>);
}

export default Navbar;