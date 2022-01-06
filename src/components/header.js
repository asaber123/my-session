import React from 'react';
import { useState } from 'react';
import classes from './Header.module.scss';
import '../App';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

function Header() {
    let username = localStorage.getItem('username');
    function logout() {
        localStorage.clear();
        window.location = '/';

    }

    const [menuOpen, setMenuOpen] = useState(true);
    const menuTogglehandler = () => {
        setMenuOpen((p) => !p);

    }
    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to='/'>
                    <h2 className={classes.header__content__logo}>myLog</h2>
                </Link>

                <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`}>
                    <ul>
                        <Link to='/history'>
                            <li>History</li>
                        </Link>
                        <Link to='/analytics'>
                            <li>Analytics</li>
                        </Link>
                        <NavDropdown title={username} id="logout">
                            <NavDropdown.Item bg="dark" onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </ul>
                </nav>
                <div className={classes.header__content__toggle}>
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
