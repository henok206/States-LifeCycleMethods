import React, { Component } from "react";

class MyComponentDidUpdate extends Component {
	constructor() {
		super();
		this.state = {
			counter: 0,
		};
	}

	increment = () => {
		this.setState((x) => {
			return {
				counter: x.counter + 1,
			};
		});
	};

	componentDidUpdate() {
		// console.log("Number of clicks: " + this.state.counter);
		document.title = "Hello World";

		document.getElementById("topic").innerHTML =
			document.getElementById("topic").innerHTML ===
			"Topic just changed using life cycle"
				? "Hi class"
				: "Topic just changed using life cycle";
	}

	render() {
		return (
			<div>
				<h1 id="topic">ComponentDidUpdate Example</h1>
				<br />
				<h1>{this.state.counter}</h1>
				<button onClick={this.increment}>Increment</button>
			</div>
		);
	}
}

export default MyComponentDidUpdate;
