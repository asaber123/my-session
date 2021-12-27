import React from 'react';
import '../../App';
import classes from '../Layout.module.scss';

import headerImg from '../img/climber1.png';


function Home() {
    return (
        <div className={classes.home}>
            <div className={classes.home__header}>
                <div className={classes.home__header__slogan3}>
                    <p>Improve</p>
                </div>
                <div className={classes.home__header__slogan2}>
                    <p>Analyze</p>
                </div>
                <div className={classes.home__header__slogan1}>
                    <p>Track</p>
                </div>
            </div>
            <h2>What is my log?</h2>
            <h2>Feautures</h2>
        
            <div className={classes.home__features}>
                <div className={classes.home__features__image}>

                </div>
                <div className={classes.home__features__text}>
                    <h3>Log your routes</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                    <h3>Track your progress</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                    <h3>Analyze your history</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                    <h3>Exalarate your progression</h3>
                </div>
            </div>
        </div>
    )
}

export default Home
