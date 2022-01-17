import React, { useState } from 'react';
import '../../App';
import classes from '../../styles/Layout.module.scss';
import LoginForm from '../LoginForm';
import logo from '../img/myLog.png';
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
                <div className={classes.home__introText}>
                    <h2>What is myLog?</h2>
                    <p>MyLog is an webb-application that allows you to log and track your climbing progression. Keep track and analyse your sucess!</p>
                </div>
                <div className={classes.home__featuresSection}>
                    <h2>Feautures</h2>

                    <div className={classes.home__featuresSection__features}>
                        <div className={classes.home__featuresSection__features__image}>

                        </div>
                        <div className={classes.home__featuresSection__features__text}>
                            <div className={classes.home__featuresSection__features__text__line}>
                                <div className={classes.home__featuresSection__features__text__line__checkmark}> <img src={Checkmark} /><h3>Log your routes</h3> </div>
                                <p> Log the name of your route, time, type of route, and location </p>
                            </div>
                            <div className={classes.home__featuresSection__features__text__line}>
                                <div className={classes.home__featuresSection__features__text__line__checkmark}> <img src={Checkmark} /><h3>Track your progress</h3> </div>
                                <p>Read your preogression over time </p>
                            </div>
                            <div className={classes.home__featuresSection__features__text__line}>
                                <div className={classes.home__featuresSection__features__text__line__checkmark}> <img src={Checkmark} /><h3>Analyze your history</h3> </div>
                                <p>Analyze the the division of routes you made.  </p>
                            </div>
                            <div className={classes.home__featuresSection__features__text__line}>
                                <div className={classes.home__featuresSection__features__text__line__checkmark}> <img src={Checkmark} /><h3>Exalarate your progression</h3> </div>
                                <p>Set goals and track your progression  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Start