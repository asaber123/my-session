import React from "react";

class Submitbutton extends React.Component{
    render(){
        return(
            <div className="submitButton">
                <button
                className='btn'
                disabled={this.props.disabled}
                //Making a callback props which can be paused from the parent, so that multiple different funcitons can be called for the onClick property
                onClick={()=>this.props.onClick()}
                >

                {/* Making a props so that the text that is displayed in the button can be changed.  */}
                {this.props.text}

                    
                </button>
            </div>
        )
    }
}
export default Submitbutton