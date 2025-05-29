import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Quan Huynh", age: "26" },
            { id: 2, name: "An Huynh", age: "28" },
            { id: 3, name: "Truc Huynh", age: "30" },
        ],
    };
    render() {
        return (
            <div>
                <UserInfor />
                <br /> <br />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        );
    }
}

export default MyComponent;
