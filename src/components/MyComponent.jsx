import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    render() {
        const myInfor = ["a", "b", "c"];
        return (
            <div>
                <UserInfor />
                <br /> <br />
                <DisplayInfor name="Quan Huynh" age="26" />
                <hr />
                <DisplayInfor name={"An Huynh"} age={22} myInfor={myInfor} />
            </div>
        );
    }
}

export default MyComponent;
