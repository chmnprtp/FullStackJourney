import UserClass from "./UserClass";
const About = () => {
    let name = "Chaman Pratap";
    return(
        <div>
            <UserClass name={name} location={"agra U.P"}/>
        </div>
    )
}

export default About;