import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Quan",
        address: "Vn",
        Age: 22,
    };

    handleClick(event) {
        console.log("click me my button");
        console.log("random ", Math.floor(Math.random() * 100 + 1));
        this.setState({
            name: "Quan huynh",
            age: Math.floor(Math.random() * 100 + 1),
        });
    }

    handleHover(event) {
        // console.log("click me my button");
        // console.log(event.target);
    }

    render() {
        return (
            <div>
                <p>
                    My name is {this.state.name} and i'm from{" "}
                    {this.state.address}
                </p>
                <button onClick={(event) => this.handleClick(event)}>
                    Click me
                </button>
                <button onMouseOver={this.handleHover}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent;
