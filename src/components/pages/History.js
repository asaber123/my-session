import React, { useEffect, useState } from 'react';
import '../../App';
//import Axios from 'axios';
import classes from '../Layout.module.scss';
import moment from 'moment';



function History() {
    const [climbingRoutes, setClimbingRoutes] = useState([]);

    //Use effect is going to run first time the page loads
    useEffect(async () => {
        getClimbingRoutes();
    }, []);
    //Function to get climbing routes fetched from rest-api
    const getClimbingRoutes = async () => {
        const response = await fetch(`http://localhost:3001/api/`);
        const data = await response.json();
        setClimbingRoutes(data)
    }
    //when delete button is clicked this funciton starts. 
    const deleteLog = async (id) => {
        //Fetching the rest-api with delete request. 
        const response = await fetch('ttp://localhost:3001/api/' + id, {
            method: 'DELETE',
        })
        const data = await response.json();
        getClimbingRoutes(data);
    }

    // //when the button "uppdatera" is clicked, this funciton will start. 
    // const updateLog = async = (id) => {
    //     //Declaring variables again to get the value from the new data filled into the form
    //     const nameInput = document.getElementById("name");
    //     const descriptionInput = document.getElementById("description");
    //     const linkInput = document.getElementById("link");
    //     const universityInput = document.getElementById("university");

    //     const name = nameInput.value;
    //     const description = descriptionInput.value;
    //     const link = linkInput.value;
    //     const university = universityInput.value;
    //     //Adding dtaa into the object data. 
    //     let data = { 'name': name, 'link': link, 'description': description, 'university': university };
    //     //Doing a fetch call to the api courses with the method put and an id sent. 
    //     fetch("http://asaberglund.se/rest-projekt/courses.php?id=" + id, {
    //         method: 'PUT',
    //         body: JSON.stringify(data)
    //     })
    //         .then(response => response.json())
    //         .then(course => {
    //             //After method is sent the function getCourses will start again. 
    //             getCourses();
    //         })
    //         .catch(error => {
    //             //If something goes wrong, an error message will be shown. 
    //             console.log('Felmeddelande:', error);
    //         })

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
                    <button onlick={() => deleteLog(climbingRoutes._id)}> Ta bort</button>
                    <button onlick={console.log(climbingRoutes._id)}> Updatera</button>
                </div>
            </main>


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
                        </div>

                        <div className={classes.history_previousLogs}>
                            <h2>My log:</h2>
                            {arr}
                        </div>

                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="App">
                <div className="App">

                    {/* <form className="search-form">
                    <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                    <button className="search-buttton" type="submit">Search</button>
                </form> */}
                    <div className={classes.history}>
                        <h1>Sorry you do not have acess</h1>


                    </div>
                </div>
            </div>
        );
    }
}


export default History



