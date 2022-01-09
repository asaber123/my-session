import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App';
import axios from 'axios';

function headers(){
    const headers = {'Content-Type': 'application/json'}
    const token = localStorage.token
    if (token){
        headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
}

class LogForm extends Component {
    constructor() {
        super()
        this.state = {
            grade: "",
            name: "",
            location: "",
            date: "",
            typeOfRoute: "",
            user: ""

        }
        this.changeGrade = this.changeGrade.bind(this)
        this.changeName = this.changeName.bind(this)
        this.changeLocation = this.changeLocation.bind(this)
        this.changeDate = this.changeDate.bind(this)
        this.changeTypeOfRoute = this.changeTypeOfRoute.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    //When the user is typing text on the input field, the onChange function will be triggered. 
    //The cuntion will then set the value on the input fieald to the new value that the user put in. 

    changeGrade(event) {
        this.setState({
            grade: event.target.value
        })
    }
    changeName(event) {
        this.setState({
            name: event.target.value
        })
    }
    changeLocation(event) {
        this.setState({
            location: event.target.value
        })
    }
    changeDate(event) {
        this.setState({
            date: event.target.value
        })
    }
    changeTypeOfRoute(event) {
        this.setState({
            typeOfRoute: event.target.value
        })
    }
    //As a ´default, the whole page refresh when submit button is clicked. This function prevents it. We want the peron to be re-directed to the login page. 
    onSubmit(event) {
        //Doing a prevent Default to prevent page refresh.
        event.preventDefault()
        //Evetything that the user has typed in into the input field and then sent into the onchange funciton is now stored in the 
        //varibale registered whenn submit button has been clicked. 
        const climbingLog = {
            grade: this.state.grade,
            name: this.state.name,
            location: this.state.location,
            date: this.state.date,
            typeOfRoute: this.state.typeOfRoute

        }
        console.log(climbingLog)
        //Now using axios to send a post request to the database. The variable registered is sending the object with all data. 
        fetch('http://localhost:3001/api/', {
            body: JSON.stringify(climbingLog),
            method: "POST",
            headers: headers()
        })
            .then((response) => {
                console.log(response)
                window.location = '/history'

            })
            .catch((err) => {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                if (err.response) {
                    console.log(err.response.data.message);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                    alert(err.response.data.message)
                }
            })

    }


    render() {
        return (
            <div className='formDiv'>
                <form onSubmit={this.onSubmit}>
                    <label>Name of route:</label>
                    <input
                        type="text"
                        onChange={this.changeName}
                        value={this.state.name}
                        className='form-control form-group' />

                    <label>Grade:</label>
                    <input
                        type="text"
                        onChange={this.changeGrade}
                        value={this.state.grade}
                        className='form-control form-group' />


                    {/* <select class="form-select" aria-label="Default select example">
                        <option selected>Grade:</option>
                        <option value="1">6</option>
                        <option value="2">6a</option>
                        <option value="3">6b</option>
                        <option value="3">6c</option>
                        <option value="2">7a</option>
                        <option value="3">7b</option>
                        <option value="3">7c</option>
                        <option value="2">8a</option>
                        <option value="3">8b</option>
                        <option value="3">8c</option>
                        <option value="2">9a</option>
                        <option value="3">9b</option>
                        <option value="3">9c</option>
                        <option value="3">Project/undefined</option>
                    </select> */}

                    {/* 
                    <div class="form-check">
                        <input 
                        class="form-check-input" 
                        type="radio" 
                        name="flexRadioDefault" 
                        id="flexRadioDefault1"
                        onChange={this.changeLocation}
                        value={this.state.location}/>
                        <label class ="form-check-label" for="flexRadioDefault1">
                        Indoor
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" 
                        type="radio"                         
                        onChange={this.changeLocation}
                        value={this.state.location}
                        name="flexRadioDefault" 
                        id="flexRadioDefault2" 
                        checked/>
                        <label class ="form-check-label" for="flexRadioDefault2">
                        Outdoor
                        </label>
                    </div> */}

                    <label>location:</label>
                    <input
                        type="text"
                        onChange={this.changeLocation}
                        value={this.state.location}
                        className='form-control form-group' />

                    <label>Date:</label>
                    <input
                        type="text"
                        onChange={this.changeDate}
                        value={this.state.date}
                        className='form-control form-group' />

                    <label>Type of route:</label>
                    <input
                        type="text"
                        onChange={this.changeTypeOfRoute}
                        value={this.state.typeOfRoute}
                        className='form-control form-group' />
                    <br></br>
                    <input type='submit' className='btn btn-success' value='submit' />
                </form>
            </div>
        )
    }
}

export default LogForm