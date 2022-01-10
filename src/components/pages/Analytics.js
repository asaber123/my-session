import React, { useEffect, useState } from 'react';
import '../../App';
import classes from '../../styles/Layout.module.scss';
import moment from 'moment';
import BarChart from './charts/BarChart';
import Table from './charts/Table';
import { getRoutes } from '../ApiClient';


function Analytics() {
    return (
        <div>
            <BarChart />
            {/* <Table /> */}
        </div>
    )
}

export default Analytics