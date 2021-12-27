import React from 'react';
import { useState } from 'react';
import classes from './Footer.module.scss';
import '../App';


function Footer() {
    const [menuOpen, setMenuOpen] = useState(true);
    const menuTogglehandler = () => {
        setMenuOpen((p) => !p);

    }
    return (
        <footer className={classes.footer}>
            <div className={classes.footer}>
                <p>Åsa Berglund</p>
            </div>
        </footer>
    );
};

export default Footer