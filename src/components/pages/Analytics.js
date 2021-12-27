import React, { useEffect, useState } from 'react';
import '../../App';
import classes from '../Layout.module.scss';
import moment from 'moment';



function Analytics() {
    const [climbingRoutes, setClimbingRoutes] =useState([]);


    //Use effect is going to run first time the page loads
    useEffect (async ()=>{
        getClimbingRoutes();
    }, []);
    //Function to get climbing routes fetched from rest-api
    const getClimbingRoutes = async()=>{
        const response = await fetch(`http://localhost:3001/routes/`);
        const data = await response.json();
        setClimbingRoutes(data)
    }
    const charts = climbingRoutes.map((climbingRoutes => {
        
        return (
            <div key={climbingRoutes._id} className={classes.history__log}>
                <ul>
                    {/* using moment package to format date */}
                    <li><b>{moment(climbingRoutes.date).format('LL')}</b></li>
                    <li><b>Grade:</b> {climbingRoutes.grade}</li>
                </ul>
                <ul>
                    <li><b>Name of route:</b> {climbingRoutes.name}</li>
                    <li><b>Type of route:</b> {climbingRoutes.grade}</li>
                </ul>
                <ul>
                    <li> <b>Location: </b></li>
                    <li>{climbingRoutes.location}</li>
                </ul>
            </div>


        )
    }));

    return (
        <div>
            {charts}
        </div>
    )
}

export default Analytics