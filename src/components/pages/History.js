import React, { useEffect, useState } from 'react';
import '../../App';
import classes from '../../styles/Layout.module.scss';
import moment from 'moment';
import LogForm from '../LogForm';
import { deleteRoute, getRoutes } from '../ApiClient';

//This page is where user can se previous loggs, delete, update and add new logs. A seperate component "LogForm", is the form for posting and updating loggs. 

function History() {
    const [climbingRoutes, setClimbingRoutes] = useState([]);
    const [routeToUpdate, setRouteToUpdate] = useState(null);

    //Use effect is going to run first time the page loads
    useEffect(async () => {
        getClimbingRoutes();
    }, []);
    //Function to get climbing routes fetched from rest-api
    const getClimbingRoutes = async () => {
        const routes = await getRoutes();
        setClimbingRoutes(routes)
    }
    //when delete button is clicked this funciton starts. 
    const deleteLog = async (id) => {
        //Fetching the rest-api with delete request. 
        const response = await deleteRoute(id)
        getClimbingRoutes();
    }
    const updateLog = async (route) => {
        //If the user press update, this fucntion will be called sent with the value of the log that will be set as props, 
        //that then in the file LogForm willl be set as activated. 
        setRouteToUpdate(route);
    }


    // //Making an array that contains all data that has been fetched. 
    const arr = climbingRoutes.reverse().map((climbingRoute => {
        return (
            <div key={climbingRoute._id} className={classes.history__log}>
                <ul>
                    {/* using moment package to format date */}
                    <li><b>{moment(climbingRoute.date).format('LL')}</b></li>
                </ul>
                <ul>
                    <li><b>Name of route: <br></br></b> {climbingRoute.name}</li>
                    <li><b>Type of route:</b> <br></br>{climbingRoute.typeOfRoute}</li>
                </ul>
                <ul>
                    <li> <b>Location: <br></br></b>{climbingRoute.location}</li>
                    <li><b>Grade:</b> <br></br>{climbingRoute.grade}</li>
                </ul>
                <div className={classes.history__log__buttons}>
                    <button className={classes.history__log__button} onClick={() => { deleteLog(climbingRoute._id) }}>Delete</button>
                    {/* When a user press update log, the whole object will be sent to the function "updateLog" */}
                    <button className={classes.history__log__button} onClick={() => { updateLog(climbingRoute) }}>Update</button>
                </div>

            </div>


        )
    }));
    //If the form that is displayed updating a route, then the title will be changed. 
    const header = routeToUpdate ? "Update climbing route:" : "Add a new climbing route:"

    return (
        <main>
            <div className={classes.history}>
                <div className={classes.history_newLog}>

                    <h2>{header}</h2>
                    {/* This form is imported from LogForm */}
                    <LogForm routeToUpdate={routeToUpdate} />
                </div>

                <div className={classes.history_previousLogs}>
                    <h2>My log:</h2>
                    {arr}
                </div>

            </div>
        </main>
    );

}


export default History



