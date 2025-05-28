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
            // name: "Quan huynh",
            age: Math.floor(Math.random() * 100 + 1),
        });
    }

    handleHover(event) {
        // console.log("click me my button");
        // console.log(event.target);
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <p>
                    My name is {this.state.name} and i'm from{" "}
                    {this.state.address}
                </p>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        name=""
                        id=""
                        onChange={(event) => {
                            this.handleOnChangeInput(event);
                        }}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;
