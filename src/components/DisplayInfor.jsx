import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true,
    };

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        });
    };
    render() {
        const { listUsers } = this.props;
        return (
            <div className="display-infor-container">
                {/* <img src={logo} alt="" /> */}
                <div>
                    <span
                        onClick={() => {
                            this.handleShowHide();
                        }}
                    >
                        {this.state.isShowListUser
                            ? "Hide list user"
                            : "Show list user"}
                    </span>
                </div>
                {this.state.isShowListUser && (
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
                                                this.props.handleDeleteUser(
                                                    user.id
                                                )
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
    }
}

export default DisplayInfor;
