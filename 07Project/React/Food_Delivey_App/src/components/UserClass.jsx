import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            userInfo:{
                name:"Dummy",
                location:"Default",
                
            },
        };
    }

    async cpomponentDidMount(){
        const data = await fetch("https://api.github.com/users/chmnprtp");
        const json = data.json();

        this.setState({
            userInfo:json
        })
    }
    render(){
        const {name,location,avatar_url} = this.props;
        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h1>About</h1>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact:@chmnprtp</h4>

            </div>
        );
    }
}

export default UserClass;