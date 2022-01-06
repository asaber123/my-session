import React, { component } from 'react';
import '../../App';
import classes from '../Layout.module.scss';
import LoginForm from '../LoginForm';
import headerImg from '../img/climber1.png';
import { Component } from 'react';
import axios from 'axios';


export default class Home extends Component {

    render() {
        if (localStorage.getItem('token')) {
            return (
                <main>
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
                        <div className={classes.home__introText}>
                            <h2>What is my log?</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                        </div>
                        <div className={classes.home__featuresSection}>
                            <h2>Feautures</h2>

                            <div className={classes.home__featuresSection__features}>
                                <div className={classes.home__featuresSection__features__image}>

                                </div>
                                <div className={classes.home__featuresSection__features__text}>
                                    <div className={classes.home__featuresSection__features__text__line}>
                                        <h3>Log your routes</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                                    </div>
                                    <div className={classes.home__featuresSection__features__text__line}>
                                        <h3>Track your progress</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                                    </div>
                                    <div className={classes.home__featuresSection__features__text__line}>
                                        <h3>Analyze your history</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                                    </div>
                                    <div className={classes.home__featuresSection__features__text__line}>
                                        <h3>Exalarate your progression</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )
        }
        else {
            return (
                <main>
                    <div className={classes.home}>
                        You do not have acess
                    </div>
                </main>
            )
        }
    }
}

