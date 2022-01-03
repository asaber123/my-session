import React from "react";
import InputField from './InputField';
import Submitbutton from "./Submitbutton";
import UserStore from "./pages/userstore/UserStore";

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            buttonDisabled:false 
        }
    }
    setInputValue(property, val){
        //Making the input value maximum length to 12
        val = val.trim();
        if(val.length>12){
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
            username:'',
            password:'',
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
            //Setting the state to logged in and storing the username
            if(result && result.sucess){
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }
            //If the password and username did not match, the form will be reset, so  the resetForm method will be starting. 
            //Also an error message will be returned and displayed to the screen. 
            else if(result && result.sucess == false){
                this.resetForm();
                alert(result.msg)
            }
        }
        //I fthere is any problems with fetching tio the API, then an error message wikl be returned to the console log. Also the form will be reset
        catch(e){
            console.log(e);
            this.resetForm();
        }
    }
    render(){
        return(
            <div className="loginForm">
                Log in
                <InputField 
                type='text'
                placeholder ='Username'
                value={this.state.username ? this.state.username:''}
                //Passing the value of the input field into the funtion setInputValue. The property is username and the value is val. 
                onChange={(val)=> this.setInputValue('username', val)}

                />
            </div>
        )
    }
}
export default LoginForm