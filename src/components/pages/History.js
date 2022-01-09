import React, { useEffect, useState } from 'react';
import '../../App';
//import Axios from 'axios';
import classes from '../Layout.module.scss';
import moment from 'moment';
import LogForm from '../LogForm';
import axios from 'axios';
//import { DELETE } from 'mobx/dist/internal';

function authHeader(){
    const token = localStorage.token
    console.log(`Token: ${token}`)
    if (token){
        return {Authorization: `Bearer ${token}`};
    } else {
        return {};
    }
}

function History() {
    const [climbingRoutes, setClimbingRoutes] = useState([]);

    //Use effect is going to run first time the page loads
    useEffect(async () => {
        getClimbingRoutes();
    }, []);
    //Function to get climbing routes fetched from rest-api
    const getClimbingRoutes = async () => {
        const response = await fetch(`http://localhost:3001/api/`, {
            headers: authHeader()
        });
        const data = await response.json();
        setClimbingRoutes(data)
    }
    //when delete button is clicked this funciton starts. 
    const deleteLog= (id) =>{
        //Fetching the rest-api with delete request. 
        axios.delete(`http://localhost:3001/api/${id}`,{
            headers: authHeader()
        })
        .then((response) => {
            console.log('deleted', response)
            getClimbingRoutes()
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    // //Making an array that contains all data that has been fetched. 
    const arr = climbingRoutes.map((climbingRoute => {
        return (
                <div key={climbingRoute._id} className={classes.history__log}>
                    <ul>
                        {/* using moment package to format date */}
                        <li><b>{moment(climbingRoute.date).format('LL')}</b></li>
                        <li><b>Grade:</b> {climbingRoute.grade}</li>
                    </ul>
                    <ul>
                        <li><b>Name of route:</b> {climbingRoute.name}</li>
                        <li><b>Type of route:</b> {climbingRoute.grade}</li>
                    </ul>
                    <ul>
                        <li> <b>Location: </b></li>
                        <li>{climbingRoute.location}</li>
                    </ul>
                    <button onClick={() => {deleteLog(climbingRoute._id)}}>Ta bort</button>
                    <button onClick={() => {console.log(climbingRoute._id)}}>Updatera</button>
                </div>


        )
    }));
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username')
    if (token) {
        return (
            <div className="App">
                <div className="App">

                    {/* <form className="search-form">
                    <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                    <button className="search-buttton" type="submit">Search</button>
                </form> */}
                    <div className={classes.history}>
                        <div className={classes.history_newLog}>
                           <h2>Add a new climbing route:</h2>
                           <LogForm/>
                        </div>

                        <div className={classes.history_previousLogs}>
                            <h2>My log:</h2>
                            {arr}
                        </div>

                    </div>
                </div>
            </div>
        );
    } 
}


export default History



