import React, { Component, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App';
import { postRoute, updateRoute } from './ApiClient';
import DateTimePicker from 'react-datetime-picker';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";





//Creating a class with props, that will change depending if the user fill the form. 
class LogForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grade: "",
            name: "",
            location: "",
            startDate: new Date(),
            typeOfRoute: "",
        }
        //If the user fill the form and press submit the value that was changed in the forms will be set. 
        this.changeGrade = this.changeGrade.bind(this)
        this.changeName = this.changeName.bind(this)
        this.changeLocation = this.changeLocation.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.changeTypeOfRoute = this.changeTypeOfRoute.bind(this)
        this.onSubmit = this.onSubmit.bind(this)


    }
    //This runns if the user clicked "update" on any log. 
    //The function componentDidUpdate will  start when the state is changes. 
    //Then the previous values of the logs will be sent and set as the values of the form
    componentDidUpdate(prevProps) {
        if (this.props.routeToUpdate !== prevProps.routeToUpdate) {
            this.setState({
                grade: this.props.routeToUpdate.grade,
                name: this.props.routeToUpdate.name,
                location: this.props.routeToUpdate.location,
                date: this.props.routeToUpdate.date,
                typeOfRoute: this.props.routeToUpdate.typeOfRoute,
            })
        }
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
    handleChange(date) {
        this.setState({
            date: date        
        })
    }
    changeTypeOfRoute(event) {
        this.setState({
            typeOfRoute: event.target.value
        })
    }
    //As a ´default, the whole page refresh when submit button is clicked. This function prevents it. We want the peron to be re-directed to the login page. 
    onSubmit = async (event) => {
        //Doing a prevent Default to prevent page refresh.
        event.preventDefault()
        //Evetything that the user has typed in into the input field and then sent into the onchange funciton is now stored in the 
        //varibale registered when submit button has been clicked. 
        const climbingLog = {
            grade: this.state.grade,
            name: this.state.name,
            location: this.state.location,
            date: this.state.startDate,
            typeOfRoute: this.state.typeOfRoute
            
        }
        // console.log(climbingLog)
        //If the props that has been sent is updated then update route with this id and add the values to the rewuest. 
        if (this.props.routeToUpdate) {
            await updateRoute(this.props.routeToUpdate._id, climbingLog)
        } else {
            await postRoute(climbingLog)
        }

        //TODO how to trigger getRoutes in a better way?
        window.location = '/history';
    }




    //This is the structure of the form in html
    render() {
        return (
            <div className='formDiv'>
                {/* When submit button is clicked, then the onSubmit function will be activated. */}
                <form onSubmit={this.onSubmit}>
                    <label>Name of route:</label>
                    {/* On all inputs, the function that is on the onchange will be started when the user starts filling the form */}
                    {/* The value will be set to the state */}
                    <input
                        type="text"
                        onChange={this.changeName}
                        value={this.state.name}
                        className='form-control form-group' />

                    <label>Date:</label>
                    {/* On all inputs, the function that is on the onchange will be started when the user starts filling the form */}
                    {/* The value will be set to the state */}
                    <div>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            name="startDate"
                            dateFormat="MM/dd/yyyy"
                        />
                    </div>
                    <select class="form-select" aria-label="Default select example" value={this.state.grade} onChange={this.changeGrade}>
                        <option selected>Grade:</option>
                        <option value="6a">6a</option>
                        <option value="6b">6b</option>
                        <option value="6c">6c</option>
                        <option value="7a">7a</option>
                        <option value="7b">7b</option>
                        <option value="7c">7c</option>
                        <option value="8a">8a</option>
                        <option value="8b">8b</option>
                        <option value="8c">8c</option>
                        <option value="9a">9a</option>
                        <option value="9b">9b</option>
                        <option value="9b">9c</option>
                        <option value="undefined">Project/undefined</option>
                    </select>

                    <select class="form-select" aria-label="Default select example" value={this.state.location} onChange={this.changeLocation}>
                        <option selected>Location:</option>
                        <option value="Indoor">Indoor</option>
                        <option value="Outdoor">Outdoor</option>
                    </select>




                    <select class="form-select" aria-label="Default select example" value={this.state.typeOfRoute} onChange={this.changeTypeOfRoute}>
                        <option selected>Type of route:</option>
                        <option value="Traditional">Traditional</option>
                        <option value="Sport-climbing">Sport-climbing</option>
                        <option value="Bouldering">Bouldering</option>
                    </select>
                    <input type='submit' className='btn btn-success' value='submit' />
                </form>
            </div>
        )
    }
}

export default LogForm