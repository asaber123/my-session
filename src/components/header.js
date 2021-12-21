import React from 'react';
import { useState } from 'react';
import classes from './Header.module.scss';
import '../App';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(true);
    const menuTogglehandler = () => {
        setMenuOpen((p) => !p);

    }
    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to='/'>
                    <h2 className={classes.header__content__logo}>mySession</h2>
                </Link>

                <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`}>
                    <ul>
                        <Link to='/pageone'>
                            <li>Page one</li>
                        </Link>
                        <Link to='/pagetwo'>
                            <li>Page two</li>
                        </Link>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
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
