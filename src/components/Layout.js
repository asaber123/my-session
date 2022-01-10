import React from 'react';
import Header from "./Header";
import classes from '../styles/Layout.module.scss';

//Arranging teh structure of classes and styling on pages. 

export const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className={classes.container}>{children}</div>
        </>
    )
}

export default Layout