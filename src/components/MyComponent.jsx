import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Quan",
        address: "Vn",
        Age: 22,
    };
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;
