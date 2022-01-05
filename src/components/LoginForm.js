import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import classes from './form.module.scss';
import '../App';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Login extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
            password: ""
        }
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
    //As a ´default, the whole page refresh when submit button is clicked. This function prevents it. We want the peron to be re-directed to the login page. 
    onSubmit(event) {
        event.preventDefault()
        //Evetything that the user has typed in into the input field and then sent into the onchange funciton is now stored in the 
        //varibale registered whenn submit button has been clicked. 
        const loggedin = {
            userName: this.state.userName,
            password: this.state.password
        }
        console.log(loggedin)
        //Now using axios to send a post request to the database. The variable registered is sending the object with all data. 
        //If response status is ok then the page will be re-deracted to home page. 

        axios.post('http://localhost:3001/api/login', loggedin)
            .then((response) => {
                console.log(response)
            })
            .catch((err)=> {
                // Tf there is some errors, it will be shown in the console.log as well as the errro mesage from the API will be send to the sceen. 
                 if (err.response) {
                   console.log(err.response.data.message);
                   console.log(err.response.status);
                   console.log(err.response.headers);
                   alert(err.response.data.message)
                 }

               })
            
            window.location = '/home'




    }


    render() {
        return (
            <div className={classes.formDiv}>
                
                <form onSubmit={this.onSubmit}>

                    <label>Username:</label>
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
                    <p>Not a user yet? <Link to='/register'><a>Register</a></Link> </p>


                </form>
            </div>
        )
    }
}

export default Login