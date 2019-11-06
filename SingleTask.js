import React, { Component } from "react";

class SingleTask extends Component {
    constructor() {
        super();

    }
//A custom html component created, the props is passed from the 
    render() {
        return(
            <li>{this.props.tasks}<button onClick = {this.props.delete}> Delete </button></li>
        );
    }
}

export default SingleTask;