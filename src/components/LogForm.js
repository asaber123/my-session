import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App';
import axios from 'axios';


class LogForm extends Component {
    constructor() {
        super()
        this.state = {
            grade: "",
            name: "",
            location: "",
            date: "",
            typeOfRoute: ""

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
        event.preventDefault()
        //Evetything that the user has typed in into the input field and then sent into the onchange funciton is now stored in the 
        //varibale registered whenn submit button has been clicked. 
        const climbingLog = {
            grade: this.state.grade,
            name: this.state.name,
            location: this.state.location,
            date: this.state.date,
            typeOfRoute: this.state.typeOfRoute,
            user: localStorage.getItem('username')
 

        }
        console.log(climbingLog)
        //Now using axios to send a post request to the database. The variable registered is sending the object with all data. 
        axios.post('', climbingLog)
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