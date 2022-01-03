import React from "react";
import InputField from './InputField';
import Submitbutton from "./Submitbutton";
import UserStore from "./pages/userstore/UserStore";

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username='',
            password='',
            buttonDisabled:false 
        }
    }
    setInputValue(property, val){
        //Making the input value maximum length to 12
        val = val.trim();
        if(val.length > 12){
            return;
        }
        //By setting state to property it can resuse the same methods. 
        this.setState({
            [property]:val
        })
    }
    //fucntion to reset form if something is not correct,(if user enter the wrong username of password)
    resetForm(){
        this.setState({
            username='',
            password='',
            buttonDisabled:false 
        })
    }
    //This funciton runns when submit button is clicked
    async login(){
        if(!this.state.username){
            return;
        }
        if(!this.state.password){
            return;
        }
        //Makes the login button disabled so that the user can not doubleclick 
        this.setState({
            buttonDisabled:true
        })
        try{
            let res = await fetch('/login', {
                method:'post',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
                // transpform the post data into json format. Passing the username and password
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
            //Acess the result of the request
            let result = await res.json();
            if(result && result.sucess){
                UserStore.isLoggedIn = true;
            }

        }
        catch(e){

        }
    }
    render(){
        return(
            <div className="loginForm">
                loginform
            </div>
        )
    }
}
export default LoginForm