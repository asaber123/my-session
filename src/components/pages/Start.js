import React, { useState } from 'react';
import '../../App';
import classes from '../../styles/Layout.module.scss';
import LoginForm from '../LoginForm';
import logo from '../img/myLog.png';
import statistics from '../img/statistics.png'
import Improve from '../img/improvement.png';
import Track from '../img/track.png';
import Log from '../img/writing.png';
import Checkmark from '../img/check-mark.png';
import RegisterForm from '../RegisterForm';



function Start(props) {
    const isRegister = props.location.pathname === "/register"
    let form;
    if (isRegister) {
        form = <div className={classes.start__header__loginform}>
            <h2>Login</h2>
            <RegisterForm />
        </div>
    } else {
        form = <div className={classes.start__header__loginform}>
            <h2>Login</h2>
            <LoginForm />
        </div>
    }
    return (
        <main>
            <div className={classes.start}>
                <div className={classes.start__header}>
                    <div className={classes.start__header__logo}>
                        <img src={logo} alt="Logo" /> <h1>MyLog</h1>
                    </div>
                    {form}

                </div>
                <div className={classes.start__introText}>
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
                                <div className={classes.home__featuresSection__features__text__line__checkmark}> <img src={Checkmark} /><h3>Log your routes</h3> </div>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                            </div>
                            <div className={classes.home__featuresSection__features__text__line}>
                                <div className={classes.home__featuresSection__features__text__line__checkmark}> <img src={Checkmark} /><h3>Track your progress</h3> </div>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                            </div>
                            <div className={classes.home__featuresSection__features__text__line}>
                                <div className={classes.home__featuresSection__features__text__line__checkmark}> <img src={Checkmark} /><h3>Analyze your history</h3> </div>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                            </div>
                            <div className={classes.home__featuresSection__features__text__line}>
                                <div className={classes.home__featuresSection__features__text__line__checkmark}> <img src={Checkmark} /><h3>Exalarate your progression</h3> </div>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Start