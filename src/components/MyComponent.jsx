import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "Quan Huynh", age: "26" },
//             { id: 2, name: "An Huynh", age: "28" },
//             { id: 3, name: "Truc Huynh", age: "30" },
//         ],
//     };

//     handleAddNewUser = (userObj) => {
//         console.log(userObj);
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers],
//         });
//     };

//     handleDeleteUser = (userId) => {
//         let listUserClone = this.state.listUsers;
//         listUserClone = listUserClone.filter((item) => item.id !== userId);
//         this.setState({
//             listUsers: listUserClone,
//         });
//     };

//     render() {
//         return (
//             <>
//                 <div className="a">
//                     <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//                     <br /> <br />
//                     <DisplayInfor
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />
//                 </div>
//                 <div className="b"></div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: "Quan Huynh", age: "26" },
        { id: 2, name: "An Huynh", age: "28" },
        { id: 3, name: "Truc Huynh", age: "30" },
    ]);

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);
        console.log(userObj);
        // this.setState({
        //     listUsers: [userObj, ...this.state.listUsers],
        // });
    };

    const handleDeleteUser = (userId) => {
        let listUserClone = listUsers;
        listUserClone = listUserClone.filter((item) => item.id !== userId);
        setListUsers(listUserClone);
        // this.setState({
        //     listUsers: listUserClone,
        // });
    };

    return (
        <>
            <div className="a">
                <AddUserInfor handleAddNewUser={handleAddNewUser} />
                <br /> <br />
                <DisplayInfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className="b"></div>
        </>
    );
};

export default MyComponent;
