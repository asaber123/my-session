import React from "react";

class InputField extends React.Component{
    render(){
        return(
            <div className="inputField">
                <input
                className='input'
                // using props so that the type of input can be changed
                type={this.props.type}
                placeholder={this.props.placeholder}
                calue ={this.props.value}
                // In the callback function is going to put the inpit of the value
                onChange={ ()=>this.props.onChange(e.target.value)}
                />
            </div>
        )
    }
}
export default InputField