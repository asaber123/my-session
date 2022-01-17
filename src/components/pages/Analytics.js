import React from 'react';
import '../../App';
import BarChart from './charts/BarChart';
import PieChart from './charts/Pie';
import classes from '../../styles/Layout.module.scss';
import { Pie } from 'react-chartjs-2';
import LineChart from './charts/LineChart';

//This page all the statistics will be shown. All diffrenet charts is imported as they are separate components. 

function Analytics() {
    return (
        <div className={classes.analytics}>
            <h2>Analytics</h2>
            <div className={classes.analytics_chart}>
            <BarChart />
            </div>
            <div className={classes.analytics_chart}>
            <PieChart/>
            </div>
            <div className={classes.analytics_chart}>
            <LineChart/>
            </div>
        </div>
    )
}

export default Analytics