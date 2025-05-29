import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { listUsers } = this.props;
        console.log(listUsers);
        return (
            <div>
                {listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <p>My name's {user.name}</p>
                            <p>My age's {user.age}</p>
                            <hr />
                        </div>
                    );
                })}
                {/* <p>My name's {name}</p>
                <p>My age's {age}</p> */}
            </div>
        );
    }
}

export default DisplayInfor;
