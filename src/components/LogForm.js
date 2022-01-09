import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App';
import axios from 'axios';
import fetchHeaders, { postRoute, updateRoute } from './ApiClient';


class LogForm extends Component {
    constructor(props) {
        super(props)
        console.log("no set")
        this.state = {
            grade: "",
            name: "",
            location: "",
            date: "",
            typeOfRoute: "",
        }

        this.changeGrade = this.changeGrade.bind(this)
        this.changeName = this.changeName.bind(this)
        this.changeLocation = this.changeLocation.bind(this)
        this.changeDate = this.changeDate.bind(this)
        this.changeTypeOfRoute = this.changeTypeOfRoute.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    componentDidUpdate(prevProps){
        if (this.props.routeToUpdate !== prevProps.routeToUpdate){
            console.log("route was updated")
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
    onSubmit = async(event) => {
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
        if (this.props.routeToUpdate){
            await updateRoute(this.props.routeToUpdate._id, climbingLog)
        } else {
            await postRoute(climbingLog)
        }

        //TODO how to trigger getRoutes in a better way?
        window.location = '/history';
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