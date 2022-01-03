import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App';
import axios from 'axios';

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
            //Now using axios to send a post request to the database. The variable registered is sending the object with all data. 
    axios.post('http://localhost:3001/api/signup', registered)
        .then(response=>console.log(response.data))

        //Redirectiing user to logged in page
        window.location ='/'

        //Setting the values in the input forms to zero again
        this.state = {
            fullName: "",
            userName: "",
            password: ""
        }
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

                    <input type='submit' className='btn btn-danger btn block' value='submit' />
                </form>
            </div>
        )
    }
}

export default Register
