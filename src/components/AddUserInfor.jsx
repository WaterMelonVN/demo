import React, { useState } from "react";

const AddUserInfor = (props) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("VN");
    const [age, setAge] = useState("");

    // state = {
    //     name: "",
    //     address: "Vn",
    //     age: "",
    // };

    const handleOnChangeInput = (event) => {
        setName(event.target.value);
        // this.setState({
        //     name: event.target.value,
        // });
    };

    const handleOnChangeAge = (event) => {
        setAge(event.target.value);

        // this.setState({
        //     age: event.target.value,
        // });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: name,
            age: age,
        });
    };

    return (
        <div>
            <p>
                My name is {name} and i'm {age}
            </p>
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label htmlFor="">Your name: </label>
                <input
                    value={name}
                    type="text"
                    name=""
                    id=""
                    onChange={(event) => {
                        handleOnChangeInput(event);
                    }}
                />
                <label htmlFor="">Your age: </label>
                <input
                    value={age}
                    type="text"
                    name=""
                    id=""
                    onChange={(event) => {
                        handleOnChangeAge(event);
                    }}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddUserInfor;
