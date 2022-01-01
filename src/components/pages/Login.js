import React, {Component} from 'react'

class Login extends Component{
    render(){
        return(
            <div></div>
        )
    }
}

function Login () {
    return (
        <div className='registration'>
            <h1>Register</h1>
            <form className='register-form'>
                <label>Username:</label>
                <input type="text"/>
                <label>Password:</label>
                <input type="text"/>
                <button>Register</button>
            </form>
            <h1>Login</h1>
            <form className='register-form'>
                <label>Username:</label>
                <input type="text"/>
                <label>Password:</label>
                <input type="text"/>
                <button>Login</button>
            </form>
            
        </div>
    )
}

export default Login
