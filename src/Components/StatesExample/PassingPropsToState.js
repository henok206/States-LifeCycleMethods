import React, { Component } from "react";
import Bob from "./Bob";
class PassingPropsToState extends Component {
    constructor(props) {
        super();
        this.state = {
            name: "Henok",
            group: 4,
            mainInstructor: "Adugna",

            batch: props.batchName,
            sampleText: "Hello World",
        };
    }

    render() {
        return (
            <div>
                <h1>My Name is : {this.state.name}</h1>
                <h2>I am Group {this.state.group} Member</h2>
                <h3>I am a {this.state.batch} batch student</h3>
                <h3>My main Instructor is {this.state.mainInstructor}</h3>

                <Bob text={this.state.sampleText} />
            </div>
        );
    }
}

export default PassingPropsToState;
