import React, { useEffect, useState } from 'react';
import '../../App';
//import Axios from 'axios';
import classes from '../Layout.module.scss';
import moment from 'moment';



function History() {
    const [climbingRoutes, setClimbingRoutes] =useState([]);
    //Making a search function
    // const[search,setSearch] = useState('');
    //If submit button is clicked then a new state is set
    // const[query, setQuery] = useState['']

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
    // //Everytime input field is changed this event is going to run. 
    // const updateSearch = e =>{
    //     setSearch(e.target.value);
    //     console.log(search);
    // }

    // //Functon to get data from routes
    // const getClimbingRoutes = async()=>{
    // //const [data, setData] = useState([])
    // Axios.get('http://localhost:3001/routes/')
    //     .then(res => {
    //         console.log(res.data)
    //         //setData(res.data)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }

    // //Making an array that contains all data that has been fetched. 
    const arr = climbingRoutes.map((climbingRoutes => {
        
        return (
            <main>
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
            </main>


        )
    }));

    return (
        <div className="App">
            <div className="App">
                
                {/* <form className="search-form">
                    <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                    <button className="search-buttton" type="submit">Search</button>
                </form> */}
                <div className={classes.history}>
                    <h1>This week:</h1>

                    {arr}
                </div>
            </div>
        </div>
    );
}


export default History



