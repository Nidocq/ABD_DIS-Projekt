import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import { AccountContext } from "../AccountContext";
import ToggleColorMode from '../toggleColorMode';

function Navbar() {
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
            </a>
            <ToggleColorMode />
        </div>);
}

export default Navbar;