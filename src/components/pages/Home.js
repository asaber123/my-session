import React, { component } from 'react';
import '../../App';
import classes from '../../styles/Layout.module.scss';
import { Component } from 'react';
import Improve from '../img/improvement.png';
import Track from '../img/track.png';
import Log from '../img/writing.png';
import Checkmark from '../img/check-mark.png';
import pieChart from '../img/pie-chart.png';
import barChart from '../img/bar-chart.png';

//This page is shown when user is logged in. 

export default class Home extends Component {

    render() {
        if (localStorage.getItem('token')) {
            return (
                <main>
                    <div className={classes.home}>
                        <div className={classes.home__header}>
                            <div className={classes.home__header__slogan3}>
                                <img src={Improve} />
                                <p>Improve</p>
                            </div>
                            <div className={classes.home__header__slogan2}>
                                <img src={Track} />
                                <p>Analyze</p>
                            </div>
                            <div className={classes.home__header__slogan1}>
                                <img src={Log} />
                                <p>Track</p>
                            </div>
                        </div>
                        <div className={classes.home__introText}>
                            <h2>What is myLog?</h2>
                            <p>MyLog is an webb-application that allows you to log and track your climbing progression. Keep track and analyse your sucess!</p>
                        </div>
                        <div className={classes.home__featuresSection}>
                            <h2>Feautures</h2>

                            <div className={classes.home__featuresSection__features}>
                                <div className={classes.home__featuresSection__features__image}>
                                    <img src={barChart} alt="barchart" />
                                    <img src={pieChart} alt="piechart" />
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

