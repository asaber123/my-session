import React from 'react';
import '../../App';
import BarChart from './charts/BarChart';
//import ScatterGraph from './charts/Scatter'

import classes from '../../styles/Layout.module.scss';


function Analytics() {
    return (
        <div className={classes.analytics}>
            <BarChart />
            {/* <ScatterGraph/> */}
        </div>
    )
}

export default Analytics