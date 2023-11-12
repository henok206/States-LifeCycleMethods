import React, { Component } from "react";

class InitializingState extends Component {
    constructor() {
        super();
        this.state = {
            name: "Henok",
            bootCamp: "Evangadi",
            group: 4,
            batch: "june_24",
        };
    }

    render() {
        return (
            <div>
                <h1>Initializing State Example</h1>
                <h2>Name Of student:{this.state.name}</h2>
                <h2>Batch of student:{this.state.batch}</h2>
                <h2>Group:{this.state.group}</h2>

                <h2>School name : {this.state.bootCamp}</h2>
            </div>
        );
    }
}

export default InitializingState;
