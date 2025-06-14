import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    };

    console.log("Call me render");

    useEffect(() => {
        if (listUsers.length === 0) {
            alert("You deleted all the users");
        }
        console.log("Call me useEffect");
    }, [listUsers]);

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
