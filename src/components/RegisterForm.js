import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Register extends Component {
    constructor() {
        super()
        this.state = {
            fullName: "",
            userName: "",
            password: ""
        }
        this.changeFullName= this.changeFullName.bind(this)
        this.changeUserName= this.changeUserName.bind(this)
        this.changePassword= this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    //When the user is typing text on the input field, the onChange function will be triggered. 
    //The cuntion will then set the value on the input fieald to the new value that the user put in. 

    changeFullName(event) {
        this.setState({
            fullName: event.target.value
        })
    }
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
    onSubmit(event){
        event.preventDefault()
        //Evetything that the user has typed in into the input field and then sent into the onchange funciton is now stored in the 
        //varibale registered whenn submit button has been clicked. 
        const registered ={
            fullName: this.state.fullName,
            userName: this.state.userName,
            password: this.state.password
        }
        console.log(registered)
            //Now using axios to send a post request to the database. The variable registered is sending the object with all data. 
    axios.post('/auth/signup', registered)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=> {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
             if (err.response) {
               console.log(err.response.data.message);
               console.log(err.response.status);
               console.log(err.response.headers);
               alert(err.response.data.message)
             }
           })
        // //Redirectiing user to logged in page
        window.location ='/'

    }


    render() {
        return (
            <div className='formDiv'>
                <form onSubmit={this.onSubmit}>
                    <label>Full name:</label>
                    <input
                        type="text"
                        onChange={this.changeFullName}
                        value={this.state.fullName}
                        className='form-control form-group' />

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
                        <p>Alreddy a user? <a><Link to='/'>Login</Link></a> </p>
                </form>
            </div>
        )
    }
}

export default Register
