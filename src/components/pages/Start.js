import React from 'react';
import '../../App';
import classes from '../../styles/Layout.module.scss';
import LoginForm from '../LoginForm';
import logo from '../img/myLog.png';



function Start() {
    return (
        <main>
        <div className={classes.start}>
            <div className={classes.start__header}>
                <div className={classes.start__header__logo}>
                <img src={logo} alt="Logo" /> <h1>MyLog</h1>
                    </div>
                <div className={classes.start__header__loginform}>
                    <h2>Login</h2>
                <LoginForm/>
                </div>
                <div className={classes.start__header__slogan3}>
                    <p>Improve</p>
                </div>
                <div className={classes.start__header__slogan2}>
                    <p>Analyze</p>
                </div>
                <div className={classes.start__header__slogan1}>
                    <p>Track</p>
                </div>
            </div>
            <div className={classes.start__introText}>
                <h2>What is my log?</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
            </div>
            <div className={classes.start__featuresSection}>
                <h2>Feautures</h2>

                <div className={classes.start__featuresSection__features}>
                    <div className={classes.start__featuresSection__features__image}>

                    </div>
                    <div className={classes.start__featuresSection__features__text}>
                        <div className={classes.start__featuresSection__features__text__line}>
                        <h3>Log your routes</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                        </div>
                        <div className={classes.start__featuresSection__features__text__line}>
                        <h3>Track your progress</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                        </div>
                        <div className={classes.start__featuresSection__features__text__line}>
                        <h3>Analyze your history</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                        </div>
                        <div className={classes.start__featuresSection__features__text__line}>
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

export default Start