import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            {/* <User  name={"Praneeth (function)"}/> */}

            <UserClass name={"Praneeth (Class)"}/>
        </div>
    )
}

export default About;