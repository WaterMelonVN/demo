import React from "react";

class DisplayInfor extends React.Component {
    render() {
        console.log(this.props);
        const { name, age } = this.props;
        return (
            <div>
                <p>My name's {name}</p>
                <p>My age's {age}</p>
            </div>
        );
    }
}

export default DisplayInfor;
