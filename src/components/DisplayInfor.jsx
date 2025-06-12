import React, { useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {
//     render() {
//         console.log("call me render");

//         const { listUsers } = this.props;
//         return (
//             <div className="display-infor-container">
//                 {true && (
//                     <div>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div
//                                     key={user.id}
//                                     className={+user.age > 27 ? "green" : "red"}
//                                 >
//                                     <div>
//                                         <p>My name's {user.name}</p>
//                                         <p>My age's {user.age}</p>
//                                     </div>
//                                     <div>
//                                         <button
//                                             onClick={() =>
//                                                 this.props.handleDeleteUser(
//                                                     user.id
//                                                 )
//                                             }
//                                         >
//                                             Delete{" "}
//                                         </button>
//                                     </div>

//                                     <hr />
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    // this.state = {
    //     isShowHideListUser: true
    // }

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    };

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true
                        ? "Hide list user"
                        : "Show list user"}
                </span>
            </div>
            {isShowHideListUser && (
                <div>
                    {listUsers.map((user, index) => {
                        return (
                            <div
                                key={user.id}
                                className={+user.age > 27 ? "green" : "red"}
                            >
                                <div>
                                    <p>My name's {user.name}</p>
                                    <p>My age's {user.age}</p>
                                </div>
                                <div>
                                    <button
                                        onClick={() =>
                                            props.handleDeleteUser(user.id)
                                        }
                                    >
                                        Delete{" "}
                                    </button>
                                </div>

                                <hr />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default DisplayInfor;
