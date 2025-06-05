import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
    constructor(props) {
        console.log("call me constructor: 1");

        super(props);
        this.state = {
            isShowListUser: true,
        };
    }

    componentDidMount() {
        console.log("call me component did mount");
        setTimeout(() => {
            document.title = "He He He";
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("call me component did update", this.props, prevProps);
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert("you got 5 users");
            }
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        });
    };
    render() {
        console.log("call me render");

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
