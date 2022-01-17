import React from 'react';
import { useState } from 'react';
import classes from '../styles/Header.module.scss';
import '../App';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import logo from '../components/img/myLog.png';


//This is the header component. This will also be containing a responsive navbar. 
function Header() {
    //First, I'm setting the username that is stored in local storage
    let username = localStorage.getItem('username');
    //Making a logout fucniton that is activated when the user clickes "log out". Then the session storage will be cleared and the user will be re-direct. 
    function logout() {
        localStorage.clear();
        window.location = '/';

    }
    //Using a state to check in the menu/toggle bar is clicked in a responsive mode
    const [menuOpen, setMenuOpen] = useState(true);
    const menuTogglehandler = () => {
        setMenuOpen((p) => !p);

    }
    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <div className={classes.header__content__logo}>
                        <img src={logo} alt="Logo" />
                        <h2>MyLog</h2>
                    </div>
                </Link>
                <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`}>
                    <ul>
                        {/* Creating links to the different pages.  */}
                        <Link to='/history' >
                            <li>History</li>
                        </Link>
                        <Link to='/analytics' >
                            <li>Analytics</li>
                        </Link >
                        {/* Using a bootstrap menu to have a dropdown menu that allows the user to click logout */}
                        <NavDropdown title={username} id="logout" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <NavDropdown.Item style={{ color: 'inherit', textDecoration: 'inherit'}} bg="dark" onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </ul>
                </nav>
                <div className={classes.header__content__toggle}>
                    {/* Activating a funciton if the menu button is clicked, to display and not display menu */}
                    {menuOpen ? (
                        <BiMenu onClick={menuTogglehandler} />
                    ) : (
                        <AiOutlineClose onClick={menuTogglehandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header
