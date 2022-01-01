import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            fullName: "",
            userName: "",
            password: ""
        }

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
    render() {
        return (
            <div className='formDiv'>
                <form>
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
                        type="text"
                        onChange={this.changePassword}
                        value={this.state.password}
                        className='form-control form-group' />

                    <input type='submit' className='btn btn-danger btn block' value='submit' />
                </form>
            </div>
        )
    }
}

export default Login
