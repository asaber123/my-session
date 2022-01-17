import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App';
import axios from 'axios';
import { Link } from 'react-router-dom';

//This file is for the user to log in. 

//Creating a class with props, that will change depending if the user fill the form. 
class Login extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
            password: ""
        }
        //If the user fill the form and press submit the value that was changed in the forms will be set. 
        this.changeUserName = this.changeUserName.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    //When the user is typing text on the input field, the onChange function will be triggered. 
    //The cuntion will then set the value on the input fieald to the new value that the user put in. 
    changeUserName(event) {
        this.setState({
            userName: event.target.value
        })
    }
    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    //As a default, the whole page refresh when submit button is clicked. This function prevents it. We want the peron to be re-directed to the login page. 
    onSubmit(event) {
        event.preventDefault()
        //Evetything that the user has typed in into the input field and then sent into the onchange funciton is now stored in the 
        //varibale registered whenn submit button has been clicked. 
        const loggedin = {
            userName: this.state.userName,
            password: this.state.password
        }
        //Now using axios to send a post request to the database. The variable registered is sending the object with all data. 
        //If response status is ok then the page will be re-deracted to home page. 

        axios.post('/auth/login', loggedin)
            .then((response) => {
                localStorage.setItem('token', response.data.message.token)
                localStorage.setItem('username', response.data.message.username)
                this.setState({
                    user: response.data
                })
                //localStorage.setItem('username', res.)
                console.log('username:', response.data.message.username, 'token:', response.data.message.token)
                window.location = '/home'
            })
            .catch((err) => {
                // Tf there is some errors, it will be shown in the console.log as well as the errro mesage from the API will be send to the sceen. 
                if (err.response) {
                    console.log(err.response.data.message);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                    alert(err.response.data.message)
                }

            })

    }

//This is the structure of the form in html
    render() {
        if (localStorage.getItem('token')) {
            window.location = '/home'
        }
        else {
            return (
                <div className='formDiv'>
                {/* When submit button is clicked, then the onSubmit function will be activated. */}
                    <form onSubmit={this.onSubmit}>

                        <label>Username:</label>
                                            {/* On all inputs, the function that is on the onchange will be started when the user starts filling the form */}
                    {/* The value will be set to the state */}
                        <input
                            type="text"
                            onChange={this.changeUserName}
                            value={this.state.userName}
                            className='form-control form-group' />

                        <label>Password:</label>
                        <input
                            type="password"
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group' />

                        <br></br>
                        <input type='submit' className='btn btn-success' value='submit' />
                        <br></br><br></br>
                        {/* The re-direction to register will activate the register form which will make the register form be displayed instead of the login form.  */}
                        <p>Not a user yet? <a><Link to='/register'>Register</Link></a> </p>


                    </form>
                </div>
            )
        }
    }
}

export default Login