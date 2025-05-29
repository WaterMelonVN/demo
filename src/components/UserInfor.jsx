import React from "react";

class UserInfor extends React.Component {
    state = {
        name: "Quan Huynh",
        address: "Vn",
        age: 22,
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
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
                    My name is {this.state.name} and i'm {this.state.age}
                </p>
                <label htmlFor="">Your name: </label>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        value={this.state.name}
                        type="text"
                        name=""
                        id=""
                        onChange={(event) => {
                            this.handleOnChangeInput(event);
                        }}
                    />
                    <button>Submit</button>
                </form>

                <label htmlFor="">Your age: </label>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        value={this.state.age}
                        type="text"
                        name=""
                        id=""
                        onChange={(event) => {
                            this.handleOnChangeAge(event);
                        }}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfor;
