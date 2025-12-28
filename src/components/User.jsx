import {useState} from "react";

const User = ({name}) => {

    const[Count] = useState(0);
    const[Count2] = useState(2);

    return (
        <div className="user_card">
            <h1>Count: {Count}</h1>
            <h1>Count2: {Count2}</h1>
            <h1>Name: {name}</h1>
            <h1>Location: Vizag</h1>
            <h1>Contact :Pra@gmail</h1>
        </div>
    );
};
export default User;