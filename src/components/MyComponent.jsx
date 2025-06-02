import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Quan Huynh", age: "26" },
            { id: 2, name: "An Huynh", age: "28" },
            { id: 3, name: "Truc Huynh", age: "30" },
        ],
    };

    handleAddNewUser = (userObj) => {
        console.log(userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers],
        });
    };

    render() {
        return (
            <div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                <br /> <br />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        );
    }
}

export default MyComponent;
